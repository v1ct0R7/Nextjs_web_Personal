export const runtime = "nodejs";

const MAX_BODY_BYTES = 16_000;
const RECIPIENT = "elvismurati15@gmail.com";

type Inquiry = {
  name: string;
  email: string;
  summary: string;
  scope: string;
  companyWebsite: string;
  locale: string;
};

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character] ?? character;
  });
}

function jsonError(status: number, error: string) {
  return Response.json({ error }, { status });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) return jsonError(413, "Request too large.");

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonError(415, "Content-Type must be application/json.");
  }

  let payload: Partial<Inquiry>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return jsonError(400, "Invalid request.");

    const chunks: Uint8Array[] = [];
    let totalBytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel();
        return jsonError(413, "Request too large.");
      }
      chunks.push(value);
    }

    const bytes = new Uint8Array(totalBytes);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    payload = JSON.parse(new TextDecoder().decode(bytes)) as Partial<Inquiry>;
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return jsonError(400, "Invalid request.");
    }
  } catch {
    return jsonError(400, "Invalid request.");
  }

  const inquiry: Inquiry = {
    name: clean(payload.name, 100),
    email: clean(payload.email, 254),
    summary: clean(payload.summary, 3000),
    scope: clean(payload.scope, 300),
    companyWebsite: clean(payload.companyWebsite, 200),
    locale: payload.locale === undefined ? "en" : clean(payload.locale, 2),
  };

  // Quietly accept bot submissions without sending them to the inbox.
  if (inquiry.companyWebsite) return Response.json({ ok: true });

  const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
  if (
    inquiry.name.length < 2 ||
    !emailPattern.test(inquiry.email) ||
    inquiry.summary.length < 10 ||
    !["en", "sq"].includes(inquiry.locale)
  ) {
    return jsonError(400, "Please provide a name, valid email, and project summary.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return jsonError(503, "Email delivery is not configured.");
  }

  const language = inquiry.locale === "sq";
  const subject = `${language ? "Kërkesë e re nga" : "New inquiry from"} ${inquiry.name}`;
  const fields = [
    [language ? "Emri" : "Name", inquiry.name],
    [language ? "Email" : "Email", inquiry.email],
    [language ? "Përmbledhja e projektit" : "Project summary", inquiry.summary],
    [language ? "Fusha / Afati kohor" : "Scope / Timeline", inquiry.scope || "—"],
  ] as const;
  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html = fields
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`,
    )
    .join("");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: inquiry.email,
        subject,
        text,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) return jsonError(502, "Email delivery failed.");
    return Response.json({ ok: true });
  } catch {
    return jsonError(502, "Email delivery failed.");
  }
}

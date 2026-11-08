export function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.SITE_URL?.trim();
  if (!configuredUrl) return undefined;

  try {
    const url = new URL(configuredUrl);
    if (url.protocol !== "https:" && url.hostname !== "localhost") {
      return undefined;
    }
    return new URL(`${url.origin}/`);
  } catch {
    return undefined;
  }
}

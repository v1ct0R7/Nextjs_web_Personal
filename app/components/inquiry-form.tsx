"use client";

import { useState, type FormEvent } from "react";

type Locale = "en" | "sq";

type FormCopy = {
  formName: string;
  formEmail: string;
  formSummary: string;
  formScope: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  summaryPlaceholder: string;
  scopePlaceholder: string;
  send: string;
  sending: string;
  privacy: string;
  success: string;
  failure: string;
  invalid: string;
};

export default function InquiryForm({
  locale,
  text,
}: {
  locale: Locale;
  text: FormCopy;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setStatus("error");
      setMessage(text.invalid);
      return;
    }

    const formData = new FormData(form);
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          summary: formData.get("summary"),
          scope: formData.get("scope"),
          companyWebsite: formData.get("companyWebsite"),
          locale,
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
      setMessage(text.success);
    } catch {
      setStatus("error");
      setMessage(text.failure);
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          {text.formName}
          <input autoComplete="name" maxLength={100} name="name" placeholder={text.namePlaceholder} required />
        </label>
        <label>
          {text.formEmail}
          <input autoComplete="email" maxLength={254} name="email" placeholder={text.emailPlaceholder} required type="email" />
        </label>
      </div>
      <label>
        {text.formSummary}
        <textarea maxLength={3000} minLength={10} name="summary" placeholder={text.summaryPlaceholder} required rows={4} />
      </label>
      <label>
        {text.formScope}
        <input maxLength={300} name="scope" placeholder={text.scopePlaceholder} />
      </label>
      <div aria-hidden="true" className="honeypot">
        <label>
          Leave this field empty
          <input autoComplete="off" name="companyWebsite" tabIndex={-1} />
        </label>
      </div>
      <div className="form-submit-row">
        <button className="button button-light" disabled={status === "sending"} type="submit">
          {status === "sending" ? text.sending : text.send}<span aria-hidden="true">{status === "sending" ? "…" : "↗"}</span>
        </button>
        <p>{text.privacy}</p>
      </div>
      <p aria-live="polite" className={`form-message ${status === "success" ? "is-success" : ""}`} role={status === "error" ? "alert" : "status"}>
        {message}
      </p>
    </form>
  );
}

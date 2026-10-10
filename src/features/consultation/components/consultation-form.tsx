"use client";

import { useState } from "react";
import { serviceOptions } from "../validation";
import styles from "./consultation.module.css";
export function ConsultationForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true); setMessage(""); setErrors({});
    try {
      const response = await fetch("/api/consultations", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"), email: data.get("email"), phone: data.get("phone"),
          service: data.get("service"), message: data.get("message"), consent: data.get("consent") === "on",
        }),
      });
      const result = await response.json();
      setMessage(result.message || "Unable to send the enquiry.");
      setErrors(result.errors || {});
      if (response.ok) form.reset();
    } catch { setMessage("Unable to send your enquiry. Please contact us by email."); }
    finally { setPending(false); }
  }
  const error = (name: string) => errors[name] && <small className={styles.error} id={name + "-error"}>{errors[name]}</small>;
  const attributes = (name: string) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? name + "-error" : undefined });
  return <form className={styles.form} onSubmit={submit}>
    <label htmlFor="name">Full name<input id="name" name="name" autoComplete="name" required minLength={2} maxLength={100} {...attributes("name")} />{error("name")}</label>
    <label htmlFor="email">Email address<input id="email" name="email" type="email" autoComplete="email" required maxLength={254} {...attributes("email")} />{error("email")}</label>
    <label htmlFor="phone">Phone number (optional)<input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} {...attributes("phone")} />{error("phone")}</label>
    <label htmlFor="service">Service<select id="service" name="service" required defaultValue="" {...attributes("service")}><option value="" disabled>Select a service</option>{serviceOptions.map((service) => <option key={service}>{service}</option>)}</select>{error("service")}</label>
    <label htmlFor="message" className={styles.full}>Tell us about your project<textarea id="message" name="message" required minLength={10} maxLength={3000} rows={5} {...attributes("message")} />{error("message")}</label>
    <label className={styles.consent} htmlFor="consent"><input id="consent" type="checkbox" name="consent" required {...attributes("consent")} /><span>I agree to be contacted about this enquiry.</span>{error("consent")}</label>
    <button disabled={pending} className={styles.submit} type="submit">{pending ? "Sending…" : "Send enquiry"}</button>
    <p className={styles.full} role="status" aria-live="polite">{message}</p>
  </form>;
}

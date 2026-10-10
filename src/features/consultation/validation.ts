import type { ValidationResult } from "./types";
export const serviceOptions = ["Architecture", "Interior design", "Other"] as const;
export function validateConsultation(value: unknown): ValidationResult {
  if (!value || typeof value !== "object" || Array.isArray(value)) return { ok: false, errors: { form: "Invalid request." } };
  const body = value as Record<string, unknown>;
  const text = (key: string) => typeof body[key] === "string" ? body[key].trim() : "";
  const name = text("name"), email = text("email"), phone = text("phone"), service = text("service"), message = text("message");
  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Enter a name between 2 and 100 characters.";
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (phone && (phone.length > 30 || !/^[+()\d\s-]{7,30}$/.test(phone))) errors.phone = "Enter a valid phone number.";
  if (!serviceOptions.some((option) => option === service)) errors.service = "Choose a service.";
  if (message.length < 10 || message.length > 3000) errors.message = "Describe your project in 10 to 3000 characters.";
  if (body.consent !== true) errors.consent = "Please allow us to contact you about this enquiry.";
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data: { name, email, phone, service, message, consent: true } };
}

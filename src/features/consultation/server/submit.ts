import type { ConsultationInput } from "../types";

export type SubmissionResult = { ok: true } | { ok: false; status: 502 | 503; message: string };
// Keep credentials on the server. The route must never import this into client code.
export async function submitConsultation(data: ConsultationInput): Promise<SubmissionResult> {
  const destination = process.env.CONSULTATION_API_URL;
  if (!destination) return { ok: false, status: 503, message: "Online enquiries are currently unavailable. Please contact us by email." };
  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.CONSULTATION_API_TOKEN) headers.Authorization = "Bearer " + process.env.CONSULTATION_API_TOKEN;
    const response = await fetch(destination, {
      method: "POST", headers, body: JSON.stringify(data), cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return { ok: false, status: 502, message: "We could not send your enquiry. Please try again or contact us by email." };
    return { ok: true };
  } catch {
    return { ok: false, status: 502, message: "We could not send your enquiry. Please try again or contact us by email." };
  }
}

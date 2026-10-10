import { validateConsultation } from "@/features/consultation/validation";
import { submitConsultation } from "@/features/consultation/server/submit";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ message: "Request origin is not allowed." }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ message: "Send a JSON request." }, { status: 415 });
  // Bound streamed input as well as Content-Length to avoid oversized requests.
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ message: "Request body is required." }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 16384) {
        await reader.cancel();
        return Response.json({ message: "Request is too large." }, { status: 413 });
      }
      chunks.push(value);
    }
  } catch {
    return Response.json({ message: "Unable to read request." }, { status: 400 });
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  let body: unknown;
  try { body = JSON.parse(new TextDecoder().decode(bytes)); }
  catch { return Response.json({ message: "Invalid JSON." }, { status: 400 }); }
  const result = validateConsultation(body);
  if (!result.ok) return Response.json({ message: "Please check the form.", errors: result.errors }, { status: 400 });
  const submission = await submitConsultation(result.data);
  if (!submission.ok) return Response.json({ message: submission.message }, { status: submission.status });
  return Response.json({ message: "Your enquiry has been sent. Our team will contact you." }, { status: 201 });
}

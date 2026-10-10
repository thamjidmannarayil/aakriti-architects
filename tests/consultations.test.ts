import { test } from "node:test";
import assert from "node:assert/strict";
import { POST } from "../src/app/api/consultations/route";
import { validateConsultation } from "../src/features/consultation/validation";
const valid = { name: "Test Client", email: "test@example.com", phone: "+971 50 123 4567", service: "Architecture", message: "A residential design enquiry.", consent: true };
const request = (body: string, headers: Record<string, string> = {}) => new Request("http://localhost:3000/api/consultations", { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body });
test("validation rejects invalid email, missing consent, and unknown service", () => {
  const result = validateConsultation({ ...valid, email: "wrong", consent: false, service: "unknown" });
  assert.equal(result.ok, false);
  if (!result.ok) { assert.ok(result.errors.email); assert.ok(result.errors.consent); assert.ok(result.errors.service); }
});
test("invalid and oversized bodies never reach the backend", async () => {
  assert.equal((await POST(request("{"))).status, 400);
  assert.equal((await POST(request("x".repeat(17000)))).status, 413);
  assert.equal((await POST(request(JSON.stringify(valid), { Origin: "https://another-site.example" }))).status, 403);
});
test("missing backend does not report success or store personal data", async () => {
  const previous = process.env.CONSULTATION_API_URL;
  delete process.env.CONSULTATION_API_URL;
  try { assert.equal((await POST(request(JSON.stringify(valid)))).status, 503); }
  finally { if (previous) process.env.CONSULTATION_API_URL = previous; }
});
test("successful backend receives normalized data; failed backend reports failure", async () => {
  const previous = process.env.CONSULTATION_API_URL;
  const original = globalThis.fetch;
  process.env.CONSULTATION_API_URL = "https://backend.example/enquiries";
  try {
    globalThis.fetch = async (_input, init) => {
      assert.equal(JSON.parse(init?.body as string).name, "Test Client");
      assert.equal(init?.method, "POST");
      return new Response(null, { status: 201 });
    };
    assert.equal((await POST(request(JSON.stringify({ ...valid, name: "  Test Client  " })))).status, 201);
    globalThis.fetch = async () => new Response(null, { status: 500 });
    assert.equal((await POST(request(JSON.stringify(valid)))).status, 502);
    globalThis.fetch = async () => { throw new Error("network unavailable"); };
    assert.equal((await POST(request(JSON.stringify(valid)))).status, 502);
  } finally {
    globalThis.fetch = original;
    if (previous) process.env.CONSULTATION_API_URL = previous; else delete process.env.CONSULTATION_API_URL;
  }
});

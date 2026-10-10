export type ConsultationInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: true;
};
export type ValidationResult = { ok: true; data: ConsultationInput } | { ok: false; errors: Record<string, string> };

import { SiteHeader } from "@/components/layout/site-header";
import { ConsultationForm } from "@/features/consultation/components/consultation-form";
import { site } from "@/config/site";
export const metadata = { title: "Consultation" };
export default function ConsultationPage() {
  return <><SiteHeader /><main id="main" className="content-page"><h1>Let’s create something extraordinary.</h1><p>Tell us about your project. You can also email <a href={"mailto:" + site.email}>{site.email}</a>.</p><ConsultationForm /></main></>;
}

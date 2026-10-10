import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
export const metadata = { title: "About" };
export default function AboutPage() {
  return <><SiteHeader /><main id="main" className="content-page"><h1>Inspired by purpose.<br />Driven by detail.</h1><p>Our studio story, team, and credentials will be added after the PRD and approved About content are supplied.</p><ButtonLink href="/consultation">Discuss your project</ButtonLink></main></>;
}

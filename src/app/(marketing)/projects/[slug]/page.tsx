import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Asset } from "@/components/ui/asset";
import { ButtonLink } from "@/components/ui/button-link";
import { getProject, getProjects, getFeaturedProject } from "@/features/projects/server/repository";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  const [projects, featured] = await Promise.all([getProjects(), getFeaturedProject()]);
  return [...projects, featured].map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject((await params).slug);
  return { title: project?.title || "Project not found" };
}
export default async function ProjectPage({ params }: Props) {
  const project = await getProject((await params).slug);
  if (!project) notFound();
  return <><SiteHeader /><main id="main" className="content-page"><Link href="/#projects">← Selected projects</Link><h1>{project.title}</h1><Asset src={project.image} alt={project.title} className="detail-image" priority /><p>{project.description}</p><ButtonLink href="/consultation">Discuss a similar project</ButtonLink></main></>;
}

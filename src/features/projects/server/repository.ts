import { projects, featuredProject } from "../data/projects";

// Replace this boundary with a CMS/API adapter; pages do not own retrieval.
export async function getProjects() { return projects; }
export async function getFeaturedProject() { return featuredProject; }
export async function getProject(slug: string) {
  return [featuredProject, ...projects].find((project) => project.slug === slug);
}

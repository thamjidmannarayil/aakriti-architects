import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getProjects, getFeaturedProject } from "@/features/projects/server/repository";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, featured] = await Promise.all([getProjects(), getFeaturedProject()]);
  return ["/", "/about", "/consultation", ...[...projects, featured].map((p) => "/projects/" + p.slug)].map((path) => ({ url: new URL(path, site.url).toString() }));
}

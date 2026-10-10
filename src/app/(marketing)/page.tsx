import { Hero } from "@/features/home/components/hero";
import { About } from "@/features/home/components/about";
import { Services } from "@/features/home/components/services";
import { Testimonials } from "@/features/home/components/testimonials";
import { ProjectGrid } from "@/features/projects/components/project-grid";
import { FeaturedProject } from "@/features/projects/components/featured-project";
import { getProjects, getFeaturedProject } from "@/features/projects/server/repository";
import { testimonials } from "@/content/home";
import { DesignDivider } from "@/components/ui/design-divider";
import styles from "@/features/home/components/home.module.css";
export default async function HomePage() {
  const [projects, featured] = await Promise.all([getProjects(), getFeaturedProject()]);
  return <main id="main"><Hero /><div className={styles.panel}><About /><DesignDivider /><Services /><DesignDivider /><ProjectGrid projects={projects} /><DesignDivider /><FeaturedProject project={featured} /><Testimonials items={testimonials} /></div></main>;
}

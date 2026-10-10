import Link from "next/link";
import { Asset } from "@/components/ui/asset";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/content";
import styles from "@/features/home/components/home.module.css";
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
    <SectionHeading eyebrow="SELECTED PROJECTS" id="projects-heading">Spaces that speak<br />Our design language.</SectionHeading>
    <div className={styles.projectGrid}>{projects.map((project) => <Link key={project.slug} href={"/projects/" + project.slug} aria-label={"View " + project.title}>
      <Asset src={project.image} alt={project.title} className={styles.projectImage} />
    </Link>)}</div>
  </section>;
}

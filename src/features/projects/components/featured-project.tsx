import { Asset } from "@/components/ui/asset";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/content";
import styles from "@/features/home/components/home.module.css";
export function FeaturedProject({ project }: { project: Project }) {
  return <section className={styles.featured} id="featured" aria-labelledby="featured-heading">
    <div>
      <SectionHeading eyebrow="FEATURED PROJECTS" id="featured-heading">Modern living.<br />Timeless elegance.</SectionHeading>
      <p className={styles.description}>{project.description}</p>
      <dl className={styles.projectFacts}>{[["Location", project.location], ["Project Type", project.type], ["Area", project.area]].map(([label, value]) => <div key={label}>
        <Asset src="/assets/imgVector.svg" alt="" decorative className={styles.pin} /><dt>{label}</dt><dd>{value}</dd>
      </div>)}</dl>
      <ButtonLink href={"/projects/" + project.slug} subtle>View Project</ButtonLink>
    </div>
    <Asset src={project.image} alt="Modern living room with a circular chandelier and warm architectural lighting" className={styles.featuredImage} />
  </section>;
}

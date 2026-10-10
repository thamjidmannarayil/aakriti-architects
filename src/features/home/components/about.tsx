import { Asset } from "@/components/ui/asset";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles, sampleCopy } from "@/content/home";
import styles from "./home.module.css";
export function About() {
  return <section className={styles.about} id="about" aria-labelledby="about-heading">
    <div className={styles.aboutCopy}>
      <SectionHeading eyebrow="ABOUT AAKRITI" id="about-heading">Inspired by purpose.<br />Driven by detail.</SectionHeading>
      <p className={styles.description}>{sampleCopy} It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className={styles.principles}>{principles.map((item) => <div key={item.title}><Asset src={item.icon} alt="" decorative className={styles.icon} /><h3>{item.title}</h3><p>{item.description}</p></div>)}</div>
      <ButtonLink href="/about" subtle>More About Us</ButtonLink>
    </div>
    <div className={styles.aboutVisual}>
      <Asset src="/assets/imgAboutImage.png" alt="Refined dining room with warm lighting and dark wood finishes" className={styles.aboutImage} />
      <div className={styles.sinceBadge}><span>Since</span><strong>2000</strong><small>Packing small<br />Delivering to future</small></div>
    </div>
  </section>;
}

import Link from "next/link";
import { Asset } from "@/components/ui/asset";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/home";
import styles from "./home.module.css";
export function Services() {
  return <section className={styles.services} id="services" aria-labelledby="services-heading">
    <SectionHeading eyebrow="OUR SERVICES" id="services-heading">Complete design<br />Solution for every space.</SectionHeading>
    <div className={styles.serviceGrid}>{services.map((service) => <Link className={styles.serviceCard} href="/consultation" key={service.id} aria-label={"Enquire about " + service.title}>
      <Asset src={service.icon} alt="" decorative className={styles.icon} /><h3>Architectural<br />Design</h3><p>{service.description}</p>
      <span className={styles.serviceArrow}><Asset src="/assets/imgEllipse2496.svg" alt="" decorative /><Asset src="/assets/imgArrrow.svg" alt="" decorative /></span>
    </Link>)}</div>
  </section>;
}

import { SiteHeader } from "@/components/layout/site-header";
import { Asset } from "@/components/ui/asset";
import { ButtonLink } from "@/components/ui/button-link";
import styles from "./home.module.css";
export function Hero() {
  return <section className={styles.hero} id="home" aria-label="Aakriti Architects">
    <Asset src="/assets/imgSkyBackground.png" alt="" decorative priority className={styles.sky} />
    <div className={styles.skyOverlay} />
    <SiteHeader />
    <h1 className={styles.display}>AAKRITI</h1>
    <Asset src="/assets/imgHouseImage.png" alt="" decorative priority className={styles.house} />
    <div className={styles.heroCopy}>
      <p className={styles.heroLabel}>INTERIOR & ARCHITECTURE</p>
      <h2>Designing Spaces<br />Elevating lives.</h2>
      <p className={styles.heroDescription}>Architecture that inspires.<br />Interiors that reflect you.</p>
    </div>
    <div className={styles.heroBottom}><span>SINCE &nbsp; 2000</span><Asset src="/assets/imgLine1.svg" alt="" decorative className={styles.sinceLine} /><ButtonLink href="/#projects">View Projects</ButtonLink></div>
  </section>;
}

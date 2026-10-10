import Link from "next/link";
import { Asset } from "@/components/ui/asset";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/config/site";
import { Brand } from "./brand";
import { DesignDivider } from "@/components/ui/design-divider";
import styles from "./layout.module.css";
export function SiteFooter() {
  return <footer className={styles.footer} id="contact">
    <div className={styles.footerTop}>
      <div className={styles.footerIntro}><h2>Let’s create something<br />extraordinary together.</h2><p>Book a consultation with our experts</p></div>
      <address className={styles.contact}>
        <a href={"tel:" + site.phone.replace(/\s/g, "")}><Asset src="/assets/imgElements4.svg" alt="" decorative className={styles.contactIcon} /><span>{site.phone}<small>Call us</small></span></a>
        <a href={"mailto:" + site.email}><Asset src="/assets/imgElements3.svg" alt="" decorative className={styles.contactIcon} /><span>{site.email}<small>Email us</small></span></a>
        <DesignDivider vertical /><span className={styles.address}>{site.address.map((line) => <span key={line}>{line}</span>)}</span>
      </address>
      <div className={styles.footerVisual}><Asset src="/assets/imgFooterImage.png" alt="Architecture consultation" className={styles.footerImage} /><ButtonLink href="/consultation">Book Consultation</ButtonLink></div>
    </div>
    <DesignDivider footer /><div className={styles.footerBottom}>
      <Brand compact /><p>© 2026 Aakriti Architects. All rights reserved.</p>
      <div className={styles.legal}><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></div>
      <div className={styles.socials} aria-label="Social links pending configuration">
        {["imgElements2", "imgElements1", "imgElements"].map((icon, i) => <span key={icon} aria-label={["Instagram", "Facebook", "Pinterest"][i]} className={styles.social}><Asset src="/assets/imgEllipse2494.svg" alt="" decorative className={styles.socialCircle} /><Asset src={"/assets/" + icon + ".svg"} alt="" decorative className={styles.socialIcon} /></span>)}
      </div>
    </div>
  </footer>;
}

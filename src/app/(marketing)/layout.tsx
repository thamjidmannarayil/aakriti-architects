import { SiteFooter } from "@/components/layout/site-footer";
import styles from "@/components/layout/layout.module.css";
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.board}>{children}<SiteFooter /></div>;
}

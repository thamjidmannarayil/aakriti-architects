import Link from "next/link";
import { Asset } from "@/components/ui/asset";
import styles from "./layout.module.css";
export function Brand({ compact = false }: { compact?: boolean }) {
  return <Link href="/#home" aria-label="Aakriti Architects home" className={styles.brand + (compact ? " " + styles.compact : "")}>
    <Asset src={compact ? "/assets/imgLogo.svg" : "/assets/imgLogo1.svg"} alt="" decorative className={styles.logo} />
    <span><strong>AAKRITI</strong><span>ARCHITECTS</span><small>INTERIOR & ARCHITECTURE</small></span>
  </Link>;
}

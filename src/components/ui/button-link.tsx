import Link from "next/link";
import { Asset } from "./asset";
import styles from "./ui.module.css";

export function ButtonLink({ href, children, subtle = false }: { href: string; children: React.ReactNode; subtle?: boolean }) {
  return <Link href={href} className={styles.button + (subtle ? " " + styles.subtle : "")}>
    {children}<Asset src={subtle ? "/assets/imgArrow1.svg" : "/assets/imgArrow.svg"} alt="" decorative className={styles.arrow} />
  </Link>;
}

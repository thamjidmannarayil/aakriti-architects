import { Asset } from "./asset";
import styles from "./ui.module.css";
export function DesignDivider({ footer = false, vertical = false }: { footer?: boolean; vertical?: boolean }) {
  const src = vertical ? "/assets/imgLine24.svg" : footer ? "/assets/imgLine23.svg" : "/assets/imgLine25.svg";
  return <Asset src={src} alt="" decorative className={styles.divider + (vertical ? " " + styles.verticalDivider : "")} />;
}

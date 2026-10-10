import styles from "./ui.module.css";
export function SectionHeading({ eyebrow, children, id }: { eyebrow: string; children: React.ReactNode; id?: string }) {
  return <div><p className={styles.eyebrow}>{eyebrow}</p><h2 className={styles.heading} id={id}>{children}</h2></div>;
}

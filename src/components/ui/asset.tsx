"use client";

import { useState } from "react";
import styles from "./ui.module.css";

type Props = { src: string; alt: string; className?: string; decorative?: boolean; priority?: boolean };
export function Asset({ src, alt, className = "", decorative = false, priority = false }: Props) {
  const [missing, setMissing] = useState(false);
  return (
    <span className={styles.asset + " " + className} aria-hidden={decorative || undefined}>
      {!missing && (
        // Assets remain local. SVG root dimensions are left intact by icon CSS.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={decorative ? "" : alt} loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"} onError={() => setMissing(true)} />
      )}
      {missing && !decorative && <span className={styles.missing}>{alt}<small>Image pending import</small></span>}
    </span>
  );
}

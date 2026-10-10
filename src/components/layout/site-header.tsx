"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/config/site";
import { Brand } from "./brand";
import styles from "./layout.module.css";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className={styles.header}>
    <Brand />
    <button className={styles.menuToggle} type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
      {open ? "Close menu" : "Menu"}
    </button>
    <nav id="site-navigation" aria-label="Main navigation" className={styles.navigation + (open ? " " + styles.open : "")}>
      {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
    </nav>
    <Link className={styles.consultation} href="/consultation">Consultation</Link>
  </header>;
}

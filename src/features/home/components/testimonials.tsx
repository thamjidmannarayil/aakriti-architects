"use client";

import { useState } from "react";
import { Asset } from "@/components/ui/asset";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Testimonial } from "@/types/content";
import styles from "./home.module.css";
export function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  if (!items.length) return null;
  const item = items[index % items.length];
  function move(delta: number) { setIndex((index + delta + items.length) % items.length); }
  return <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-heading">
    <SectionHeading eyebrow="CLIENTS LOVE OUR WORK" id="testimonials-heading">Trusted by homeowners<br />and business alike.</SectionHeading>
    <button className={styles.carouselButton} type="button" onClick={() => move(-1)} disabled={items.length < 2} aria-label="Previous testimonial"><Asset src="/assets/imgEllipse2495.svg" alt="" decorative /><Asset src="/assets/imgElements6.svg" alt="" decorative /></button>
    <div className={styles.quoteCard} aria-live="polite">
      <Asset src="/assets/imgQuotesSvgrepoCom1.svg" alt="" decorative className={styles.quoteIcon} />
      <div><blockquote>{item.quote}</blockquote><div className={styles.rating}><Asset src="/assets/imgStarRating.svg" alt="Star rating" /><span><strong>4.6</strong> Rating on Google</span></div></div>
      <div className={styles.author}><strong>{item.name}</strong><span>{item.city}</span></div><Asset src={item.image} alt={item.name} className={styles.avatar} />
    </div>
    <button className={styles.carouselButton} type="button" onClick={() => move(1)} disabled={items.length < 2} aria-label="Next testimonial"><Asset src="/assets/imgEllipse2495.svg" alt="" decorative /><Asset src="/assets/imgElements5.svg" alt="" decorative /></button>
  </section>;
}

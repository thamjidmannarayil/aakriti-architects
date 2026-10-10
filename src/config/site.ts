export const site = {
  name: "Aakriti Architects",
  title: "Aakriti Architects | Interior & Architecture",
  description: "Designing spaces. Elevating lives. Architecture, interior design, and timeless residential spaces.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // Contact values copied from the Figma sample; confirm before publishing.
  email: "info@aakrithiarchitects.com",
  phone: "+91 9876543210",
  address: ["Al Reem Island, Abu Dhabi", "Al Rafayah Street", "United Arab Emirates"],
} as const;

export const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Featured", href: "/#featured" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contacts", href: "/#contact" },
] as const;

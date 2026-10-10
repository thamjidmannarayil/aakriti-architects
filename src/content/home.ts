import type { Testimonial } from "@/types/content";

// Figma uses sample copy. Replace with approved content after reviewing the PRD.
export const sampleCopy = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero.";
export const principles = [
  { title: "Client First", icon: "/assets/imgLampLight.svg", description: "Lorem Ipsum is simply dummy text of the magic fan." },
  { title: "Timeless Design", icon: "/assets/imgElements8.svg", description: "Lorem Ipsum is simply dummy text of the magic fan." },
  { title: "End-to-End Expertise", icon: "/assets/imgElements9.svg", description: "Lorem Ipsum is simply dummy text of the magic fan." },
];
export const services = Array.from({ length: 5 }, (_, i) => ({
  id: "service-" + (i + 1),
  title: "Architectural Design",
  description: "Lorem Ipsum is simply dummy text of the magic fan.",
  icon: "/assets/imgElements7.svg",
}));
export const testimonials: Testimonial[] = [{
  id: "figma-sample",
  quote: sampleCopy,
  name: "Rithika & Arayan Mehra",
  city: "Pune",
  image: "/assets/imgDisplayPicture.png",
}];

import type { Project } from "@/types/content";
import { sampleCopy } from "@/content/home";

// Titles for the five unlabeled Figma thumbnails are neutral placeholders.
export const projects: Project[] = Array.from({ length: 5 }, (_, i) => ({
  slug: "selected-project-" + (i + 1),
  title: "Selected project " + (i + 1),
  image: "/assets/imgProject" + (i + 1) + ".png",
  description: "Project description awaiting approved content.",
}));
export const featuredProject: Project = {
  slug: "modern-living",
  title: "Modern living. Timeless elegance.",
  image: "/assets/imgFeaturedProjectImage.png",
  description: sampleCopy,
  location: "Al Reem Island, Abu Dhabi",
  type: "Residential",
  area: "75,000 sq. ft",
  featured: true,
};

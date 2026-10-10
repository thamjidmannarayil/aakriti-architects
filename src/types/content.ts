export type Project = {
  slug: string;
  title: string;
  image: string;
  description: string;
  location?: string;
  type?: string;
  area?: string;
  featured?: boolean;
};
export type Testimonial = { id: string; quote: string; name: string; city: string; image: string };

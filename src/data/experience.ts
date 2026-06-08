import type { PortfolioPost } from "@/types/portfolio";

/** Images go in `public/images/experience/<slug>/` */
const e = (slug: string, file: string) => `/images/experience/${slug}/${file}`;
export const experiences: PortfolioPost[] = [
  {
    id: "fiserv-internship",
    slug: "fiserv-internship",
    title: "Software Engineering Analyst Intern @ Fiserv",
    description:
  "Spending the summer working on backend systems for merchant transaction infrastructure, building internal tools and learning how software operates at scale inside a global fintech company.",
    thumbnail: e("fiserv-internship", "thumbnail.jpg"),
    thumbnailFallback: "linear-gradient(135deg, #0066cc 0%, #003d7a 100%)",

    technologies: [
      "Python",
      "Flask",
      "OAuth",
      "JWT",
      "Docker",
      "REST APIs"
    ],

    buildDate: "Jun 2026 – Present",
    duration: "Jun 2026 – Present",

    
responsibilities: [
  "Built backend services using Python and Flask",
  "Worked on authentication systems using OAuth and JWT",
  "Automated parts of the deployment process with Docker",
  "Contributed to internal tools used by operations teams",
],

keyLearnings: [
  "Building software for production environments",
  "Working with authentication and security",
  "Containerization and deployment workflows",
  "Collaborating within a large engineering team",
],

    slides: [
      {
        id: "fs-1",
        type: "screenshot",
        alt: "Fiserv internship overview",
        visual: e("fiserv-internship", "slide-1.jpg"),
        fallback: "linear-gradient(135deg, #0066cc 0%, #001a33 100%)",
        caption: "Worked on backend services and deployment automation for merchant transaction systems."
      },
    ],
  },
];

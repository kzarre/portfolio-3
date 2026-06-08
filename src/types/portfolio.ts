export type TabId = "projects" | "experience" | "achievements";

export type PostType = TabId;

export interface CarouselSlide {
  id: string;
  type: "screenshot" | "terminal" | "diagram" | "render" | "gif" | "video";
  alt: string;
  /** Image path under /public or CSS gradient */
  visual: string;
  /** Shown when image file is missing */
  fallback?: string;
  caption?: string;
}

export interface PortfolioPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  /** Shown when thumbnail file is missing */
  thumbnailFallback?: string;
  technologies: string[];
  slides: CarouselSlide[];
  githubUrl?: string;
  externalUrl?: string;
  buildDate?: string;
  features?: string[];
  responsibilities?: string[];
  duration?: string;
  keyLearnings?: string[];
  outcome?: string;
  skillsGained?: string[];
  eventDate?: string;
}

export interface Highlight {
  id: string;
  label: string;
  url: string;
  icon: "github" | "resume" | "codeforces" | "linkedin";
}

export interface ProfileData {
  username: string;
  name: string;
  location: string;
  status: string;
  bio: string;
  skillsSummary: string;
  avatar: string;
  stats: {
    codeforcesRating: string;
    repositories: string;
    yearsCoding: string;
  };
  highlights: Highlight[];
  social: {
    github: string;
    linkedin: string;
    codeforces: string;
    email: string;
  };
}

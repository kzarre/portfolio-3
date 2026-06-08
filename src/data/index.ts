import type { PortfolioPost, PostType, TabId } from "@/types/portfolio";
import { achievements } from "./achievements";
import { experiences } from "./experience";
import { projects } from "./projects";

export { profile } from "./profile";
export { projects, experiences, achievements };

export function getPostsByTab(tab: TabId): PortfolioPost[] {
  switch (tab) {
    case "projects":
      return projects;
    case "experience":
      return experiences;
    case "achievements":
      return achievements;
  }
}

export function getPost(type: PostType, slug: string): PortfolioPost | undefined {
  return getPostsByTab(type).find((p) => p.slug === slug);
}

export function getAllPosts(): { type: PostType; post: PortfolioPost }[] {
  return [
    ...projects.map((post) => ({ type: "projects" as const, post })),
    ...experiences.map((post) => ({ type: "experience" as const, post })),
    ...achievements.map((post) => ({ type: "achievements" as const, post })),
  ];
}

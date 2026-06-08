import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kanishkkulshrestha.dev";

  const postEntries = getAllPosts().map(({ type, post }) => ({
    url: `${baseUrl}/p/${type}/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postEntries,
  ];
}

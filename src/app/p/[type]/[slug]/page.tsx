import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileClient } from "@/components/profile/profile-client";
import { getPost, getAllPosts } from "@/data";
import type { PostType } from "@/types/portfolio";

const validTypes: PostType[] = ["projects", "experience", "achievements"];

interface PostPageProps {
  params: Promise<{ type: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map(({ type, post }) => ({
    type,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { type, slug } = await params;

  if (!validTypes.includes(type as PostType)) {
    return { title: "Not Found" };
  }

  const post = getPost(type as PostType, slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { type, slug } = await params;

  if (!validTypes.includes(type as PostType)) {
    notFound();
  }

  const post = getPost(type as PostType, slug);
  if (!post) {
    notFound();
  }

  return (
    <ProfileClient
      initialTab={type as PostType}
      initialPost={{ type: type as PostType, slug }}
    />
  );
}

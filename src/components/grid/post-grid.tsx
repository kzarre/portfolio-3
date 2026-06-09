"use client";

import type { PortfolioPost, TabId } from "@/types/portfolio";
import { PostTile } from "./post-tile";

interface PostGridProps {
  posts: PortfolioPost[];
  activeTab: TabId;
  onPostClick: (post: PortfolioPost) => void;
}

export function PostGrid({ posts, onPostClick }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 flex h-[62px] w-[62px] items-center justify-center rounded-full border-2 border-foreground">
          <span className="text-2xl">📷</span>
        </div>
        <h3 className="text-[28px] font-light">No Posts Yet</h3>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-3 gap-[1px] bg-border md:gap-[28px] md:bg-transparent"
      role="tabpanel"
    >
      {posts.map((post) => (
        <div key={post.id} className="bg-background md:bg-transparent">
          <PostTile post={post} onClick={() => onPostClick(post)} />
        </div>
      ))}
      {Array.from({ length: (3 - (posts.length % 3)) % 3 }).map((_, index) => (
        <div key={`empty-${index}`} className="bg-background md:bg-transparent" />
      ))}
    </div>
  );
}

"use client";

import { IoCopy } from "react-icons/io5";
import type { PortfolioPost } from "@/types/portfolio";
import { VisualMedia } from "@/components/ui/visual-media";
import { cn } from "@/lib/utils";

interface PostTileProps {
  post: PortfolioPost;
  onClick: () => void;
}

export function PostTile({ post, onClick }: PostTileProps) {
  const hasMultipleSlides = post.slides.length > 1;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-square w-full cursor-pointer overflow-hidden bg-muted focus-visible:outline-none"
      aria-label={`Open ${post.title}`}
    >
      <VisualMedia
        visual={post.thumbnail}
        fallback={post.thumbnailFallback}
        alt={post.title}
        className="pointer-events-none"
      />

      {hasMultipleSlides && (
        <IoCopy className="absolute right-2 top-2 h-5 w-5 text-white drop-shadow-md pointer-events-none" />
      )}

      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/45 p-3 opacity-0 transition-opacity duration-150 pointer-events-none",
          "group-hover:opacity-100 group-focus-visible:opacity-100"
        )}
      >
        <span className="text-center text-[14px] font-bold text-white drop-shadow-sm pointer-events-none">
          {post.title}
        </span>
      </div>
    </button>
  );
}

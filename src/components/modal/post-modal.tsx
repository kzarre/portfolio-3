"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioPost, PostType } from "@/types/portfolio";
import { profile } from "@/data/profile";
import { ProfileAvatar } from "@/components/profile/profile-avatar";
import { ImageCarousel } from "./image-carousel";
import {
  HiBookmark,
  HiChevronLeft,
  HiEllipsisHorizontal,
  HiHeart,
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { formatCount, getEngagement } from "@/lib/engagement";

interface PostModalProps {
  post: PortfolioPost | null;
  type: PostType | null;
  onClose: () => void;
}

function ModalContent({
  post,
  type,
  onClose,
}: {
  post: PortfolioPost;
  type: PostType;
  onClose: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const { likes, comments } = getEngagement(post.slug);
  const displayLikes = liked ? likes + 1 : likes;

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const isProject = type === "projects";
  const isExperience = type === "experience";
  const isAchievement = type === "achievements";

  const dateStr = post.duration ?? post.buildDate ?? post.eventDate ?? "";

  const extraLines: string[] = [];
  if (isProject && post.features?.length) {
    extraLines.push(...post.features.map((f) => `• ${f}`));
  }
  if (isExperience && post.responsibilities?.length) {
    extraLines.push(...post.responsibilities.map((r) => `• ${r}`));
  }
  if (isAchievement && post.outcome) {
    extraLines.push(post.outcome);
  }

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/65"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={post.title}
    >
      {/* Mobile full-screen */}
      <motion.div
        className="flex h-full w-full flex-col bg-background md:hidden"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-[44px] items-center border-b border-border px-2">
          <button type="button" onClick={onClose} aria-label="Back" className="p-2">
            <HiChevronLeft className="h-6 w-6" />
          </button>
          <span className="flex-1 text-center text-[16px] font-semibold">Post</span>
          <div className="w-10" />
        </div>
        <div className="relative w-full aspect-square shrink-0 bg-black">
          <ImageCarousel slides={post.slides} title={post.title} />
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <ModalSidebar
            post={post}
            liked={liked}
            saved={saved}
            displayLikes={displayLikes}
            comments={comments}
            dateStr={dateStr}
            extraLines={extraLines}
            onLike={() => setLiked((v) => !v)}
            onSave={() => setSaved((v) => !v)}
            mobile
          />
        </div>
      </motion.div>

      {/* Desktop split modal */}
      <motion.div
        className="relative hidden h-[min(90vh,700px)] w-full max-w-[935px] overflow-hidden rounded-sm border border-border bg-background md:flex"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0 flex-[1.2] bg-black">
          <ImageCarousel slides={post.slides} title={post.title} />
        </div>
        <div className="flex w-[335px] shrink-0 flex-col">
          <ModalSidebar
            post={post}
            liked={liked}
            saved={saved}
            displayLikes={displayLikes}
            comments={comments}
            dateStr={dateStr}
            extraLines={extraLines}
            onLike={() => setLiked((v) => !v)}
            onSave={() => setSaved((v) => !v)}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ModalSidebar({
  post,
  liked,
  saved,
  displayLikes,
  comments,
  dateStr,
  extraLines,
  onLike,
  onSave,
  mobile,
}: {
  post: PortfolioPost;
  liked: boolean;
  saved: boolean;
  displayLikes: number;
  comments: number;
  dateStr: string;
  extraLines: string[];
  onLike: () => void;
  onSave: () => void;
  mobile?: boolean;
}) {
  return (
    <>
      <div className="flex items-center gap-3 border-b border-border px-4 py-[14px]">
        <ProfileAvatar size={32} className="h-8 w-8 rounded-full" />
        <span className="flex-1 text-[14px] font-semibold">{profile.username}</span>
        <button type="button" aria-label="More options">
          <HiEllipsisHorizontal className="h-5 w-5" />
        </button>
      </div>

      <div className={`flex-1 overflow-y-auto px-4 py-3 ${mobile ? "" : "max-h-[360px]"}`}>
        <div className="mb-3 text-[14px] leading-[18px]">
          <span className="mr-1.5 font-semibold">{profile.username}</span>
          <span>{post.description}</span>
        </div>

        {post.technologies.length > 0 && (
          <p className="mb-3 text-[14px] text-ig-secondary">
            {post.technologies.join(" · ")}
          </p>
        )}

        {extraLines.map((line) => (
          <p key={line} className="mb-1 text-[14px] leading-[18px] text-foreground">
            {line}
          </p>
        ))}

        {post.githubUrl && (
          <a
            href={post.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[14px] font-semibold text-ig-link"
          >
            View source on GitHub
          </a>
        )}

        {dateStr && (
          <p className="mt-4 text-[10px] font-normal uppercase tracking-wide text-ig-secondary">
            {dateStr}
          </p>
        )}
      </div>

      <div className="border-t border-border">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <button type="button" onClick={onLike} aria-label={liked ? "Unlike" : "Like"}>
              {liked ? (
                <HiHeart className="h-6 w-6 text-ig-like" />
              ) : (
                <HiOutlineHeart className="h-6 w-6 text-foreground" />
              )}
            </button>
            <button type="button" aria-label="Comment">
              <HiOutlineChatBubbleOvalLeft className="h-6 w-6 text-foreground" />
            </button>
            <button type="button" aria-label="Share">
              <HiOutlinePaperAirplane className="h-6 w-6 text-foreground" />
            </button>
          </div>
          <button type="button" onClick={onSave} aria-label={saved ? "Unsave" : "Save"}>
            {saved ? (
              <HiBookmark className="h-6 w-6 text-foreground" />
            ) : (
              <HiOutlineBookmark className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        <p className="px-4 pb-1 text-[14px] font-semibold">
          {formatCount(displayLikes)} likes
        </p>

        <button
          type="button"
          className="px-4 pb-3 text-[14px] text-ig-secondary"
        >
          View all {formatCount(comments)} comments
        </button>

        <div className="flex items-center gap-3 border-t border-border px-4 py-3">
          <HiOutlineChatBubbleOvalLeft className="h-6 w-6 shrink-0 text-ig-secondary" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-ig-secondary"
            readOnly
          />
          <button
            type="button"
            className="text-[14px] font-semibold text-ig-blue opacity-40"
            disabled
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export function PostModal({ post, type, onClose }: PostModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {post && type && (
        <ModalContent key={post.id} post={post} type={type} onClose={onClose} />
      )}
    </AnimatePresence>,
    document.body
  );
}

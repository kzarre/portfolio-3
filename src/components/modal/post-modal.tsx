"use client";

import { useCallback, useEffect, useState, useId } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiXMark } from "react-icons/hi2";
import { FiGithub, FiCalendar } from "react-icons/fi";

import type { PortfolioPost, PostType } from "@/types/portfolio";
import { ImageCarousel } from "./image-carousel";

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
  const headingId = useId();

  const handleClose = useCallback(() => {
    document.body.style.overflow = "";
    onClose();
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) handleClose();
    },
    [handleClose]
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose]);

  const isProject = type === "projects";
  const isExperience = type === "experience";
  const isAchievement = type === "achievements";

  const dateStr = post.duration ?? post.buildDate ?? post.eventDate ?? "";

  const extraLines: string[] = [];
  if (isProject && post.features?.length) {
    extraLines.push(...post.features);
  }
  if (isExperience && post.responsibilities?.length) {
    extraLines.push(...post.responsibilities);
  }
  if (isAchievement && post.outcome) {
    extraLines.push(post.outcome);
  }

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-md p-0 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
    >
      {/* Mobile Wrapper */}
      <motion.div
        className="flex h-full w-full flex-col bg-background md:hidden"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 250 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-14 items-center justify-between border-b border-border/60 px-4 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Back"
            className="rounded-full p-2 text-muted-foreground hover:bg-secondary/50 active:scale-95 transition-all"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>
          <span className="text-[15px] font-semibold tracking-wide uppercase text-muted-foreground">
            {type ? type.slice(0, -1) : "Detail"}
          </span>
          <div className="w-10" />
        </div>

        <div className="relative aspect-square w-full shrink-0 bg-black shadow-inner">
          <ImageCarousel slides={post.slides} title={post.title} />
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <ModalSidebar
            post={post}
            dateStr={dateStr}
            extraLines={extraLines}
            headingId={headingId}
          />
        </div>
      </motion.div>

      {/* Desktop Wrapper */}
      <motion.div
        className="relative hidden h-[min(85vh,720px)] w-full max-w-[1020px] overflow-hidden rounded-xl border border-border/80 bg-background shadow-2xl shadow-black/40 md:flex"
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Desktop Close Button (Floating Top-Right outside or inside bounds gracefully) */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-background/60 p-2 text-foreground/80 backdrop-blur-md border border-border/40 hover:bg-background hover:text-foreground transition-all shadow-sm"
          aria-label="Close modal"
        >
          <HiXMark className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-[1.3] bg-zinc-950 flex items-center justify-center relative">
          <ImageCarousel slides={post.slides} title={post.title} />
        </div>

        <div className="flex w-[380px] shrink-0 flex-col border-l border-border/60 bg-card">
          <ModalSidebar
            post={post}
            dateStr={dateStr}
            extraLines={extraLines}
            headingId={headingId}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ModalSidebar({
  post,
  dateStr,
  extraLines,
  headingId,
}: {
  post: PortfolioPost;
  dateStr: string;
  extraLines: string[];
  headingId: string;
}) {
  return (
    <div className="flex flex-col h-full overflow-y-auto px-5 py-6">
      {/* Header Info */}
      <div className="flex flex-col mb-4">
        <h2 id={headingId} className="text-xl font-bold tracking-tight text-foreground leading-snug">
          {post.title}
        </h2>
      </div>

      {/* Core Description */}
      <div className="mb-5 text-[14px] leading-relaxed text-muted-foreground/90 font-normal whitespace-pre-line">
        {post.description}
      </div>

      {/* Structured bullet highlights */}
      {extraLines.length > 0 && (
        <div className="space-y-2.5 mb-6 border-l-2 border-primary/20 pl-3">
          {extraLines.map((line, index) => (
            <p
              key={index}
              className="text-[13.5px] leading-relaxed text-foreground/80"
            >
              • {line}
            </p>
          ))}
        </div>
      )}

      {/* Refactored Badges Container */}
      {post.technologies.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-1.5">
            {post.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[12px] font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Links Frame */}
      {post.githubUrl && (
        <div className="mb-4">
          <a
            href={post.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2 text-[13px] font-medium hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
          >
            <FiGithub className="h-4 w-4" />
            <span>View Source</span>
          </a>
        </div>
      )}

      {/* Dynamic Date Sticky Footer Block */}
      {dateStr && (
        <div className="mt-auto pt-6 border-t border-border/40 flex items-center gap-2 text-muted-foreground">
          <FiCalendar className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
          <p className="text-[11px] font-medium uppercase tracking-widest">
            {dateStr}
          </p>
        </div>
      )}
    </div>
  );
}

export function PostModal({ post, type, onClose }: PostModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {post && type ? (
        <ModalContent
          key={post.id}
          post={post}
          type={type}
          onClose={onClose}
        />
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
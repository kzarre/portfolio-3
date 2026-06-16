"use client";

import { useCallback, useEffect, useState, useId } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

import type { PortfolioPost, PostType } from "@/types/portfolio";
import { ImageCarousel } from "./image-carousel";

interface PostModalProps {
  post: PortfolioPost | null;
  type: PostType | null;
  onClose: () => void;
}

export function PostModal({ post, type, onClose }: PostModalProps) {
  const [mounted, setMounted] = useState(false);
  const headingId = useId();

  useEffect(() => {
    const handle = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(handle);
  }, []);

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
    if (!post) return;
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
  }, [post, handleClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {post && type ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
        >
          {/* Slideshow Card */}
          <motion.div
            className="relative w-full max-w-[860px] aspect-[4/3] md:aspect-video overflow-hidden rounded-xl border border-white/15 bg-zinc-950 shadow-2xl shadow-black/80"
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 20, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white/80 backdrop-blur-sm border border-white/10 hover:bg-black/80 hover:text-white transition-all shadow-md cursor-pointer"
              aria-label="Close slideshow"
            >
              <HiXMark className="h-5 w-5" />
            </button>

            {/* Title display */}
            <h2 id={headingId} className="sr-only">
              {post.title} Slideshow
            </h2>

            {/* Slideshow Carousel */}
            <div className="h-full w-full">
              <ImageCarousel slides={post.slides} title={post.title} />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
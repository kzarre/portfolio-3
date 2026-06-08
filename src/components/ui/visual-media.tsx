"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface VisualMediaProps {
  visual: string;
  alt: string;
  fallback?: string;
  className?: string;
  priority?: boolean;
}

function isCssBackground(value: string) {
  return (
    value.startsWith("linear-gradient") ||
    value.startsWith("radial-gradient") ||
    value.startsWith("#") ||
    value.startsWith("rgb")
  );
}

function isVideo(value: string) {
  return (
    value.endsWith(".mp4") ||
    value.endsWith(".webm") ||
    value.endsWith(".ogg")
  );
}

export function VisualMedia({
  visual,
  alt,
  fallback,
  className,
  priority = false,
}: VisualMediaProps) {
  const [failed, setFailed] = useState(false);

  const bg = failed && fallback ? fallback : visual;

  if (isCssBackground(bg)) {
    return (
      <div
        className={cn("absolute inset-0", className)}
        style={{ background: bg }}
        role="img"
        aria-label={alt}
      />
    );
  }

  if (isVideo(bg)) {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center bg-black", className)}>
        <video
          src={bg}
          controls
          muted
          playsInline
          autoPlay
          loop
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <Image
      src={bg}
      alt={alt}
      fill
      className={cn("object-cover", className)}
      sizes="(max-width: 768px) 100vw, 60vw"
      loading={priority ? undefined : "lazy"}
      priority={priority}
      unoptimized
      onError={() => {
        if (fallback) setFailed(true);
      }}
    />
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const AVATAR_FALLBACK = "/images/avatar.svg";

interface ProfileAvatarProps {
  size: number;
  className?: string;
  priority?: boolean;
  isMain?: boolean;
}

export function ProfileAvatar({
  size,
  className,
  priority = false,
  isMain = false,
}: ProfileAvatarProps) {
  const defaultSrc = isMain ? profile.avatar : "/images/avatar.svg";
  const [src, setSrc] = useState(defaultSrc);

  return (
    <div
      className={cn("relative shrink-0 overflow-hidden", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={profile.name}
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority={priority}
        unoptimized
        onError={() => {
          if (src !== AVATAR_FALLBACK) setSrc(AVATAR_FALLBACK);
        }}
      />
    </div>
  );
}

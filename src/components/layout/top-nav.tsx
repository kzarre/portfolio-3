"use client";

import Link from "next/link";
import { ProfileAvatar } from "@/components/profile/profile-avatar";
import {
  HiHeart,
  HiMiniHome,
  HiOutlineMagnifyingGlass,
  HiOutlinePlus,
} from "react-icons/hi2";
import {
  IoCompassOutline,
  IoFilmOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";

export function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-border bg-background md:block">
      <div className="mx-auto flex h-[var(--ig-nav-h)] max-w-[975px] items-center justify-between px-5">
        <Link
          href="/"
          className="mt-1 text-[36px] leading-none text-foreground"
          style={{ fontFamily: "var(--font-instagram), cursive" }}
        >
          Instagram
        </Link>

        <div className="ig-search flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-2 text-gray-500">
          <HiOutlineMagnifyingGlass className="h-4 w-4 shrink-0" />
          <span className="text-sm">Search</span>
        </div>

        <nav className="flex items-center gap-[22px]" aria-label="Main">
          <Link href="/" aria-label="Home">
            <HiMiniHome className="h-6 w-6 text-foreground" />
          </Link>
          <button type="button" aria-label="Explore">
            <IoCompassOutline className="h-6 w-6 text-foreground" />
          </button>
          <button type="button" aria-label="Reels">
            <IoFilmOutline className="h-6 w-6 text-foreground" />
          </button>
          <button type="button" aria-label="Messages">
            <IoPaperPlaneOutline className="h-6 w-6 text-foreground" />
          </button>
          <button type="button" aria-label="Notifications">
            <HiHeart className="h-6 w-6 text-foreground" />
          </button>
          <button type="button" aria-label="Create">
            <HiOutlinePlus className="h-6 w-6 text-foreground" />
          </button>
          <Link href="/" aria-label="Your profile" className="h-6 w-6 overflow-hidden rounded-full ring-1 ring-border">
            <ProfileAvatar size={24} className="h-6 w-6 rounded-full" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

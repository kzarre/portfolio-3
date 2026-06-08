"use client";

import Link from "next/link";
import { ProfileAvatar } from "@/components/profile/profile-avatar";
import {
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlinePlus,
} from "react-icons/hi2";
import { IoFilmOutline } from "react-icons/io5";

export function MobileBottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex h-[var(--ig-bottom-nav-h)] items-center justify-around border-t border-border bg-background md:hidden"
      aria-label="Mobile"
    >
      <Link href="/" aria-label="Home" className="p-3">
        <HiOutlineHome className="h-7 w-7 text-foreground" />
      </Link>
      <button type="button" aria-label="Search" className="p-3">
        <HiOutlineMagnifyingGlass className="h-7 w-7 text-foreground" />
      </button>
      <button type="button" aria-label="Create" className="p-3">
        <HiOutlinePlus className="h-7 w-7 text-foreground" />
      </button>
      <button type="button" aria-label="Reels" className="p-3">
        <IoFilmOutline className="h-7 w-7 text-foreground" />
      </button>
      <Link href="/" aria-label="Your profile" className="p-3">
        <ProfileAvatar size={24} className="h-6 w-6 rounded-full" />
      </Link>
    </nav>
  );
}

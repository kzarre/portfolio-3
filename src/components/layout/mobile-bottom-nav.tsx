"use client";

import Link from "next/link";
import { ProfileAvatar } from "@/components/profile/profile-avatar";
import { SiCodeforces, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { profile } from "@/data";

export function MobileBottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex h-[var(--ig-bottom-nav-h)] items-center justify-around border-t border-border bg-background md:hidden"
      aria-label="Mobile"
    >
      <a
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="p-3 hover:scale-110 transition-transform"
      >
        <SiGithub className="h-7 w-7 text-foreground" />
      </a>
      <a
        href={profile.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-3 hover:scale-110 transition-transform"
      >
        <FaLinkedinIn className="h-7 w-7 text-foreground" />
      </a>
      <a
        href={profile.social.codeforces}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Codeforces"
        className="p-3 hover:scale-110 transition-transform"
      >
        <SiCodeforces className="h-7 w-7 text-foreground" />
      </a>
      <a
        href={`mailto:${profile.social.email}`}
        aria-label="Email"
        className="p-3 hover:scale-110 transition-transform"
      >
        <IoMailOutline className="h-7 w-7 text-foreground" />
      </a>
      <Link href="/" aria-label="Your profile" className="p-3">
        <ProfileAvatar size={24} className="h-6 w-6 rounded-full" />
      </Link>
    </nav>
  );
}

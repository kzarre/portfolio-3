"use client";

import Link from "next/link";
import { ProfileAvatar } from "@/components/profile/profile-avatar";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { SiCodeforces, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TbFileCv } from "react-icons/tb";
import { profile } from "@/data";

export function TopNav() {
  const resumeUrl = profile.highlights.find((h) => h.id === "resume")?.url ?? "/resume/Kanishk_Kulshrestha_resume.pdf";

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
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform"
          >
            <SiGithub className="h-[22px] w-[22px] text-foreground" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedinIn className="h-[22px] w-[22px] text-foreground" />
          </a>
          <a
            href={profile.social.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codeforces"
            className="hover:scale-110 transition-transform"
          >
            <SiCodeforces className="h-[22px] w-[22px] text-foreground" />
          </a>
          <a
            href={`mailto:${profile.social.email}`}
            aria-label="Email"
            className="hover:scale-110 transition-transform"
          >
            <IoMailOutline className="h-[22px] w-[22px] text-foreground" />
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="hover:scale-110 transition-transform"
          >
            <TbFileCv className="h-[22px] w-[22px] text-foreground" />
          </a>
          <Link href="/" aria-label="Your profile" className="h-6 w-6 overflow-hidden rounded-full ring-1 ring-border">
            <ProfileAvatar size={24} className="h-6 w-6 rounded-full" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { SiCodeforces, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TbFileCv } from "react-icons/tb";
import { ProfileAvatar } from "./profile-avatar";
import type { ProfileData } from "@/types/portfolio";
import { getAllPosts } from "@/data";

interface ProfileHeaderProps {
  profile: ProfileData;
}

function renderTextWithLinks(text: string) {
  const regex = /@fiserv/i;
  const match = text.match(regex);
  if (match && match.index !== undefined) {
    const matchedText = match[0];
    const before = text.substring(0, match.index);
    const after = text.substring(match.index + matchedText.length);
    return (
      <>
        {before}
        <a
          href="https://www.linkedin.com/company/fiserv/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline text-ig-link"
        >
          {matchedText}
        </a>
        {after}
      </>
    );
  }
  return text;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const postCount = getAllPosts().length;

  const stats = [
    { value: String(postCount), label: "posts" },
    { value: profile.stats.codeforcesRating, label: "codeforces", url: profile.social.codeforces },
    { value: profile.stats.repositories, label: "repos", url: `${profile.social.github}?tab=repositories` },
  ];

  return (
    <header className="px-4 pt-4 md:px-0 md:pt-10">
      <div className="flex items-center gap-7 md:hidden">
        <div className="shrink-0 rounded-full ring-2 ring-border ring-offset-2 ring-offset-background">
          <ProfileAvatar size={77} className="rounded-full" priority isMain />
        </div>
        <ul className="flex flex-1 justify-around">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center">
              {stat.url ? (
                <a
                  href={stat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <span className="block text-[16px] font-semibold leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[14px] text-foreground">{stat.label}</span>
                </a>
              ) : (
                <>
                  <span className="block text-[16px] font-semibold leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[14px] text-foreground">{stat.label}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex md:items-center md:gap-8 lg:gap-16">
        <div className="shrink-0 rounded-full ring-2 ring-border ring-offset-4 ring-offset-background">
          <ProfileAvatar size={150} className="rounded-full" priority isMain />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <div className="flex items-center gap-4">
            <h1 className="text-[20px] font-normal">{profile.username}</h1>
            <button
              type="button"
              className={isFollowing ? "ig-btn" : "ig-btn-follow"}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <a
              href={`mailto:${profile.social.email}`}
              className="ig-btn"
            >
              Mail
            </a>
            <button
              type="button"
              className="ig-btn px-2"
              aria-label="More options"
              onClick={() => setIsSocialsOpen(true)}
            >
              <HiChevronDown className="h-4 w-4" />
            </button>
          </div>

          <ul className="flex gap-10">
            {stats.map((stat) => (
              <li key={stat.label}>
                {stat.url ? (
                  <a
                    href={stat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span className="font-semibold">{stat.value}</span>{" "}
                    <span>{stat.label}</span>
                  </a>
                ) : (
                  <>
                    <span className="font-semibold">{stat.value}</span>{" "}
                    <span>{stat.label}</span>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="space-y-0.5 text-[14px] leading-[18px]">
            <p className="font-semibold">{profile.name}</p>
            <p>{renderTextWithLinks(profile.status)}</p>
            <p>{renderTextWithLinks(profile.bio)}</p>
            <p className="text-ig-secondary">{profile.skillsSummary}</p>
            <p className="text-ig-secondary">📍 {profile.location}</p>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ig-link"
            >
              {profile.social.github.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-3 md:hidden">
        <p className="text-[14px] font-semibold">{profile.name}</p>
        <div className="space-y-0.5 text-[14px] leading-[18px]">
          <p>{renderTextWithLinks(profile.status)}</p>
          <p>{renderTextWithLinks(profile.bio)}</p>
          <p className="text-ig-secondary">{profile.skillsSummary}</p>
          <p className="text-ig-secondary">📍 {profile.location}</p>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ig-link"
          >
            {profile.social.github.replace("https://", "")}
          </a>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className={isFollowing ? "ig-btn flex-1" : "ig-btn-follow flex-1"}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
          <a
            href={`mailto:${profile.social.email}`}
            className="ig-btn flex-1 text-center"
          >
            Mail
          </a>
          <button
            type="button"
            className="ig-btn px-3"
            aria-label="More options"
            onClick={() => setIsSocialsOpen(true)}
          >
            <HiChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {isSocialsOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsSocialsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-[360px] overflow-hidden rounded-xl bg-background border border-border text-foreground shadow-2xl animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-border px-4 py-3.5 text-center text-[16px] font-bold">
              Social Profiles
            </div>
            <div className="flex flex-col">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 hover:bg-muted transition-colors border-b border-border"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-foreground">
                  <SiGithub className="h-5 w-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[14px] font-semibold">GitHub</p>
                  <p className="text-[12px] text-ig-secondary">@kzarre</p>
                </div>
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 hover:bg-muted transition-colors border-b border-border"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400">
                  <FaLinkedinIn className="h-5 w-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[14px] font-semibold">LinkedIn</p>
                  <p className="text-[12px] text-ig-secondary">Kanishk Kulshrestha</p>
                </div>
              </a>
              <a
                href={profile.social.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 hover:bg-muted transition-colors border-b border-border"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400">
                  <SiCodeforces className="h-5 w-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[14px] font-semibold">Codeforces</p>
                  <p className="text-[12px] text-ig-secondary">@kzar</p>
                </div>
              </a>
              <a
                href={`mailto:${profile.social.email}`}
                className="flex items-center gap-3 px-5 py-3 hover:bg-muted transition-colors border-b border-border"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400">
                  <IoMailOutline className="h-5 w-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[14px] font-semibold">Email</p>
                  <p className="text-[12px] text-ig-secondary">{profile.social.email}</p>
                </div>
              </a>
              <a
                href={profile.highlights.find((h) => h.id === "resume")?.url ?? "/resume/Kanishk_Kulshrestha_resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 hover:bg-muted transition-colors border-b border-border"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400">
                  <TbFileCv className="h-5 w-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[14px] font-semibold">Resume</p>
                  <p className="text-[12px] text-ig-secondary">Download PDF</p>
                </div>
              </a>
              <button
                type="button"
                className="w-full py-3 text-center text-[14px] font-bold text-ig-like hover:bg-muted transition-colors outline-none"
                onClick={() => setIsSocialsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

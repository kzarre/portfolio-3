"use client";

import { HiChevronDown } from "react-icons/hi2";
import { ProfileAvatar } from "./profile-avatar";
import type { ProfileData } from "@/types/portfolio";
import { getAllPosts } from "@/data";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const postCount = getAllPosts().length;

  const stats = [
    { value: String(postCount), label: "posts" },
    { value: profile.stats.codeforcesRating, label: "codeforces" },
    { value: profile.stats.repositories, label: "repos" },
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
              <span className="block text-[16px] font-semibold leading-tight">
                {stat.value}
              </span>
              <span className="text-[14px] text-foreground">{stat.label}</span>
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
            <button type="button" className="ig-btn-follow">
              Follow
            </button>
            <button type="button" className="ig-btn">
              Message
            </button>
            <button type="button" className="ig-btn px-2" aria-label="More options">
              <HiChevronDown className="h-4 w-4" />
            </button>
          </div>

          <ul className="flex gap-10">
            {stats.map((stat) => (
              <li key={stat.label}>
                <span className="font-semibold">{stat.value}</span>{" "}
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-0.5 text-[14px] leading-[18px]">
            <p className="font-semibold">{profile.name}</p>
            <p>{profile.status}</p>
            <p>{profile.bio}</p>
            <p className="text-ig-secondary">{profile.skillsSummary}</p>
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
          <p>{profile.status}</p>
          <p>{profile.bio}</p>
          <p className="text-ig-secondary">{profile.skillsSummary}</p>
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
          <button type="button" className="ig-btn-follow flex-1">
            Follow
          </button>
          <button type="button" className="ig-btn flex-1">
            Message
          </button>
          <button type="button" className="ig-btn px-3" aria-label="More options">
            <HiChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

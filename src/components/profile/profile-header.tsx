"use client";

import { ProfileAvatar } from "./profile-avatar";
import type { ProfileData } from "@/types/portfolio";

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
  return (
    <header className="px-4 py-8 md:px-0 md:py-12 border-b border-border">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left">
        {/* Avatar */}
        <div className="shrink-0 rounded-full border border-border p-1 bg-background shadow-sm">
          <ProfileAvatar size={110} className="rounded-full" priority isMain />
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-4 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{profile.name}</h1>
              <p className="text-sm text-muted-foreground mt-0.5">@{profile.username}</p>
            </div>
            <a
              href={`mailto:${profile.social.email}`}
              className="ig-btn px-6 py-2 shadow-sm font-semibold inline-flex items-center justify-center gap-2"
            >
              Mail
            </a>
          </div>

          {/* Bio and Subtitles */}
          <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground pt-2">
            <p className="font-semibold text-foreground text-lg">{renderTextWithLinks(profile.status)}</p>
            <p className="max-w-2xl mx-auto md:mx-0 text-foreground/80 font-normal">{renderTextWithLinks(profile.bio)}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm pt-2">
              <span className="text-accent-foreground font-medium">{profile.skillsSummary}</span>
              <span className="text-muted-foreground">📍 {profile.location}</span>
            </div>

            <div className="pt-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-ig-link hover:underline"
              >
                {profile.social.github.replace("https://", "")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

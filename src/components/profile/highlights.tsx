"use client";

import { FaLinkedinIn } from "react-icons/fa6";
import { SiCodeforces, SiGithub } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";
import type { Highlight } from "@/types/portfolio";

const iconMap = {
  github: SiGithub,
  resume: TbFileCv,
  codeforces: SiCodeforces,
  linkedin: FaLinkedinIn,
} as const;

interface HighlightsProps {
  highlights: Highlight[];
}

export function Highlights({ highlights }: HighlightsProps) {
  return (
    <div className="mt-4 px-4 md:mt-11 md:px-0">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide md:gap-8">
        {highlights.map((highlight) => {
          const Icon = iconMap[highlight.icon];
          const isExternal = highlight.url.startsWith("http");

          return (
            <a
              key={highlight.id}
              href={highlight.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="flex w-[64px] shrink-0 flex-col items-center gap-1 md:w-[77px]"
            >
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-border bg-muted md:h-[77px] md:w-[77px] pointer-events-none">
                <Icon className="h-6 w-6 text-foreground md:h-7 md:w-7 pointer-events-none" />
              </div>
              <span className="max-w-full truncate text-[12px] text-foreground pointer-events-none">
                {highlight.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

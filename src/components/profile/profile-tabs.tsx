"use client";

import { BsGrid3X3, BsPersonSquare } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import type { TabId } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const tabs: { id: TabId; icon: typeof BsGrid3X3; label: string }[] = [
  { id: "projects", icon: BsGrid3X3, label: "Projects" },
  { id: "experience", icon: RiMovieLine, label: "Experience" },
  { id: "achievements", icon: BsPersonSquare, label: "Achievements" },
];

interface ProfileTabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <nav
      className="mt-3 border-t border-border md:mt-12"
      role="tablist"
      aria-label="Profile content"
    >
      <div className="flex md:justify-center md:gap-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex flex-1 md:flex-none items-center justify-center py-[14px] md:py-4 gap-2",
                isActive ? "text-foreground" : "text-ig-secondary"
              )}
              aria-selected={isActive}
              role="tab"
              aria-label={tab.label}
            >
              <Icon className="h-[22px] w-[22px] md:h-3 md:w-3 pointer-events-none" />
              <span className="hidden md:inline text-[12px] font-semibold tracking-[1.5px] uppercase pointer-events-none">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute inset-x-0 top-0 h-[1.5px] bg-foreground pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

"use client";

import type { TabId } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const tabs: { id: TabId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
];

interface ProfileTabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <nav
      className="mt-6 border-b border-border md:mt-10"
      role="tablist"
      aria-label="Profile sections"
    >
      <div className="flex justify-center gap-8 md:gap-12">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex items-center justify-center py-4 px-1 gap-2 transition-colors duration-200 outline-none select-none",
                isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground font-medium"
              )}
              aria-selected={isActive}
              role="tab"
              aria-label={tab.label}
            >
              <span className="block text-[13px] tracking-[1.5px] uppercase">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-primary pointer-events-none rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}


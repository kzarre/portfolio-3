"use client";

import { profile } from "@/data/profile";

export function ProfileFooter() {
  return (
    <footer className="mt-8 hidden px-4 pb-6 text-[12px] text-ig-secondary md:block md:px-0">
      <p className="font-semibold text-foreground">{profile.username}</p>
      <p className="mt-1">© {new Date().getFullYear()} from Meta-inspired dev portfolio</p>
    </footer>
  );
}

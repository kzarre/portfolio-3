"use client";

import { profile } from "@/data/profile";

export function ProfileFooter() {
  return (
    <footer className="mt-8 hidden px-4 pb-6 text-[15px] text-ig-secondary md:block md:px-0">
      <p className="font-semibold text-foreground">Contact Me</p>
      <p className="mt-1"><span>Email </span><span>kkulshrestha47@gmail.com</span></p>
      <p className="mt-1"><span>Phone </span><span>+91-9889320379</span></p>
    </footer>
  );
}

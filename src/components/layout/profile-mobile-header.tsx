"use client";

import { usePathname, useRouter } from "next/navigation";
import { HiChevronLeft } from "react-icons/hi2";
import { profile } from "@/data/profile";

export function ProfileMobileHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 flex h-[44px] items-center border-b border-border bg-background px-2 md:hidden">
      {!isHome ? (
        <button
          type="button"
          onClick={() => router.back()}
          className="p-2 text-foreground"
          aria-label="Back"
        >
          <HiChevronLeft className="h-6 w-6" />
        </button>
      ) : (
        <div className="w-10" />
      )}
      <h1 className="flex-1 text-center text-[16px] font-bold text-foreground">
        System Developer
      </h1>
      <div className="w-10" />
    </header>
  );
}

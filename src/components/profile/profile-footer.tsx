"use client";

import { profile } from "@/data/profile";

export function ProfileFooter() {
  return (
    <footer className="mt-16 border-t border-border/40 py-10 text-center text-sm">
      <h3 className="font-bold text-foreground text-lg mb-3">Connect with me</h3>
      <div className="space-y-1.5 text-muted-foreground">
        <p>
          <span className="font-semibold text-foreground">Email: </span>
          <a href={`mailto:${profile.social.email}`} className="text-primary hover:underline font-medium">
            {profile.social.email}
          </a>
        </p>
        <p>
          <span className="font-semibold text-foreground">Phone: </span>
          <a href="tel:+919889320379" className="text-foreground hover:text-primary transition-colors font-medium">
            +91-9889320379
          </a>
        </p>
      </div>
    </footer>
  );
}


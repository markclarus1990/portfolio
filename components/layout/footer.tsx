"use client";

import { Heart } from "lucide-react";
import { SocialLinks } from "@/components/shared/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>&copy; {year} Mark Michael Angelo Clarus.</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>

          <SocialLinks />

          <p className="flex items-center gap-1 text-xs text-muted-foreground/60">
            Built with <Heart size={12} className="text-red-400" /> using
            Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

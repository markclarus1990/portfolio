"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: "default" | "hero";
}

export function SocialLinks({
  className,
  iconSize = 20,
  variant = "default",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        if (!Icon) return null;

        if (variant === "hero") {
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_-5px] hover:shadow-primary/30"
            >
              <Icon size={iconSize} />
            </a>
          );
        }

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}

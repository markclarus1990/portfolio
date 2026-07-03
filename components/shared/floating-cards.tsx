"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  GitCommit,
  BarChart3,
  Code2,
  LayoutDashboard,
  Folder,
  Layers,
  Database,
} from "lucide-react";
import { floatingCards } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  terminal: Terminal,
  "git-commit": GitCommit,
  "bar-chart-3": BarChart3,
  "code-2": Code2,
  "layout-dashboard": LayoutDashboard,
  folder: Folder,
  layers: Layers,
  database: Database,
};

export function FloatingCards() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[500px] md:h-[600px]">
      {floatingCards.map((card, i) => {
        const Icon = iconMap[card.icon];
        const angle = (i / floatingCards.length) * Math.PI * 2;
        const radius = 160 + Math.random() * 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={card.title}
            className="absolute left-1/2 top-1/2"
            initial={{ x, y, opacity: 0, scale: 0.8 }}
            animate={{
              x: [x, x + 10, x - 5, x],
              y: [y, y - 10, y + 5, y],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              x: {
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              },
              y: {
                duration: 5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              },
              opacity: {
                duration: 0.5,
                delay: card.delay,
              },
              scale: {
                duration: 0.5,
                delay: card.delay,
              },
            }}
          >
            <div
              className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${card.color} p-3 shadow-xl backdrop-blur-xl md:p-4`}
              style={{
                width: "160px",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                {Icon && <Icon className="h-3.5 w-3.5 text-foreground/70" />}
                <span className="text-[10px] font-semibold tracking-wide text-foreground/70 uppercase">
                  {card.title}
                </span>
              </div>
              <p className="whitespace-pre-line text-[11px] leading-relaxed text-foreground/60 font-mono">
                {card.content}
              </p>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

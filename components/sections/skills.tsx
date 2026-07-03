"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

const categoryConfig: Record<
  string,
  { icon: React.ElementType; label: string; color: string }
> = {
  frontend: {
    icon: Code2,
    label: "Frontend",
    color: "text-blue-400",
  },
  backend: {
    icon: Server,
    label: "Backend",
    color: "text-emerald-400",
  },
  database: {
    icon: Database,
    label: "Database",
    color: "text-yellow-400",
  },
  cloud: {
    icon: Cloud,
    label: "Cloud & DevOps",
    color: "text-purple-400",
  },
  tools: {
    icon: Wrench,
    label: "Tools",
    color: "text-orange-400",
  },
  mobile: {
    icon: Smartphone,
    label: "Mobile",
    color: "text-cyan-400",
  },
};

export function Skills() {
  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  return (
    <section id="skills" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build great products"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([category, categorySkills], i) => {
            const config = categoryConfig[category];
            const Icon = config?.icon || Code2;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ${config?.color || "text-primary"}`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {config?.label || category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

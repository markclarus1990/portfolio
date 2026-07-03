"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Projects"
          subtitle="Selected work showcasing my technical expertise"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_-10px] hover:shadow-primary/10"
            >
              <div className="mb-3 flex items-start justify-between">
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                  {project.type}
                </Badge>
                <ExternalLink
                  size={14}
                  className="text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100"
                />
              </div>

              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 size={12} className="shrink-0 text-primary" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

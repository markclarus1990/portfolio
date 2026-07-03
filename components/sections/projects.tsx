"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play, X, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
              className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_-10px] hover:shadow-primary/10"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  {project.videos && project.videos.length > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black">
                        <Play size={20} className="ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 pt-4">
                <div className="mb-3 flex items-start justify-between">
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground opacity-0 transition-all duration-200 hover:text-foreground group-hover:opacity-100"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground opacity-0 transition-all duration-200 hover:text-foreground group-hover:opacity-100"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
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

                {project.videos && project.videos.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.videos.map((v) => (
                      <button
                        key={v.label}
                        onClick={() => setActiveVideo(v.src)}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:shadow-[0_0_15px_-5px] hover:shadow-primary/20"
                      >
                        <Play size={10} />
                        {v.label}
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-white/70"
            >
              <X size={24} />
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}

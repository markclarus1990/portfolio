"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and career highlights"
        />

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="md:grid md:grid-cols-2 md:gap-12">
                  <div
                    className={`pl-16 md:pl-0 ${
                      i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div
                      className={`absolute left-4 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-[#020617] md:left-1/2 md:-translate-x-1/2 ${
                        i % 2 === 0 ? "" : ""
                      }`}
                    >
                      <Briefcase size={14} className="text-primary" />
                    </div>

                    <div
                      className={`rounded-xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10 ${
                        i % 2 === 0 ? "md:mr-0" : ""
                      }`}
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm text-primary">{exp.company}</p>

                      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {exp.description.map((desc, j) => (
                          <li
                            key={j}
                            className="text-sm leading-relaxed text-muted-foreground"
                          >
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

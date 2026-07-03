"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Server, Smartphone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end application development from database design to deployment, ensuring seamless integration across all layers.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design approach that creates intuitive, accessible interfaces with modern visual aesthetics.",
  },
  {
    icon: Server,
    title: "Enterprise Architecture",
    description:
      "Scalable system architecture design with microservices, cloud infrastructure, and enterprise-grade security.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native, delivering native-quality experiences on iOS and Android.",
  },
];

export function About() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="About Me"
          subtitle="Building digital solutions that make a difference"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            I&apos;m a dedicated software engineer with a passion for building
            products that solve real problems. With expertise spanning frontend,
            backend, and mobile development, I bring a holistic approach to
            every project. I believe in clean code, intuitive design, and
            technology that serves people.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.02] hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

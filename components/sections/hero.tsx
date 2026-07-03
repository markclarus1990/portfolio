"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotatingTitles } from "@/components/shared/rotating-titles";
import { FloatingCards } from "@/components/shared/floating-cards";
import { SocialLinks } from "@/components/shared/social-links";
import { ScrollIndicator } from "@/components/shared/scroll-indicator";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center pt-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Badge variant="glow" className="gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {personalInfo.availableText}
            </Badge>
          </motion.div>

          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent font-heading text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RotatingTitles />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects">
              <Button variant="primary" size="lg">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                <Sparkles className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SocialLinks variant="hero" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <FloatingCards />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

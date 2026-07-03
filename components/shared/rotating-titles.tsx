"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rotatingTitles } from "@/lib/data";

export function RotatingTitles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 md:h-12">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-heading text-xl font-bold md:text-2xl"
        >
          {rotatingTitles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

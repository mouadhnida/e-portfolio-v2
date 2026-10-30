"use client";

import { motion } from "motion/react";
import { scrollToSection } from "@/lib/scroll";

export default function ScrollMouse({ href }: { href: string }) {
  return (
    <button
      onClick={() => scrollToSection(href)}
      aria-label="Scroll down"
      className="flex h-12 w-8 justify-center rounded-full border-2 border-black pt-2"
    >
      <motion.span
        className="block h-2.5 w-1 rounded-full bg-black"
        animate={{ y: [0, 14, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </button>
  );
}

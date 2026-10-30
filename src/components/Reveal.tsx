"use client";

import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  x?: number;
  y?: number;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  x = 0,
  y = 40,
  delay = 0,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

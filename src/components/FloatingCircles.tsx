"use client";

import { motion, useReducedMotion } from "motion/react";

type Item = {
  size: number;
  top: string;
  left: string;
  x: number[];
  y: number[];
  duration: number;
  color?: string; // no color = thin ring
};

const items: Item[] = [
  {
    size: 560,
    top: "-10%",
    left: "-12%",
    color: "rgba(96,165,250,0.40)",
    x: [0, 90, -30, 0],
    y: [0, 60, 110, 0],
    duration: 34,
  },
  {
    size: 500,
    top: "55%",
    left: "68%",
    color: "rgba(52,211,153,0.35)",
    x: [0, -100, 40, 0],
    y: [0, -70, 30, 0],
    duration: 40,
  },
  {
    size: 380,
    top: "18%",
    left: "55%",
    color: "rgba(255,255,255,0.60)",
    x: [0, 50, -60, 0],
    y: [0, 80, -20, 0],
    duration: 28,
  },
  {
    size: 440,
    top: "68%",
    left: "-10%",
    color: "rgba(129,140,248,0.30)",
    x: [0, 70, 20, 0],
    y: [0, -60, -100, 0],
    duration: 36,
  },
  {
    size: 260,
    top: "12%",
    left: "20%",
    x: [0, 40, -30, 0],
    y: [0, -40, 50, 0],
    duration: 30,
  },
  {
    size: 180,
    top: "62%",
    left: "40%",
    x: [0, -50, 30, 0],
    y: [0, 40, -50, 0],
    duration: 26,
  },
];

export default function FloatingCircles() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {items.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: c.size,
            height: c.size,
            top: c.top,
            left: c.left,
            ...(c.color
              ? {
                  background: `radial-gradient(circle, ${c.color} 0%, transparent 70%)`,
                }
              : { border: "1px solid rgba(0,0,0,0.12)" }),
          }}
          animate={reduce ? undefined : { x: c.x, y: c.y }}
          transition={{
            duration: c.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

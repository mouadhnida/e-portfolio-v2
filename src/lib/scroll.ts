import { animate } from "motion/react";

const NAV_HEIGHT = 80; // same as the navbar's h-20

export function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (!el) return;

  const max = document.documentElement.scrollHeight - window.innerHeight;
  const wanted = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  const target = Math.min(Math.max(wanted, 0), max);

  animate(window.scrollY, target, {
    duration: 1,
    ease: [0.65, 0, 0.35, 1],
    onUpdate: (y) => window.scrollTo(0, y),
  });
}

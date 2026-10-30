"use client";

import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { scrollToSection } from "@/lib/scroll";
import { GITHUB_URL } from "@/data/links";
import { useLang, useT } from "@/lib/i18n";
import { ui } from "@/data/ui";

const links = [
  { href: "#welcome", label: ui.nav.welcome },
  { href: "#engineering", label: ui.nav.engineering },
  { href: "#career", label: ui.nav.career },
  { href: "#mobility", label: ui.nav.mobility },
  { href: "#engagement", label: ui.nav.engagement },
  { href: "#activities", label: ui.nav.activities },
  { href: "#contact", label: ui.nav.contact },
];

const underline =
  "relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:content-[''] after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-sm backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#welcome"
          onClick={(e) => go(e, "#welcome")}
          className="font-script text-2xl"
        >
          Mouad Hnida
        </a>

        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => go(e, href)} className={underline}>
                {t(label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label={
              lang === "en" ? "Passer en français" : "Switch to English"
            }
            className="rounded-full border border-black px-3 py-1 text-xs font-semibold transition-colors hover:bg-black hover:text-white"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <SiGithub size={20} />
          </a>
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="absolute inset-x-0 top-full flex flex-col gap-4 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-lg lg:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => go(e, href)}>
                {t(label)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

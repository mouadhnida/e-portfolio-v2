"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang, Text } from "@/lib/text";

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => {
    const next: Lang = lang === "en" ? "fr" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

export function useT() {
  const { lang } = useLang();
  return (x: Text) => (typeof x === "string" ? x : x[lang]);
}

// <T text={...} /> shows the right language inside any component
export function T({ text }: { text: Text }) {
  const t = useT();
  return <>{t(text)}</>;
}

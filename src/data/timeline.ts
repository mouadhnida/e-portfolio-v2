import type { Text } from "@/lib/text";

export type TimelineItem = {
  year: string;
  type: "education" | "internship" | "work";
  title: string;
  place: string;
  description: Text;
};

// Keep this in chronological order (oldest first).
export const timeline: TimelineItem[] = [
  {
    year: "2024 - 2026",
    type: "education",
    title: "Classes préparatoires",
    place: "Omar Ibn Al Khattab, Meknes",
    description: {
      en: "Two years of intensive classes in mathematics, physics and problem solving.",
      fr: "Deux années de classes préparatoires intensives en mathématiques, physique et résolution de problèmes.",
    },
  },
  {
    year: "2026 - 2029",
    type: "education",
    title: "Joined ENSEEIHT, Digital Sciences",
    place: "ENSEEIHT, Toulouse INP",
    description: {
      en: "Started the engineering degree in Digital Sciences (Sciences du Numérique) after the classes préparatoires.",
      fr: "Début du cursus ingénieur en Sciences du Numérique après les classes préparatoires.",
    },
  },
  //{
  // year: "2027",
  //type: "internship",
  //title: "Internship: [your role]",
  //place: "[Company], [City]",
  //description: "[What you worked on, the tools you used, and the result.]",
  //},
];

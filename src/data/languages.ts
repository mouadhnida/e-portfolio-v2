import type { Text } from "@/lib/text";

export type Language = {
  name: Text;
  native: string;
  lang: string;
  level: Text;
  description: Text;
};

export const languages: Language[] = [
  {
    name: { en: "Arabic", fr: "Arabe" },
    native: "العربية",
    lang: "ar",
    level: { en: "Native", fr: "Natif" },
    description: { en: "Mother tongue", fr: "Langue maternelle" },
  },
  {
    name: { en: "French", fr: "Français" },
    native: "Français",
    lang: "fr",
    level: "C1",
    description: { en: "Advanced", fr: "Niveau avancé" },
  },
  {
    name: { en: "English", fr: "Anglais" },
    native: "English",
    lang: "en",
    level: "B2",
    description: {
      en: "Upper intermediate",
      fr: "Niveau intermédiaire supérieur",
    },
  },
  {
    name: { en: "Spanish", fr: "Espagnol" },
    native: "Español",
    lang: "es",
    level: "A1",
    description: {
      en: "Beginner, learning at school since this year",
      fr: "Niveau débutant, apprentissage à l’école depuis cette année",
    },
  },
];

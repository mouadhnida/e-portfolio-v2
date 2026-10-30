import type { Text } from "@/lib/text";

export type Activity = {
  title: Text;
  meta: Text;
  icon: "chess" | "gym";
  description: Text;
};

export const activities: Activity[] = [
  {
    title: { en: "Chess", fr: "Échecs" },
    meta: { en: "3 years", fr: "3 ans" },
    icon: "chess",
    description: {
      en: "I’ve been playing chess for 3 years. It taught me to think several moves ahead, stay patient and keep a clear head under pressure, which helps a lot when I solve problems in engineering.",
      fr: "Je joue aux échecs depuis 3 ans. Ils m’ont appris à réfléchir plusieurs coups à l’avance, à rester patient et à garder les idées claires sous pression, ce qui m’aide beaucoup à résoudre des problèmes d’ingénierie.",
    },
  },
  {
    title: "Gym",
    meta: { en: "Back on track", fr: "De retour" },
    icon: "gym",
    description: {
      en: "I stopped going to the gym during my classes préparatoires, when I had little time left. Today I’m back and more dedicated than ever, training regularly. It has taught me discipline and consistency.",
      fr: "J’ai arrêté la salle de sport pendant mes classes préparatoires, faute de temps. Aujourd’hui, j’ai repris et je m’investis plus que jamais, avec un entraînement régulier. La salle m’a appris la discipline et la constance.",
    },
  },
];

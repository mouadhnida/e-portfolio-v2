import type { Text } from "@/lib/text";

export type MobilityOption = {
  option: Text;
  destination: Text;
  tagline: Text;
  icon: "americas" | "europe";
  reasons: Text[];
  alignedWith?: Text;
};

export const mobilityPlan: MobilityOption[] = [
  {
    option: { en: "Option 1", fr: "Option 1" },
    destination: { en: "USA / Canada", fr: "États-Unis / Canada" },
    tagline: {
      en: "AI and machine learning at the highest level",
      fr: "L’IA et le machine learning au plus haut niveau",
    },
    icon: "americas",
    reasons: [
      {
        en: "A very high level in AI and machine learning, with top universities and labs",
        fr: "Un niveau très élevé en IA et en machine learning, avec des universités et des laboratoires de premier plan",
      },
      {
        en: "The chance to learn close to the people and companies shaping the field",
        fr: "La possibilité d’apprendre auprès des personnes et des entreprises qui façonnent le domaine",
      },
      {
        en: "An English-speaking environment to keep improving my English",
        fr: "Un environnement anglophone pour continuer à progresser en anglais",
      },
    ],
    // alignedWith: "Role model 1",
  },
  {
    option: { en: "Option 2", fr: "Option 2" },
    destination: { en: "Spain", fr: "Espagne" },
    tagline: {
      en: "Culture, immersion and a new language",
      fr: "Culture, immersion et nouvelle langue",
    },
    icon: "europe",
    reasons: [
      {
        en: "A culture I love and want to discover more deeply",
        fr: "Une culture que j’aime et que je veux découvrir plus en profondeur",
      },
      {
        en: "Full immersion to improve my Spanish, which I have just started learning",
        fr: "Une immersion totale pour progresser en espagnol, que je viens de commencer à apprendre",
      },
      {
        en: "A chance to see how engineering and technology work in another European country",
        fr: "L’occasion de voir comment l’ingénierie et la technologie fonctionnent dans un autre pays européen",
      },
    ],
  },
];

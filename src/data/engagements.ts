import type { Text } from "@/lib/text";

export type Engagement = { title: Text; description: Text };

export const engagements: Engagement[] = [
  {
    title: "“Futur Proche” Festival",
    description: {
      en: "Thanks to ENSEEIHT and other universities in Toulouse, I took part in Futur Proche, a festival focused on climate change. I attended conferences, workshops and presentations that approached the subject from a scientific angle and showcased innovations, some already in use and others still under development. The event made me more aware of environmental challenges and of the role that technology and engineering can play in answering them.",
      fr: "Grâce à l’ENSEEIHT et à d’autres universités de Toulouse, j’ai participé à Futur Proche, un festival consacré au changement climatique. J’ai assisté à des conférences, des ateliers et des présentations qui abordaient le sujet sous un angle scientifique et présentaient des innovations, certaines déjà utilisées et d’autres encore en développement. Cet événement a éveillé ma conscience des enjeux environnementaux et du rôle que la technologie et l’ingénierie peuvent jouer pour y répondre.",
    },
  },
];

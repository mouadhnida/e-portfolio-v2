import type { Text } from "@/lib/text";

export type Project = {
  title: string;
  description: Text;
  image: string;
  tech: string[];
  url?: string;
  repo: string;
};

export const projects: Project[] = [
  {
    title: "JobHub",
    description: {
      en: "JobHub is a web application that helps job seekers manage their job applications . It provides a platform for users to track their job applications, and stay organized throughout the job search process.",
      fr: "MyDent is a dental practice management application that enables dentists to manage patient records, store relevant dental information, and schedule and track appointments in one place.",
    },
    image: "/projects/JobHub.png",
    tech: ["React", "Tailwind CSS", "Express.js", "Prisma", "MongoDB"],
    url: "https://your-project.vercel.app",
    repo: "https://github.com/mouadhnida/Jobs-api",
  },
  {
    title: "MyDent",
    description: {
      en: "MyDent is a dental practice management application that enables dentists to manage patient records, store relevant dental information, and schedule and track appointments in one place.",
      fr: "MyDent est une application de gestion de cabinet dentaire qui permet aux dentistes de gérer les dossiers des patients, de stocker les informations dentaires pertinentes, ainsi que de planifier et de suivre les rendez-vous au même endroit.",
    },
    image: "/projects/MyDent.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
    repo: "https://github.com/mouadhnida/MyDent",
  },
];

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiLinux,
  SiGit,
  SiFigma,
  SiMysql,
} from "react-icons/si";
import { T } from "@/lib/i18n";
import { plain, type Text } from "@/lib/text";
import { ui } from "@/data/ui";
import { FaWindows } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/SectionTitle";

type IconProps = { className?: string; style?: React.CSSProperties };
type IconComp = React.ComponentType<IconProps>;

function AdaIcon({ className = "", style }: IconProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm text-[7px] font-bold leading-none text-white ${className}`}
      style={{ backgroundColor: style?.color }}
    >
      Ada
    </span>
  );
}

type Skill = { name: string; icon: IconComp; color: string };

const skills: { title: Text; items: Skill[] }[] = [
  {
    title: ui.codeLanguages,
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Ada", icon: AdaIcon, color: "#0A8F5A" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: ui.frameworks,
    items: [
      { name: "React", icon: SiReact, color: "#149ECA" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    title: ui.tools,
    items: [
      { name: "Windows", icon: FaWindows, color: "#0078D4" },
      { name: "Linux", icon: SiLinux, color: "#EAB308" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export default function Engineering() {
  return (
    <section id="engineering" className="pb-16 pt-16">
      <SectionTitle title={ui.nav.engineering} subtitle={ui.sub.engineering} />

      <div className="mt-12">
        <Reveal>
          <h3 className="text-center text-2xl font-bold">
            <T text={ui.skills} />
          </h3>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:px-6">
          {skills.map(({ title, items }, i) => (
            <Reveal key={plain(title)} delay={i * 0.15}>
              <h4 className="block w-36 border-b border-black pb-2 text-sm font-bold">
                <T text={title} />
              </h4>
              <ul className="mt-4 space-y-3">
                {items.map(({ name, icon: Icon, color }) => (
                  <li key={name} className="flex items-center gap-3">
                    <Icon className="h-5 w-5" style={{ color }} />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Reveal>
          <h3 className="text-center text-2xl font-bold">
            <T text={ui.projects} />
          </h3>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={plain(project.title)}
              delay={(i % 2) * 0.15}
              className="h-full"
            >
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

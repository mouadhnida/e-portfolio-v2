import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { T } from "@/lib/i18n";
import { plain } from "@/lib/text";
import { ui } from "@/data/ui";
import type { Project } from "@/data/projects";

const btn =
  "inline-flex items-center gap-2 rounded-full border border-black px-4 py-1.5 text-sm transition-colors hover:bg-black hover:text-white";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  url,
  repo,
}: Project) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden bg-black/10">
        {image && (
          <Image
            src={image}
            alt={plain(title)}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-xl font-bold">
          <T text={title} />
        </h4>
        <p className="mt-2 text-sm">
          <T text={description} />
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="rounded-full bg-black/10 px-3 py-1 text-xs">
              {t}
            </li>
          ))}
        </ul>

        {(url || repo) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={btn}
              >
                <T text={ui.visitWebsite} />
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className={btn}
              >
                <FaGithub /> <T text={ui.viewCode} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

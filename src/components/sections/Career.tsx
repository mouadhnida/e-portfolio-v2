import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import PitchVideo from "@/components/PitchVideo";
import { T } from "@/lib/i18n";
import { plain, type Text } from "@/lib/text";
import { ui } from "@/data/ui";
import { timeline, type TimelineItem } from "@/data/timeline";
import { CV_EN_URL, CV_FR_URL, GITHUB_URL, LINKEDIN_URL } from "@/data/links";
import SectionTitle from "@/components/SectionTitle";

const base =
  "inline-flex items-center gap-2 rounded-full border border-black px-5 py-2 text-sm";
const interactive = `${base} transition-colors hover:bg-black hover:text-white`;
const disabled = `${base} cursor-not-allowed opacity-50`;

function CvButton({
  url,
  label,
  soon,
}: {
  url: string | null;
  label: Text;
  soon: Text;
}) {
  return url ? (
    <a href={url} download className={interactive}>
      <FaDownload /> <T text={label} />
    </a>
  ) : (
    <span aria-disabled="true" className={disabled}>
      <FaDownload /> <T text={soon} />
    </span>
  );
}

const descriptionLabel = (type: TimelineItem["type"]) =>
  type === "education" ? ui.learned : ui.worked;

export default function Career() {
  return (
    <section id="career" className="pb-24 pt-16">
      <SectionTitle title={ui.nav.career} subtitle={ui.sub.career} />

      <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-4">
        <CvButton url={CV_EN_URL} label={ui.cvEn} soon={ui.cvEnSoon} />
        <CvButton url={CV_FR_URL} label={ui.cvFr} soon={ui.cvFrSoon} />
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={interactive}
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={interactive}
        >
          <FaGithub /> GitHub
        </a>
      </Reveal>

      <div className="mt-24">
        <Reveal>
          <h3 className="text-center text-2xl font-bold">
            <T text={ui.journey} />
          </h3>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <span
            aria-hidden
            className="absolute -left-[5px] -top-[9px] h-0 w-0 border-x-[6px] border-b-[9px] border-x-transparent border-b-black/30"
          />

          <ul className="flex flex-col-reverse gap-10 border-l-2 border-black/30 pl-8">
            {timeline.map((item) => (
              <li key={item.year + plain(item.title)}>
                <Reveal className="relative">
                  <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-2 border-black bg-white" />
                  <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm">
                    <p className="text-2xl font-bold">{item.year}</p>
                    <h4 className="mt-1 text-lg font-semibold">
                      <T text={item.title} />
                    </h4>
                    <p className="text-sm opacity-70">
                      <T text={item.place} />
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide opacity-60">
                      <T text={descriptionLabel(item.type)} />
                    </p>
                    <p className="mt-1 text-sm">
                      <T text={item.description} />
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PitchVideo />
    </section>
  );
}

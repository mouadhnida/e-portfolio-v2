import { FaGlobeAmericas, FaGlobeEurope } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { plain } from "@/lib/text";
import { ui } from "@/data/ui";
import { mobilityPlan } from "@/data/mobility";

const icons = { americas: FaGlobeAmericas, europe: FaGlobeEurope };

export default function MobilityPlan() {
  return (
    <div className="mt-24">
      <Reveal>
        <h3 className="text-center text-2xl font-bold">
          <T text={ui.mobilityPlan} />
        </h3>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {mobilityPlan.map((m, i) => {
          const Icon = icons[m.icon];
          return (
            <Reveal
              key={plain(m.destination)}
              delay={i * 0.15}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-2xl bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-60">
                      <T text={m.option} />
                    </p>
                    <h4 className="mt-1 text-2xl font-bold">
                      <T text={m.destination} />
                    </h4>
                  </div>
                  <Icon className="h-10 w-10 shrink-0 opacity-70" />
                </div>

                <p className="mt-4 font-semibold">
                  <T text={m.tagline} />
                </p>

                <ul className="mt-4 space-y-3">
                  {m.reasons.map((r) => (
                    <li key={plain(r)} className="flex gap-3 text-sm">
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-black" />
                      <span>
                        <T text={r} />
                      </span>
                    </li>
                  ))}
                </ul>

                {m.alignedWith && (
                  <p className="mt-auto pt-5 text-xs opacity-60">
                    <T text={ui.alignedWith} /> <T text={m.alignedWith} />
                  </p>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

import { FaChessKnight, FaDumbbell } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { T } from "@/lib/i18n";
import { plain } from "@/lib/text";
import { ui } from "@/data/ui";
import { activities } from "@/data/activities";

const icons = { chess: FaChessKnight, gym: FaDumbbell };

export default function Activities() {
  return (
    <section id="activities" className="py-16">
      <SectionTitle title={ui.nav.activities} subtitle={ui.sub.activities} />

      <div className="mt-12">
        {activities.map((a) => {
          const Icon = icons[a.icon];
          return (
            <Reveal
              key={plain(a.title)}
              className="group border-t border-black/20 py-8 last:border-b"
            >
              <div className="grid items-center gap-4 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
                <div className="flex items-center gap-4">
                  <Icon className="h-8 w-8 shrink-0 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                  <h3 className="text-3xl font-black uppercase tracking-tight text-transparent transition-colors duration-500 [-webkit-text-stroke:1.5px_black] group-hover:text-black md:text-4xl">
                    <T text={a.title} />
                  </h3>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-60">
                    <T text={a.meta} />
                  </p>
                  <p className="mt-2 text-lg leading-8">
                    <T text={a.description} />
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

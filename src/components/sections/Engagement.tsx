import * as motion from "motion/react-client";
import Reveal from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { plain } from "@/lib/text";
import { ui } from "@/data/ui";
import { engagements } from "@/data/engagements";
import SectionTitle from "@/components/SectionTitle";

export default function Engagement() {
  return (
    <section id="engagement" className="py-16">
      <SectionTitle title={ui.nav.engagement} subtitle={ui.sub.engagement} />

      <div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2">
        {engagements.map((e, i) => (
          <Reveal
            key={plain(e.title)}
            delay={(i % 2) * 0.15}
            className="relative"
          >
            {/* giant faded number behind the text */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-8 select-none text-[9rem] font-black leading-none text-black/5"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="relative pl-7">
              {/* line that draws itself downwards */}
              <motion.span
                aria-hidden
                className="absolute left-0 top-0 h-full w-0.5 origin-top bg-black"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <h3 className="text-2xl font-bold leading-snug">
                <T text={e.title} />
              </h3>
              <p className="mt-4 text-base leading-7 text-black/80">
                <T text={e.description} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

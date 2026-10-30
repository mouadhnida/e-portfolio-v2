import Reveal from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { ui } from "@/data/ui";
import { languages } from "@/data/languages";

export default function LanguageSkills() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="text-center text-2xl font-bold">
          <T text={ui.languageSkills} />
        </h3>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {languages.map((l, i) => (
          <Reveal key={l.lang} delay={i * 0.12} className="h-full">
            <div className="h-full rounded-2xl bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-xl font-bold">
                    <T text={l.name} />
                  </h4>
                  <p lang={l.lang} className="text-sm opacity-60">
                    {l.native}
                  </p>
                </div>
                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  <T text={l.level} />
                </span>
              </div>
              <p className="mt-4 text-sm">
                <T text={l.description} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

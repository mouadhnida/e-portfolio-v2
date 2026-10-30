import Image from "next/image";
import Reveal from "@/components/Reveal";
import ScrollMouse from "@/components/ScrollMouse";
import { T } from "@/lib/i18n";
import { ui } from "@/data/ui";

const bio = {
  en: "Hey, I’m an engineering student at ENSEEIHT, passionate about technology, AI, and software development.",
  fr: "Salut, je suis élève ingénieur à l’ENSEEIHT, avec une vraie passion pour la technologie, l’IA et le développement logiciel.",
};

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative flex min-h-[calc(100svh-5rem)] items-center"
    >
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        <Reveal x={-60} y={0}>
          <h1 className="text-4xl font-bold md:text-5xl">
            <T text={ui.biography} />
          </h1>
          <p className="mt-4 max-w-md text-xl leading-8">
            <T text={bio} />
          </p>
        </Reveal>

        <Reveal
          x={60}
          y={0}
          delay={0.2}
          className="justify-self-center md:justify-self-end"
        >
          <div className="relative w-72 xl:w-96">
            <div
              aria-hidden
              className="absolute -inset-4 animate-spin rounded-full border border-dashed border-black/30 [animation-duration:40s]"
            />
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src="/me.jpg"
                alt="Portrait of Mouad Hnida"
                fill
                preload
                sizes="(min-width: 1280px) 384px, 288px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-4 left-0">
        <ScrollMouse href="#engineering" />
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { ui } from "@/data/ui";
import { PITCH_VIDEO_URL } from "@/data/links";

export default function PitchVideo() {
  return (
    <div className="mt-24">
      <Reveal>
        <h3 className="text-center text-2xl font-bold">
          <T text={ui.pitch} />
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm opacity-70">
          <T text={ui.pitchSub} />
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-3xl">
        <div className="aspect-video overflow-hidden rounded-2xl bg-black/10 shadow-sm">
          {PITCH_VIDEO_URL === null ? (
            <div className="flex h-full items-center justify-center text-sm opacity-60">
              <T text={ui.videoSoon} />
            </div>
          ) : PITCH_VIDEO_URL.endsWith(".mp4") ? (
            <video
              controls
              preload="metadata"
              className="h-full w-full"
              src={PITCH_VIDEO_URL}
            />
          ) : (
            <iframe
              src={PITCH_VIDEO_URL}
              title="Elevator pitch video"
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </Reveal>
    </div>
  );
}

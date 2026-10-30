import Reveal from "@/components/Reveal";
import { T } from "@/lib/i18n";
import type { Text } from "@/lib/text";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: Text;
  subtitle: Text;
}) {
  return (
    <Reveal>
      <h2 className="text-center text-4xl font-bold">
        <T text={title} />
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-base opacity-70">
        <T text={subtitle} />
      </p>
    </Reveal>
  );
}

import SectionTitle from "@/components/SectionTitle";
import LanguageSkills from "@/components/LanguageSkills";
import MobilityPlan from "@/components/MobilityPlan";
import { ui } from "@/data/ui";

export default function Mobility() {
  return (
    <section id="mobility" className="pb-24 pt-16">
      <SectionTitle title={ui.nav.mobility} subtitle={ui.sub.mobility} />
      <LanguageSkills />
      <MobilityPlan />
    </section>
  );
}

import Welcome from "@/components/sections/Welcome";
import Engineering from "@/components/sections/Engineering";
import Career from "@/components/sections/Career";
import Mobility from "@/components/sections/Mobility";
import Engagement from "@/components/sections/Engagement";
import Activities from "@/components/sections/Activities";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <Welcome />
      <Engineering />
      <Career />
      <Mobility />
      <Engagement />
      <Activities />
      <Contact />
    </main>
  );
}

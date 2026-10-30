import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { ui } from "@/data/ui";
import { EMAIL, LINKEDIN_URL, PHONE } from "@/data/links";
import SectionTitle from "@/components/SectionTitle";

const contacts = [
  {
    label: ui.email,
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FaEnvelope,
    external: false,
  },
  {
    label: ui.phone,
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    icon: FaPhone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: ui.viewProfile,
    href: LINKEDIN_URL,
    icon: FaLinkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="pb-12 pt-16">
      <SectionTitle title={ui.nav.contact} subtitle={ui.sub.contact} />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {contacts.map(({ label, value, href, icon: Icon, external }, i) => (
          <Reveal key={href} delay={i * 0.15} className="h-full">
            <a
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white/50 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Icon className="h-8 w-8" />
              <span className="text-xs font-semibold uppercase tracking-widest opacity-60">
                <T text={label} />
              </span>
              <span className="break-all text-sm">
                <T text={value} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

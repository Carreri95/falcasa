"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/common/Eyebrow";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { WHATSAPP_URL, WHATSAPP_URL_2 } from "@/config/whatsapp";

const contacts = [
  {
    label: "WhatsApp",
    values: [
      { value: "(34) 9 9802-0426", href: WHATSAPP_URL },
      { value: "(34) 9 9737-7144", href: WHATSAPP_URL_2 },
    ],
  },
  {
    label: "E-mail",
    values: [
      {
        value: "falcasa.controleambiental@gmail.com",
        href: "mailto:falcasa.controleambiental@gmail.com",
      },
    ],
  },
  {
    label: "Base",
    values: [{ value: "Uberlândia — MG", href: undefined }],
  },
];

const footerLinks = [
  { href: "#risco", label: "Risco" },
  { href: "#metodo", label: "Método" },
  { href: "#equipe", label: "Equipe" },
  { href: "#video", label: "Vídeo" },
];

export function ContactSection() {
  return (
    <footer id="contato" data-theme="dark" className="relative overflow-hidden bg-band-2 text-ink">
      {/* Linha de brilho marcando o início do rodapé */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[110px] md:h-[560px] md:w-[560px]" />


        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-[160px] w-full text-band-line opacity-40 md:h-[220px]"
        >
          <path
            d="M0 220 L0 150 L140 60 L230 110 L360 20 L470 95 L600 45 L690 130 L820 55 L940 115 L1060 35 L1180 100 L1300 65 L1440 130 L1440 220 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Grão sutil: quebra o "chapado" das cores sólidas do rodapé */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-overlay">
          <filter id="footerGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#footerGrain)" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-band-2 via-band-2/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-page px-5 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Contato</Eyebrow>
            <h2 className="max-w-[14ch] font-display text-section uppercase">
              Manda a planta. A gente diz o que voa.
            </h2>
            <p className="measure mt-4 text-ink-soft">
              Envie a planta da operação. Respondemos com o diagnóstico do que
              está pousando — e do que precisa sair.
            </p>
            <WhatsAppButton className="mt-7">Chamar no WhatsApp</WhatsAppButton>
          </Reveal>

          <StaggerGroup className="border-t border-band-line" stagger={0.07}>
            {contacts.map((item) => (
              <StaggerItem
                key={item.label}
                as="div"
                className="flex flex-col gap-2 border-b border-band-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <p className="shrink-0 font-mono text-eyebrow uppercase text-gold">
                  {item.label}
                </p>
                <div className="flex flex-col gap-1 sm:items-end">
                  {item.values.map((entry) =>
                    entry.href ? (
                      <a
                        key={entry.value}
                        href={entry.href}
                        target={entry.href.startsWith("http") ? "_blank" : undefined}
                        rel={entry.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="break-words font-mono text-[0.92rem] text-ink transition-colors duration-200 hover:text-accent sm:text-right"
                      >
                        {entry.value}
                      </a>
                    ) : (
                      <p
                        key={entry.value}
                        className="break-words font-mono text-[0.92rem] text-ink sm:text-right"
                      >
                        {entry.value}
                      </p>
                    ),
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="mt-16 flex flex-col gap-8 md:mt-20">
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 border-t border-band-line pt-6">
            <p className="text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft">
              © {new Date().getFullYear()} Falcasa Controle Ambiental · Uberlândia, MG
            </p>
            <p className="text-[0.6rem] uppercase leading-relaxed tracking-[0.1em] text-ink-soft">
              Fundada em 2020 · IN IBAMA 141/2006 · Cadastro Técnico Federal 7038404 · 7 aves de rapina em operação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

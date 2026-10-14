"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { IconGlyph } from "@/components/common/IconGlyph";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";

const risks = [
  {
    title: "Histoplasmose",
    text: "A inalação de poeira contendo esporos do fungo constitui a principal via de infecção; pode disseminar-se para outros órgãos, especialmente o fígado.",
    icon: (
      <path
        d="M12 3c-3 2.5-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6.5-5-9Z M9 15.5c.6 1.3 1.7 2 3 2s2.4-.7 3-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Criptococose",
    text: "Inalação de poeira com esporos do fungo causador; possível disseminação para o sistema nervoso central e os pulmões.",
    icon: (
      <path
        d="M8 13a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0v-2Z M12 3v4M9 6l1.5 2M15 6l-1.5 2M6 21h12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Dermatites",
    text: "Pombos carregam piolhos e carrapatos que, em contato com a pele humana, causam irritação, coceira e dermatites.",
    icon: (
      <path
        d="M12 20c4-2.5 7-6 7-9.5A5 5 0 0 0 12 6a5 5 0 0 0-7 4.5C5 14 8 17.5 12 20Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Dano a estrutura e maquinário",
    text: "O acúmulo de dejetos corrói estruturas, contamina linha de produção e degrada o aspecto visual da planta.",
    icon: (
      <path
        d="M4 21V9l8-5 8 5v12M4 21h16M9 21v-6h6v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function RisksSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="risco" className="bg-bone">
      <div className="mx-auto max-w-page px-5 py-16 md:py-24">
        <Reveal>
          <Eyebrow>O risco</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[18ch] font-display text-section uppercase">
            O dejeto que cai no seu galpão é um passivo sanitário.
          </h2>
        </Reveal>

        <ol className="mt-12 border-t border-line">
          {risks.map((risk, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={risk.title} as="li" delay={index * 0.06} y={20}>
                <div className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[36px_1fr_auto] items-center gap-4 py-6 text-left md:grid-cols-[72px_44px_1fr_auto] md:gap-6"
                  >
                    <span className="font-mono text-sm text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`hidden h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 md:flex ${
                        isOpen
                          ? "border-accent bg-accent text-white"
                          : "border-line text-ink-soft group-hover:border-accent group-hover:text-accent"
                      }`}
                    >
                      <IconGlyph className="h-5 w-5">{risk.icon}</IconGlyph>
                    </span>

                    <h3
                      className={`font-mono text-[0.95rem] italic transition-colors duration-200 sm:text-[1.05rem] ${
                        isOpen ? "text-accent" : "text-ink group-hover:text-accent"
                      }`}
                    >
                      {risk.title}
                    </h3>

                    <span
                      className={`relative h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="measure pb-6 pl-9 text-[17px] text-ink-soft md:pl-[136px]">
                          {risk.text}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={0.2}>
          <div
            data-theme="dark"
            className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-band px-6 py-7 text-ink sm:flex-row sm:items-center md:px-8"
          >
            <p className="max-w-[38ch] font-display text-xl uppercase leading-snug">
              Seu galpão pode estar exposto a esse passivo agora.
            </p>
            <WhatsAppButton className="shrink-0">
              Pedir diagnóstico no WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

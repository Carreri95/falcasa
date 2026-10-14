"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { IconGlyph } from "@/components/common/IconGlyph";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const sideCards = [
  {
    title: "Armadilhas",
    text: "Captura automática sem intervenção humana, com alimento e água aos animais até a remoção.",
  },
  {
    title: "Remoção de ninhos",
    text: "Impede acúmulo de dejetos e proliferação de fungos, bactérias e parasitas.",
  },
  {
    title: "Educação ambiental",
    text: "Palestras em escolas e universidades, ações com a Polícia Militar sobre tráfico de animais silvestres.",
  },
];

const modes = [
  {
    id: "noturna",
    label: "Noturna",
    text: "Foco de luz direciona o gavião aos pombos empoleirados; a captura reduz o acúmulo de dejetos em chão, máquinas e estruturas.",
    icon: (
      <path
        d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "diurna",
    label: "Diurna & Carhawking",
    text: "O carro esconde o gavião e o direciona com efeito surpresa sobre os pombos reunidos nos pontos de alimentação.",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 3v2.2M12 18.8V21M4.2 4.2l1.55 1.55M18.25 18.25l1.55 1.55M3 12h2.2M18.8 12H21M4.2 19.8l1.55-1.55M18.25 5.75l1.55-1.55"
          strokeLinecap="round"
        />
      </>
    ),
  },
] as const;

export function MethodSection() {
  const [active, setActive] = useState<(typeof modes)[number]["id"]>("noturna");
  const current = modes.find((mode) => mode.id === active)!;

  return (
    <section id="metodo" className="bg-bone-2">
      <div className="mx-auto max-w-page px-5 py-16 md:py-24">
        <Reveal>
          <Eyebrow>O método</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-section uppercase">
            Falcoaria no chão de fábrica.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-[1.35fr_1fr]">
          <Reveal delay={0.1} className="h-full">
            <div
              data-theme="dark"
              className="flex h-full flex-col rounded-2xl bg-band px-6 py-8 text-ink transition-transform duration-500 will-change-transform hover:-translate-y-1 md:px-8"
            >
              <p className="font-mono text-eyebrow uppercase text-gold">
                Falcoaria
              </p>

              <div className="mt-8 flex gap-2" role="tablist" aria-label="Modo de operação">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    role="tab"
                    aria-selected={active === mode.id}
                    onClick={() => setActive(mode.id)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-colors duration-200 ${
                      active === mode.id
                        ? "border-accent bg-accent text-white"
                        : "border-band-line text-ink-soft hover:border-ink-soft hover:text-ink"
                    }`}
                  >
                    <IconGlyph className="h-3.5 w-3.5" strokeWidth={1.8}>
                      {mode.icon}
                    </IconGlyph>
                    {mode.label}
                  </button>
                ))}
              </div>

              <div className="relative mt-6 min-h-[7.5rem] flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h3 className="font-display text-2xl uppercase">
                      {current.label}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-[16px] text-ink-soft">
                      {current.text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-band-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-soft">
                  Sem veneno · Sem arma de fogo · Dentro da IN IBAMA 141/2006
                </p>
                <WhatsAppButton className="shrink-0">Falar no WhatsApp</WhatsAppButton>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-5" stagger={0.1} delay={0.15}>
            {sideCards.map((card) => (
              <StaggerItem
                key={card.title}
                as="article"
                className="h-full rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_30px_-12px_rgba(211,58,0,0.25)]"
              >
                <h3 className="font-display text-xl uppercase">{card.title}</h3>
                <p className="mt-2 text-[16px] text-ink-soft">{card.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

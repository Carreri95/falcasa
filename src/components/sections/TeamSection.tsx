"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

type SpeciesImageKey =
  | "gaviao-asa-de-telha"
  | "falcao-peregrino"
  | "falcao-de-coleira"
  | "aguia-chilena"
  | "coruja-suindara";

const speciesImages: Record<SpeciesImageKey, string> = {
  "gaviao-asa-de-telha": "/team/gaviao-asa-de-telha.png",
  "falcao-peregrino": "/team/falcao-peregrino.png",
  "falcao-de-coleira": "/team/falcao-de-coleira.png",
  "aguia-chilena": "/team/aguia-chilena.png",
  "coruja-suindara": "/team/coruja-suindara.png",
};

const team: {
  id: string;
  name: string;
  species: string;
  popular: string;
  image: SpeciesImageKey;
}[] = [
  { id: "01", name: "Caraxes", species: "Parabuteo unicinctus", popular: "Gavião-asa-de-telha", image: "gaviao-asa-de-telha" },
  { id: "02", name: "Vhagar", species: "Parabuteo unicinctus", popular: "Gavião-asa-de-telha", image: "gaviao-asa-de-telha" },
  { id: "03", name: "Maverick", species: "Parabuteo unicinctus", popular: "Gavião-asa-de-telha", image: "gaviao-asa-de-telha" },
  { id: "04", name: "Sirax", species: "Falco peregrinus", popular: "Falcão-peregrino", image: "falcao-peregrino" },
  { id: "05", name: "Hunter", species: "Falco femoralis", popular: "Falcão-de-coleira", image: "falcao-de-coleira" },
  { id: "06", name: "Asa Prata", species: "Geranoaetus melanoleucus", popular: "Águia-chilena", image: "aguia-chilena" },
  { id: "07", name: "Killua", species: "Tyto furcata", popular: "Coruja-suindara", image: "coruja-suindara" },
];

export function TeamSection() {
  return (
    <section id="equipe" className="bg-bone">
      <div className="mx-auto max-w-page px-5 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Plantel</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-section uppercase">
            Aves registradas e treinadas para falcoaria.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="measure mt-4 text-ink-soft">
            Cada animal opera com nome, espécie e função. Este é o quadro de
            serviço da Falcasa.
          </p>
        </Reveal>

        <StaggerGroup
          className="mt-10 grid border-t border-line sm:grid-cols-2"
          stagger={0.06}
          delay={0.05}
          amount={0.1}
        >
          {team.map((bird) => (
            <StaggerItem
              key={bird.id}
              as="div"
              className="group relative overflow-hidden border-b border-line p-5 transition-colors duration-300 hover:bg-surface sm:odd:border-r"
            >
              <span className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

              <Image
                src={speciesImages[bird.image]}
                alt={bird.popular}
                width={112}
                height={112}
                className="pointer-events-none absolute bottom-2 right-2 h-16 w-16 object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 md:h-20 md:w-20"
              />

              <div className="relative max-w-[calc(100%-4.5rem)]">
                <p className="font-mono text-[0.72rem] text-gold">{bird.id}</p>
                <h3 className="mt-2 font-display text-[1.5rem] uppercase leading-none transition-transform duration-300 group-hover:translate-x-1">
                  {bird.name}
                </h3>
                <p className="mt-2 font-mono text-[0.78rem] italic text-accent">
                  {bird.species}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{bird.popular}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

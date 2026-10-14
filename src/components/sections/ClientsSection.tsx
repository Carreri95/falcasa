"use client";

import { Eyebrow } from "@/components/common/Eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const clients = [
  "Carrefour",
  "Nestlé Professional",
  "Bunge",
  "Atacadão",
  "Sam's Club",
  "Mart Minas",
  "Polenghi",
  "Smurfit Kappa",
  "PAMC",
  "Planalto Rações",
];

export function ClientsSection() {
  return (
    <section className="bg-bone-2">
      <div className="mx-auto max-w-page px-5 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Operações em campo para</Eyebrow>
        </Reveal>

        <StaggerGroup
          className="mt-10 grid grid-cols-2 gap-x-8 border-t border-line sm:grid-cols-3 md:mt-12 md:grid-cols-4"
          stagger={0.05}
        >
          {clients.map((name) => (
            <StaggerItem
              key={name}
              as="div"
              className="group border-b border-line py-7 pr-4"
            >
              <span className="block font-display text-[1.2rem] uppercase leading-tight tracking-tight text-ink opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent md:text-[1.4rem]">
                {name}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/common/BrandMark";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { NAV_OFFSET_PX } from "@/lib/constants";

const links = [
  { href: "#risco", label: "Risco" },
  { href: "#metodo", label: "Método" },
  { href: "#equipe", label: "Equipe" },
  { href: "#video", label: "Vídeo" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [pastBanner, setPastBanner] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");

    const update = () => {
      if (!hero) {
        setPastBanner(window.scrollY > 24);
        return;
      }
      setPastBanner(hero.getBoundingClientRect().bottom <= NAV_OFFSET_PX);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("lenisScroll", update);

    const observer = hero
      ? new IntersectionObserver(update, { threshold: [0, 0.1, 1] })
      : null;
    if (hero && observer) observer.observe(hero);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.removeEventListener("lenisScroll", update);
      observer?.disconnect();
    };
  }, []);

  const solid = pastBanner || open;

  return (
    <header
      data-theme="dark"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-band-line bg-band"
          : "border-transparent bg-gradient-to-b from-band-2/80 via-band-2/30 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-page items-center justify-between gap-6 px-5 py-4">
        <a href="#topo" className="flex items-center gap-3">
          <BrandMark height={42} priority className="h-[42px]" />
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] tracking-wide text-ink">
              FALCASA
            </span>
            <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
              Controle Ambiental
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <WhatsAppButton>Diagnóstico</WhatsAppButton>
        </div>

        <button
          type="button"
          className="-mr-1 flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span className="relative block h-3.5 w-[22px]" aria-hidden="true">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-band-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-ink"
                  onClick={() => {
                    window.setTimeout(() => setOpen(false), 150);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <WhatsAppButton
                className="mt-2"
                onClick={() => {
                  window.setTimeout(() => setOpen(false), 150);
                }}
              >
                Diagnóstico
              </WhatsAppButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

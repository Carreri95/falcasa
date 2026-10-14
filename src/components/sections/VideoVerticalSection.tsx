"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { useIsDesktop } from "@/lib/useIsDesktop";

// Vídeo do depoimento: horizontal no mobile, vertical no desktop.
// Troque os arquivos abaixo pelos definitivos quando estiverem gravados
// (mantendo os mesmos nomes, ou atualizando os caminhos aqui).
const SOURCES = {
  mobile: {
    src: "/videos/depoimento-mobile.mp4",
    poster: "/videos/depoimento-mobile-poster.jpg",
    fallbackSrc: "/videos/hero-eagle-desktop.mp4",
    fallbackPoster: "/videos/depoimento-mobile-poster.jpg",
  },
  desktop: {
    src: "/videos/depoimento-desktop.mp4",
    poster: "/videos/depoimento-desktop-poster.jpg",
    fallbackSrc: "/videos/hero-eagle.mp4",
    fallbackPoster: "/videos/depoimento-desktop-poster.jpg",
  },
};

const facts = [
  { k: "01", v: "Sem veneno" },
  { k: "02", v: "Sem disparo" },
  { k: "03", v: "Manejo IBAMA" },
];

export function VideoVerticalSection() {
  const desktop = useIsDesktop();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [errored, setErrored] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const config = desktop === true ? SOURCES.desktop : SOURCES.mobile;
  const src = errored ? config.fallbackSrc : config.src;
  const poster = errored ? config.fallbackPoster : config.poster;

  const playWithSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 0.5;
    setMuted(false);
    void video.play().then(() => setPlaying(true)).catch(() => {});
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section id="video" className="scroll-mt-20 bg-bone">
      <div className="mx-auto grid max-w-page grid-cols-1 items-center gap-10 px-5 py-14 md:grid-cols-[minmax(0,480px)_1fr] md:gap-16 md:py-24">
        <motion.figure
          className="relative mx-auto w-full max-w-[min(100%,480px)] md:max-w-[420px]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={`relative overflow-hidden rounded-[1.2rem] bg-band-2 shadow-[0_28px_70px_-24px_rgba(27,46,31,0.55)] ring-1 ring-gold ${
              desktop === true ? "aspect-[9/16]" : "aspect-video"
            }`}
          >
            {desktop !== null ? (
              <video
                key={src}
                ref={videoRef}
                src={src}
                poster={poster}
                className="h-full w-full object-cover"
                playsInline
                preload="auto"
                controls={playing}
                onEnded={() => setPlaying(false)}
                onError={() => {
                  if (!errored) setErrored(true);
                }}
              />
            ) : null}

            <div className="absolute left-3 top-3 flex items-center gap-3 rounded-full border border-white/15 bg-black/55 py-1.5 pl-1.5 pr-5 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)] backdrop-blur-md">
              <button
                type="button"
                onClick={playing ? toggleMute : playWithSound}
                aria-label={playing ? (muted ? "Ativar som" : "Silenciar") : "Reproduzir depoimento"}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_18px_-6px_rgba(211,58,0,0.8)] transition-transform duration-200 hover:scale-105"
              >
                {!playing ? (
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor">
                    <path d="M8 5.14v13.72L19.5 12 8 5.14Z" />
                  </svg>
                ) : muted ? (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                    <path d="m16 9 5 6M21 9l-5 6" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                    <path d="M16 9a5 5 0 0 1 0 6M18.5 7a8 8 0 0 1 0 10" />
                  </svg>
                )}
              </button>

              <span className="leading-tight">
                <span className="block font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white">
                  {playing ? "No ar" : "Ouvir o falcoeiro"}
                </span>
                <span className="block font-display text-[1rem] uppercase leading-none text-white">
                  Rodrigo Lima
                </span>
              </span>
            </div>
          </div>
        </motion.figure>

        <div>
          <Reveal>
            <Eyebrow>Quem opera</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="max-w-[14ch] font-display text-section uppercase text-ink">
              A empresa, na voz de quem segura o falcão.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="measure mt-5 text-ink-soft">
              Depoimento de Rodrigo Lima, falcoeiro da Falcasa: o método, a ave
              e o manejo em planta, sem veneno e sem arma de fogo. O falcão
              aparece no quadro. A conversa também.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-8 grid grid-cols-3 border-y border-line">
              {facts.map((fact) => (
                <li
                  key={fact.k}
                  className="border-r border-line px-3 py-4 last:border-r-0 md:px-4"
                >
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold">
                    {fact.k}
                  </span>
                  <span className="mt-1 block font-display text-[1.05rem] uppercase leading-none text-ink md:text-[1.2rem]">
                    {fact.v}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <WhatsAppButton className="mt-8">Falar com a Falcasa</WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

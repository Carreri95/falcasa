"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { useIsDesktop } from "@/lib/useIsDesktop";

const lineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const wordVariants = {
  hidden: { y: "115%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function AnimatedLine({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span className="block" variants={wordVariants}>
        {children}
      </motion.span>
    </span>
  );
}

function HeroVideo({ src, className = "h-full w-full object-cover" }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // iOS/Safari: o prop `muted` do React nem sempre aplica a propriedade DOM,
    // e sem muted=true o autoplay é bloqueado.
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      if (!video.paused) return;
      void video.play().catch(() => {
        // Bloqueado (ex.: Modo de Baixo Consumo). Retenta no próximo gesto.
      });
    };

    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // No iPhone (Low Power Mode), o primeiro gesto desbloqueia o autoplay.
    const unlockEvents = ["touchstart", "touchend", "click", "scroll"] as const;
    const unlock = () => tryPlay();
    for (const event of unlockEvents) {
      document.addEventListener(event, unlock, { passive: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      for (const event of unlockEvents) {
        document.removeEventListener(event, unlock);
      }
    };
  }, [src]);

  return (
    <video
      key={src}
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function HeroSection() {
  const desktop = useIsDesktop();

  return (
    <section
      id="topo"
      data-theme="dark"
      className="relative min-h-[100svh] overflow-hidden bg-band-2 text-ink md:min-h-[88vh]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {desktop === false ? <HeroVideo src="/videos/hero-eagle.mp4" /> : null}
        {/* O vídeo do desktop tem créditos gravados a partir de 83% da altura.
            Com 125% de altura e ancorado no topo, só os 80% de cima aparecem. */}
        {desktop === true ? (
          <HeroVideo
            src="/videos/hero-eagle-desktop.mp4"
            className="absolute inset-x-0 top-0 h-[125%] w-full object-cover object-top"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-band-2 via-band-2/75 to-band-2/35 md:bg-gradient-to-r md:from-band-2 md:via-band-2/70 md:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-page flex-col justify-center px-5 pb-16 pt-24 md:min-h-[88vh] md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Falcoaria: uma solução natural, eficiente e sustentável · Uberlândia, MG</Eyebrow>
          </motion.div>

          <motion.h1
            className="font-display text-display uppercase"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          >
            <AnimatedLine>Não espantamos pombos.</AnimatedLine>
            <AnimatedLine className="text-accent">Soltamos o predador deles.</AnimatedLine>
          </motion.h1>

          <motion.p
            className="measure mt-6 text-[17px] text-ink-soft"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Controle de aves sinantrópicas nocivas com aves de rapina treinadas.
            Sem veneno, sem arma de fogo, sem método condenável, e dentro da
            regulamentação do IBAMA.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-0.5 md:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.svg
          viewBox="0 0 24 12"
          className="h-2 w-4 fill-none stroke-accent opacity-60"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M2 2 12 10 22 2" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 24 12"
          className="h-3.5 w-7 fill-none stroke-accent"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
        >
          <path d="M2 2 12 10 22 2" />
        </motion.svg>
      </motion.div>
    </section>
  );
}

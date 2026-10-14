"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import { setLenisInstance, scrollToId } from "@/lib/scroll";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduced
      ? null
      : new Lenis({
          duration: 1.05,
          easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

    if (lenis) setLenisInstance(lenis);

    const onLenisScroll = () => {
      document.dispatchEvent(new Event("lenisScroll"));
    };
    lenis?.on("scroll", onLenisScroll);

    let frame: number;
    function raf(time: number) {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    }
    if (lenis) frame = requestAnimationFrame(raf);

    const onDocumentClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a[href^='#']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.length < 2) return;
      event.preventDefault();
      scrollToId(href.slice(1));
    };
    document.addEventListener("click", onDocumentClick, true);

    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      if (frame) cancelAnimationFrame(frame);
      lenis?.off("scroll", onLenisScroll);
      lenis?.destroy();
      setLenisInstance(null);
    };
  }, []);

  return <>{children}</>;
}

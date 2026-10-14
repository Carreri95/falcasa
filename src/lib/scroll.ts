import type Lenis from "lenis";
import { SCROLL_ANCHOR_OFFSET_PX } from "@/lib/constants";

let lenis: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenis = instance;
}

export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: SCROLL_ANCHOR_OFFSET_PX, duration: 1.15 });
    return;
  }

  const top = window.scrollY + target.getBoundingClientRect().top + SCROLL_ANCHOR_OFFSET_PX;
  window.scrollTo({ top, behavior: "smooth" });
}

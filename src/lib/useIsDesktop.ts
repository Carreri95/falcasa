"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the viewport currently matches the desktop breakpoint
 * (Tailwind's `md`, 768px+). Returns `null` until the first client-side
 * measurement, so callers can avoid rendering breakpoint-dependent markup
 * (like picking between two video sources) before hydration settles.
 */
export function useIsDesktop() {
  const [desktop, setDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const sync = () => setDesktop(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return desktop;
}

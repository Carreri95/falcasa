import type { ReactNode } from "react";

interface IconGlyphProps {
  children: ReactNode;
  className?: string;
  strokeWidth?: number;
}

/**
 * Shared 0-24 viewBox svg wrapper for the site's small line icons
 * (risks, method modes, team species marks). Sections only need to
 * supply the inner `<path>`/`<circle>` shapes.
 */
export function IconGlyph({ children, className = "", strokeWidth = 1.6 }: IconGlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      strokeWidth={strokeWidth}
      className={`fill-none stroke-current ${className}`}
    >
      {children}
    </svg>
  );
}

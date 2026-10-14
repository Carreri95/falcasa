import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-eyebrow uppercase text-gold">
      <span aria-hidden="true" className="block h-px w-[26px] bg-current" />
      {children}
    </p>
  );
}

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "accent" | "ghost";

const variants: Record<Variant, string> = {
  accent:
    "border border-accent bg-accent text-white hover:bg-transparent hover:text-accent",
  ghost:
    "border border-current bg-transparent hover:bg-accent hover:border-accent hover:text-white",
};

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-200";

interface SharedProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "accent",
  children,
  className = "",
  loading = false,
  disabled,
  ...props
}: SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? "Enviando…" : children}
    </button>
  );
}

export function ButtonLink({
  variant = "accent",
  children,
  className = "",
  ...props
}: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

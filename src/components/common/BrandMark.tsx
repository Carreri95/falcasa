import Image from "next/image";

interface BrandMarkProps {
  height: number;
  className?: string;
  priority?: boolean;
}

export function BrandMark({
  height,
  className = "",
  priority = false,
}: BrandMarkProps) {
  return (
    <Image
      src="/falcasa-mark.png"
      alt="Marca Falcasa Controle Ambiental"
      width={Math.round(height * 1.45)}
      height={height}
      priority={priority}
      className={`w-auto object-contain mix-blend-screen ${className}`}
    />
  );
}

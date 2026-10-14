import type { Metadata, Viewport } from "next";
import { Oswald, Barlow, IBM_Plex_Mono } from "next/font/google";
import { Navigation } from "@/components/common/Navigation";
import { WhatsAppFloat } from "@/components/common/WhatsAppFloat";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "@/styles/globals.css";

const display = Oswald({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const barlow = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const ibm = IBM_Plex_Mono({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Falcasa Controle Ambiental | Não espantamos pombos. Soltamos o predador deles.",
  description:
    "Controle de aves sinantrópicas nocivas com aves de rapina treinadas. Sem veneno, sem arma de fogo. Uberlândia-MG. IN IBAMA 141/2006 · CTF 7038404.",
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${barlow.variable} ${ibm.variable}`}
    >
      <body className="bg-bone font-sans text-ink antialiased">
        <SmoothScroll>
          <Navigation />
          {children}
          <WhatsAppFloat />
        </SmoothScroll>
      </body>
    </html>
  );
}

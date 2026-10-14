import type { Metadata, Viewport } from "next";
import { Oswald, Barlow, IBM_Plex_Mono } from "next/font/google";
import { Navigation } from "@/components/common/Navigation";
import { WhatsAppFloat } from "@/components/common/WhatsAppFloat";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/config/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "controle de pombos",
    "controle de pombos Uberlândia",
    "falcoaria",
    "falcoaria urbana",
    "controle de aves",
    "aves sinantrópicas",
    "manejo de fauna",
    "afugentamento de aves",
    "Uberlândia",
    "Minas Gerais",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
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

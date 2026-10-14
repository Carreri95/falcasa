import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONES,
  SITE_URL,
} from "@/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#empresa`,
      name: SITE_NAME,
      alternateName: "Falcasa",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}/icons/icon-512.png`,
      image: `${SITE_URL}/opengraph-image`,
      email: SITE_EMAIL,
      telephone: SITE_PHONES[0],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Uberlândia",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Uberlândia" },
        { "@type": "State", name: "Minas Gerais" },
      ],
      contactPoint: SITE_PHONES.map((telephone) => ({
        "@type": "ContactPoint",
        telephone,
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      })),
      knowsAbout: [
        "Controle de pombos",
        "Falcoaria",
        "Controle de aves sinantrópicas nocivas",
        "Manejo de fauna",
      ],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Controle de pombos e aves sinantrópicas com falcoaria",
          serviceType: "Controle de aves com aves de rapina treinadas",
          areaServed: { "@type": "City", name: "Uberlândia" },
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#empresa` },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Falcasa Controle Ambiental. Falcoaria: uma solução natural, eficiente e sustentável.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadOswald(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Oswald:wght@700",
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [logo, oswald] = await Promise.all([
    fetch(new URL("../../public/falcasa-mark.png", import.meta.url)).then((res) =>
      res.arrayBuffer(),
    ),
    loadOswald(),
  ]);
  const logoSrc = logo as unknown as string;
  const display = oswald ? "Oswald" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#1b2e1f",
          color: "#ede6d8",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 3,
              color: "#c4bba8",
              textTransform: "uppercase",
            }}
          >
            Falcoaria aplicada · Uberlândia, MG
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontFamily: display,
              fontWeight: 700,
              fontSize: 76,
              lineHeight: 1.02,
              textTransform: "uppercase",
            }}
          >
            <span>Falcoaria:</span>
            <span style={{ color: "#ff5f26" }}>
              uma solução natural, eficiente e sustentável
            </span>
          </div>
          <div style={{ marginTop: 36, fontSize: 28, color: "#c4bba8" }}>
            Controle de aves com falcoaria · Sem veneno · IBAMA
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={340} height={217} alt="" />
      </div>
    ),
    {
      ...size,
      fonts: oswald ? [{ name: "Oswald", data: oswald, weight: 700, style: "normal" }] : [],
    },
  );
}

import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "You already have it. Somewhere.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const icon = readFileSync(
    join(process.cwd(), "public/icons/nook-icon-light.svg"),
  ).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#F2F2F2",
          padding: "72px 80px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${icon}`}
          width={44}
          height={44}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 980,
              fontWeight: 500,
            }}
          >
            You already have it. Somewhere.
          </div>
          <div style={{ fontSize: 22, color: "#B3B3B3" }}>Coming soon.</div>
        </div>
      </div>
    ),
    { ...size },
  );
}

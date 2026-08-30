import { ImageResponse } from "next/og";

export const alt = "For people who consume more than they remember.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F7F5",
          color: "#37352F",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#F7F7F5",
              border: "1px solid #E4E2DC",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            <div
              style={{
                width: 28,
                height: 16,
                border: "4px solid #37352F",
                borderTop: "none",
                borderRadius: "0 0 10px 10px",
              }}
            />
          </div>
          <span style={{ fontSize: 28, letterSpacing: "-0.03em" }}>Nook</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#6E7C68",
            }}
          >
            Why this exists
          </span>
          <span
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              maxWidth: 920,
            }}
          >
            For people who consume more than they remember.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}

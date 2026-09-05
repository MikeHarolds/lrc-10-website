import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Leadership Rebirth Conference 10.0 — Shifting the Culture. Enugu, 31 October – 1 November 2026.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #01060D 0%, #020D19 50%, #0B1D63 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -1 }}>
            Impact<span style={{ color: "#FF6D00" }}>Field</span>
          </div>
          <div style={{ fontSize: 15, letterSpacing: 5, color: "rgba(255,255,255,0.45)" }}>
            PRESENTS
          </div>
          <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.25)" }} />
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -1 }}>
            LRC <span style={{ color: "#3E7BFA" }}>10.0</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 20, letterSpacing: 5, color: "#3E7BFA" }}>
            10 YEARS OF RAISING LEADERS
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              textTransform: "uppercase",
              letterSpacing: -2,
            }}
          >
            Leadership Rebirth
            <br />
            Conference <span style={{ color: "#3E7BFA" }}>10.0</span>
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#3E7BFA",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Shifting the Culture
          </div>
        </div>

        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.8)" }}>
          De Base Landmark, Enugu · 31 Oct – 1 Nov 2026
        </div>
      </div>
    ),
    { ...size },
  );
}

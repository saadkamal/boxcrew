import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const runtime = "edge";

export const alt = "Boxcrew - Grok Bot setups you paste";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0B0C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#F2F0EA",
            marginBottom: 24,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#A8A49A",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          Grok Bot setups you paste
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
          }}
        >
          {["Skills", "Jobs", "Setup"].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 20,
                color: "#E3A53A",
                padding: "8px 16px",
                border: "1px solid #2A2A2E",
                borderRadius: 9999,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

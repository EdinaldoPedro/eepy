import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top, rgba(34,211,238,0.16), transparent 34%), radial-gradient(circle at 82% 22%, rgba(249,115,22,0.12), transparent 26%), linear-gradient(180deg, #020617 0%, #07111f 42%, #020617 100%)",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: "999px",
            background:
              "linear-gradient(135deg, #7dd3fc 0%, #67e8f9 34%, #22d3ee 68%, #f97316 100%)",
            boxShadow:
              "0 0 38px rgba(103,232,249,0.22), 0 20px 44px rgba(15,23,42,0.42)",
            border: "2px solid rgba(255,255,255,0.22)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 34% 28%, rgba(248,250,252,0.92), rgba(186,244,255,0.34) 44%, rgba(186,244,255,0) 76%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 74% 74%, rgba(253,186,116,0.52), rgba(253,186,116,0) 58%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 24,
              top: 20,
              width: 44,
              height: 28,
              borderRadius: "999px",
              background: "rgba(255,255,255,0.2)",
              transform: "rotate(-12deg)",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}

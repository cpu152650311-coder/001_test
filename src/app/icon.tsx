import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
            "linear-gradient(135deg, #0066FF 0%, #00BFA5 100%)",
          color: "white",
          fontSize: 22,
          fontWeight: 800,
          borderRadius: 8,
          fontFamily: "Arial",
        }}
      >
        A
      </div>
    ),
    size,
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Robotics Technology",
  description:
    "Discover AOMAN FUTURE robotics technology including SLAM navigation, computer vision, voice AI, motion control, and cloud fleet management.",
  path: "/technology",
  keywords: [
    "robotics technology",
    "SLAM navigation robot",
    "robot computer vision",
    "voice AI robot",
    "AOMAN FUTURE technology",
  ],
});

export default function TechnologyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

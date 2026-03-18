import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about AOMAN FUTURE, our robotics mission, global deployment footprint, innovation milestones, and intelligent service robot vision.",
  path: "/about",
  keywords: [
    "AOMAN FUTURE",
    "about AOMAN FUTURE",
    "robotics company Shenzhen",
    "intelligent service robot company",
    "humanoid robotics company",
  ],
});

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

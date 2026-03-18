import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Robotics Solutions",
  description:
    "Explore AOMAN FUTURE robotics solutions for hospitality, healthcare, retail, logistics, exhibitions, and facility management.",
  path: "/solutions",
  keywords: [
    "robotics solutions",
    "service robot solutions",
    "hotel delivery robot solution",
    "smart cleaning robot solution",
    "AOMAN FUTURE solutions",
  ],
});

export default function SolutionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

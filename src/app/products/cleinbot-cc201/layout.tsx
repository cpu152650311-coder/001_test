import type { Metadata } from "next";
import {
  buildMetadata,
  getBreadcrumbJsonLd,
  getProductJsonLd,
} from "@/lib/seo";

const title = "CLEINBOT CC201 Sweeping Robot";
const description =
  "CLEINBOT CC201 is an all-weather autonomous sweeping robot for plazas, campuses, parking lots, and industrial parks with large-capacity auto-emptying.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/products/cleinbot-cc201",
  image: "/images/products/cleinbot-cc201/hero-robot.png",
  keywords: [
    "CLEINBOT CC201",
    "sweeping robot",
    "outdoor cleaning robot",
    "autonomous sweeper",
    "AOMAN FUTURE CLEINBOT CC201",
  ],
});

export default function CleinbotCC201Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    getProductJsonLd({
      name: "CLEINBOT CC201",
      description,
      path: "/products/cleinbot-cc201",
      image: "/images/products/cleinbot-cc201/hero-robot.png",
      category: "Sweeping Robot",
    }),
    getBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Products", path: "/" },
      { name: "CLEINBOT CC201", path: "/products/cleinbot-cc201" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}

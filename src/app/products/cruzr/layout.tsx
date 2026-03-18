import type { Metadata } from "next";
import {
  buildMetadata,
  getBreadcrumbJsonLd,
  getProductJsonLd,
} from "@/lib/seo";

const title = "CRUZR Humanoid Service Robot";
const description =
  "CRUZR is a humanoid service robot for hotels, retail, exhibitions, and corporate lobbies with multilingual voice AI, emotion recognition, and smart guidance.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/products/cruzr",
  image: "/images/products/cruzr/hero-robot.png",
  keywords: [
    "CRUZR",
    "humanoid service robot",
    "reception robot",
    "guide robot",
    "AOMAN FUTURE CRUZR",
  ],
});

export default function CruzrLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    getProductJsonLd({
      name: "CRUZR",
      description,
      path: "/products/cruzr",
      image: "/images/products/cruzr/hero-robot.png",
      category: "Humanoid Service Robot",
    }),
    getBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Products", path: "/" },
      { name: "CRUZR", path: "/products/cruzr" },
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

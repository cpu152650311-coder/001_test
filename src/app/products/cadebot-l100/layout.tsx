import type { Metadata } from "next";
import {
  buildMetadata,
  getBreadcrumbJsonLd,
  getProductJsonLd,
} from "@/lib/seo";

const title = "CADEBOT L100 Delivery Robot";
const description =
  "CADEBOT L100 is an autonomous delivery robot for restaurants, hotels, hospitals, and office buildings with multi-floor navigation and smart interaction.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/products/cadebot-l100",
  image: "/images/products/cadebot-l100/hero-robot.png",
  keywords: [
    "CADEBOT L100",
    "delivery robot",
    "restaurant delivery robot",
    "hotel delivery robot",
    "AOMAN FUTURE CADEBOT",
  ],
});

export default function CadebotL100Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    getProductJsonLd({
      name: "CADEBOT L100",
      description,
      path: "/products/cadebot-l100",
      image: "/images/products/cadebot-l100/hero-robot.png",
      category: "Delivery Robot",
    }),
    getBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Products", path: "/" },
      { name: "CADEBOT L100", path: "/products/cadebot-l100" },
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

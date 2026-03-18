import type { Metadata } from "next";
import {
  buildMetadata,
  getBreadcrumbJsonLd,
  getProductJsonLd,
} from "@/lib/seo";

const title = "CLEINBOT M79 Floor Cleaning Robot";
const description =
  "CLEINBOT M79 is an autonomous floor cleaning robot for airports, malls, hotels, and hospitals with smart mapping, multi-mode cleaning, and fleet management.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/products/cleinbot-m79",
  image: "/images/products/cleinbot-m79/hero-robot.png",
  keywords: [
    "CLEINBOT M79",
    "floor cleaning robot",
    "commercial cleaning robot",
    "autonomous scrubber robot",
    "AOMAN FUTURE CLEINBOT",
  ],
});

export default function CleinbotM79Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    getProductJsonLd({
      name: "CLEINBOT M79",
      description,
      path: "/products/cleinbot-m79",
      image: "/images/products/cleinbot-m79/hero-robot.png",
      category: "Floor Cleaning Robot",
    }),
    getBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Products", path: "/" },
      { name: "CLEINBOT M79", path: "/products/cleinbot-m79" },
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

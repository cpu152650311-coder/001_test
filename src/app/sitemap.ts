import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const routes = [
  "/",
  "/about",
  "/solutions",
  "/technology",
  "/products/cadebot-l100",
  "/products/cleinbot-m79",
  "/products/cleinbot-cc201",
  "/products/cruzr",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/products/") ? 0.9 : 0.8,
  }));
}

import type { Metadata } from "next";

export const siteConfig = {
  name: "AOMAN FUTURE",
  siteName: "AOMAN FUTURE",
  url: "https://aomanbot.com",
  description:
    "AOMAN FUTURE delivers humanoid and intelligent service robots for hospitality, healthcare, retail, logistics, and commercial spaces.",
  defaultOgImage: "/images/home/hero-robot.png",
  email: "info@aomanbot.com",
  phone: "+86 18928864959",
  address:
    "Room C602, Nanchang Jianyu Industrial Park (Phase 1), Chuangye Road, Bao'an District, Shenzhen, Guangdong Province, 518126, China",
} as const;

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = siteConfig.defaultOgImage,
}: BuildMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Room C602, Nanchang Jianyu Industrial Park (Phase 1), Chuangye Road, Bao'an District",
      addressLocality: "Shenzhen",
      addressRegion: "Guangdong Province",
      postalCode: "518126",
      addressCountry: "CN",
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

type ProductJsonLdInput = {
  name: string;
  description: string;
  path: string;
  image: string;
  category: string;
};

export function getProductJsonLd({
  name,
  description,
  path,
  image,
  category,
}: ProductJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    category,
    image: `${siteConfig.url}${image}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    url: `${siteConfig.url}${path}`,
  };
}

import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import {
	getOrganizationJsonLd,
	getWebsiteJsonLd,
	siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: "AOMAN FUTURE | Humanoid & Intelligent Service Robots",
		template: "%s | AOMAN FUTURE",
	},
	description: siteConfig.description,
	applicationName: siteConfig.name,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "AOMAN FUTURE | Humanoid & Intelligent Service Robots",
		description: siteConfig.description,
		url: "/",
		siteName: siteConfig.siteName,
		type: "website",
		locale: "en_US",
		images: [
			{
				url: siteConfig.defaultOgImage,
				alt: "AOMAN FUTURE service robot",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "AOMAN FUTURE | Humanoid & Intelligent Service Robots",
		description: siteConfig.description,
		images: [siteConfig.defaultOgImage],
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/icon?v=20260318",
		shortcut: "/icon?v=20260318",
		apple: "/apple-icon?v=20260318",
	},
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const structuredData = [
		getOrganizationJsonLd(),
		getWebsiteJsonLd(),
	];

	return (
		<html lang="en" className={inter.variable}>
			<body className="bg-[#F8FAFB] overflow-x-hidden font-[Inter,sans-serif]">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData),
					}}
				/>
				<Header />
				{children}
				<Footer />
				<InquiryModal />
				<Toaster position="top-center" richColors />
			</body>
		</html>
	);
}

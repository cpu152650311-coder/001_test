import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

export const metadata: Metadata = {
	title: "AOMA FUTURE - Humanoid & Smart Service Robots",
	description: "AOMA FUTURE - Global leader in humanoid robots and intelligent service robots. Explore CADEBOT, CLEINBOT, CRUZR solutions.",
	icons: [{ rel: "icon", url: "/favicon.png", type: "image/png" }],
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="bg-[#F8FAFB] overflow-x-hidden font-[Inter,sans-serif]">
				<Header />
				{children}
				<Footer />
				<InquiryModal />
				<Toaster position="top-center" richColors />
			</body>
		</html>
	);
}

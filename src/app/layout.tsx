import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/ui/navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";

const inter = Montserrat({
	subsets: ["latin"],
	weight: ["300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="wrapper">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
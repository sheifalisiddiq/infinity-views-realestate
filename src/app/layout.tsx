import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import CursorTrail from "@/components/CursorTrail";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Infinity Views | Luxury Real Estate Dubai",
  description: "A discreet boutique advisory specializing in the acquisition and management of Dubai's most significant architectural estates.",
  openGraph: {
    title: "Infinity Views | Luxury Real Estate Dubai",
    description: "Curating Dubai's finest real estate for the world's most discerning buyers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-background text-on-surface font-body`}>
        <CursorTrail />
        <ScrollObserver />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

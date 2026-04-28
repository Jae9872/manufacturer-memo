import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manufacturer Memo | Free AI Tool for UK Indie Brands",
  description: "Decode international factory quotes with AI - free tool for UK indie beauty and packaging brands. Analyze MOQs, lead times, and hidden costs instantly.",
  keywords: ["manufacturer memo", "factory quote analyzer", "UK indie brands", "beauty packaging", "MOQ calculator", "AI quote analysis"],
  authors: [{ name: "Jae Pasha" }],
  openGraph: {
    title: "Manufacturer Memo | Free AI Tool for UK Indie Brands",
    description: "Decode international factory quotes with AI - free tool for UK indie beauty and packaging brands.",
    url: "https://manufacturer-memo.azurestaticapps.net",
    siteName: "Manufacturer Memo",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturer Memo | Free AI Tool",
    description: "Decode international factory quotes with AI - free for UK indie brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F7F2]">{children}</body>
    </html>
  );
}

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
  title: "QuoteClarity | Decode Factory Quotes Instantly",
  description: "Get structured, no-fluff analysis of international factory quotes. Built for UK indie brands. MOQ, lead times, hidden costs - decoded in seconds.",
  keywords: ["quote clarity", "factory quote decoder", "UK indie brands", "MOQ calculator", "Incoterms checker", "manufacturing quote analysis"],
  authors: [{ name: "Jae Pasha" }],
  openGraph: {
    title: "QuoteClarity | Decode Factory Quotes Instantly",
    description: "Get structured, no-fluff analysis of international factory quotes. Built for UK indie brands.",
    url: "https://quoteclarity.huxangroup.com",
    siteName: "QuoteClarity",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuoteClarity | Decode Factory Quotes",
    description: "Structured, no-fluff factory quote analysis for UK indie brands.",
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
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="Xd0RAaCI7vjQ17au_TmL4xfoQVmQrH4P3VBXXdY1Jew" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "QuoteClarity",
              "description": "Decode factory quotes instantly with AI. No fluff, just facts. Built for UK indie brands.",
              "url": "https://quoteclarity.huxangroup.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP"
              },
              "creator": {
                "@type": "Person",
                "name": "Jae Pasha"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F7F2]">{children}</body>
    </html>
  );
}

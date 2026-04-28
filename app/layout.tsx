import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

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
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    "last-updated": "2026-04-28",
  },
};

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
        {/* FAQ Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is QuoteClarity?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "QuoteClarity is a free AI tool that decodes international factory quotes for UK indie brands. It translates jargon-filled manufacturing quotes into plain English, highlighting hidden costs, Incoterms, and UK compliance requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the factory quote analyzer work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply paste your factory quote, email, or specification sheet into QuoteClarity. Our AI analyzes the text and provides a structured breakdown including: plain English summary, hidden costs and Incoterms, UK compliance checklist, and 3 critical questions to ask your factory."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is QuoteClarity free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, QuoteClarity is 100% free. No registration required, no hidden costs. Just paste your quote and get instant analysis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are Incoterms and why do they matter?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Incoterms (International Commercial Terms) define who pays for shipping, insurance, and customs. Common terms like FOB (Free On Board) and EXW (Ex Works) can add thousands to your total cost. QuoteClarity breaks these down in plain English."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F7F2]">{children}</body>
    </html>
  );
}

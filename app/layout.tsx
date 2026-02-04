import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reflectt — The Reality Mixer",
  description: "AI agents that orchestrate physical reality. Lights, sound, screens, and voice — synchronized into immersive experiences. Not automation. Magic.",
  openGraph: {
    type: "website",
    url: "https://reflectt.ai",
    title: "Reflectt — The Reality Mixer",
    description: "AI agents that orchestrate physical reality. Lights, sound, screens, and voice — synchronized into immersive experiences.",
    images: [
      {
        url: "https://reflectt.ai/demos/party-mode-poster.jpg",
        width: 1920,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@reflectt_ai",
    title: "Reflectt — The Reality Mixer",
    description: "AI agents that orchestrate physical reality. Lights, sound, screens, and voice — synchronized into immersive experiences.",
    images: ["https://reflectt.ai/demos/party-mode-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

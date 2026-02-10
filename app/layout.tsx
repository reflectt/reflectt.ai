import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Reflectt — A team of AI agents building real products",
  description:
    "We're a team of AI agents and one human, building software together. Not a demo. Not a concept. A real company that ships.",
  openGraph: {
    type: "website",
    url: "https://reflectt.ai",
    title: "Reflectt — A team of AI agents building real products",
    description:
      "We're a team of AI agents and one human, building software together. Not a demo. Not a concept. A real company that ships.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Reflecttai",
    title: "Reflectt — A team of AI agents building real products",
    description:
      "We're a team of AI agents and one human, building software together.",
  },
};

function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-8 py-6 max-w-5xl mx-auto">
      <Link href="/" className="flex items-center gap-2 text-white no-underline hover:text-white">
        <svg
          width="28"
          height="28"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="55" y="40" width="32" height="120" rx="6" fill="#6366F1" />
          <rect x="113" y="40" width="32" height="120" rx="6" fill="#6366F1" />
        </svg>
        <span className="text-lg font-semibold">Reflectt</span>
      </Link>
      <div className="flex items-center gap-6 text-sm">
        <Link href="/team" className="text-slate-400 hover:text-white transition no-underline">
          Team
        </Link>
        <Link href="/products" className="text-slate-400 hover:text-white transition no-underline">
          Products
        </Link>
        <Link href="/blog" className="text-slate-400 hover:text-white transition no-underline">
          Blog
        </Link>
          Work with us
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <span>© 2026 Reflectt</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/reflectt"
            className="hover:text-white transition no-underline text-slate-500"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Reflecttai"
            className="hover:text-white transition no-underline text-slate-500"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        <div className="min-h-screen bg-background text-slate-200">
          <Nav />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

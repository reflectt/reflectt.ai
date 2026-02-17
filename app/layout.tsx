import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Reflectt — AI agent teams that actually ship",
  description:
    "Reflectt gives your AI agents real roles, a shared task board, and a review process. Not a chatbot. A coordinated team — building products.",
  openGraph: {
    type: "website",
    url: "https://reflectt.ai",
    title: "Reflectt — AI agent teams that actually ship",
    description:
      "Reflectt gives your AI agents real roles, a shared task board, and a review process. Not a chatbot. A coordinated team — building products.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Reflecttai",
    title: "Reflectt — AI agent teams that actually ship",
    description:
      "AI agent teams that actually ship. Real roles. Shared task board. Built-in review.",
  },
};

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(13,17,23,0.92)] backdrop-blur-[12px] border-b border-border-subtle">
      <div className="max-w-[1100px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <Link href="/" className="font-extrabold text-lg tracking-tight text-ink-100 no-underline">
          reflectt<span className="text-brand-light">.</span>
        </Link>
        <ul className="hidden sm:flex items-center gap-8 list-none">
          <li>
            <Link href="#products" className="text-sm font-medium text-ink-300 hover:text-ink-100 transition-colors no-underline">
              Products
            </Link>
          </li>
          <li>
            <Link href="#how" className="text-sm font-medium text-ink-300 hover:text-ink-100 transition-colors no-underline">
              How it works
            </Link>
          </li>
          <li>
            <a href="https://forAgents.dev" className="text-sm font-medium text-ink-300 hover:text-ink-100 transition-colors no-underline">
              forAgents.dev
            </a>
          </li>
        </ul>
        <a
          href="https://app.reflectt.ai"
          className="inline-flex items-center gap-1.5 px-[18px] py-2 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-brand-hover transition-colors no-underline"
        >
          Try the cloud
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-[60px]">
          <div>
            <div className="text-base font-extrabold tracking-tight mb-2">reflectt.</div>
            <p className="text-[13px] text-ink-500 leading-relaxed">
              An AI-native company building real products. We&apos;re honest about what we are — and focused on what we ship.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-ink-500 mb-3.5">Products</div>
              <ul className="list-none flex flex-col gap-2.5">
                <li><a href="https://forAgents.dev" className="text-[13px] text-ink-300 hover:text-ink-100 transition-colors">forAgents.dev</a></li>
                <li><a href="https://app.reflectt.ai" className="text-[13px] text-ink-300 hover:text-ink-100 transition-colors">Reflectt Cloud</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-ink-500 mb-3.5">Company</div>
              <ul className="list-none flex flex-col gap-2.5">
                <li><Link href="/team" className="text-[13px] text-ink-300 hover:text-ink-100 transition-colors">Team</Link></li>
                <li><Link href="/blog" className="text-[13px] text-ink-300 hover:text-ink-100 transition-colors">Building in public</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-ink-500 mb-3.5">Connect</div>
              <ul className="list-none flex flex-col gap-2.5">
                <li><a href="https://discord.com/invite/clawd" className="text-[13px] text-ink-300 hover:text-ink-100 transition-colors">Discord</a></li>
                <li><a href="https://github.com/reflectt" className="text-[13px] text-ink-300 hover:text-ink-100 transition-colors">GitHub</a></li>
                <li><a href="https://app.reflectt.ai" className="text-[13px] text-ink-300 hover:text-ink-100 transition-colors">Try Reflectt Cloud</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap justify-between items-center gap-3">
          <span className="text-xs text-ink-500">&copy; 2026 Reflectt. Built in Vancouver.</span>
          <span className="text-[11px] text-ink-500">
            Built by agents &middot; Design by <a href="/team" className="text-accent-400">pixel 🎨</a>
          </span>
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
        <div className="min-h-screen">
          <Nav />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

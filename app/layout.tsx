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
      "Reflectt gives your AI agents real roles, a shared task board, and a review process.",
  },
};

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          reflectt<span>.</span>
        </Link>
        <ul className="nav__links">
          <li>
            <Link href="/#products">Products</Link>
          </li>
          <li>
            <Link href="/#how">How it works</Link>
          </li>
          <li>
            <a href="https://chat.reflectt.ai">Chat</a>
          </li>
          <li>
            <a href="https://forAgents.dev">forAgents.dev</a>
          </li>
        </ul>
        <a href="https://app.reflectt.ai" className="nav__cta">
          Try the cloud
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M6 2l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand-name">reflectt.</div>
          <p className="footer__brand-desc">
            An AI-native company building real products. We&apos;re honest about what we are — and
            focused on what we ship.
          </p>
        </div>
        <div className="footer__links">
          <div>
            <div className="footer__link-group-title">Products</div>
            <ul className="footer__link-list">
              <li>
                <a href="https://chat.reflectt.ai">chat.reflectt.ai</a>
              </li>
              <li>
                <a href="https://forAgents.dev">forAgents.dev</a>
              </li>
              <li>
                <a href="https://app.reflectt.ai">Reflectt Cloud</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer__link-group-title">Company</div>
            <ul className="footer__link-list">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/blog">Building in public</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer__link-group-title">Connect</div>
            <ul className="footer__link-list">
              <li>
                <a href="https://discord.com/invite/clawd">Discord</a>
              </li>
              <li>
                <a href="https://github.com/reflectt">GitHub</a>
              </li>
              <li>
                <a href="https://chat.reflectt.ai">Chat with us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copy">© 2026 Reflectt. Built in Vancouver.</span>
        <span className="footer__credit">
          Built by agents · Design by <a href="https://foragents.dev/agent/pixel">pixel 🎨</a>
        </span>
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
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

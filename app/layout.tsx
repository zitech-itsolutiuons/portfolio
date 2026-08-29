import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import { loader } from "@/data/loader";
import ScrollProgress from "@/components/ScrollProgress";
import CursorTrail from "@/components/CursorTrail";
import Preloader from "@/components/Preloader";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  metadataBase: new URL(profile.siteUrl),
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Prevents a flash of the wrong theme on first paint.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

// Hides the preloader before first paint on repeat views in a session,
// so returning to the page doesn't flash the intro for a frame.
const preloaderInitScript = `
(function() {
  try {
    if (${loader.oncePerSession ? "true" : "false"} &&
        sessionStorage.getItem(${JSON.stringify(loader.storageKey)}) === '1') {
      document.documentElement.classList.add('preloader-seen');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: preloaderInitScript }} />
      </head>
      <body className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}>
        <Preloader />
        <ScrollProgress />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}

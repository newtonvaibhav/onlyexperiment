import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import "../tv/typography-foundation.css";
import "../tv/typography-semantic.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

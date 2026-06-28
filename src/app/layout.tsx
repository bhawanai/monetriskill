import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MonetriSkill — Learn AI Skills That Actually Make You Money",
  description:
    "Discover the best AI income path based on your skills, goals, and available time. Get a personalized roadmap in minutes — completely free.",
  keywords: ["earn money with AI", "AI income", "ChatGPT freelancing", "AI skills", "monetriskill"],
  authors: [{ name: "MonetriSkill" }],
  openGraph: {
    title: "MonetriSkill — Learn AI Skills That Actually Make You Money",
    description:
      "Discover the best AI income path based on your skills, goals, and available time. Free personalized roadmap.",
    url: "https://monetriskill.com",
    siteName: "MonetriSkill",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonetriSkill — Learn AI Skills That Actually Make You Money",
    description: "Get your personalized AI income roadmap for free.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}

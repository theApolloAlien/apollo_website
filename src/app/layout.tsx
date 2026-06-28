import type { Metadata } from "next";
import { Press_Start_2P, Space_Mono } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshua Apollo — Portfolio",
  description: "Computer Engineering student at NTU specialising in systems security and AI infrastructure.",
  keywords: ["portfolio", "computer engineering", "cybersecurity", "AI", "NTU"],
  authors: [{ name: "Joshua Apollo" }],
  openGraph: {
    title: "Joshua Apollo — Portfolio",
    description: "Systems security & AI infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${spaceMono.variable}`}>
      <body className="bg-cream text-brown-dark antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "First Signal: Early Crypto, Verified",
  description:
    "Early crypto opportunities, checked on the official page and on chain first. Agent ID mints, Four.Meme launches, and new DEX pairs, with mint price, cost per token, liquidity, and risk shown clearly.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Belleza, Inter } from "next/font/google";
import "./globals.css";

// font 1
const belleza = Belleza({
  subsets: ["latin"],
  variable: '--font-belleza',
  weight: '400'
});
// font 2
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: '400'
});

export const metadata: Metadata = {
  title: "marvin.dev",
  description: "marvin's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${belleza.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

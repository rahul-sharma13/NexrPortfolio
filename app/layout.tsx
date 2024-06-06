import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// layout.tsx is responsible for our font. here we are using inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul's Portfolio",
  description: "NextJS based portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

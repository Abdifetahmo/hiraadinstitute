import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";

import { ChunkLoadRecovery } from "@/components/ChunkLoadRecovery";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  adjustFontFallback: false
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains"
});

export const metadata: Metadata = {
  title: "Hiraad Institute",
  description: "Hiraad Institute website implementation from Pencil design with Sanity CMS content management."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} ${jetbrains.variable}`}>
        <ChunkLoadRecovery />
        {children}
      </body>
    </html>
  );
}

import { Chivo } from "next/font/google";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const fontHeading = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

import "@/styles/globals.css";

import { type Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Placeholder.svg",
  description:
    "Generate custom SVG placeholders with various options and settings.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontHeading.variable, fontBody.variable)}
    >
      <body>
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}

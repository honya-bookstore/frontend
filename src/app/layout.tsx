import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Prata, Cormorant_Unicase } from "next/font/google";
import "./globals.css";
import {SessionProvider} from "next-auth/react";

const interFont = Inter({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-inter",
});

const plusJakartaSansFont = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-plus-jakarta-sans",
});

const prataFont = Prata({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-prata",
});

const cormorantUnicaseFont = Cormorant_Unicase({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-cormorant-unicase",
})

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.png",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${plusJakartaSansFont.variable} ${prataFont.variable} ${cormorantUnicaseFont.variable}`}
      >
        <SessionProvider>
            {children}
        </SessionProvider>
      </body>
    </html>
  );
}

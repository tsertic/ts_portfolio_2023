import "./globals.css";
import type { Metadata } from "next";
import { Alata, Josefin_Sans } from "next/font/google";

import { ThemeProviderC } from "@/components/provider/ThemeProvider";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alata",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-josefinsans",
});

export const metadata: Metadata = {
  title: "Loopside - VR",
  description: "Loopside landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${alata.variable} ${josefinSans.variable} text-bodyM font-alata bg-base-100 text-base-content`}
      >
        <ThemeProviderC>{children}</ThemeProviderC>
      </body>
    </html>
  );
}

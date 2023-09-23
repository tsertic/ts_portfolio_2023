import "./globals.css";
import type { Metadata } from "next";
import { Alata, Josefin_Sans } from "next/font/google";

import { ThemeProviderC } from "@/components/provider/ThemeProvider";
import { ReduxProvider } from "@/components/provider/ReduxProvider";
import ThemeSwitch from "@/components/main/ThemeSwitch/ThemeSwitch";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { MotionLayout } from "@/components/provider/MotionLayout";

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
  title: "Tomislav Sertic",
  description:
    "Tomislav Sertic Portfolio | Full-Stack Developer based in Zagreb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "color-scheme: banana" }}>
      <body
        className={`${alata.variable} ${josefinSans.variable} text-bodyM font-alata bg-base-200 text-base-content transition-colors duration-75`}
      >
        <ReduxProvider>
          <ThemeProviderC>
            <MotionLayout>
              <ThemeSwitch />
              <Header />
              {children}
              <Footer />
            </MotionLayout>
          </ThemeProviderC>
        </ReduxProvider>
      </body>
    </html>
  );
}

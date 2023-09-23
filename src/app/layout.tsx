import "./globals.css";
import type { Metadata } from "next";
import { Alata, Josefin_Sans } from "next/font/google";
import ThemeSwitch from "@/components/main/ThemeSwitch/ThemeSwitch";
import { Header, Footer } from "@/components/layout";
import { ReduxProvider, ThemeProvider } from "@/components/provider";

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
          <ThemeProvider>
            <ThemeSwitch />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

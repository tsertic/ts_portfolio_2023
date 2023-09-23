import "./globals.css";
import type { Metadata } from "next";
import { Alata, Josefin_Sans, PT_Mono, PT_Sans } from "next/font/google";
import ThemeSwitch from "@/components/main/ThemeSwitch/ThemeSwitch";
import { Header, Footer } from "@/components/layout";
import { ReduxProvider, ThemeProvider } from "@/components/provider";
import { NoiseBgPattern } from "@/components/esthetics/NoiseBgPattern";

const ptMono = PT_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});
const ptSans = PT_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
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
        className={`${ptMono.variable} ${ptSans.variable} text-bodyMMobile md:text-bodyM font-sans bg-base-100 text-base-content transition-colors duration-75 relative`}
      >
        <div className="main-bg">
          <NoiseBgPattern className="" />
        </div>
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

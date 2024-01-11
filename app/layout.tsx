import type { Metadata } from "next";
import { Footer } from "./layout/widgets/footer";
import TopBar from "./layout/widgets/top-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Spirit",
  description: "Ocean Spirit",
};

import { Inter, Montserrat } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

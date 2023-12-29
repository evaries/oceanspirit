import type { Metadata } from "next";
import { useWindowSize } from "./components/utils";
import Footer from "./components/widgets/Footer";
import TopBar from "./components/widgets/TopBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Spirit",
  description: "Ocean Spirit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/widgets/Header";
import Footer from "./components/widgets/Footer";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

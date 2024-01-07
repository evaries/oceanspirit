import type { Metadata } from "next";
import { Footer } from "./layout/widgets/footer";
import TopBar from "./layout/widgets/top-bar";
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

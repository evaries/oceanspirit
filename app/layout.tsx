import type { Metadata } from "next";
import { Footer } from "./layout/widgets/footer";
import TopBar from "./layout/widgets/top-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Spirit",
  description: "Ocean Spirit",
  generator: "Ocean Spirit",
  applicationName: "Ocean Spirit",
  referrer: "origin-when-cross-origin",
  keywords: ["Ocean Spirit", "surf", "trips"],
  authors: [{ name: "yev" }],
  creator: "yev",
  publisher: "yev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oceanspirit.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Ocean Spirit",
    description: "Ocean Spirit",
    url: "https://oceanspirit.vercel.app/_next/image?url=%2Fimages%2Fdestinations%2Fg-land%2Fspots.png&w=828&q=75",
    siteName: "Next.js",
    images: [
      {
        url: "https://oceanspirit.vercel.app/_next/image?url=%2Fimages%2Fdestinations%2Fg-land%2Fspots.png&w=828&q=75", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://oceanspirit.vercel.app/_next/image?url=%2Fimages%2Fdestinations%2Fg-land%2Fspots.png&w=828&q=75", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ocean Spirit",
    description: "Ocean Spirit",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: [
      "https://oceanspirit.vercel.app/_next/image?url=%2Fimages%2Fdestinations%2Fg-land%2Fspots.png&w=828&q=75",
    ], // Must be an absolute URL
  },
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

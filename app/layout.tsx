import type { Metadata, Viewport } from "next";
import { Inter, Onest } from "next/font/google";
import { site } from "@/data/conference";
import Preloader from "@/components/Preloader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Leadership Rebirth Conference 10.0 | ImpactField",
    template: "%s | LRC 10.0",
  },
  description: site.description,
  keywords: [
    "Leadership Rebirth Conference",
    "LRC 10.0",
    "ImpactField",
    "leadership conference Nigeria",
    "Enugu conference 2026",
    "Shifting the Culture",
    "leadership development Africa",
  ],
  authors: [{ name: "ImpactField" }],
  creator: "ImpactField",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: "Leadership Rebirth Conference 10.0",
    title: "Leadership Rebirth Conference 10.0 | ImpactField",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Rebirth Conference 10.0 | ImpactField",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0C3B2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${onest.variable}`}>
      <body>
        <Preloader />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-md focus:bg-blue focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

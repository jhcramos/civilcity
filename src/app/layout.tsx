import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageShell } from "@/components/layout";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "CivilCity | Sunshine Coast Civil Engineering Consultancy",
    template: "%s | CivilCity",
  },
  description: site.description,
  openGraph: {
    title: "CivilCity | Sunshine Coast Civil Engineering Consultancy",
    description: site.description,
    url: site.domain,
    siteName: site.name,
    images: ["/civilcity-og.png"],
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}

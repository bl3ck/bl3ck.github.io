import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Tanue Eugen-Bleck Mbunwo',
    default:
      'Eugen - Software Engineer, and aspiring material scientist',
  },
  description:
    'I’m Eugen-Bleck, a software engineer and entrepreneur based in Mountain View, CA.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="flex w-full">
            <div className="fixed bg-black inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full ring-1 bg-zinc-900 ring-zinc-300/20" />
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <Header />
              <main className="flex-auto">{children}</main>
              <Footer />
            </div>
          </div>
      </body>
    </html>
  );
}

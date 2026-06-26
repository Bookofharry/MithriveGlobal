import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Mithrive Global Limited',
    default: 'Mithrive Global Limited | Consulting & Capacity Development',
  },
  description: "Engineering Growth. Strengthening Systems. Delivering Results.",
  openGraph: {
    title: 'Mithrive Global Limited',
    description: 'Engineering Growth. Strengthening Systems. Delivering Results.',
    url: 'https://mithriveglobal.com',
    siteName: 'Mithrive Global Limited',
    images: [
      {
        url: 'https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx', // Fallback to logo
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mithrive Global Limited',
    description: 'Engineering Growth. Strengthening Systems. Delivering Results.',
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

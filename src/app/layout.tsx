import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mithriveglobal.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | Mithrive Global Limited',
    default: 'Mithrive Global Limited — Consulting & Capacity Development Firm Nigeria | Institutional Strengthening Africa',
  },
  description: "Mithrive Global Limited — Performance-focused consulting and capacity development firm. Organizational development, results-based management, M&E, GIS & geospatial analytics. Strengthening institutions across Nigeria and Africa.",
  keywords: ["consulting firm Nigeria", "capacity development Africa", "organizational development", "results-based management", "M&E consulting Nigeria", "GIS consulting Nigeria", "geospatial analytics Africa", "institutional strengthening", "Mithrive Global"],
  openGraph: {
    title: 'Mithrive Global Limited — Consulting & Capacity Development',
    description: 'Performance-focused consulting firm specializing in organizational development, results-based management, M&E, and GIS analytics. Strengthening institutions across Nigeria and Africa.',
    url: 'https://mithriveglobal.com',
    siteName: 'Mithrive Global Limited',
    images: [
      {
        url: 'https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx',
        width: 800,
        height: 600,
        alt: 'Mithrive Global Limited Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mithrive Global Limited — Consulting & Capacity Development',
    description: 'Performance-focused consulting firm. Organizational development, RBM, M&E, GIS analytics across Nigeria & Africa.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "Mithrive Global Limited",
              url: "https://mithriveglobal.com",
              logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/IMG_8180_kcusgx",
              description: "Performance-focused consulting and capacity development firm committed to strengthening institutions, optimizing systems, and delivering measurable development impact across Africa.",
              areaServed: [
                { "@type": "Country", name: "Nigeria" },
                { "@type": "Continent", name: "Africa" }
              ],
              serviceType: ["Organizational Development", "Results-Based Management", "M&E Consulting", "GIS & Geospatial Analytics", "Capacity Development"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Enterprise Technology Center, Adjacent Eagle Square",
                addressLocality: "Abuja",
                addressCountry: "NG"
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "info@mithriveglobal.com",
                  telephone: "+234-810-631-0387",
                  availableLanguage: "English"
                }
              ],
              sameAs: [
                // Add social profile URLs here when available
              ]
            })
          }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

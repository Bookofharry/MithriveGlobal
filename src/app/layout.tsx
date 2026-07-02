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
  keywords: [
    // Brand
    "Mithrive Global", "Mithrive Global Limited", "Mithrive consulting", "Mithrive Abuja",
    // Core services — blended with Abuja & northern states
    "consulting firm Nigeria", "consulting firm Abuja", "consulting firm Kano",
    "management consulting Africa", "management consulting Abuja", "management consulting northern Nigeria",
    "capacity development Africa", "capacity development Abuja", "capacity building Nigeria",
    "capacity building consulting", "capacity building Kano", "capacity building Borno",
    "organizational development", "organizational development consulting Nigeria",
    "organizational development consulting Abuja",
    "results-based management", "RBM consulting", "RBM consulting Abuja", "RBM framework implementation",
    "monitoring and evaluation", "M&E consulting Nigeria", "M&E consulting Abuja",
    "M&E consulting Africa", "M&E framework", "M&E consulting Kano",
    "impact assessment Nigeria", "impact assessment consulting", "impact assessment Abuja",
    "GIS consulting Nigeria", "GIS consulting Abuja", "GIS consulting Kano",
    "GIS consulting Africa", "geospatial analytics Africa", "geospatial consulting",
    "geospatial analytics Abuja", "data intelligence consulting", "decision support systems Africa",
    // Institutional & governance
    "institutional strengthening", "institutional development Africa",
    "institutional strengthening Abuja", "institutional strengthening northern Nigeria",
    "governance consulting Nigeria", "governance consulting Abuja", "governance framework consulting",
    "workforce optimization consulting", "performance management consulting Nigeria",
    "performance management consulting Abuja",
    // Sector-specific
    "government consulting Nigeria", "government consulting Abuja", "public sector consulting Africa",
    "NGO consulting Nigeria", "NGO consulting Abuja", "development consulting Africa",
    "donor-funded project consulting", "development agency consulting Abuja",
    // Geographic — Abuja & northern states
    "consulting firm Abuja Nigeria", "consulting firm FCT", "management consulting firm West Africa",
    "consulting firm Kaduna", "consulting firm Nasarawa", "consulting firm Niger state",
    "consulting firm Plateau", "consulting firm Maiduguri", "consulting firm Borno",
    "capacity building north central Nigeria", "capacity building north east Nigeria",
    "capacity building north west Nigeria",
    // Search-intent phrases
    "how to improve organizational performance Nigeria",
    "best consulting firm in Nigeria", "best consulting firm in Abuja",
    "top consulting firms Africa", "top consulting firms Abuja",
    "strategic planning consulting Nigeria", "strategic planning consulting Abuja",
    "systems strengthening Africa",
    "smart city consulting Nigeria", "smart city consulting Kano",
    "urban planning consulting Nigeria", "urban planning consulting Abuja",
    "climate innovation Africa", "community development consulting Nigeria",
    "social impact consulting Africa", "social impact consulting Abuja",
    // Trainings, seminars & events
    "trainings in Abuja", "Abuja trainings and seminars",
    "Nigerian trainings and seminars", "executive trainings",
    "international trainings and conferences", "international trainings and events",
  ],
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - OD, RBM, M&E & GIS Consulting",
  description: "Organizational development, results-based management, M&E frameworks, GIS & geospatial analytics. Full performance ecosystems for institutions across Nigeria.",
  alternates: {
    canonical: "https://mithriveglobal.com/services",
  },
  openGraph: {
    title: "Our Services - Organizational Development, RBM, M&E & GIS Consulting",
    description: "Full performance ecosystems: organizational development, results-based management, M&E frameworks, GIS & geospatial analytics across Nigeria and Africa.",
    url: "https://mithriveglobal.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Organizational Development Consulting",
              provider: {
                "@type": "Organization",
                name: "Mithrive Global Limited"
              },
              description: "Comprehensive organizational diagnostics, governance frameworks, workforce optimization, and culture alignment to enhance institutional capacity across Africa.",
              serviceType: "Organizational Development",
              areaServed: { "@type": "Country", name: "Nigeria" }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Results-Based Management & M&E Consulting",
              provider: {
                "@type": "Organization",
                name: "Mithrive Global Limited"
              },
              description: "RBM framework implementation, comprehensive monitoring & evaluation systems, and rigorous impact assessments for measurable development outcomes.",
              serviceType: "Results-Based Management",
              areaServed: { "@type": "Country", name: "Nigeria" }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Data Intelligence - GIS & Geospatial Analytics",
              provider: {
                "@type": "Organization",
                name: "Mithrive Global Limited"
              },
              description: "GIS & geospatial analytics, decision-support systems, and data-driven insights for predictive growth and smarter institutional planning.",
              serviceType: "GIS Consulting",
              areaServed: { "@type": "Country", name: "Nigeria" }
            }
          ])
        }}
      />
      {children}
    </>
  );
}

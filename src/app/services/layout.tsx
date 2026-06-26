import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "We design full performance ecosystems anchored in Purpose-Led Growth, Capacity & System Architecture.",
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Performance Consulting & Capacity Development",
            provider: {
              "@type": "Organization",
              name: "Mithrive Global Limited"
            },
            description: "We design full performance ecosystems anchored in Purpose-Led Growth, Capacity & System Architecture.",
            serviceType: "Management Consulting"
          })
        }}
      />
      {children}
    </>
  );
}

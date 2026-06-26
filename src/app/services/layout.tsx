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
  return <>{children}</>;
}

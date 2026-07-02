export interface Course {
  id: string;
  slug: string;
  title: string;
  category: "Leadership" | "Data & Analytics" | "Governance" | "Strategy";
  description: string;
  mode: "Virtual" | "In-Person" | "Hybrid";
  date: string;
  duration: string;
  price: string;
  imageUrl: string;
  brochureUrl?: string;
  highlights: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "strategic-leadership-public-sector",
    title: "Strategic Leadership in the Public Sector",
    category: "Leadership",
    description: "Equipping public sector leaders with the frameworks needed to transition from administrative management to visionary leadership.",
    mode: "In-Person",
    date: "August 15 - August 18, 2026",
    duration: "4 Days",
    price: "₦450,000",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/tumisu-team-4817006_1920_snf3f5.jpg",
    brochureUrl: "#", // Placeholder
    highlights: ["Change Management", "Policy Implementation", "Stakeholder Engagement"]
  },
  {
    id: "2",
    slug: "data-intelligence-decision-making",
    title: "Data Intelligence & Decision Support Systems",
    category: "Data & Analytics",
    description: "A deep dive into using geospatial analytics, big data, and M&E metrics to drive evidence-based policy making.",
    mode: "Virtual",
    date: "September 5 - September 7, 2026",
    duration: "3 Days",
    price: "₦250,000",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/advogadoaguilar-right-4703925_1920_cfxytf.jpg",
    highlights: ["GIS Analytics", "Predictive Modeling", "M&E Dashboards"]
  },
  {
    id: "3",
    slug: "results-based-management-masterclass",
    title: "Results-Based Management Masterclass",
    category: "Strategy",
    description: "Master the principles of RBM to align daily operations with long-term strategic institutional goals.",
    mode: "Hybrid",
    date: "October 10 - October 14, 2026",
    duration: "5 Days",
    price: "₦350,000",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/geralt-business-10209984_1920_hkw8iy.jpg",
    highlights: ["Logical Frameworks", "Impact Tracking", "Performance Audits"]
  }
];

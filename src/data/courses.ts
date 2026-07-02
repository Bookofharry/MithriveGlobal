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
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782559312/IMG_1893_yssgye.jpg",
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
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782506744/IMG_7489_da2zgv.heic",
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
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782494380/PHOTO-2025-07-30-18-01-35_azjcbj.jpg",
    highlights: ["Logical Frameworks", "Impact Tracking", "Performance Audits"]
  }
];

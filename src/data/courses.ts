export interface Course {
  id: string;
  slug: string;
  title: string;
  category: "Human Capital & Management" | "Business & Finance" | "Administration, Communication & Sales" | "Technology & AI" | "Logistics & Supply chain" | "Executive Leadership" | "Environment, Safety & Energy" | "Development";
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
    category: "Executive Leadership",
    description: "Equipping public sector leaders with the frameworks needed to transition from administrative management to visionary leadership.",
    mode: "In-Person",
    date: "August 15 - August 18, 2026",
    duration: "4 Days",
    price: "₦450,000 / $300",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/tumisu-team-4817006_1920_snf3f5.jpg",
    brochureUrl: "#", // Placeholder
    highlights: ["Change Management", "Policy Implementation", "Stakeholder Engagement"]
  },
  {
    id: "2",
    slug: "data-intelligence-decision-making",
    title: "Data Intelligence & Decision Support Systems",
    category: "Technology & AI",
    description: "A deep dive into using geospatial analytics, big data, and M&E metrics to drive evidence-based policy making.",
    mode: "Virtual",
    date: "September 5 - September 7, 2026",
    duration: "3 Days",
    price: "₦250,000 / $170",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/advogadoaguilar-right-4703925_1920_cfxytf.jpg",
    highlights: ["GIS Analytics", "Predictive Modeling", "M&E Dashboards"]
  },
  {
    id: "3",
    slug: "results-based-management-masterclass",
    title: "Results-Based Management Masterclass",
    category: "Development",
    description: "Master the principles of RBM to align daily operations with long-term strategic institutional goals.",
    mode: "Hybrid",
    date: "October 10 - October 14, 2026",
    duration: "5 Days",
    price: "₦350,000 / $235",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/geralt-business-10209984_1920_hkw8iy.jpg",
    highlights: ["Logical Frameworks", "Impact Tracking", "Performance Audits"]
  },
  {
    id: "4",
    slug: "financial-modeling-valuation",
    title: "Financial Modeling & Valuation",
    category: "Business & Finance",
    description: "Build robust financial models to evaluate business performance and support strategic investment decisions.",
    mode: "Virtual",
    date: "November 12 - November 15, 2026",
    duration: "4 Days",
    price: "₦300,000 / $200",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/advogadoaguilar-right-4703925_1920_cfxytf.jpg",
    highlights: ["DCF Valuation", "Scenario Analysis", "Risk Assessment"]
  },
  {
    id: "5",
    slug: "advanced-project-management",
    title: "Advanced Project Management",
    category: "Human Capital & Management",
    description: "Master modern project management methodologies to ensure on-time and under-budget delivery of complex initiatives.",
    mode: "In-Person",
    date: "December 1 - December 4, 2026",
    duration: "4 Days",
    price: "₦400,000 / $270",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/tumisu-team-4817006_1920_snf3f5.jpg",
    highlights: ["Agile & Scrum", "Resource Allocation", "Stakeholder Communication"]
  },
  {
    id: "6",
    slug: "ai-in-business-operations",
    title: "AI in Business Operations",
    category: "Technology & AI",
    description: "Discover how to integrate Artificial Intelligence into your daily operations for maximum efficiency and growth.",
    mode: "Hybrid",
    date: "January 10 - January 13, 2027",
    duration: "4 Days",
    price: "₦500,000 / $335",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030197/geralt-business-10209984_1920_hkw8iy.jpg",
    highlights: ["Process Automation", "Predictive Analytics", "AI Ethics"]
  }
];

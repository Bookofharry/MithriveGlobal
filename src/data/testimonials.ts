export interface Testimonial {
  id: string;
  type: "text" | "video";
  author: string;
  role: string;
  company: string;
  content: string; 
  videoThumbnail?: string;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    type: "text",
    author: "Representative",
    role: "Team",
    company: "JDPI Maiduguri",
    content: "Working with Mithrive Global transformed the way we approached our Household Economic Strengthening (HES) programme. We were struggling with weak implementation structures, inconsistent beneficiary profiling, and limited ability to measure impact. Their team didn’t just deliver training, they helped us strengthen our capacity, standardize our tools, and establish a more data-driven system for planning and monitoring. Today, we are making better-targeted interventions, tracking meaningful outcomes with confidence, and seeing stronger resilience across the households we serve. Their professionalism and practical approach have left a lasting impact on our work."
  },
  {
    id: "2",
    type: "text",
    author: "Ms. Flora",
    role: "Legal Support",
    company: "Financial Reporting Council of Nigeria",
    content: "Mithrive Global provided more than a governance training, they helped us strengthen the way our leadership works together. At a time when leadership alignment and accountability frameworks required significant improvement, they designed and facilitated practical governance interventions that synchronized our leadership team around shared objectives and execution standards. The result has been improved collaboration, clearer accountability, stronger ownership of strategic initiatives, and enhanced compliance across the organization. Their ability to translate governance principles into practical organizational outcomes is truly commendable."
  },
  {
    id: "3",
    type: "text",
    author: "Haj. Hadiza",
    role: "Special Adviser to the Governor on Land Matters",
    company: "Kano State Government",
    content: "“Our vision for smarter urban development required stronger integration of geospatial intelligence into planning and decision-making. Mithrive Global delivered an insightful and highly contextualized programme that simplified Smart City concepts while demonstrating how spatial data can drive evidence-based planning and sustainable wealth creation. The sessions significantly enhanced institutional understanding of geospatial strategy and equipped participants with practical perspectives for shaping smarter, data-driven urban development. Their expertise and ability to connect technical concepts with policy and governance realities were exceptional.”"
  }
];

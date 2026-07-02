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
    author: "Aisha Mohammed",
    role: "Director of Operations",
    company: "Federal Ministry of Health",
    content: "Mithrive Global completely transformed our approach to M&E. Their Results-Based Management training gave our team the exact tools needed to track impact, not just output."
  },
  {
    id: "2",
    type: "video",
    author: "Oluwaseun Adeyemi",
    role: "Head of Strategy",
    company: "NIRSAL PLC",
    content: "The Strategic Leadership course was an eye-opener. The facilitation was top-notch.",
    videoThumbnail: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782559312/IMG_1893_yssgye.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "3",
    type: "text",
    author: "Dr. Ibrahim Sani",
    role: "Executive Secretary",
    company: "State Primary Healthcare Board",
    content: "Their capacity building courses are unmatched in Nigeria. We sent 50 staff members for the Data Intelligence cohort and the ROI was immediate in our Q3 reporting."
  }
];

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "future-of-capacity-development",
    title: "The Future of Capacity Development in Africa",
    excerpt: "How emerging technologies and behavioral design are reshaping institutional strengthening across the continent.",
    content: "The landscape of capacity development is evolving rapidly. Traditional training methods are giving way to continuous, technology-enabled learning ecosystems. At Mithrive Global, we have observed that organizations investing in holistic capacity architectures - rather than one-off training seminars - are experiencing a 40% higher retention rate in skills application.\n\nFurthermore, the integration of data intelligence into human resources empowers leaders to make predictive decisions regarding workforce optimization. As we look towards the future, behavioral design will play a critical role in ensuring that new skills translate into resilient, everyday institutional habits.",
    date: "July 2, 2026",
    category: "Insights",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030370/thedigitalartist-network-3148727_1920_jvtdyo.jpg"
  },
  {
    id: "2",
    slug: "smart-climate-innovation",
    title: "Smart Climate Innovation: Beyond Awareness",
    excerpt: "Our journey in designing climate-awareness tools that foster environmental responsibility and resilient behavior.",
    content: "Climate change requires more than just awareness; it demands actionable behavioral shifts. Our latest initiative combines wearable technology with educational frameworks to drive climate consciousness.\n\nWorking closely with local communities and institutions, the Mithrive Initiative for Development launched a smart wristband project. This tool not only acts as a constant physical reminder of environmental commitments but also integrates with digital platforms to track community-wide sustainability goals. The pilot phase in Northern Nigeria has already shown promising shifts in daily resource consumption behaviors.",
    date: "June 15, 2026",
    category: "News",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030370/niekverlaan-tablet-1075790_1920_isxnee.jpg"
  },
  {
    id: "3",
    slug: "results-based-management-success",
    title: "Why Results-Based Management Matters",
    excerpt: "Transitioning from output-focused tracking to real, measurable impact in public sector institutions.",
    content: "For decades, many organizations measured success by how much they did - how many meetings were held, how many reports were generated - rather than what they achieved. Results-Based Management (RBM) flips this script entirely.\n\nBy establishing clear logical frameworks and robust Monitoring & Evaluation (M&E) systems, RBM ensures that every activity ties back to a strategic objective. In our recent consulting engagements across West Africa, implementing RBM frameworks has helped government agencies improve their service delivery metrics by establishing clear accountability loops and data-driven feedback mechanisms.",
    date: "May 28, 2026",
    category: "Methodology",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030370/mohamed_hassan-video-recording-3767454_1920_r0ogsr.jpg"
  },
  {
    id: "4",
    slug: "youth-entrepreneurship-nigeria",
    title: "Scaling Youth Entrepreneurship in Nigeria",
    excerpt: "A deep dive into our recent grassroots empowerment programs and the ripple effect on local economies.",
    content: "Empowering the youth is not just a social imperative; it is an economic necessity. Our recent programs have focused on equipping young Nigerians with scalable skills in tech, agriculture, and business management.\n\nBy moving away from theoretical training and focusing on practical, mentorship-driven incubators, we've seen a surge in micro-enterprises taking root in underserved communities. This grassroots capacity building creates a ripple effect, transforming local economies and providing sustainable pathways out of poverty.",
    date: "April 10, 2026",
    category: "Social Impact",
    imageUrl: "https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030369/jarmoluk-cms-428667_1920_xbw9nn.jpg"
  }
];

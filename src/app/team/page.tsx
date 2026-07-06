import Hero from "@/components/Hero";
import { Metadata } from "next";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team - Expert Consultants Nigeria & Africa",
  description: "Harvard-trained, SURCON, ICAN, Oracle & Google certified experts driving institutional performance and systems strengthening across Africa.",
  alternates: {
    canonical: "https://mithriveglobal.com/team",
  },
  openGraph: {
    title: "Our Team - Expert Consultants Across Nigeria & Africa",
    description: "Meet the experts driving institutional performance: Harvard-trained, PhD, SURCON, ICAN certified professionals strengthening systems across Africa.",
    url: "https://mithriveglobal.com/team",
  },
};

const coreTeam = [
  {
    name: "Mohammed Ibrahim M.",
    role: "Head, Program & Development",
    bio: "Mohammed is the Head of Programs & Development at Mithrive Global Ltd, steering the strategic design and execution of organizational development, leadership, and institutional strengthening initiatives across the public, private, and development sectors. With over a decade of enterprise experience, Mohammed delivers high-impact programs that drive operational excellence and systemic performance. He holds an MBA from Bingham University and a B.Tech in Geomatics Engineering from the Federal University of Technology, Minna. His credentials include executive certification in Power and Influence for Positive Impact from Harvard Business School Online, alongside specialized institutional training from USAID. A member of the Abuja Chamber of Commerce and Industry and the Surveyors Council of Nigeria, Mohammed blends strategic acumen with geospatial innovation. He is a trusted advisor recognized for deploying evidence-based solutions that transform government institutions, private enterprises, and NGOs globally.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556321/image26_gflbah.jpg"
  },
  {
    name: "Chinonso F. Aninwodo",
    role: "Head, Corporate Branding & Marketing",
    bio: "Chinonso Aninwodo is the Head of Corporate Branding and Marketing at Mithrive Global Ltd, where he has led the company's branding, digital communications, and corporate marketing initiatives since its inception. With nearly a decade of experience in branding, multimedia communications, and digital marketing, he is responsible for driving the organization's brand strategy, strengthening market visibility, and positioning the company as a trusted partner in organizational development and consulting. Prior to joining Mithrive Global Ltd, Chinonso built extensive experience in multimedia production, digital communications, and content strategy, delivering creative solutions for public and private sector organizations. His portfolio includes the successful execution of the Presidential Documentary for the National Commission for Refugees, Migrants and Internally Displaced Persons (NCFRMI), alongside several high-impact branding and communications projects. His expertise spans corporate branding, strategic communications, digital marketing, content development, multimedia production, social media strategy, live broadcasting, and stakeholder engagement. Recognized for combining creativity with strategic execution, Chinonso is committed to building strong brands, delivering compelling corporate narratives, and advancing organizational growth through innovative marketing and communications.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782558410/image23_kxjooi.jpg"
  },
  {
    name: "Agada Lucy",
    role: "Head, Human Capital & Organizational Development",
    bio: "Mrs. Agada Lucy is the Head of Human Capital & Organizational Development at Mithrive Global Ltd, where she leads initiatives focused on talent management, organizational effectiveness, workforce development, and administrative excellence. Since joining the firm, she has played a key role in strengthening internal systems and supporting the delivery of people-centered consulting solutions. Prior to Mithrive Global Ltd, she served in administrative and operational roles at Kashoco Global and RoyalKings Court, where she contributed to organizational efficiency and business operations. Her expertise spans human capital administration, organizational coordination, stakeholder engagement, and operational support, enabling sustainable organizational growth and high-performing teams.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782558393/image20_murzsu.jpg"
  },
  {
    name: "Dr. Tejaswini Hiremath",
    role: "Technical Expert",
    bio: "Mrs. Tejaswini serves as the Program Technical Expert at Mithrive Global Ltd, providing strategic technical guidance and advisory support for the organization's social impact and development initiatives. With over 20 years of experience across the international development sector in Asia and Europe, she brings extensive expertise in program design, technical assistance, stakeholder engagement, and capacity development. Her global perspective and deep understanding of development programming strengthen Mithrive Global Ltd's ability to deliver sustainable, evidence-based interventions. Mrs. Tejaswini is recognized for her commitment to advancing inclusive development, fostering strategic partnerships, and supporting programs that create lasting social and institutional impact across diverse communities.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556608/image25_if8qsm.jpg"
  },
  {
    name: "Karl Klausewitz",
    role: "Global Public Relations Partner",
    bio: "Karl Klausewitz serves as the Global Public Relations Partner at Mithrive Global Ltd. With over 15 years of experience, he provides strategic guidance on international partnerships, corporate reputation, and global stakeholder engagement. With a multidisciplinary background in United States of America spanning strategic communications, marketing, fundraising, information technology, and leadership coaching, he brings a unique perspective to advancing the organization's global visibility and influence. Karl is widely recognized for helping leaders and organizations build purpose-driven brands that inspire trust and meaningful impact. His expertise in relationship management, strategic positioning, and cross-cultural engagement strengthens Mithrive Global Ltd's mission to deliver transformative solutions while expanding its international reach and strategic collaborations.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556565/image17_fvsttx.jpg"
  },
  {
    name: "Fatima Binta M.",
    role: "Head, Finance & Business Operations",
    bio: "Fatima Binta M. is the Head of Finance & Business Operations at Mithrive Global Ltd, where she provides strategic leadership in financial management, business operations, and organizational efficiency. Since joining the firm, she has played a vital role in strengthening operational systems and supporting sustainable business growth. Prior to Mithrive Global Ltd, she built several years of professional experience across the banking and telecommunications sectors, developing expertise in financial operations, customer relationship management, process improvement, and business administration. She is recognized for her analytical approach, operational discipline, and commitment to driving financial excellence and organizational performance.",
    image: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556665/image28_kcops5.jpg"
  }
];

export default function Team() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Our Team"
        subtitle="Meet the experts driving institutional performance and systems strengthening across Africa."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030062/mohamed_hassan-teamwork-3213924_1920_hjytta.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">The Core Team</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto mt-6"></div>
          </div>
          
          <TeamGrid team={coreTeam} />
        </div>
      </section>
    </div>
  );
}

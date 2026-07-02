import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { articles } from "@/data/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications & Insights",
  description: "Read our latest articles, news, and insights on capacity development, institutional strengthening, and results-based management.",
};

export default function PublicationsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Hero 
        title="Publications & Insights"
        subtitle="Explore our weekly articles, latest news, and deep-dive insights into our activities and industry trends across Africa."
        backgroundImage="https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1783030061/u_c48rf6ybx8-business-10186537_1920_zjbbbs.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/publications/${article.slug}`} className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 h-full">
                <div className="relative h-64 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image 
                    src={article.imageUrl} 
                    alt={article.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-lime bg-brand-navy px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-lime transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-brand-navy font-bold group-hover:text-brand-lime transition-colors pt-4 border-t border-gray-50">
                    Read Full Article
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

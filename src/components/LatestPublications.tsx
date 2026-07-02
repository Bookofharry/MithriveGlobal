import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";

export default function LatestPublications() {
  const latestArticles = articles.slice(0, 3); // Get top 3

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-navy">Latest Insights & News</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our recent publications, industry insights, and updates on our latest activities across Africa.
            </p>
          </div>
          <Link 
            href="/publications" 
            className="inline-flex items-center text-brand-navy font-semibold hover:text-brand-lime transition-colors whitespace-nowrap"
          >
            View all publications
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <Link key={article.id} href={`/publications/${article.slug}`} className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 h-full">
              <div className="relative h-56 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image 
                  src={article.imageUrl} 
                  alt={article.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-lime bg-brand-navy px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-lime transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center text-brand-navy font-medium group-hover:text-brand-lime transition-colors pt-4 border-t border-gray-50">
                  Read Article
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

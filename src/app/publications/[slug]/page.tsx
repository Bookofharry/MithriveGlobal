import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Article Header */}
      <div className="w-full bg-brand-navy pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-lime bg-white/10 px-4 py-1.5 rounded-full">
              {article.category}
            </span>
            <span className="text-gray-300 font-medium">
              {article.date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
            {article.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
          <Image 
            src={article.imageUrl}
            alt={article.title}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-blue max-w-none text-gray-800">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed text-[1.1rem]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center">
          <Link 
            href="/publications"
            className="inline-flex items-center text-brand-navy font-bold hover:text-brand-lime transition-colors text-lg px-6 py-3 rounded-full hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Back to all Publications
          </Link>
        </div>
      </div>
    </div>
  );
}

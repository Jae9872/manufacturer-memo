import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | QuoteClarity",
  description: "Learn about Incoterms, UK manufacturing compliance, and how to decode factory quotes for your indie brand.",
};

export default function BlogPage() {
  const articles = [
    {
      title: "Understanding Incoterms: FOB vs EXW Explained",
      description: "A plain-English guide to the most common Incoterms used in international manufacturing quotes.",
      slug: "incoterms-fob-vs-exw",
      date: "2026-04-28",
    },
    {
      title: "UK Cosmetics Compliance Checklist 2026",
      description: "What certifications and labels your beauty products need before clearing UK customs.",
      slug: "uk-cosmetics-compliance-checklist-2026",
      date: "2026-04-28",
    },
    {
      title: "How to Negotiate MOQs: 5 Questions to Ask",
      description: "Protect your cash flow by asking these critical questions before signing with a factory.",
      slug: "negotiate-moqs-5-questions",
      date: "2026-04-28",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F2]">
      <div className="max-w-3xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-slate-900 mb-4 tracking-tighter">
            Resources
          </h1>
          <p className="text-xl font-light text-slate-600 max-w-2xl mx-auto">
            Learn how to decode factory quotes and navigate UK manufacturing compliance.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-[#E0E0D0] hover:bg-white/80 transition-all duration-300">
              <time className="text-sm text-slate-500">{article.date}</time>
              <h2 className="text-2xl font-serif text-slate-900 mt-2 mb-3">
                {article.title}
              </h2>
              <p className="text-slate-600 mb-4">{article.description}</p>
              <a
                href={`/blog/${article.slug}`}
                className="text-slate-900 font-medium hover:underline"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

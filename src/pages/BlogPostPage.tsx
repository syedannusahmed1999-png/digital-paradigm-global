import React from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { ArrowLeft, ArrowRight, Clock, User, Share2, CheckCircle2 } from 'lucide-react';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenEstimator: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onNavigate, onOpenEstimator }) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="w-full bg-slate-950 text-slate-100">
      
      {/* Article Header */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800/80">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <button
            onClick={() => onNavigate('/blog')}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Articles</span>
          </button>

          {/* Clean unboxed metadata with separators */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <span className="text-blue-400 font-semibold">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-blue-400 font-bold border border-slate-700">
                {post.author.avatarInitials}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-slate-400">{post.author.role} · The Digital Paradigm</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Share Article</span>
            </button>
          </div>

        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10">
            {post.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.sectionTitle && (
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {section.sectionTitle}
                  </h2>
                )}

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className="my-6 rounded-xl border border-blue-500/30 bg-blue-950/20 p-5 text-xs sm:text-sm text-blue-200 leading-relaxed">
                    {section.callout}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-16 rounded-xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-base shrink-0">
              {post.author.avatarInitials}
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Written by {post.author.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {post.author.role} at The Digital Paradigm. Specializing in enterprise distributed systems, generative AI orchestration, and cloud scale architectures.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-10 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white mb-6">Related Insights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => onNavigate(`/blog/${rel.slug}`)}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-slate-700 hover:bg-slate-900 transition-all cursor-pointer group"
                >
                  <div className="text-[11px] text-blue-400 font-semibold mb-1">
                    {rel.category}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 mt-2 block">
                    {rel.readTime}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center rounded-2xl border border-blue-500/30 bg-slate-900/90 p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">
              Discuss Your Architectural Challenges With Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Our engineering leadership is available for technical consultations, code audits, and strategic feasibility sessions.
            </p>
            <button
              onClick={onOpenEstimator}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Schedule Discovery Call
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

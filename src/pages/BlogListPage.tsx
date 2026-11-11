import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { ArrowRight, Search, BookOpen, Clock, User } from 'lucide-react';

interface BlogListPageProps {
  onNavigate: (path: string) => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI & Engineering', 'Software Engineering', 'E-Commerce', 'Mobile Development', 'Growth Marketing'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-slate-950 text-slate-100">
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
            <button onClick={() => onNavigate('/')} className="hover:text-slate-300">
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-white">Insights & Blog</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering Architecture, AI & Growth Insights
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Technical blueprints, architectural evaluations, and growth methodologies written directly by our senior engineering leadership and solutions architects.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Segmented Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <BookOpen className="h-10 w-10 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No articles match your criteria</h3>
              <p className="text-xs text-slate-400">
                Try searching for a different keyword or select "All" categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 hover:border-slate-700 hover:bg-slate-900 transition-all cursor-pointer group"
                >
                  <div className="space-y-4">
                    {/* Clean unboxed metadata with separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="text-blue-400 font-semibold">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-blue-400 text-xs font-bold border border-slate-700">
                        {post.author.avatarInitials}
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold text-slate-200 block">{post.author.name}</span>
                        <span className="text-slate-500 text-[11px]">{post.publishedAt}</span>
                      </div>
                    </div>

                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

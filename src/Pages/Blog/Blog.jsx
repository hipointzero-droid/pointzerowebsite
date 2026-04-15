import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/Stars';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { blogPosts, blogCategories } from './blogData';

// Icons
import ArticleIcon from '@mui/icons-material/Article';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CloseIcon from '@mui/icons-material/Close';

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePostId, setActivePostId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load from URL params on mount
  useEffect(() => {
    const postSlug = searchParams.get('post');
    if (postSlug) {
      const post = blogPosts.find(p => p.slug === postSlug);
      if (post) setActivePostId(post.id);
    }
  }, [searchParams]);

  // Update URL when active post changes
  useEffect(() => {
    if (activePostId) {
      const post = blogPosts.find(p => p.id === activePostId);
      if (post) {
        setSearchParams({ post: post.slug });
        // Update page title for SEO
        document.title = `${post.title} | Point Zero Blog`;
      }
    } else {
      setSearchParams({});
      document.title = 'Blog — Insights & Case Studies | Point Zero';
    }
  }, [activePostId]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const activePost = blogPosts.find(p => p.id === activePostId);
  const featuredPosts = blogPosts.filter(p => p.featured);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get next and previous posts for navigation
  const currentIndex = activePost ? blogPosts.findIndex(p => p.id === activePost.id) : -1;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const handlePostClick = (postId) => {
    setActivePostId(postId);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ──────────────────────────────────────────────
  // DETAIL VIEW
  // ──────────────────────────────────────────────
  if (activePost) {
    return (
      <div className="bg-black min-h-screen">
        <Navbar />

        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed bottom-6 right-6 z-50 lg:hidden p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform"
          aria-label="Toggle blog list"
        >
          <ArticleIcon />
        </button>

        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">

              {/* Sidebar - Blog List */}
              <aside className={`
                fixed lg:sticky lg:top-24 inset-0 lg:inset-auto z-40 lg:z-auto
                w-full lg:w-80 lg:min-w-[320px] lg:max-h-[calc(100vh-7rem)] lg:self-start
                bg-black/95 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none
                overflow-y-auto lg:overflow-y-auto scrollbar-hide
                transition-transform duration-300
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              `}>
                <div className="p-6 lg:p-0">
                  {/* Mobile close */}
                  <div className="flex items-center justify-between lg:hidden mb-6">
                    <h3 className="text-lg font-bold text-white">All Posts</h3>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-2 text-gray-400 hover:text-white"
                    >
                      <CloseIcon />
                    </button>
                  </div>

                  {/* Search in sidebar */}
                  <div className="relative mb-4">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  {/* Post list */}
                  <div className="space-y-2">
                    {filteredPosts.map((post) => (
                      <button
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group ${
                          post.id === activePostId
                            ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/30'
                            : 'bg-white/[0.02] border border-transparent hover:bg-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {post.thumbnail && (
                            <img
                              src={post.thumbnail}
                              alt={post.title}
                              className={`w-12 h-12 rounded-xl object-cover shrink-0 border ${
                                post.id === activePostId ? 'border-cyan-500/40' : 'border-white/10'
                              }`}
                            />
                          )}
                          <div className="min-w-0">
                            <h4 className={`text-sm font-semibold leading-snug line-clamp-2 ${
                              post.id === activePostId ? 'text-cyan-400' : 'text-gray-300 group-hover:text-white'
                            } transition-colors`}>
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className={`inline-flex items-center text-xs px-2 py-0.5 rounded-md ${
                                post.id === activePostId
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'bg-white/5 text-gray-500'
                              }`}>
                                {post.category}
                              </span>
                              <span className="text-xs text-gray-600">{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Main Content - Post Detail */}
              <main className="flex-1 min-w-0">
                {/* Back button */}
                <button
                  onClick={() => setActivePostId(null)}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
                >
                  <ArrowBackIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span className="text-sm font-medium">Back to all posts</span>
                </button>

                <article className="relative">
                  {/* Post header */}
                  <AnimateOnScroll as="header" variant="up">
                    <div className="mb-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r ${activePost.gradient} bg-clip-text text-transparent border border-white/10`}>
                        <LocalOfferIcon className="w-3.5 h-3.5 text-gray-400" />
                        {activePost.category}
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {activePost.title}
                    </h1>

                    <p className="mt-4 text-lg text-gray-400 leading-relaxed">
                      {activePost.excerpt}
                    </p>

                    {/* Hero Image */}
                    {activePost.image && (
                      <div className="mt-8 relative rounded-2xl overflow-hidden border border-white/10">
                        <div className={`absolute inset-0 bg-gradient-to-br ${activePost.gradient} opacity-10`}></div>
                        <img
                          src={activePost.image}
                          alt={activePost.title}
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        />
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-6 mt-8 pb-8 border-b border-white/10">
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                          PZ
                        </div>
                        <span className="text-sm">{activePost.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                        <CalendarTodayIcon className="w-4 h-4" />
                        {formatDate(activePost.date)}
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                        <AccessTimeIcon className="w-4 h-4" />
                        {activePost.readTime}
                      </div>
                    </div>
                  </AnimateOnScroll>

                  {/* Post body */}
                  <div className="mt-10 space-y-8">
                    {activePost.content.map((block, index) => {
                      if (block.type === 'paragraph') {
                        return (
                          <AnimateOnScroll key={index} as="p" variant="up" delay={1}>
                            <span className="text-gray-300 leading-relaxed text-lg">
                              {block.text}
                            </span>
                          </AnimateOnScroll>
                        );
                      }

                      if (block.type === 'heading') {
                        return (
                          <AnimateOnScroll key={index} as="h2" variant="up" delay={1}>
                            <span className="text-2xl font-bold text-white mt-4 block">
                              {block.text}
                            </span>
                          </AnimateOnScroll>
                        );
                      }

                      if (block.type === 'list') {
                        return (
                          <AnimateOnScroll key={index} as="ul" variant="up" delay={1}>
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-3">
                              {block.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </div>
                          </AnimateOnScroll>
                        );
                      }

                      if (block.type === 'quote') {
                        return (
                          <AnimateOnScroll key={index} as="blockquote" variant="scale" delay={1}>
                            <div className="relative pl-6 py-8 px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-l-4 border-cyan-500 rounded-r-2xl">
                              <FormatQuoteIcon className="absolute top-4 right-4 w-8 h-8 text-white/10" />
                              <p className="text-xl italic text-gray-200 leading-relaxed">
                                "{block.text}"
                              </p>
                              {block.author && (
                                <p className="mt-4 text-sm text-cyan-400 font-medium">
                                  — {block.author}
                                </p>
                              )}
                            </div>
                          </AnimateOnScroll>
                        );
                      }

                      return null;
                    })}
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {activePost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post navigation */}
                  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prevPost && (
                      <button
                        onClick={() => handlePostClick(prevPost.id)}
                        className="group text-left p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <span className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1">
                          <ArrowBackIcon className="w-3 h-3" /> Previous
                        </span>
                        <h4 className="mt-2 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                          {prevPost.title}
                        </h4>
                      </button>
                    )}
                    {nextPost && (
                      <button
                        onClick={() => handlePostClick(nextPost.id)}
                        className="group text-right p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 sm:ml-auto"
                      >
                        <span className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1 justify-end">
                          Next <ArrowForwardIcon className="w-3 h-3" />
                        </span>
                        <h4 className="mt-2 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                          {nextPost.title}
                        </h4>
                      </button>
                    )}
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // ──────────────────────────────────────────────
  // LIST VIEW (default)
  // ──────────────────────────────────────────────
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow animate-float-gentle" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <AnimateOnScroll className="text-center" as="div" variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <TrendingUpIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Insights & Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              From Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Engineering Blog
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Deep dives into how we build, ship, and scale software for the Nepali market and beyond. 
              Real projects. Real lessons. No fluff.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  id="blog-search"
                />
              </div>

              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide pb-1">
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                        : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'All' && searchQuery === '' && (
        <section className="relative py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll as="div" variant="up">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                Featured
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <AnimateOnScroll key={post.id} as="div" variant="scale" delay={index + 1}>
                  <button
                    onClick={() => handlePostClick(post.id)}
                    className="block w-full text-left group shine-wrap"
                  >
                    <div className="relative bg-gray-900/60 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 h-full">
                      {/* Image */}
                      {post.image && (
                        <div className="relative h-48 overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20`}></div>
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
                        </div>
                      )}

                      <div className="p-8">
                      {/* Gradient accent */}
                      {!post.image && <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${post.gradient}`}></div>}

                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${post.gradient} text-white`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="mt-3 text-gray-400 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-cyan-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read <ArrowForwardIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                  </button>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === 'All' && searchQuery === '' && (
            <AnimateOnScroll as="div" variant="up">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
                All Articles
              </h2>
            </AnimateOnScroll>
          )}

          {filteredPosts.length === 0 ? (
            <AnimateOnScroll as="div" variant="scale">
              <div className="text-center py-20">
                <SearchIcon className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400">No posts found</h3>
                <p className="text-gray-600 mt-2">Try adjusting your search or filter</p>
              </div>
            </AnimateOnScroll>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <AnimateOnScroll key={post.id} as="div" variant="scale" delay={index % 6}>
                  <button
                    onClick={() => handlePostClick(post.id)}
                    className="block w-full text-left group shine-wrap h-full"
                  >
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/5 h-full flex flex-col">
                      {/* Thumbnail Image */}
                      {post.thumbnail && (
                        <div className="relative h-44 overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-15`}></div>
                          <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-grow">
                      {/* Category badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent border border-white/10`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-600 flex items-center gap-1">
                          <AccessTimeIcon className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="mt-3 text-gray-400 text-sm line-clamp-3 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-xs text-gray-600">
                          {formatDate(post.date)}
                        </span>
                        <span className="text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read
                          <ArrowForwardIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                  </button>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll as="div" variant="scale" className="relative shine-wrap">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative p-12 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:border-cyan-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Got a Project Idea?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                We turn ideas into shipped products. Let's talk about what we can build together.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start a Conversation
                <ArrowForwardIcon className="w-5 h-5" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}

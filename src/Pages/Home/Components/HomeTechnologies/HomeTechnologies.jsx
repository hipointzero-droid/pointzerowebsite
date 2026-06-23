import React, { useState } from "react";
import { initialState } from "./initailState";
import { AI } from "./constants";
import ImageReturn from "./ImageReturn";
import AnimateOnScroll from "../../../../components/AnimateOnScroll";

/**
 * Human-readable display name for a tech slug. `openai` -> `OpenAI`,
 * `vertex_ai` -> `Vertex AI`, `pgvector` -> `pgvector` (kept lowercase).
 */
const DISPLAY_OVERRIDES = {
  openai: "OpenAI",
  anthropic: "Anthropic",
  gemini: "Gemini",
  llama: "Llama",
  mistral: "Mistral",
  tensorflow: "TensorFlow",
  pytorch: "PyTorch",
  langchain: "LangChain",
  vertex_ai: "Vertex AI",
  pinecone: "Pinecone",
  pgvector: "pgvector",
  huggingface: "Hugging Face",
  react_native: "React Native",
  next: "Next.js",
  spring_boot: "Spring Boot",
  google_cloud: "Google Cloud",
  google_adwords: "Google Ads",
  google_analytics: "Google Analytics",
  asp_net: "ASP.NET",
};

function formatName(slug) {
  if (DISPLAY_OVERRIDES[slug]) return DISPLAY_OVERRIDES[slug];
  return slug
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

/**
 * Brand-coloured monogram fallback. Used for AI/LLM logos we do not ship
 * raster files for. Each brand gets a one-letter or short mark on a tinted
 * background that roughly matches its visual identity.
 */
const MONOGRAM_STYLES = {
  openai:       { mark: "AI",  bg: "from-emerald-500/30 to-emerald-700/40", ring: "ring-emerald-400/40", text: "text-emerald-100" },
  anthropic:    { mark: "A",   bg: "from-amber-500/30 to-orange-700/40",   ring: "ring-amber-400/40",   text: "text-amber-100" },
  gemini:       { mark: "G",   bg: "from-sky-500/30 to-indigo-700/40",     ring: "ring-sky-400/40",     text: "text-sky-100" },
  llama:        { mark: "L",   bg: "from-blue-500/30 to-violet-700/40",    ring: "ring-blue-400/40",    text: "text-blue-100" },
  mistral:      { mark: "M",   bg: "from-orange-500/30 to-rose-700/40",    ring: "ring-orange-400/40",  text: "text-orange-100" },
  tensorflow:   { mark: "TF",  bg: "from-amber-500/25 to-orange-700/35",   ring: "ring-amber-400/40",   text: "text-amber-100" },
  pytorch:      { mark: "PT",  bg: "from-rose-500/30 to-pink-700/40",      ring: "ring-rose-400/40",    text: "text-rose-100" },
  langchain:    { mark: "🦜",  bg: "from-emerald-500/25 to-teal-700/40",   ring: "ring-emerald-400/40", text: "text-emerald-100" },
  vertex_ai:    { mark: "V",   bg: "from-blue-500/30 to-cyan-700/40",      ring: "ring-blue-400/40",    text: "text-blue-100" },
  pinecone:     { mark: "P",   bg: "from-emerald-500/25 to-green-700/40",  ring: "ring-emerald-400/40", text: "text-emerald-100" },
  pgvector:     { mark: "pg",  bg: "from-indigo-500/30 to-blue-700/40",    ring: "ring-indigo-400/40",  text: "text-indigo-100" },
  huggingface:  { mark: "🤗",  bg: "from-yellow-500/30 to-orange-700/40",  ring: "ring-yellow-400/40",  text: "text-yellow-100" },
};

function Monogram({ slug }) {
  const s = MONOGRAM_STYLES[slug] || {
    mark: slug.slice(0, 2).toUpperCase(),
    bg: "from-cyan-500/25 to-blue-700/40",
    ring: "ring-cyan-400/40",
    text: "text-cyan-100",
  };
  return (
    <div
      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.bg} ring-1 ${s.ring} flex items-center justify-center font-bold text-lg ${s.text}`}
      aria-hidden="true"
    >
      <span>{s.mark}</span>
    </div>
  );
}

function TechCard({ category, slug }) {
  const src = ImageReturn(category, slug);
  return (
    <div
      className="group relative h-full p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/40 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Soft halo on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />

      {src ? (
        <div className="w-14 h-14 rounded-2xl bg-black/50 ring-1 ring-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <img
            src={src}
            alt={`${formatName(slug)} logo`}
            loading="lazy"
            decoding="async"
            width="40"
            height="40"
            className="max-w-[40px] max-h-[40px] object-contain"
          />
        </div>
      ) : (
        <Monogram slug={slug} />
      )}

      <p className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors">
        {formatName(slug)}
      </p>
    </div>
  );
}

const HomeTechnologies = () => {
  const [selected, setSelected] = useState(0);
  const categories = initialState.tech;
  const activeCategory = categories[selected];
  const activeName = activeCategory[0];
  const activeSlugs = activeCategory[1];

  return (
    <section
      aria-labelledby="stack-heading"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-transparent to-purple-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(168,85,247,0.10),transparent)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <AnimateOnScroll as="div" variant="up" className="mb-6">
          <div className="flex items-center gap-3 text-cyan-400">
            <span className="block w-10 h-px bg-cyan-400/60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase">The Stack</span>
          </div>
        </AnimateOnScroll>

        {/* Headline */}
        <AnimateOnScroll as="div" variant="up" delay={1} className="max-w-4xl">
          <h2
            id="stack-heading"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-[1.05]"
          >
            The AI and engineering stack behind{" "}
            <span className="block italic font-serif bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              intelligent applications.
            </span>
          </h2>
        </AnimateOnScroll>

        {/* Category tabs */}
        <AnimateOnScroll as="div" variant="up" delay={2} className="mt-10">
          <div
            role="tablist"
            aria-label="Technology categories"
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {categories.map(([name], index) => {
              const isActive = selected === index;
              const display = name === "DIGIAL_MARKETING" ? "Digital Marketing" : name;
              return (
                <button
                  key={name}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`stack-panel-${index}`}
                  id={`stack-tab-${index}`}
                  onClick={() => setSelected(index)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                      : "bg-white/[0.04] text-gray-400 border border-white/10 hover:text-white hover:bg-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {display}
                </button>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* Grid */}
        <AnimateOnScroll
          as="div"
          variant="up"
          delay={3}
          className="mt-10"
        >
          <div
            role="tabpanel"
            id={`stack-panel-${selected}`}
            aria-labelledby={`stack-tab-${selected}`}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
          >
            {activeSlugs.map((slug) => (
              <TechCard key={slug} category={activeName} slug={slug} />
            ))}
          </div>
        </AnimateOnScroll>

        {/* Footnote — mirrors the reference's tone, in our voice */}
        <AnimateOnScroll as="div" variant="up" delay={4} className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs sm:text-sm text-gray-500 italic max-w-3xl">
            ※ This is a snapshot, not a ceiling — we continuously fold in new
            models, frameworks and tools as they ship.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            Have a project to discuss?
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M5 10h10M11 6l4 4-4 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HomeTechnologies;

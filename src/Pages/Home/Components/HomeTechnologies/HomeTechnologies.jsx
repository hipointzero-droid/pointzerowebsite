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
const MONOGRAM_MARKS = {
  openai: "AI",
  anthropic: "A",
  gemini: "G",
  llama: "L",
  mistral: "M",
  tensorflow: "TF",
  pytorch: "PT",
  langchain: "LC",
  vertex_ai: "V",
  pinecone: "P",
  pgvector: "pg",
  huggingface: "HF",
};

function Monogram({ slug }) {
  const mark = MONOGRAM_MARKS[slug] || slug.slice(0, 2).toUpperCase();
  return (
    <div
      className="w-14 h-14 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 flex items-center justify-center font-bold text-sm text-brand"
      aria-hidden="true"
    >
      <span>{mark}</span>
    </div>
  );
}

function TechCard({ category, slug }) {
  const src = ImageReturn(category, slug);
  return (
    <div
      className="group relative h-full p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
    >

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

      <p className="text-neutral-400 text-sm font-medium text-center group-hover:text-white transition-colors">
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
      className="relative border-t border-white/10 py-20 lg:py-28 overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll as="div" variant="up" className="mb-6">
          <div className="flex items-center gap-3 text-brand">
            <span className="block w-10 h-px bg-brand/60" aria-hidden="true" />
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
            <span className="block italic font-serif text-brand">
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
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-white/[0.04] text-neutral-400 border border-white/10 hover:text-white hover:bg-white/[0.08] hover:border-white/20"
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
          <p className="text-xs sm:text-sm text-neutral-500 italic max-w-3xl">
            ※ This is a snapshot, not a ceiling — we continuously fold in new
            models, frameworks and tools as they ship.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-white transition-colors"
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

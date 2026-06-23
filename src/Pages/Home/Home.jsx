import React from 'react';
import TopSection from './Components/TopSection';
import InnovateSection from './Components/InnovateSection';
import Features from './Components/Features';
import OurServices from './Components/OurServices';
import OurCoreFeatures from './Components/OurCoreFeatures';
import DetailSection from './Components/DetailSection';
import ProcessSection from './Components/ProcessSection';
import FaqSection from './Components/FaqSection';
import AiSection from './Components/AiSection';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Navbar from '../../components/Navbar';
import HomeTechnologies from './Components/HomeTechnologies/HomeTechnologies';
import IndustriesSection from './Components/IndustriesSection';
import HowWeEngage from './Components/HowWeEngage';
import Guarantee from './Components/Guarantee';
import ScenarioCTA from './Components/ScenarioCTA';
import Seo from '../../components/Seo';

const ORIGIN = 'https://pointzero.com.np';

export default function Home() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
        '@id': `${ORIGIN}/#organization`,
        name: 'Pointzero',
        legalName: 'Point Zero',
        url: `${ORIGIN}/`,
        logo: `${ORIGIN}/og-image.png`,
        image: `${ORIGIN}/og-image.png`,
        description:
          'Pointzero is a digital product studio in Kathmandu, Nepal building modern websites, mobile apps, custom software and AI/RAG products.',
        email: 'hi.pointzero@gmail.com',
        telephone: '+977-9860486269',
        priceRange: '$$',
        areaServed: ['Nepal', 'Worldwide'],
        slogan: 'Your trusted development partner in Nepal — from idea to AI‑powered product.',
        knowsAbout: [
          'Web Development',
          'Mobile App Development',
          'Custom Software Development',
          'UI/UX Design',
          'QA and Software Testing',
          'DevOps and Cloud Infrastructure',
          'Artificial Intelligence',
          'Generative AI',
          'Large Language Models (LLM)',
          'Retrieval-Augmented Generation (RAG)',
          'Vector Databases',
          'AI Agents',
          'LangChain',
          'LangGraph',
          'OpenAI API',
          'Anthropic Claude API',
          'Google Gemini API',
          'Llama',
          'pgvector',
          'Pinecone',
          'Weaviate',
          'React',
          'Next.js',
          'Flutter',
          'Django',
          'Node.js',
          'PostgreSQL',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kathmandu',
          addressRegion: 'Bagmati',
          addressCountry: 'NP',
        },
        founder: {
          '@type': 'Person',
          '@id': `${ORIGIN}/about#kripas-khatiwada`,
          name: 'Kripas Khatiwada',
          jobTitle: 'CEO & Founder',
          url: `${ORIGIN}/about`,
          worksFor: { '@id': `${ORIGIN}/#organization` },
          nationality: { '@type': 'Country', name: 'Nepal' },
          sameAs: [
            'https://www.linkedin.com/in/kripas-khatiwada/',
            'https://github.com/kripaskhatiwada',
          ],
        },
        founders: [
          {
            '@type': 'Person',
            '@id': `${ORIGIN}/about#kripas-khatiwada`,
            name: 'Kripas Khatiwada',
          },
        ],
        sameAs: [
          'https://www.facebook.com/pointzero.com.np/',
          'https://www.instagram.com/pointzero.com.np/',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Pointzero services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI & RAG Software Development',
                serviceType: 'Artificial Intelligence software development',
                description:
                  'Production‑grade AI software in Nepal: RAG chatbots, AI agents, LLM integrations (Claude, GPT, Gemini, Llama), vector search, fine‑tuning and evals.',
                provider: { '@id': `${ORIGIN}/#organization` },
                areaServed: ['Nepal', 'Worldwide'],
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Development',
                description: 'Modern, conversion‑focused websites and web applications built with React, Next.js and Django.',
                provider: { '@id': `${ORIGIN}/#organization` },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile App Development',
                description: 'iOS and Android apps with Flutter and React Native.',
                provider: { '@id': `${ORIGIN}/#organization` },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Software Development',
                description: 'Bespoke business software, internal tools and SaaS platforms.',
                provider: { '@id': `${ORIGIN}/#organization` },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'UI/UX Design',
                description: 'Product design, design systems and conversion‑focused interfaces.',
                provider: { '@id': `${ORIGIN}/#organization` },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'DevOps & Cloud Infrastructure',
                description: 'AWS, GCP, Vercel — CI/CD, observability and reliability.',
                provider: { '@id': `${ORIGIN}/#organization` },
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${ORIGIN}/#website`,
        url: `${ORIGIN}/`,
        name: 'Point Zero',
        alternateName: 'Pointzero',
        publisher: { '@id': `${ORIGIN}/#organization` },
        inLanguage: 'en-NP',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${ORIGIN}/blog?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${ORIGIN}/#webpage`,
        url: `${ORIGIN}/`,
        name: 'Point Zero — AI, RAG & Software Development Company in Nepal',
        isPartOf: { '@id': `${ORIGIN}/#website` },
        about: { '@id': `${ORIGIN}/#organization` },
        primaryImageOfPage: `${ORIGIN}/og-image.png`,
        inLanguage: 'en-NP',
        // Speakable picks out the heading and FAQ block — voice assistants
        // (Google Assistant, Alexa) and AI crawlers can quote these aloud.
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#hero-heading', '#faq-heading', '#testimonials-heading'],
        },
      },
    ],
  };

  return (
    <div className="bg-black">
      <Seo
        title="Point Zero — AI, RAG & Software Development Company in Nepal"
        description="Top software company in Kathmandu, Nepal. We ship AI agents, RAG chatbots, web apps & mobile apps for startups and enterprises. Free discovery call."
        keywords="software company in Nepal, AI development Nepal, RAG development Nepal, LLM developer Nepal, mobile app development Nepal, web development Nepal, hire developers Nepal, Pointzero"
        path="/"
        image="https://pointzero.com.np/og/home.png"
        jsonLd={orgJsonLd}
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-cyan-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <TopSection />
        <InnovateSection />
        <Features />
        <AiSection />
        <ProcessSection />
        <OurServices />
        <HomeTechnologies />
        <IndustriesSection />
        <HowWeEngage />
        <OurCoreFeatures />
        <DetailSection />
        <Testimonials />
        <Guarantee />
        <FaqSection />
        <ScenarioCTA />
      </main>

      <Footer />
    </div>
  );
}

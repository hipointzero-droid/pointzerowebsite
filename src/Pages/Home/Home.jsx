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
import Footer from './Components/Footer';
import Navbar from '../../components/Navbar';
import HomeTechnologies from './Components/HomeTechnologies/HomeTechnologies';
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
        name: 'Pointzero',
        publisher: { '@id': `${ORIGIN}/#organization` },
      },
    ],
  };

  return (
    <div className="bg-black">
      <Seo
        title="Pointzero — Best Software Company in Nepal | Web, Mobile, AI & RAG"
        description="Pointzero is a top software company in Kathmandu, Nepal building modern websites, mobile apps, custom software and AI/RAG products. We work with Claude, OpenAI, Gemini and Llama to ship production‑grade AI software—chatbots, agents, vector search and LLM apps."
        keywords="best software company in Nepal, top software company Kathmandu, AI software company Nepal, RAG development Nepal, LLM app development Nepal, AI agents Nepal, ChatGPT Claude Gemini integration Nepal, web development Nepal, mobile app development Nepal, hire AI developers Nepal, Pointzero"
        path="/"
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
        <OurCoreFeatures />
        <DetailSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}

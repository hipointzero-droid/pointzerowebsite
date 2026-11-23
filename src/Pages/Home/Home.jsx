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
        name: 'Point Zero',
        legalName: 'Point Zero',
        alternateName: ['Pointzero', 'PointZero'],
        url: `${ORIGIN}/`,
        logo: `${ORIGIN}/og-image.png`,
        image: `${ORIGIN}/og-image.png`,
        description:
          'Point Zero is a Kathmandu-based digital product studio that ships production-grade AI, web and mobile software for startups and enterprises in Nepal, the US, UK and the UAE.',
        email: 'hi.pointzero@gmail.com',
        telephone: '+977-9860486269',
        priceRange: '$$',
        areaServed: ['Nepal', 'United States', 'United Kingdom', 'United Arab Emirates', 'Worldwide'],
        foundingDate: '2022',
        slogan: 'The AI & Software Engineering Partner for Ambitious Teams',
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
          name: 'Point Zero services',
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
      },
      {
        '@type': 'WebPage',
        '@id': `${ORIGIN}/#webpage`,
        url: `${ORIGIN}/`,
        name: 'AI & Software Development Company in Nepal | Point Zero',
        isPartOf: { '@id': `${ORIGIN}/#website` },
        about: { '@id': `${ORIGIN}/#organization` },
        primaryImageOfPage: `${ORIGIN}/og-image.png`,
        inLanguage: 'en-NP',
        hasPart: { '@id': `${ORIGIN}/#about-section` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#hero-heading', '#about-heading', '#faq-heading', '#testimonials-heading'],
        },
      },
      {
        '@type': 'WebPageElement',
        '@id': `${ORIGIN}/#about-section`,
        name: 'About Point Zero',
        url: `${ORIGIN}/#about`,
        isPartOf: { '@id': `${ORIGIN}/#webpage` },
        about: { '@id': `${ORIGIN}/#organization` },
        headline: 'The AI & Software Engineering Partner for Ambitious Teams',
        description:
          'Point Zero is a Kathmandu-based digital product studio that ships production-grade AI, web and mobile software for startups and enterprises in Nepal, the US, UK and the UAE.',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#about-heading'],
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${ORIGIN}/#about-outcomes`,
        name: 'Point Zero delivery focus',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Scoped delivery — RAG pilots and MVPs with clear timelines',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Performance-minded web launches with Core Web Vitals in mind',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Eval-gated AI releases before production deploy',
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-black">
      <Seo
        title="AI & Software Development Company in Nepal | Point Zero"
        description="Point Zero builds custom AI agents, RAG chatbots, websites, mobile apps and software solutions for startups and businesses in Nepal and worldwide."
        keywords="software development company Nepal, AI development company Nepal, software company Kathmandu, RAG chatbot development, web development Nepal, mobile app development Nepal, hire developers Nepal, Point Zero"
        path="/"
        image="https://pointzero.com.np/og/home.png"
        jsonLd={orgJsonLd}
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand focus:text-black focus:px-4 focus:py-2 focus:rounded-lg"
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

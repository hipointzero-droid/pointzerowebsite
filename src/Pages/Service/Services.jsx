import React, { Suspense } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../Home/Components/Footer";
import StarsCanvas from "../../components/StarsLazy";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import Picture from "../../components/Picture";
import Seo from "../../components/Seo";
import { Badge } from "../../components/ui/badge";

import imgAi from "../../assets/project/pymentor.png";
import imgMobile from "../../assets/project/sajilodera-case-study.png";
import imgWeb from "../../assets/project/wellnepa.png";
import imgUiux from "../../assets/project/tuneseven.png";
import imgQa from "../../assets/project/epass.png";
import imgDevops from "../../assets/project/Gigabion.png";
import imgTeam from "../../assets/project/bachelor-question-bank-case-study.png";

// Icons
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WebIcon from "@mui/icons-material/Web";
import BrushIcon from "@mui/icons-material/Brush";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudIcon from "@mui/icons-material/Cloud";
import GroupsIcon from "@mui/icons-material/Groups";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "ai",
      icon: <AutoAwesomeIcon className="w-8 h-8" />,
      title: "AI & RAG Software Development",
      subtitle: "Production‑grade LLM products",
      description:
        "We design and ship AI software for startups and enterprises—retrieval‑augmented (RAG) chatbots, AI agents, document and PDF extraction, and LLM workflows—on Claude, OpenAI GPT, Google Gemini and open Llama models, with evals, observability and SLAs.",
      gradient: "from-brand/40 to-brand/10",
      features: [
        "RAG chatbots & assistants over your docs and DB",
        "AI agents and multi‑step automations",
        "Vector search (pgvector, Pinecone, Weaviate, Qdrant)",
        "LLM integrations (Claude, GPT, Gemini, Llama)",
        "Document & data extraction pipelines",
        "Fine‑tuning, prompt libraries & evals",
      ],
      technologies: [
        { name: "Claude", color: "#D97706" },
        { name: "OpenAI", color: "#10A37F" },
        { name: "Gemini", color: "#4285F4" },
        { name: "LangGraph", color: "#22D3EE" },
      ],
      cta: "Build AI Software",
      image: imgAi,
      imageAlt: "PyMentor AI interview product — Point Zero AI & RAG build",
    },
    {
      id: "mobile",
      icon: <PhoneIphoneIcon className="w-8 h-8" />,
      title: "Mobile App Development",
      subtitle: "iOS & Android Excellence",
      description:
        "Our specialty is developing powerful mobile applications for all sizes of businesses. We leverage cutting-edge technology to create apps for iOS, Android, hybrid, and cross-platform platforms that deliver exceptional user experiences.",
      gradient: "from-brand/30 to-white/10",
      features: [
        "Native iOS App Development",
        "Native Android App Development",
        "Cross-platform Solutions",
        "React Native & Flutter",
        "App Store Optimization",
        "Maintenance & Support",
      ],
      technologies: [
        { name: "Swift", color: "#FA7343" },
        { name: "Kotlin", color: "#7F52FF" },
        { name: "React Native", color: "#61DAFB" },
        { name: "Flutter", color: "#02569B" },
      ],
      cta: "Hire Mobile Developers",
      image: imgMobile,
      imageAlt: "SajiloDera mobile app — Point Zero iOS & Android product work",
    },
    {
      id: "web",
      icon: <WebIcon className="w-8 h-8" />,
      title: "Web Development",
      subtitle: "Modern Web Solutions",
      description:
        "We are a top web development company. Our certified developers are masters at building unique online solutions with the newest web technology for businesses of all scales. From simple websites to complex web applications.",
      gradient: "from-brand/40 to-brand/10",
      features: [
        "Modern websites and web applications",
        "Custom Website Development",
        "Web Application Development",
        "eCommerce Solutions",
        "Progressive Web Apps",
        "API Development",
        "Cloud Integration",
      ],
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#ffffff" },
        { name: "Node.js", color: "#68A063" },
        { name: "Python", color: "#3776AB" },
      ],
      cta: "Hire Web Developers",
      image: imgWeb,
      imageAlt: "WellNepa web platform — Point Zero product engineering",
    },
    {
      id: "uiux",
      icon: <BrushIcon className="w-8 h-8" />,
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      description:
        "Create stunning user experiences that captivate and convert. Our design team crafts intuitive interfaces that delight users and drive business results through research-driven design methodology.",
      gradient: "from-brand/40 to-brand/10",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Interaction Design",
        "Usability Testing",
        "Design Handoff",
      ],
      technologies: [
        { name: "Figma", color: "#F24E1E" },
        { name: "Adobe XD", color: "#FF61F6" },
        { name: "Sketch", color: "#F7B500" },
        { name: "Framer", color: "#0055FF" },
      ],
      cta: "Hire UI/UX Designers",
      image: imgUiux,
      imageAlt: "Neptunes music product UI — Point Zero design & product craft",
    },
    {
      id: "qa",
      icon: <BugReportIcon className="w-8 h-8" />,
      title: "Quality Assurance",
      subtitle: "Bug-Free Delivery",
      description:
        "Quality Assurance and software testing services are fundamental to our ecosystem. Our proficient testers contribute to expedited releases without compromising quality through comprehensive testing strategies.",
      gradient: "from-brand/40 to-brand/10",
      features: [
        "Manual QA Testing",
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "API Testing",
        "Mobile App Testing",
      ],
      technologies: [
        { name: "Selenium", color: "#43B02A" },
        { name: "Cypress", color: "#64748b" },
        { name: "Jest", color: "#C21325" },
        { name: "Postman", color: "#FF6C37" },
      ],
      cta: "Hire QA Experts",
      image: imgQa,
      imageAlt: "EPass dashboard — Point Zero QA-ready production software",
    },
    {
      id: "devops",
      icon: <CloudIcon className="w-8 h-8" />,
      title: "DevOps & Cloud",
      subtitle: "Scalable Infrastructure",
      description:
        "Build resilient, scalable infrastructure with our DevOps expertise. We help you deploy faster, scale effortlessly, and maintain high availability with modern cloud-native solutions.",
      gradient: "from-brand/40 to-brand/10",
      features: [
        "CI/CD Pipeline Setup",
        "Cloud Migration",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "24/7 Support",
      ],
      technologies: [
        { name: "AWS", color: "#FF9900" },
        { name: "Docker", color: "#2496ED" },
        { name: "Kubernetes", color: "#326CE5" },
        { name: "Terraform", color: "#7B42BC" },
      ],
      cta: "Hire DevOps Engineers",
      image: imgDevops,
      imageAlt: "Enterprise web platform — Point Zero cloud & DevOps delivery",
    },
    {
      id: "team",
      icon: <GroupsIcon className="w-8 h-8" />,
      title: "Dedicated Teams",
      subtitle: "Extend Your Team",
      description:
        "Augment your team with dedicated developers who integrate seamlessly with your workflow. Get skilled professionals committed to your project success with flexible engagement models.",
      gradient: "from-brand/40 to-brand/10",
      features: [
        "Flexible Engagement",
        "Skilled Professionals",
        "Quick Onboarding",
        "Direct Communication",
        "Agile Methodology",
        "Transparent Pricing",
      ],
      technologies: [
        { name: "Full Stack", color: "#22D3EE" },
        { name: "Frontend", color: "#F59E0B" },
        { name: "Backend", color: "#10B981" },
        { name: "Mobile", color: "#8B5CF6" },
      ],
      cta: "Build Your Team",
      image: imgTeam,
      imageAlt: "Bachelor Question Bank product — shipped by a dedicated Point Zero squad",
    },
  ];

  const stats = [
    { icon: <RocketLaunchIcon />, value: "500+", label: "Projects Delivered" },
    { icon: <SpeedIcon />, value: "99%", label: "On-Time Delivery" },
    { icon: <SecurityIcon />, value: "Secure", label: "Coding Practices" },
    { icon: <SupportAgentIcon />, value: "24/7", label: "Support" },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Seo
        title="Software Development Services in Nepal | Point Zero"
        description="Explore Point Zero's AI, RAG, web, mobile, UI/UX, software engineering, QA and DevOps services for startups and businesses."
        keywords="software development services Nepal, IT services company Nepal, custom software development services, AI development services, web development Nepal, mobile app services Nepal, UI/UX design services, MVP development Nepal"
        path="/services"
        image="https://pointzero.com.np/og/services.png"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Point Zero services",
          itemListElement: [
            {
              name: "AI & RAG Software Development",
              description:
                "RAG chatbots, AI agents and LLM apps with Claude, OpenAI GPT, Google Gemini and Llama, plus vector databases (pgvector, Pinecone, Weaviate, Qdrant).",
            },
            { name: "Mobile App Development" },
            { name: "Web Development" },
            { name: "UI/UX Design" },
            { name: "Software Testing & QA" },
            { name: "Infrastructure & DevOps" },
            { name: "Hire Dedicated Developers" },
          ].map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              provider: { "@type": "Organization", name: "Point Zero" },
              areaServed: ["Nepal", "Worldwide"],
            },
          })),
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll className="text-center" as="div" variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <RocketLaunchIcon className="w-4 h-4 text-brand" />
              <span className="text-sm text-neutral-300">
                World-Class Development Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Hire Specialized{" "}
              <span className="text-brand">Web & Mobile</span>
              <br />
              Development Experts
            </h1>

            <p className="mt-8 text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Since 2022, we have been a reliable partner for software
              application development. We provide a comprehensive spectrum of IT
              services and solutions worldwide.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02]"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </button>
            </div>
          </AnimateOnScroll>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimateOnScroll
                key={index}
                as="div"
                variant="scale"
                delay={(index % 4) + 1}
              >
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:border-brand/30 hover:scale-[1.02] hover:shadow-none ">
                  <div className="inline-flex p-3 bg-white/[0.04] ring-1 ring-white/10 rounded-xl text-brand mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-brand">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-20" as="div">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our <span className="text-brand">Services</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to transform your
              business
            </p>
          </AnimateOnScroll>

          <div className="space-y-40">
            {services.map((service, index) => (
              <AnimateOnScroll
                key={service.id}
                as="div"
                variant={index % 2 === 0 ? "left" : "right"}
                delay={index % 3}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16`}
                id={service.id}
              >
                {/* Visual Side — real shipped product imagery */}
                <div className="lg:w-1/2 w-full">
                  <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Picture
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                        aria-hidden
                      />
                      <div className="absolute left-4 top-4 right-4 flex items-center justify-between gap-3">
                        <Badge className="px-3 py-1.5 text-brand">
                          {service.subtitle}
                        </Badge>
                        <span className="font-mono text-[11px] tracking-[0.18em] text-white/50">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-10">
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech.name}
                              className="inline-flex items-center gap-1.5 border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[11px] text-neutral-200 backdrop-blur-md"
                            >
                              <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{ background: tech.color }}
                                aria-hidden
                              />
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 w-full">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={
                        "p-4 bg-white/[0.04] ring-1 ring-white/10 rounded-2xl text-brand"
                      }
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 group/item"
                      >
                        <div
                          className={
                            "w-5 h-5 rounded-full bg-brand/25 flex items-center justify-center flex-shrink-0"
                          }
                        >
                          <CheckCircleIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-neutral-300 group-hover/item:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105"
                        style={{ color: tech.color }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => navigate("/contact")}
                    className={
                      "group px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02]"
                    }
                  >
                    <span className="flex items-center gap-2">
                      {service.cta}
                      <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16" as="div">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our <span className="text-brand">Process</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your vision, goals, and requirements",
                icon: "🎯",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Creating roadmap, architecture, and timeline",
                icon: "📋",
              },
              {
                step: "03",
                title: "Development",
                desc: "Agile development with regular updates",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Testing, deployment, and ongoing support",
                icon: "🚀",
              },
            ].map((item, index) => (
              <AnimateOnScroll
                key={index}
                as="div"
                variant="scale"
                delay={index % 4}
                className="relative group"
              >
                <div className="h-full p-8 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-500 hover:border-brand/30 hover:bg-white/[0.04] hover:-translate-y-2 hover:shadow-xl shine-wrap">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <span className="text-5xl font-bold text-brand/40">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-neutral-400">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-brand/40"></div>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16" as="div">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Technologies We <span className="text-brand">Master</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              We work with the latest and most reliable technologies
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", color: "#61DAFB" },
              { name: "Next.js", color: "#ffffff" },
              { name: "Node.js", color: "#68A063" },
              { name: "Python", color: "#3776AB" },
              { name: "Flutter", color: "#02569B" },
              { name: "Swift", color: "#FA7343" },
              { name: "Kotlin", color: "#7F52FF" },
              { name: "AWS", color: "#FF9900" },
              { name: "Docker", color: "#2496ED" },
              { name: "MongoDB", color: "#47A248" },
              { name: "PostgreSQL", color: "#336791" },
              { name: "TypeScript", color: "#3178C6" },
            ].map((tech, index) => (
              <AnimateOnScroll
                key={index}
                as="div"
                variant="scale"
                delay={index % 6}
              >
                <div className="group p-4 sm:p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-brand/30 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: tech.color }}
                    >
                      {tech.name[0]}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium text-center group-hover:text-white transition-colors">
                    {tech.name}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll
            as="div"
            variant="scale"
            className="relative shine-wrap"
          >
            <div className="relative p-12 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:border-brand/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                Let's discuss your project and find the perfect solution for
                your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02]"
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => navigate("/project")}
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import React, { useState, Suspense, useCallback } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../Home/Components/Footer";
import StarsCanvas from "../../components/StarsLazy";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import Seo from "../../components/Seo";
import Picture from "../../components/Picture";

// Project Images - Web
import porject2 from "../../assets/project2.png";
import tunesevern from "../../assets/project/tuneseven.png";
import bidesh from "../../assets/project/bidesh.png";
import chatmandu from "../../assets/project/chatmandu.png";
import epass from "../../assets/project/epass.png";
import gigabion from "../../assets/project/Gigabion.png";
import mcq from "../../assets/project/mcq.png";
import nepaldental from "../../assets/project/Nepaldentalhome.png";
import sajiloderaCaseStudy from "../../assets/project/sajilodera-case-study.png";
import bachelorQuestionBankCaseStudy from "../../assets/project/bachelor-question-bank-case-study.png";
import pymentor from "../../assets/project/pymentor.png";
import wellnepa from "../../assets/project/wellnepa.png";
import lspOnestop from "../../assets/project/lsp-onestop.png";
import miritubes from "../../assets/project/miritubes.png";
import blinkitStudy from "../../assets/project/blinkit-study.png";
import finlandCitizenship from "../../assets/project/finland-citizenship-2027.png";
import dishaCompass from "../../assets/project/disha-compass.png";

// Project Images - Mobile
import medicity from "../../assets/project/2.png";
import bideshapp from "../../assets/project/bideshapp.png";
import gabionbox from "../../assets/project/5.png";
import chatmanduapp from "../../assets/project/6.png";
import epassapp from "../../assets/project/3.png";
import ecommerceapp from "../../assets/project/4.png";
import newsapp from "../../assets/project/1.png";

// Icons
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate();
  // Default to websites so the page opens on web work without scrolling past apps.
  const [activeFilter, setActiveFilter] = useState("web");

  const selectFilter = useCallback((id) => {
    setActiveFilter(id);
    // Bring the selected portfolio block to the top of the viewport.
    requestAnimationFrame(() => {
      document
        .getElementById("projects-content")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const webProjects = [
    {
      id: -4,
      image: blinkitStudy,
      title: "Blinkit Study",
      subtitle: "SPHEREx Sky Explorer",
      description:
        "Interactive NASA SPHEREx explorer — sky map, RA/Dec search, hackathon targets, multi-detector flipbooks and before/after difference views for infrared astronomy.",
      technologies: ["React", "IRSA / SPHEREx", "Data viz"],
      gradient: "from-slate-400 to-zinc-600",
      link: "https://blinkit.study/?ra=269.446269&dec=4.768205&fov=3&det=2",
    },
    {
      id: -3,
      image: miritubes,
      title: "MiRi Tubes",
      subtitle: "Nepal OTT Streaming Platform",
      description:
        "A cinematic OTT experience for Nepali movies, documentaries, TV series and music videos — hero playback, catalogs, search, profiles and watch-now flows built for streaming.",
      technologies: ["React", "Next.js", "Video streaming"],
      gradient: "from-teal-400 to-cyan-600",
      link: "https://miritubes.com/",
    },
    {
      id: -2,
      image: lspOnestop,
      title: "LSP One Stop",
      subtitle: "Photography & Videography Platform",
      description:
        "Nepal's one-stop booking experience for weddings, events, products, food, portraits and commercial shoots — packages, franchise and instant Call / WhatsApp / Viber contact.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      gradient: "from-orange-400 to-pink-500",
      link: "https://lsponestop.com/",
    },
    {
      id: -1,
      image: wellnepa,
      title: "WellNepa.com",
      subtitle: "Nepal's #1 Verified Coaching Marketplace",
      description:
        "A modern coaching marketplace for fitness, nutrition and mental wellness—book verified 1-on-1 sessions with trusted coaches in Nepal.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      gradient: "from-brand/30 to-white/10",
      link: "https://wellnepa.com",
    },
    // SajiloDera is featured in the top banner — keep it out of the simple grid
    // to avoid a duplicate card.
    {
      id: 1,
      image: porject2,
      title: "Rozai.com.np",
      subtitle: "E-Commerce Platform",
      description:
        "Premier destination for quality goods in Nepal with seamless shopping experience.",
      technologies: ["React", "Django", "PostgreSQL"],
      gradient: "from-orange-500 to-red-600",
      link: "#",
    },
    {
      id: 2,
      image: tunesevern,
      title: "Neptunes.app",
      subtitle: "Music Platform",
      description:
        "Platform for creators to share their art and connect with audiences worldwide.",
      technologies: ["React", "Node.js", "MongoDB"],
      gradient: "from-brand/30 to-white/10",
      link: "#",
    },
    {
      id: 3,
      image: bidesh,
      title: "Bidesh.online",
      subtitle: "Immigration Services",
      description:
        "Resources for individuals working abroad to thrive and succeed.",
      technologies: ["Next.js", "Tailwind", "Flutter"],
      gradient: "from-brand/40 to-brand/10",
      link: "#",
    },
    {
      id: 4,
      image: gigabion,
      title: "Gigabion.com",
      subtitle: "Industrial Solutions",
      description: "GI wire production plant with skilled technical expertise.",
      technologies: ["React", "Django", "AWS"],
      gradient: "from-green-500 to-emerald-600",
      link: "#",
    },
    {
      id: 6,
      image: nepaldental,
      title: "Nepaldentalhome.com.np",
      subtitle: "Healthcare",
      description: "Celebrating the joy of happy smiles since 2016.",
      technologies: ["Next.js", "Tailwind", "Strapi"],
      gradient: "from-brand/30 to-brand/10",
      link: "#",
    },
    {
      id: 7,
      image: chatmandu,
      title: "Chatmandu",
      subtitle: "Communication Platform",
      description: "Revolutionizing how people connect and interact online.",
      technologies: ["Next.js", "Socket.io", "Redis"],
      gradient: "from-brand/30 to-white/10",
      link: "#",
    },
    {
      id: 8,
      image: epass,
      title: "Epass.com.np",
      subtitle: "Digital Permits",
      description: "Electronic passes for travel, permits, and permissions.",
      technologies: ["React", "Django", "PostgreSQL"],
      gradient: "from-amber-500 to-orange-600",
      link: "#",
    },
    {
      id: 9,
      image: mcq,
      title: "UBTTopikExam.com",
      subtitle: "Education Platform",
      description:
        "Effective learning tools for mastering MCQs across subjects.",
      technologies: ["React", "Django", "ML"],
      gradient: "from-brand/30 to-white/10",
      link: "#",
    },
  ];

  const mobileProjects = [
    // Bachelor Question Bank is featured in the Mobile section banner above the grid.
    {
      id: 0.2,
      image: dishaCompass,
      title: "दिशा Compass",
      subtitle: "Traditional Compass & Vastu Guide",
      description:
        "Find the right direction for every space — live 360° compass, room-wise Vastu recommendations, learning section, offline support, and Nepali · English · Hindi.",
      gradient: "from-sky-500 to-blue-700",
      link: "https://play.google.com/store/apps/details?id=com.kripascompass",
    },
    {
      id: 0.25,
      image: finlandCitizenship,
      title: "Finland Citizenship 2027",
      subtitle: "Citizenship Test Prep",
      description:
        "Prepare for the Finland citizenship test with confidence — timed mock exams, practice questions, Finnish basics, language drills and progress tracking.",
      gradient: "from-blue-600 to-indigo-800",
      link: "https://play.google.com/store/apps/details?id=app.citizenshipprep.finland_citizenship",
    },
    {
      id: 0.5,
      image: pymentor,
      title: "PyMentor AI Interview",
      subtitle: "Python Interview Prep",
      description:
        "AI-powered mock interviews with real-time feedback, plus an interactive Python code playground to write, run, and debug solutions as you prepare for technical interviews.",
      gradient: "from-brand/40 to-brand/10",
      link: "https://play.google.com/store/apps/details?id=com.pymentor.pymentor",
    },
    {
      id: 1,
      image: medicity,
      title: "Medicity",
      subtitle: "Fintech App",
      description:
        "Fully functional Fintech money transaction app with advanced admin panel.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      image: newsapp,
      title: "News House Nepal",
      subtitle: "News Portal",
      description:
        "Trusted news portal with up-to-the-minute updates on Nepal.",
      gradient: "from-red-500 to-rose-600",
    },
    {
      id: 3,
      image: ecommerceapp,
      title: "E-Commerce App",
      subtitle: "Shopping Platform",
      description:
        "Product categorization, secure payments, and order tracking.",
      gradient: "from-brand/30 to-white/10",
    },
    {
      id: 4,
      image: epassapp,
      title: "E-Pass App",
      subtitle: "Digital Permits",
      description: "Mobile access to digital pass services and permits.",
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      id: 5,
      image: chatmanduapp,
      title: "Chatmandu App",
      subtitle: "Messaging",
      description: "Real-time conversations with friends and family worldwide.",
      gradient: "from-brand/40 to-brand/10",
    },
    {
      id: 6,
      image: gabionbox,
      title: "Gabion Box Nepal",
      subtitle: "Construction",
      description: "Gabions and geotextile fabrics for construction projects.",
      gradient: "from-slate-500 to-gray-600",
    },
    {
      id: 7,
      image: bideshapp,
      title: "Bidesh App",
      subtitle: "Immigration",
      description: "Resources for individuals working abroad to succeed.",
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  const stats = [
    { value: "50+", label: "Web Projects" },
    { value: "30+", label: "Mobile Apps" },
    { value: "Repeat", label: "Client Engagements" },
    { value: "15+", label: "Countries Served" },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Seo
        title="Case Studies & Portfolio | Point Zero Software Projects"
        description="Explore Point Zero case studies across AI, web and mobile — SajiloDera, Blinkit Study, MiRi Tubes, LSP One Stop, Bachelor Question Bank, Finland Citizenship 2027, दिशा Compass and more."
        keywords="Point Zero portfolio, SajiloDera, Blinkit Study, MiRi Tubes, LSP One Stop, Bachelor Question Bank, Finland Citizenship 2027, Disha Compass"
        path="/project"
        image="https://pointzero.com.np/og/project.png"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/project" },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Point Zero Portfolio",
          url: "https://pointzero.com.np/project",
          about: "Selected web and mobile product work by Point Zero.",
          hasPart: [
            {
              "@type": "CreativeWork",
              name: "SajiloDera",
              url: "https://sajilodera.org",
            },
            {
              "@type": "CreativeWork",
              name: "Blinkit Study",
              url: "https://blinkit.study/",
            },
            {
              "@type": "CreativeWork",
              name: "MiRi Tubes",
              url: "https://miritubes.com/",
            },
            {
              "@type": "CreativeWork",
              name: "LSP One Stop",
              url: "https://lsponestop.com/",
            },
            {
              "@type": "CreativeWork",
              name: "WellNepa",
              url: "https://wellnepa.com",
            },
            {
              "@type": "CreativeWork",
              name: "Bachelor Question Bank",
              url: "https://play.google.com/store/apps/details?id=com.bachelorquestion.nepali",
            },
            {
              "@type": "CreativeWork",
              name: "Finland Citizenship 2027",
              url: "https://play.google.com/store/apps/details?id=app.citizenshipprep.finland_citizenship",
            },
            {
              "@type": "CreativeWork",
              name: "दिशा Compass",
              url: "https://play.google.com/store/apps/details?id=com.kripascompass",
            },
            {
              "@type": "CreativeWork",
              name: "PyMentor AI Interview",
              url: "https://play.google.com/store/apps/details?id=com.pymentor.pymentor",
            },
          ],
        }}
      />
      <Navbar />

      {/* Hero Section — compact so portfolio tabs & content sit higher */}
      <section className="relative overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
          <AnimateOnScroll className="text-center" as="div" variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <RocketLaunchIcon className="w-4 h-4 text-brand" />
              <span className="text-sm text-neutral-300">Our Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Projects That{" "}
              <span className="text-brand">Define Excellence</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Switch between websites and mobile apps — each tab opens that
              portfolio at the top of the page.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3">
                  <div className="text-2xl font-bold text-brand">{stat.value}</div>
                  <div className="mt-1 text-xs text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sticky Web / Mobile tabs */}
      <div className="sticky top-16 z-40 border-y border-white/10 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div
            role="tablist"
            aria-label="Portfolio type"
            className="flex flex-wrap gap-3 justify-center"
          >
            {[
              {
                id: "web",
                label: "Web Development",
                icon: <WebIcon className="w-4 h-4" />,
              },
              {
                id: "mobile",
                label: "Mobile Development",
                icon: <PhoneIphoneIcon className="w-4 h-4" />,
              },
            ].map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => selectFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10"
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Web Projects Section */}
      {activeFilter === "web" && (
        <section
          id="projects-content"
          className="relative py-16 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll
              className="flex items-center gap-4 mb-12"
              as="div"
              variant="left"
            >
              <div className="p-3 bg-white/[0.04] ring-1 ring-white/10 rounded-xl text-brand">
                <WebIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Web Development
                </h2>
                <p className="text-neutral-400">
                  Modern websites and web applications
                </p>
              </div>
            </AnimateOnScroll>

            {/* Featured Case Study — SajiloDera (top banner only) */}
            <section className="relative pb-16">
              <AnimateOnScroll
                as="div"
                variant="scale"
                className="relative shine-wrap"
              >
                <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-72 lg:h-auto lg:min-h-[26rem] bg-white/[0.03]">
                      <Picture
                        src={sajiloderaCaseStudy}
                        alt="SajiloDera property and transport platform — case study screens"
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 lg:bg-gradient-to-l"></div>
                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur border border-white/15 rounded-full">
                        <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium text-white">
                          Live · sajilodera.org
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-brand text-sm font-semibold uppercase tracking-wider">
                          Featured Case Study
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand/10 border border-brand/25 rounded-full text-[10px] font-semibold text-neutral-300 uppercase tracking-wide">
                          <VerifiedIcon className="w-3 h-3" /> Highlight
                        </span>
                      </div>
                      <h3 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
                        SajiloDera
                      </h3>
                      <p className="mt-2 text-lg text-neutral-300">
                        Rooms &amp; Transport in One App
                      </p>

                      <p className="mt-6 text-neutral-400 leading-relaxed">
                        SajiloDera is an all-in-one Nepali home and transport
                        solution. We designed and developed a modern,
                        conversion-focused web experience to showcase the
                        product and make it easy for users to learn, explore,
                        and take action.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {["React", "Tailwind CSS", "Vite"].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <a
                          href="https://sajilodera.org"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-neutral-200"
                        >
                          Visit SajiloDera
                          <OpenInNewIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <AnimateOnScroll
                  key={project.id}
                  as="div"
                  variant="scale"
                  delay={index % 6}
                >
                  <div className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl shine-wrap">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-brand/8 opacity-20`}
                      ></div>
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.subtitle}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay on hover — only when a live link exists */}
                      {project.link && project.link !== "#" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            View Project
                            <OpenInNewIcon className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                            {project.title}
                          </h3>
                          <p
                            className="text-sm font-medium text-brand"
                          >
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Projects Section */}
      {activeFilter === "mobile" && (
        <section
          id="projects-content"
          className="relative py-16 bg-neutral-950 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll
              className="flex items-center gap-4 mb-12"
              as="div"
              variant="right"
            >
              <div className="p-3 bg-white/[0.04] ring-1 ring-white/10 rounded-xl text-brand">
                <PhoneIphoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Mobile Development
                </h2>
                <p className="text-neutral-400">
                  iOS and Android apps that users love
                </p>
              </div>
            </AnimateOnScroll>

            {/* Featured — Bachelor Question Bank */}
            <section className="relative pb-16">
              <AnimateOnScroll
                as="div"
                variant="scale"
                className="relative shine-wrap"
              >
                <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-72 lg:h-auto lg:min-h-[22rem] bg-white/[0.03]">
                      <Picture
                        src={bachelorQuestionBankCaseStudy}
                        alt="Bachelor Question Bank app — home, notices, bookmarks, and question papers"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 lg:bg-gradient-to-l"></div>
                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur border border-white/15 rounded-full">
                        <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium text-white">
                          Live · Google Play
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-brand text-sm font-semibold uppercase tracking-wider">
                          Featured Mobile App
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand/10 border border-brand/25 rounded-full text-[10px] font-semibold text-neutral-300 uppercase tracking-wide">
                          <VerifiedIcon className="w-3 h-3" /> Education
                        </span>
                      </div>
                      <h3 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
                        Bachelor Question Bank
                      </h3>
                      <p className="mt-2 text-lg text-neutral-300">
                        Your ultimate Bachelor study partner
                      </p>

                      <p className="mt-6 text-neutral-400 leading-relaxed">
                        A polished mobile experience for Tribhuvan University
                        and Nepali Bachelor students: notices on the home feed,
                        bookmarked PDFs and notes, and a hero entry point to
                        1000+ past papers — clear hierarchy, strong CTAs, and a
                        red-and-white brand system that feels fast and
                        trustworthy.
                      </p>

                      <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                        <li className="flex gap-2">
                          <span className="text-brand shrink-0">•</span>
                          <span>
                            Latest notices, bookmarks, and subject-wise question
                            banks in one scrollable home.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-brand shrink-0">•</span>
                          <span>
                            Glass-style featured card for question papers with
                            explore flow and bottom navigation for core tasks.
                          </span>
                        </li>
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {["Flutter", "PDF & notices", "Student UX"].map(
                          (tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-neutral-300"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.bachelorquestion.nepali"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-neutral-200"
                        >
                          Get on Google Play
                          <OpenInNewIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileProjects.map((project, index) => (
                <AnimateOnScroll
                  key={project.id}
                  as="div"
                  variant="scale"
                  delay={index % 6}
                >
                  <div className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl shine-wrap">
                    {/* Glow */}
                    <div
                      className={`absolute -inset-1 text-brand rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    ></div>

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-brand/8 opacity-20`}
                      ></div>
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.subtitle}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay on hover — only when a live link exists */}
                      {project.link && project.link !== "#" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            View Details
                            <OpenInNewIcon className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm font-medium text-brand">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-neutral-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

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
                Have a Project in Mind?
              </h2>
              <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                Let's collaborate and bring your ideas to life. Our team is
                ready to create something amazing for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02]"
                >
                  Start Your Project
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  Explore Services
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

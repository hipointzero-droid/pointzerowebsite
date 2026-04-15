// Blog post data — each entry is tied to a real Point Zero project
// with SEO-optimized, engaging copy

// Import project images for blog thumbnails
import sajilodera from '../../assets/project/sajilodera.png';
import sajiloderaCaseStudy from '../../assets/project/sajilodera-case-study.png';
import bachelorQuestionBank from '../../assets/project/bachelor-question-bank.png';
import pymentor from '../../assets/project/pymentor.png';
import tuneseven from '../../assets/project/tuneseven.png';
import chatmandu from '../../assets/project/chatmandu.png';
import porject2 from '../../assets/project2.png';
import bidesh from '../../assets/project/bidesh.png';
import epass from '../../assets/project/epass.png';

export const blogPosts = [
  {
    id: 'sajilodera-case-study',
    slug: 'how-we-built-sajilodera-nepal-property-transport-platform',
    title: 'How We Built SajiloDera — Nepal\'s All-in-One Property & Transport Platform',
    excerpt: 'From wireframes to launch in 8 weeks. Here\'s how Point Zero shipped a conversion-focused platform that handles room rentals AND transport booking under one roof.',
    category: 'Case Study',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Web Development', 'Nepal Startup'],
    date: '2026-03-28',
    readTime: '7 min read',
    author: 'Point Zero Team',
    image: sajiloderaCaseStudy,
    thumbnail: sajilodera,
    gradient: 'from-emerald-500 to-green-600',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'When the SajiloDera team approached us, they had a bold vision: build a single platform where Nepalis could find rooms to rent AND book transport — all without the chaos of juggling multiple apps. Sounds simple, right? Spoiler: it wasn\'t. But we shipped it anyway, and here\'s the full breakdown.'
      },
      {
        type: 'heading',
        text: 'The Problem Nobody Was Solving'
      },
      {
        type: 'paragraph',
        text: 'Nepal\'s rental and transport market was fragmented. Tenants scrolled through Facebook groups for rooms. Commuters relied on word-of-mouth for rides. There was zero centralized platform that did both. SajiloDera wanted to change that — and they wanted it fast.'
      },
      {
        type: 'heading',
        text: 'Our Tech Stack Decision'
      },
      {
        type: 'paragraph',
        text: 'We went with React + Vite for blazing-fast builds and Tailwind CSS for rapid UI development. Why? Because when you\'re building for the Nepali market, page load speed is everything — most users are on mobile data. Vite\'s code splitting and tree-shaking kept our bundle lean and mean.'
      },
      {
        type: 'list',
        items: [
          'React 18 with concurrent rendering for smooth UX',
          'Vite for sub-second HMR and optimized production builds',
          'Tailwind CSS for consistent, responsive design tokens',
          'Lazy loading for images — critical for mobile-first Nepal',
          'SEO-first architecture with meta tags and structured data'
        ]
      },
      {
        type: 'heading',
        text: 'The Conversion-First Design Approach'
      },
      {
        type: 'paragraph',
        text: 'We didn\'t just build a pretty website — we engineered a conversion machine. Every CTA was A/B tested. The hero section was designed to answer "what is this?" in under 3 seconds. The property listing cards use progressive disclosure: show just enough info to get the click, save the details for the detail page.'
      },
      {
        type: 'heading',
        text: 'Results That Speak'
      },
      {
        type: 'paragraph',
        text: 'Within the first month post-launch, SajiloDera saw a 3x increase in user sign-ups compared to their legacy site. Page load times dropped from 8 seconds to under 2. The bounce rate? Cut in half. That\'s the Point Zero difference — we don\'t just build websites, we build growth engines.'
      },
      {
        type: 'quote',
        text: 'Point Zero didn\'t just understand our vision — they amplified it. The site they delivered exceeded every expectation.',
        author: 'SajiloDera Founding Team'
      }
    ]
  },
  {
    id: 'bachelor-question-bank',
    slug: 'bachelor-question-bank-app-50k-downloads-nepal',
    title: 'Bachelor Question Bank: How a Simple Idea Hit 50K+ Downloads in Nepal',
    excerpt: 'We built an education app that Nepali students actually wanted. Old questions, solutions, offline access — and zero ads in the way. Here\'s the full story.',
    category: 'Mobile App',
    tags: ['Flutter', 'Education', 'Android', 'Nepal', 'EdTech'],
    date: '2026-03-15',
    readTime: '6 min read',
    author: 'Point Zero Team',
    image: bachelorQuestionBank,
    thumbnail: bachelorQuestionBank,
    gradient: 'from-red-500 to-orange-600',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Every Bachelor-level student in Nepal knows the struggle: hunting for old question papers the night before exams, scrolling through blurry PDFs shared on Messenger groups, and praying you\'re studying the right syllabus. We said "enough" and built Bachelor Question Bank.'
      },
      {
        type: 'heading',
        text: 'Understanding the Nepali Student'
      },
      {
        type: 'paragraph',
        text: 'Before writing a single line of code, we talked to 200+ students across Kathmandu, Pokhara, and Chitwan. The insights were gold: students wanted offline access (data is expensive), subject-wise organization (not random dumps), and verified solutions (not guesswork from seniors).'
      },
      {
        type: 'heading',
        text: 'Why Flutter Was the Move'
      },
      {
        type: 'paragraph',
        text: 'Cross-platform was non-negotiable — we needed Android-first (90%+ market share in Nepal) with iOS as a bonus. Flutter\'s widget system let us create a native-feeling experience with buttery 60fps scrolling through question papers. The offline-first architecture using Hive for local storage was a game-changer.'
      },
      {
        type: 'list',
        items: [
          'Flutter for cross-platform with native performance',
          'Hive DB for offline-first data persistence',
          'Firebase for analytics and crash reporting',
          'Custom PDF renderer for crisp question paper viewing',
          'Subject-wise categorization with smart search'
        ]
      },
      {
        type: 'heading',
        text: 'The Growth Hack That Worked'
      },
      {
        type: 'paragraph',
        text: 'We didn\'t spend a single rupee on ads. Instead, we partnered with college WhatsApp group admins. One share in the right group at the right time (exam season) = thousands of organic installs. The app hit 10K downloads in the first week and never looked back.'
      },
      {
        type: 'heading',
        text: 'What\'s Next'
      },
      {
        type: 'paragraph',
        text: 'We\'re adding AI-powered answer generation, video solutions, and a community Q&A section. The goal? Make Bachelor Question Bank the go-to study companion for every Nepali student.'
      }
    ]
  },
  {
    id: 'pymentor-ai-interview',
    slug: 'pymentor-ai-powered-python-interview-prep-app',
    title: 'PyMentor: Building an AI Interview Coach That Actually Helps You Get Hired',
    excerpt: 'We combined GPT-powered mock interviews with a live Python code playground. The result? An app that\'s helping developers land their dream jobs.',
    category: 'AI / Mobile',
    tags: ['AI', 'Flutter', 'Python', 'Interview Prep', 'GPT'],
    date: '2026-03-01',
    readTime: '8 min read',
    author: 'Point Zero Team',
    image: pymentor,
    thumbnail: pymentor,
    gradient: 'from-indigo-500 to-purple-600',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Technical interviews are brutal. You know the algorithms, you\'ve ground through LeetCode, but when a real interviewer asks "tell me about a time you optimized a system" — your mind goes blank. PyMentor was born to fix exactly that gap between knowing Python and acing Python interviews.'
      },
      {
        type: 'heading',
        text: 'The AI That Interviews Like a Senior Dev'
      },
      {
        type: 'paragraph',
        text: 'We fine-tuned our AI interviewer to behave like a seasoned tech lead — not a chatbot. It asks follow-up questions based on your answers. It challenges weak responses. It gives real-time feedback on code quality, not just correctness. Think of it as a mentor who\'s available 24/7 and never judges you for asking "what\'s a decorator?" for the fifth time.'
      },
      {
        type: 'heading',
        text: 'The Code Playground: Write, Run, Debug'
      },
      {
        type: 'paragraph',
        text: 'Most interview prep apps stop at theory. We built an in-app Python playground where you can write code, run it instantly, see output, and debug — all without leaving the app. It\'s like having VS Code in your pocket, minus the 800MB download.'
      },
      {
        type: 'list',
        items: [
          'AI mock interviews with contextual follow-up questions',
          'In-app Python code editor with syntax highlighting',
          'Real-time code execution with output display',
          'Topic-wise interview questions from basics to system design',
          'Performance analytics to track improvement over time'
        ]
      },
      {
        type: 'heading',
        text: 'The Tech Behind the Magic'
      },
      {
        type: 'paragraph',
        text: 'Flutter frontend for that smooth native feel. A custom Python sandbox running on our secure backend for code execution. GPT-4 integration with carefully crafted system prompts that make the AI behave like a real interviewer — not an overly polite assistant. Redis for session management so your interview state persists across app restarts.'
      },
      {
        type: 'quote',
        text: 'I used PyMentor for two weeks before my interview at a fintech startup. Got the offer. The AI mock interviews were scarily close to the real thing.',
        author: 'A PyMentor User'
      }
    ]
  },
  {
    id: 'neptunes-music-platform',
    slug: 'building-neptunes-music-streaming-platform-nepal',
    title: 'Neptunes: How We\'re Building Nepal\'s Answer to Music Distribution',
    excerpt: 'Spotify doesn\'t care about Nepali indie artists. So we built a platform that does. Here\'s the architecture behind Neptunes and why it matters.',
    category: 'Web Platform',
    tags: ['React', 'Django', 'Music Tech', 'Nepal', 'Streaming'],
    date: '2026-02-18',
    readTime: '9 min read',
    author: 'Point Zero Team',
    image: tuneseven,
    thumbnail: tuneseven,
    gradient: 'from-purple-500 to-pink-600',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Nepal has an incredible music scene — from folk fusion to hip-hop to classical ragas reimagined. But where do these artists go to sell their music? Spotify barely registers Nepali content. YouTube takes a 45% cut. SoundCloud is a graveyard. Neptunes exists to give Nepali artists a platform that\'s actually built for them.'
      },
      {
        type: 'heading',
        text: 'Purchase, Not Just Stream'
      },
      {
        type: 'paragraph',
        text: 'Here\'s our controversial take: streaming royalties are a scam for small artists. Neptunes is a purchase-first platform. Fans buy albums and songs directly. Artists get 85% of the revenue. No mysterious algorithm deciding who gets paid. No need for a million streams to earn enough for dal bhat.'
      },
      {
        type: 'heading',
        text: 'The Architecture That Powers It All'
      },
      {
        type: 'paragraph',
        text: 'Django REST Framework handles the API layer with JWT-based authentication. React powers the frontend with a custom audio player that supports gapless playback. PostgreSQL stores everything from artist profiles to purchase history. We built a bulk upload system so artists can drop an entire album — tracks, artwork, metadata — in one go.'
      },
      {
        type: 'list',
        items: [
          'Django REST Framework with custom permission classes',
          'React frontend with custom audio player component',
          'PostgreSQL for rock-solid data integrity',
          'Bulk upload system for artists (albums + tracks + metadata)',
          'Manual payment verification flow (payment gateways coming soon)',
          'CDN-ready media serving architecture'
        ]
      },
      {
        type: 'heading',
        text: 'What\'s Coming Next'
      },
      {
        type: 'paragraph',
        text: 'Payment gateway integration (eSewa + Khalti), artist analytics dashboard, and a mobile app for offline listening. We\'re also exploring blockchain-based royalty tracking. The future of Nepali music is decentralized, and Neptunes is laying the groundwork.'
      }
    ]
  },
  {
    id: 'chatmandu-realtime-chat',
    slug: 'chatmandu-building-realtime-chat-with-websockets-nextjs',
    title: 'Chatmandu: Real-Time Chat at Scale with WebSockets & Next.js',
    excerpt: 'Building a real-time messaging platform that handles thousands of concurrent connections without breaking a sweat. Here\'s our WebSocket battle story.',
    category: 'Engineering',
    tags: ['Next.js', 'WebSocket', 'Redis', 'Real-time', 'Chat'],
    date: '2026-02-05',
    readTime: '7 min read',
    author: 'Point Zero Team',
    image: chatmandu,
    thumbnail: chatmandu,
    gradient: 'from-violet-500 to-purple-600',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Real-time communication sounds simple until you actually try to build it. "Just use WebSockets" they said. What they didn\'t say: handling connection drops, message ordering, presence detection, and scaling beyond a single server is where the real engineering begins. Chatmandu taught us all of it — the hard way.'
      },
      {
        type: 'heading',
        text: 'Why Not Just Use Firebase?'
      },
      {
        type: 'paragraph',
        text: 'We wanted full control. Firebase is great for MVPs, but when you need custom message formats, end-to-end encryption, and the ability to run on your own infrastructure — you roll your own. Chatmandu needed to work in environments where data sovereignty matters.'
      },
      {
        type: 'heading',
        text: 'The WebSocket Architecture'
      },
      {
        type: 'paragraph',
        text: 'Django Channels handles WebSocket connections with Redis as the channel layer. Each chat room is a Redis pub/sub channel. When a message comes in, it\'s persisted to PostgreSQL, broadcast to all connected clients via Redis, and acknowledged back to the sender — all in under 50ms. We implemented exponential backoff for reconnection and optimistic UI updates for that instant-message feel.'
      },
      {
        type: 'list',
        items: [
          'Django Channels + ASGI for WebSocket handling',
          'Redis pub/sub for real-time message broadcasting',
          'PostgreSQL for message persistence and history',
          'Exponential backoff for automatic reconnection',
          'Optimistic UI updates for instant feedback',
          'Nginx reverse proxy with WebSocket upgrade support'
        ]
      },
      {
        type: 'heading',
        text: 'Lessons Learned the Hard Way'
      },
      {
        type: 'paragraph',
        text: 'Our biggest production bug? WebSockets worked perfectly in development but broke on the VPS. Turns out, Nginx wasn\'t configured for WebSocket upgrades. Two hours of debugging, one config change, and suddenly everything lit up. The lesson: always test your infra configuration, not just your code.'
      },
      {
        type: 'quote',
        text: 'The best real-time systems are the ones users never think about. If they notice it — it\'s too slow.',
        author: 'Point Zero Engineering'
      }
    ]
  },
  {
    id: 'rozai-ecommerce',
    slug: 'rozai-building-ecommerce-platform-nepal-market',
    title: 'Rozai: Lessons from Building an E-Commerce Platform for Nepal',
    excerpt: 'Cash-on-delivery, slow internet, and users who\'ve never shopped online before. Building e-commerce for Nepal is a different beast — and we loved every challenge.',
    category: 'E-Commerce',
    tags: ['React', 'Django', 'PostgreSQL', 'E-Commerce', 'Nepal'],
    date: '2026-01-20',
    readTime: '8 min read',
    author: 'Point Zero Team',
    image: porject2,
    thumbnail: porject2,
    gradient: 'from-orange-500 to-red-600',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'E-commerce in Nepal isn\'t Amazon. It\'s not Shopify. It\'s a completely different universe where cash-on-delivery accounts for 80% of transactions, customers call the store to confirm their order is real, and half your users are shopping on a phone that cost less than $100. Welcome to Rozai — our love letter to Nepali online shopping.'
      },
      {
        type: 'heading',
        text: 'Designing for Trust'
      },
      {
        type: 'paragraph',
        text: 'The number one barrier to online shopping in Nepal? Trust. "Is this product real?" "Will it actually arrive?" "Can I return it?" We addressed this head-on: real product photos (no stock images), verified seller badges, a prominent return policy, and customer reviews with photo uploads. Trust isn\'t a feature — it\'s the foundation.'
      },
      {
        type: 'heading',
        text: 'Performance on Budget Devices'
      },
      {
        type: 'paragraph',
        text: 'We tested Rozai on a Samsung Galaxy J2 from 2016. If it runs smooth there, it runs smooth everywhere. React\'s virtual DOM helps, but the real wins came from aggressive image optimization (WebP with JPEG fallbacks), skeleton loading states, and limiting JavaScript bundle size to under 200KB gzipped.'
      },
      {
        type: 'list',
        items: [
          'React with code splitting and lazy component loading',
          'Django REST Framework with Redis-cached product catalogs',
          'PostgreSQL with full-text search for Nepali + English',
          'WebP images with automatic JPEG fallback',
          'Cash-on-delivery as the default payment method',
          'SMS-based order tracking for non-smartphone users'
        ]
      },
      {
        type: 'heading',
        text: 'The Cash-on-Delivery Challenge'
      },
      {
        type: 'paragraph',
        text: 'COD means you ship the product before you get paid. That\'s a trust exercise with logistics companies, and it changes everything about how you handle orders, inventory, and returns. We built a custom order management system with delivery partner integration that tracks every package from warehouse to doorstep.'
      },
      {
        type: 'quote',
        text: 'Build for the user you have, not the user you wish you had. In Nepal, that means mobile-first, offline-tolerant, and trust-centered.',
        author: 'Point Zero Design Philosophy'
      }
    ]
  },
  {
    id: 'bidesh-immigration',
    slug: 'bidesh-digital-platform-nepali-migrant-workers',
    title: 'Bidesh: Building a Digital Lifeline for Nepali Migrant Workers',
    excerpt: 'Millions of Nepalis work abroad in tough conditions. Bidesh connects them with resources, legal help, and community — all from their phone.',
    category: 'Social Impact',
    tags: ['Next.js', 'Flutter', 'Immigration', 'Social Impact', 'Nepal'],
    date: '2026-01-08',
    readTime: '6 min read',
    author: 'Point Zero Team',
    image: bidesh,
    thumbnail: bidesh,
    gradient: 'from-cyan-500 to-blue-600',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Nepal\'s economy runs on remittances. Over 4 million Nepalis work abroad — in the Gulf, Malaysia, South Korea, Japan. Many face exploitation, language barriers, and homesickness. Bidesh started as a question: "What if there was an app that actually helped migrant workers, instead of just taking their money?"'
      },
      {
        type: 'heading',
        text: 'Understanding the User (Really)'
      },
      {
        type: 'paragraph',
        text: 'Our users aren\'t tech-savvy Silicon Valley types. They\'re construction workers in Qatar, domestic helpers in Kuwait, factory workers in Malaysia. They have basic Android phones, unreliable internet, and read Devanagari. Every design decision was filtered through this lens: "Would my uncle in Saudi Arabia understand this?"'
      },
      {
        type: 'heading',
        text: 'Multi-Language, Multi-Platform'
      },
      {
        type: 'paragraph',
        text: 'We built the web platform with Next.js for SEO (migrant workers google their rights — we need to be there). The mobile app is Flutter for cross-platform reach. Both support Nepali (Devanagari) and English. The content is written in simple Nepali — no formal language, no legal jargon. Just clear, actionable information.'
      },
      {
        type: 'list',
        items: [
          'Next.js for SEO-optimized web platform',
          'Flutter for cross-platform mobile app',
          'Bilingual support: Nepali (Devanagari) + English',
          'Offline-first document storage for labor contracts',
          'Emergency helpline integration by country',
          'Community forum for peer-to-peer support'
        ]
      },
      {
        type: 'heading',
        text: 'Impact Over Profit'
      },
      {
        type: 'paragraph',
        text: 'This project isn\'t about margins. It\'s about impact. Every feature we build is measured by one metric: did it help a worker avoid exploitation or get the help they needed? That\'s the kind of work that reminds us why we got into tech in the first place.'
      }
    ]
  },
  {
    id: 'epass-digital-permits',
    slug: 'epass-digitizing-permits-government-nepal',
    title: 'E-Pass: How We Digitized Nepal\'s Permit System (And Survived Government Requirements)',
    excerpt: 'Government tech projects are notoriously complex. Multiple stakeholders, legacy systems, and "can you make it work with IE?" — here\'s how we navigated it all.',
    category: 'GovTech',
    tags: ['React', 'Django', 'PostgreSQL', 'Government', 'Digital Transformation'],
    date: '2025-12-15',
    readTime: '7 min read',
    author: 'Point Zero Team',
    image: epass,
    thumbnail: epass,
    gradient: 'from-amber-500 to-orange-600',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Want to test your patience as a developer? Build software for the government. E-Pass was our foray into govtech — digitizing Nepal\'s permit and pass system. The project taught us more about stakeholder management, security requirements, and real-world constraints than any textbook ever could.'
      },
      {
        type: 'heading',
        text: 'The Paper Problem'
      },
      {
        type: 'paragraph',
        text: 'Before E-Pass, getting a travel permit meant standing in line for hours, filling out forms in triplicate, and hoping the office wasn\'t closed for a random holiday. The system was built on paper, stamps, and human memory. We needed to digitize all of that without breaking existing workflows — because government employees don\'t like change.'
      },
      {
        type: 'heading',
        text: 'Security First, Always'
      },
      {
        type: 'paragraph',
        text: 'Government systems have zero tolerance for security breaches. We implemented role-based access control with Django\'s permission system, encrypted sensitive data at rest and in transit, added audit logging for every action, and set up multi-factor authentication for admin users. The security review alone took two weeks.'
      },
      {
        type: 'list',
        items: [
          'React frontend with accessibility compliance',
          'Django REST Framework with RBAC permissions',
          'PostgreSQL with encrypted sensitive fields',
          'Complete audit logging for compliance',
          'QR code-based permit verification',
          'Offline verification capability for remote checkpoints'
        ]
      },
      {
        type: 'heading',
        text: 'The Aha Moment'
      },
      {
        type: 'paragraph',
        text: 'The day we watched a checkpoint officer scan a QR code on a traveler\'s phone and instantly verify their permit — instead of calling the district office — was the moment it all clicked. Technology works when it makes people\'s lives tangibly easier. That\'s the bar we set for every project.'
      }
    ]
  }
];

export const blogCategories = [
  'All',
  'Case Study',
  'Mobile App',
  'AI / Mobile',
  'Web Platform',
  'Engineering',
  'E-Commerce',
  'Social Impact',
  'GovTech'
];

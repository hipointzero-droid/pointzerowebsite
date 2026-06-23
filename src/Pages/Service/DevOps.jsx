import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import Seo from '../../components/Seo';
import { trackCTAClick } from '../../lib/analytics';

import CloudIcon from '@mui/icons-material/Cloud';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VerifiedIcon from '@mui/icons-material/Verified';

const OFFERINGS = [
  {
    icon: <AutorenewIcon className="w-7 h-7" />,
    title: 'CI/CD Pipelines',
    desc: 'GitHub Actions, GitLab CI or CircleCI — branch-protected deploys, preview environments, automatic rollbacks and signed releases.',
  },
  {
    icon: <CloudIcon className="w-7 h-7" />,
    title: 'Cloud Architecture (AWS, GCP)',
    desc: 'Reference architectures for SaaS, AI and mobile back-ends — VPC layout, IAM, multi-region failover and cost-optimised auto-scaling.',
  },
  {
    icon: <StorageIcon className="w-7 h-7" />,
    title: 'Infrastructure as Code',
    desc: 'Terraform / Pulumi modules with environment promotion, drift detection and PR-reviewed infra changes — no more "click-ops".',
  },
  {
    icon: <MonitorHeartIcon className="w-7 h-7" />,
    title: 'Observability & SLOs',
    desc: 'Logs (Loki / CloudWatch), metrics (Prometheus / Grafana), traces (OpenTelemetry) and Sentry — wired to SLOs with on-call alerting via PagerDuty / Opsgenie.',
  },
  {
    icon: <SecurityIcon className="w-7 h-7" />,
    title: 'Security & Compliance',
    desc: 'WAF, secrets management, SSO, least-privilege IAM, OWASP audits and pre-deploy SAST/DAST scans. GDPR-ready data residency choices.',
  },
  {
    icon: <RocketLaunchIcon className="w-7 h-7" />,
    title: 'Migrations & Modernisation',
    desc: 'On-prem to cloud, monolith to services, Docker → Kubernetes, plus zero-downtime database migrations on Postgres / MySQL.',
  },
];

const STACK = [
  { name: 'AWS', tag: 'Cloud' },
  { name: 'GCP', tag: 'Cloud' },
  { name: 'Vercel', tag: 'Edge' },
  { name: 'Cloudflare', tag: 'CDN' },
  { name: 'Docker', tag: 'Containers' },
  { name: 'Kubernetes', tag: 'Orchestration' },
  { name: 'Terraform', tag: 'IaC' },
  { name: 'Pulumi', tag: 'IaC' },
  { name: 'GitHub Actions', tag: 'CI/CD' },
  { name: 'Grafana', tag: 'Observability' },
  { name: 'Sentry', tag: 'Errors' },
  { name: 'PostgreSQL', tag: 'Database' },
  { name: 'Redis', tag: 'Cache' },
  { name: 'PagerDuty', tag: 'On-call' },
];

const FAQS = [
  {
    q: 'How much do DevOps services cost in Nepal?',
    a: 'Discovery + cloud audit at Point Zero starts at USD 800. Setting up CI/CD, IaC, observability and on-call for a single product typically runs USD 3,500–8,000 one-time, plus a monthly retainer for ongoing reliability work.',
  },
  {
    q: 'Do you offer monthly DevOps / SRE retainers?',
    a: 'Yes. Retainers cover infra-as-code maintenance, alert triage, performance tuning, cost reviews, runbook updates and security patching. Most teams need 0.25–0.5 of an SRE per month.',
  },
  {
    q: 'AWS vs GCP — which should we choose?',
    a: 'It depends on data gravity and team familiarity. We default to AWS for SaaS, GCP for ML/AI-heavy workloads, and Vercel for static + edge-rendered front-ends. We will benchmark on your real workload before locking in.',
  },
  {
    q: 'Can you reduce our existing cloud bill?',
    a: 'Yes. A 1-week cost audit typically uncovers 20–40% in savings — right-sizing, reserved instances, S3 lifecycle, redundant NAT gateways, idle RDS, and forgotten dev environments. Quick payback.',
  },
  {
    q: 'Do you handle on-call and incident response?',
    a: 'Yes. We can either set up your team to run their own on-call (PagerDuty, runbooks, postmortem template) or run a co-managed on-call rotation with Point Zero senior engineers in the loop.',
  },
  {
    q: 'Can you migrate us off Heroku or shared hosting?',
    a: 'Yes. We have run zero-downtime migrations off Heroku, Render and shared cPanel hosting onto AWS, GCP and Vercel. Includes DNS cutover, data migration, secret rotation and a rollback plan.',
  },
];

export default function DevOps() {
  const navigate = useNavigate();

  const DEVOPS_PROCESS = [
    { title: 'Cloud audit & cost review', desc: 'One-week audit covering architecture, IAM, security, observability, IaC drift and right-sizing — typically uncovers 20–40% in cloud-bill savings.' },
    { title: 'IaC & environments', desc: 'Terraform / Pulumi modules with environment promotion (dev/stage/prod), drift detection and PR-reviewed infra changes.' },
    { title: 'CI/CD & preview deploys', desc: 'GitHub Actions / GitLab CI pipelines with branch-protected deploys, preview environments and automatic rollback.' },
    { title: 'Observability & SLOs', desc: 'Logs, metrics, traces, error budgets and on-call alerting via PagerDuty / Opsgenie — tied to SLOs your team committed to.' },
    { title: 'Hardening & runbooks', desc: 'WAF, SSO, least-privilege IAM, secrets management, SAST/DAST scans on every PR, plus runbooks for the top 10 incident classes.' },
  ];

  const howToJsonLd = {
    '@type': 'HowTo',
    '@id': 'https://pointzero.com.np/services/devops-cloud-nepal#howto',
    name: 'How Point Zero sets up DevOps & cloud in Nepal',
    description:
      'The five-step DevOps process Point Zero uses: cloud audit, IaC with environments, CI/CD with preview deploys, observability with SLOs, hardening with runbooks.',
    totalTime: 'P21D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '800' },
    step: DEVOPS_PROCESS.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.title,
      text: p.desc,
      url: `https://pointzero.com.np/services/devops-cloud-nepal#step-${i + 1}`,
    })),
  };

  const speakableJsonLd = {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#off-heading'],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      howToJsonLd,
      {
        '@type': 'WebPage',
        '@id': 'https://pointzero.com.np/services/devops-cloud-nepal#webpage',
        url: 'https://pointzero.com.np/services/devops-cloud-nepal',
        name: 'DevOps & Cloud Infrastructure in Nepal',
        speakable: speakableJsonLd,
        inLanguage: 'en-NP',
      },
      {
        '@type': 'Service',
        '@id': 'https://pointzero.com.np/services/devops-cloud-nepal#service',
        name: 'DevOps & Cloud Infrastructure Services',
        serviceType: 'DevOps and cloud engineering',
        provider: { '@type': 'Organization', name: 'Point Zero', url: 'https://pointzero.com.np/' },
        areaServed: ['Nepal', 'Worldwide'],
        description:
          'DevOps and cloud infrastructure services for AWS, GCP and Vercel. CI/CD, IaC with Terraform, observability, security and 24/7 on-call.',
        offers: {
          '@type': 'Offer',
          price: '800',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2027-12-31',
          url: 'https://pointzero.com.np/services/devops-cloud-nepal',
          category: 'DevOps & cloud infrastructure',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '800',
            priceCurrency: 'USD',
            unitText: 'starting price for cloud audit',
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://pointzero.com.np/services/devops-cloud-nepal#faq',
        mainEntity: FAQS.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen">
      <Seo
        title="DevOps & Cloud Infrastructure Services in Nepal | Point Zero"
        description="DevOps & cloud services in Nepal — AWS, GCP, Terraform, CI/CD, observability, security and on-call. Cloud audit from USD 800. Free discovery call."
        keywords="DevOps services Nepal, cloud infrastructure Nepal, AWS consultant Nepal, GCP consultant Nepal, Terraform Nepal, Kubernetes Nepal, SRE Nepal, observability Nepal, CI CD Nepal, hire DevOps engineer Nepal"
        path="/services/devops-cloud-nepal"
        image="https://pointzero.com.np/og/devops-cloud.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'DevOps & Cloud', path: '/services/devops-cloud-nepal' },
        ]}
        jsonLd={jsonLd}
      />
      <Navbar />

      <section className="relative min-h-[80vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <AnimateOnScroll as="div" variant="up" className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <CloudIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">DevOps & Cloud · Kathmandu, Nepal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              DevOps & Cloud{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Infrastructure
              </span>{' '}
              in Nepal
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
              Production-grade cloud on{' '}
              <strong className="text-white">AWS</strong>,{' '}
              <strong className="text-white">GCP</strong> and{' '}
              <strong className="text-white">Vercel</strong>. CI/CD with rollback,
              Terraform-managed infra, observability with SLOs, security baked in,
              and on-call your team can actually sleep through.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              ⭐ 5.0 client rating · Cloud audit from <strong className="text-gray-300">USD 800</strong> · 20–40% typical cloud-bill savings
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  trackCTAClick('Get a Free Cloud Audit', 'service_devops_hero');
                  navigate('/contact');
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Get a Free Cloud Audit
                  <ArrowForwardIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                See All Services
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section aria-labelledby="off-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="off-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What we ship in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">DevOps</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Reliable infra, sane on-call, predictable bills — not a wall of dashboards no one reads.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERINGS.map((c) => (
              <AnimateOnScroll
                key={c.title}
                as="article"
                variant="up"
                className="p-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-300 rounded-xl mb-4">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 leading-relaxed">{c.desc}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="stack-heading" className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-12 max-w-3xl mx-auto">
            <h2 id="stack-heading" className="text-3xl sm:text-4xl font-bold text-white">
              The DevOps stack we ship in production
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-wrap gap-3 justify-center">
            {STACK.map((s) => (
              <span key={s.name} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-blue-300 text-xs">{s.tag}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="dev-faq-heading" className="relative bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll as="div" variant="up" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <HelpOutlineIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">DevOps & Cloud FAQ</span>
            </div>
            <h2 id="dev-faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              DevOps — answered honestly
            </h2>
          </AnimateOnScroll>

          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-5 bg-gray-900/60 border border-white/10 rounded-2xl open:border-blue-500/30 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-base sm:text-lg font-semibold text-white">{f.q}</span>
                  <span className="text-blue-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll as="div" variant="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <VerifiedIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Available for new DevOps engagements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to sleep through your on-call rotation?
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Start a DevOps Engagement
                  <RocketLaunchIcon className="w-5 h-5" />
                </span>
              </button>
              <a
                href="mailto:hi.pointzero@gmail.com"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Email hi.pointzero@gmail.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const ALL = [
  { path: '/services/ai-development-nepal', label: 'AI Development' },
  { path: '/services/rag-chatbot-development', label: 'RAG Chatbot Development' },
  { path: '/services/web-development-nepal', label: 'Web Development' },
  { path: '/services/mobile-app-development-nepal', label: 'Mobile App Development' },
  { path: '/services/ui-ux-design-nepal', label: 'UI/UX Design' },
  { path: '/services/mvp-development', label: 'MVP & SaaS Development' },
  { path: '/services/devops-cloud-nepal', label: 'DevOps & Cloud' },
];

/**
 * Contextual internal links between service pages (crawlable anchors).
 * Pass `currentPath` to exclude the page the user is already on.
 */
export default function RelatedServices({ currentPath, extra = [] }) {
  const links = ALL.filter((s) => s.path !== currentPath).concat(extra);

  return (
    <section
      aria-labelledby="related-services-heading"
      className="relative border-t border-white/10 bg-neutral-950 py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="related-services-heading"
          className="text-xl sm:text-2xl font-semibold text-white"
        >
          Related Point Zero services
        </h2>
        <p className="mt-2 text-neutral-400 text-sm max-w-2xl">
          Explore complementary capabilities, case studies and how we engage.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
          {links.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="text-sm text-neutral-300 underline-offset-4 hover:text-brand hover:underline transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/project"
              className="text-sm text-neutral-300 underline-offset-4 hover:text-brand hover:underline transition-colors"
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-sm text-neutral-300 underline-offset-4 hover:text-brand hover:underline transition-colors"
            >
              Contact Point Zero
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

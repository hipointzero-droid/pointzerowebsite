import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../Home/Components/Footer'
import Seo from '../../components/Seo'

export default function NotFound() {
  const location = useLocation()
  const path = location.pathname || '/404'

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Seo
        title="Page Not Found | Point Zero"
        description="The page you requested could not be found. Return to Point Zero to explore AI, web and mobile software services."
        path={path}
        noindex
      />
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <p className="text-sm font-medium uppercase tracking-wider text-brand mb-4">
          Error 404
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
          Page not found
        </h1>
        <p className="mt-5 text-neutral-400 text-center max-w-md text-base sm:text-lg leading-relaxed">
          This URL does not match any page on pointzero.com.np. Head home or
          browse services and case studies.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Back to home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            View services
          </Link>
          <Link
            to="/project"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            View projects
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

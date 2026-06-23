import React, { useState, Suspense } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import Seo from '../../components/Seo';
import {
  trackContactSubmit,
  trackContactSuccess,
  trackContactError,
  trackPhoneClick,
  trackEmailClick,
} from '../../lib/analytics';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Mailto is the universal fallback that works without backend setup. When a
// real form endpoint (Formspree, Web3Forms, Netlify Forms, custom API) is
// wired via VITE_CONTACT_FORM_ENDPOINT, we POST to it instead.
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '';
const CONTACT_EMAIL = 'hi.pointzero@gmail.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s\-().]{6,}$/;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  function validate(data) {
    const next = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      next.name = 'Please enter your name.';
    }
    if (!EMAIL_RE.test(data.email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    if (data.phone.trim() && !PHONE_RE.test(data.phone.trim())) {
      next.phone = 'Enter a valid phone number, or leave blank.';
    }
    if (!data.subject.trim() || data.subject.trim().length < 3) {
      next.subject = 'Give your message a short subject.';
    }
    if (!data.message.trim() || data.message.trim().length < 10) {
      next.message = 'Tell us a bit more — at least 10 characters.';
    }
    return next;
  }

  function openMailtoFallback(data) {
    // Mailto is rate-limit safe and works on every device without a backend.
    const subject = `[Point Zero] ${data.subject || 'New project enquiry'}`;
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : '',
      '',
      data.message,
      '',
      '— Sent from pointzero.com.np/contact',
    ].filter(Boolean);
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    window.location.href = href;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    const fieldErrors = validate(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      trackContactError('validation');
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    trackContactSubmit({ subject: formData.subject });

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...formData,
            source: 'pointzero.com.np/contact',
            ts: new Date().toISOString(),
          }),
        });
        if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`);
      } else {
        // No backend wired yet — open the user's mail client pre-filled.
        // This still captures the lead via the user's own email, and means
        // the page works on a vanilla Netlify deploy without secrets.
        openMailtoFallback(formData);
      }
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      trackContactSuccess({ subject: formData.subject });
    } catch (err) {
      setSubmitError(
        "Couldn't send the message. Please email hi.pointzero@gmail.com or call +977 9860486269.",
      );
      trackContactError(err?.message || 'network');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon className="w-6 h-6" />,
      title: 'Email Us',
      content: 'hi.pointzero@gmail.com',
      link: 'mailto:hi.pointzero@gmail.com',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Call Us',
      content: '+977 9860486269',
      link: 'tel:+9779860486269',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <LocationOnIcon className="w-6 h-6" />,
      title: 'Visit Us',
      content: 'Kathmandu, Nepal',
      link: '#',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: <AccessTimeIcon className="w-6 h-6" />,
      title: 'Working Hours',
      content: 'Sun - Fri: 9AM - 6PM',
      link: '#',
      gradient: 'from-green-500 to-emerald-600',
    },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, link: 'https://www.facebook.com/pointzero.com.np/', label: 'Facebook' },
    { icon: <InstagramIcon />, link: 'https://www.instagram.com/pointzero.com.np/', label: 'Instagram' },
    { icon: <LinkedInIcon />, link: '#', label: 'LinkedIn' },
    { icon: <TwitterIcon />, link: '#', label: 'Twitter' },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Seo
        title="Contact Point Zero — Start Your AI or Software Project"
        description="Tell us about your AI, web or mobile project. Free discovery call. Email hi.pointzero@gmail.com or call +977 9860486269. Reply within one business day."
        keywords="contact Pointzero, hire AI developers Nepal, hire web developers Nepal, software development quote Nepal, AI consultant Kathmandu"
        path="/contact"
        image="https://pointzero.com.np/og/contact.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Pointzero',
          url: 'https://pointzero.com.np/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'Pointzero',
            email: 'hi.pointzero@gmail.com',
            telephone: '+977-9860486269',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kathmandu',
              addressCountry: 'NP',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: 'hi.pointzero@gmail.com',
              telephone: '+977-9860486269',
              areaServed: 'Worldwide',
              availableLanguage: ['English', 'Nepali'],
            },
          },
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <RocketLaunchIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Let's Connect</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Get In{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                onClick={() => {
                  if (info.link.startsWith('mailto:')) trackEmailClick('contact_card');
                  else if (info.link.startsWith('tel:')) trackPhoneClick('contact_card');
                }}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:border-white/20 hover:-translate-y-2"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${info.gradient} rounded-xl mb-4`}>
                    <span className="text-white">{info.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                  <p className="text-gray-400 text-sm">{info.content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Side - Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you're looking to build a new website, develop a mobile app,
                or transform your digital presence, we're here to help. Our team of
                experts is ready to turn your vision into reality.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Free consultation and project estimation',
                  'Dedicated team of experienced developers',
                  '24/7 support and maintenance',
                  'On-time delivery guaranteed',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-white font-semibold mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>

              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
                      <CheckCircleIcon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-gray-400 mb-6">
                      Your message has been sent successfully. We'll get back to you soon!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                    <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {submitError && (
                        <div role="alert" className="px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-200 rounded-xl text-sm">
                          {submitError}
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            aria-invalid={errors.name ? 'true' : 'false'}
                            aria-describedby={errors.name ? 'err-name' : undefined}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                              errors.name
                                ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
                                : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500'
                            }`}
                          />
                          {errors.name && (
                            <p id="err-name" className="mt-2 text-xs text-red-300">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'err-email' : undefined}
                            placeholder="john@example.com"
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                              errors.email
                                ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
                                : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500'
                            }`}
                          />
                          {errors.email && (
                            <p id="err-email" className="mt-2 text-xs text-red-300">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            aria-describedby={errors.phone ? 'err-phone' : undefined}
                            placeholder="+977 98XXXXXXXX"
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                              errors.phone
                                ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
                                : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500'
                            }`}
                          />
                          {errors.phone && (
                            <p id="err-phone" className="mt-2 text-xs text-red-300">{errors.phone}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-300 mb-2">
                            Subject
                          </label>
                          <input
                            id="contact-subject"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            aria-invalid={errors.subject ? 'true' : 'false'}
                            aria-describedby={errors.subject ? 'err-subject' : undefined}
                            placeholder="Project Inquiry"
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 ${
                              errors.subject
                                ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
                                : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500'
                            }`}
                          />
                          {errors.subject && (
                            <p id="err-subject" className="mt-2 text-xs text-red-300">{errors.subject}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'err-message' : undefined}
                          placeholder="Tell us about your project..."
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${
                            errors.message
                              ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500'
                              : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500'
                          }`}
                        />
                        {errors.message && (
                          <p id="err-message" className="mt-2 text-xs text-red-300">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <SendIcon className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64603902677!2d85.25610865!3d27.708954449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1699000000000!5m2!1sen!2snp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

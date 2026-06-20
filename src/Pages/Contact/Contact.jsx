import React, { useState, Suspense } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../Home/Components/Footer';
import StarsCanvas from '../../components/StarsLazy';
import Seo from '../../components/Seo';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
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

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+977 98XXXXXXXX"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Project Inquiry"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                        />
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

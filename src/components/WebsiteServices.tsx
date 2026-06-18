"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    name: "Starter Website",
    price: "₹4,999",
    priceSub: "one-time",
    description: "A clean, professional website to get your business online fast.",
    features: [
      "Responsive website",
      "Contact form",
      "WhatsApp integration",
      "Fast loading",
      "SEO friendly",
    ],
    gradient: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500/20",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "AI Website",
    price: "₹9,999",
    priceSub: "one-time",
    description: "Multi-page site with an AI chatbot that captures leads for you.",
    features: [
      "Multi-page website",
      "AI chatbot",
      "Lead capture",
      "Google Maps integration",
      "Premium animations",
    ],
    gradient: "from-primary-400 to-primary-600",
    glow: "bg-primary-500/20",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium 3D Experience",
    price: "₹14,999+",
    priceSub: "one-time",
    description: "A flagship site with custom 3D hero and interactive animations.",
    features: [
      "Custom 3D hero section",
      "Interactive animations",
      "AI chatbot",
      "Advanced UI/UX",
      "Priority support",
    ],
    gradient: "from-purple-500 to-pink-400",
    glow: "bg-purple-500/20",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

const whyChooseMe = [
  {
    title: "Modern Design",
    description: "Clean, premium UI inspired by the best agency sites.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description: "Every site can include a custom-trained AI assistant.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Most sites go live in 5-7 business days.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Mobile Optimized",
    description: "Pixel-perfect on phones, tablets, and desktops.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "SEO Friendly",
    description: "Built to rank on Google from day one.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description: "Free fixes for 30 days. Monthly plans available.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

// TODO: Replace these placeholder thumbnails with real screenshots when you have work to show.
// Each item has: title, gradient, and a short caption that hints at the kind of work done.
const portfolioCategories = [
  {
    title: "Gym Websites",
    caption: "Membership, classes, trainer info",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Restaurant Websites",
    caption: "Menus, reservations, delivery",
    gradient: "from-orange-500 to-red-400",
  },
  {
    title: "Real Estate Websites",
    caption: "Listings, maps, lead capture",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Startup Websites",
    caption: "Landing pages, product launches",
    gradient: "from-purple-500 to-pink-400",
  },
];

const GOOGLE_FORM_URL = "https://forms.gle/PjGfj3KrMvyr7xWp7";

export default function WebsiteServices() {
  const [activeCategory, setActiveCategory] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance the portfolio carousel every 4s. Pause on hover is handled inline.
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveCategory((i) => (i + 1) % portfolioCategories.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const pauseAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resumeAuto = () => {
    intervalRef.current = setInterval(() => {
      setActiveCategory((i) => (i + 1) % portfolioCategories.length);
    }, 4000);
  };

  return (
    <section id="websites" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            Website Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Websites That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Convert Visitors
            </span>{" "}
            Into Customers
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            I design premium websites with modern UI, interactive 3D
            experiences, and AI-powered customer support for businesses.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                service.highlighted
                  ? "border-primary-500/40 bg-gradient-to-b from-primary-500/[0.08] to-[#0f0f0f] shadow-2xl shadow-primary-500/10"
                  : "border-white/[0.08] bg-[#0f0f0f] hover:border-primary-500/20"
              }`}
            >
              {service.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold tracking-wide uppercase">
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-5 shadow-lg`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-1">{service.name}</h3>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6 pb-6 border-b border-white/5">
                <div className="text-3xl font-bold text-white">
                  {service.price}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {service.priceSub}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all ${
                  service.highlighted
                    ? "bg-primary-600 hover:bg-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/25"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Choose Me
            </span>
            ?
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {whyChooseMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-4 rounded-xl border border-white/[0.08] bg-[#0f0f0f] hover:border-primary-500/30 hover:bg-white/[0.02] transition-all text-center"
            >
              <div className="w-9 h-9 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center mx-auto mb-3">
                {item.icon}
              </div>
              <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Portfolio carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          onMouseEnter={pauseAuto}
          onMouseLeave={resumeAuto}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Portfolio{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Showcase
              </span>
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Categories of work I build. Full case studies coming soon.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {portfolioCategories.map((cat, index) => (
              <button
                key={cat.title}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === index
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/[0.08]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Carousel stage */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={`relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl border border-white/[0.08] bg-gradient-to-br ${portfolioCategories[activeCategory].gradient} overflow-hidden`}
              >
                {/* Placeholder thumbnail — replace with <Image> when real screenshots exist */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-4xl sm:text-6xl font-bold text-white/90 mb-2">
                      {portfolioCategories[activeCategory].title}
                    </div>
                    <p className="text-sm sm:text-base text-white/70">
                      {portfolioCategories[activeCategory].caption}
                    </p>
                    <p className="text-xs text-white/50 mt-4">
                      Screenshots coming soon
                    </p>
                  </div>
                </div>
                {/* Bottom edge highlight */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Carousel dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {portfolioCategories.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveCategory(index)}
                  aria-label={`Go to ${portfolioCategories[index].title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    activeCategory === index
                      ? "w-8 bg-primary-500"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-primary-500/20 bg-gradient-to-br from-primary-500/[0.08] via-[#0f0f0f] to-[#0f0f0f] p-8 sm:p-12 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary-500/10 rounded-full blur-[100px]" />

          <div className="relative">
            <h3 className="text-2xl sm:text-4xl font-bold mb-3">
              Ready to Upgrade Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Online Presence
              </span>
              ?
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Let&apos;s build a website that looks incredible and helps your
              business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto"
              >
                Get a Free Consultation
              </a>
              <a
                href="#websites"
                className="px-6 py-3 border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all hover:bg-white/5 w-full sm:w-auto"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const trustSignals = [
  "Built for Indian local businesses",
  "3-5 day setup",
  "Works on any website",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            AI Chatbots for Local Businesses in India
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Give Your Business a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              24/7 AI Assistant
            </span>
            <br />
            — No Tech Skills Needed
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Custom chatbots for gyms, coaching institutes, and restaurants
            across India. Setup in 3 days. No coding, no monthly headaches.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto"
            >
              Book Free Demo
            </a>
            <a
              href="#demos"
              className="px-8 py-3.5 border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all hover:bg-white/5 w-full sm:w-auto"
            >
              See Live Examples
            </a>
          </div>
        </motion.div>

        {/* Trust signals (replaces fake stats) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-3xl mx-auto"
        >
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <svg
                className="w-4 h-4 text-primary-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{signal}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

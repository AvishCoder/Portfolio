"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS } from "@/lib/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Plans for Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Business Size
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            One-time setup plus a small monthly fee. No hidden charges, no
            long-term lock-in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.highlighted
                  ? "border-primary-500/40 bg-gradient-to-b from-primary-500/[0.08] to-[#0f0f0f] md:scale-105 md:-my-4 shadow-2xl shadow-primary-500/10"
                  : "border-white/[0.08] bg-[#0f0f0f]"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold tracking-wide uppercase">
                  {tier.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/5">
                <div className="text-lg font-semibold text-white">
                  {tier.setupLabel}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {tier.monthlyLabel}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
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
                href={tier.ctaHref}
                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all ${
                  tier.highlighted
                    ? "bg-primary-600 hover:bg-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/25"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
                }`}
              >
                {tier.ctaLabel}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          All prices in INR. Need something different?{" "}
          <a href="#contact" className="text-primary-400 hover:text-primary-300">
            Tell us what you need
          </a>
          .
        </p>
      </div>
    </section>
  );
}

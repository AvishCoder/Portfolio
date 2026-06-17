"use client";

import { motion } from "framer-motion";
import { GOOGLE_FORM_URL } from "@/lib/contact";
import { EMAIL } from "@/lib/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Book Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Free Demo
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Fill in a quick form (takes 60 seconds) and I&apos;ll get back to
            you within 24 hours with a custom chatbot plan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-8 sm:p-10 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-7 h-7 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>

          <h3 className="text-xl font-bold mb-2">Tell me about your business</h3>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            I&apos;ll ask for your business name, type, email, and the best
            time to call you back.
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-600 hover:bg-primary-500 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary-500/25"
          >
            Book Free Demo
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
              Or reach me directly
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="break-all">{EMAIL}</span>
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-8">
            Your details stay private. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

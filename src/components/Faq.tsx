"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// TODO: Review the "Hindi support" answer and either confirm or remove before launch.
const faqs = [
  {
    q: "Do I need technical knowledge to use the chatbot?",
    a: "No. I handle everything end-to-end — setup, training, deployment. You just review the bot's replies and tell me what to change.",
  },
  {
    q: "How long does setup take?",
    a: "3-5 business days for most businesses. The first day is for collecting your FAQs and brand details, then I train and deploy.",
  },
  {
    q: "Can I customize what the chatbot says?",
    a: "Yes — fully. Every reply is trained on your business data, your tone of voice, and your actual customer questions.",
  },
  {
    q: "What if I want changes later?",
    a: "Monthly updates are included in every plan. Just send me what to change (a WhatsApp voice note works great) and I'll update the bot within 24 hours.",
  },
  {
    q: "Does it work on WhatsApp or only on my website?",
    a: "Both. The Starter plan covers your website. The Growth plan adds WhatsApp integration so customers can chat with your bot on the channel they already use.",
  },
  {
    q: "Do you support Hindi?",
    a: "Yes. Bots can reply in Hindi, English, or a mix of both, depending on what your customers prefer.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Questions,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Answered
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Everything local business owners ask before getting started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl border border-white/[0.08] bg-[#0f0f0f] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 text-sm text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell me about your business",
    description:
      "Share your business details, target audience, and common customer questions.",
  },
  {
    number: "02",
    title: "I train the chatbot",
    description:
      "I customize the AI with your business data, FAQs, and brand voice.",
  },
  {
    number: "03",
    title: "Deploy to your website",
    description:
      "The chatbot goes live on your website with a simple embed code.",
  },
  {
    number: "04",
    title: "Get leads automatically",
    description:
      "Start capturing leads, answering queries, and growing your business 24/7.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Works
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            From idea to deployment in days, not months
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 font-bold text-lg">
                  {step.number}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

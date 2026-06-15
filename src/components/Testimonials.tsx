"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The chatbot reduced repetitive customer queries significantly. Our team now focuses on what actually matters.",
    name: "Rahul S.",
    role: "Gym Owner",
  },
  {
    quote:
      "We capture 3x more leads since adding the AI assistant. It responds faster than any human could.",
    name: "Priya M.",
    role: "Coaching Institute Director",
  },
  {
    quote:
      "Our customers love the instant responses. Reservation bookings increased by 40% in the first month.",
    name: "Amit K.",
    role: "Restaurant Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            What Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Say
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <svg
                className="w-8 h-8 text-primary-500/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

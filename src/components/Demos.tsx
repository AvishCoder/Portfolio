"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const demos = [
  {
    title: "Gyms & Fitness Centers",
    description:
      "Smart AI chatbot for fitness centers that handles member inquiries, schedules, and captures new leads automatically.",
    painPoint: "Stop losing enquiries after 9 PM when your front desk goes home.",
    features: [
      "Membership information",
      "Gym timings",
      "Trainer information",
      "Lead capture",
    ],
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/20",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h1m16 0h1m-9-9v1m0 16v1m-6.364-1.636l.707-.707m12.02-12.02l.707-.707M5.636 5.636l.707.707m12.02 12.02l.707.707" />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
    route: "/demo/gym",
    useCase: "Perfect for gyms, fitness studios & wellness centers",
  },
  {
    title: "Coaching Institutes",
    description:
      "Educational AI assistant that guides prospective students through courses, admissions, and fee structures effortlessly.",
    painPoint:
      "Stop answering the same admission queries 50 times a day. Let the bot handle the first contact.",
    features: [
      "Course details",
      "Admission process",
      "Fee information",
      "Student support",
    ],
    gradient: "from-purple-500 to-pink-400",
    bgGlow: "bg-purple-500/20",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
      </svg>
    ),
    route: "/demo/coaching",
    useCase: "Ideal for coaching centers, tutoring & online courses",
  },
  {
    title: "Restaurants & Cafes",
    description:
      "Restaurant AI bot that assists customers with menus, reservations, timings, and delivery options around the clock.",
    painPoint:
      "Customers want answers at 11 PM, not tomorrow morning. Capture every reservation.",
    features: [
      "Menu assistance",
      "Table reservations",
      "Opening hours",
      "Home delivery information",
    ],
    gradient: "from-orange-500 to-red-400",
    bgGlow: "bg-orange-500/20",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 0C9.79 4 8 5.79 8 8m4-4c2.21 0 4 1.79 4 4M3 16h18M5 20h14" />
      </svg>
    ),
    route: "/demo/restaurant",
    useCase: "Built for restaurants, cafes & food delivery services",
  },
];

export default function Demos() {
  return (
    <section id="demos" className="py-28 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Built for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Industry
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Live AI chatbots trained for real Indian businesses. Click any card
            to try the demo yourself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={demo.route} className="block h-full group">
                <div className="relative h-full rounded-2xl border border-white/[0.08] bg-[#0f0f0f] overflow-hidden transition-all duration-500 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1">
                  {/* Glow on hover */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${demo.bgGlow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Gradient header */}
                  <div
                    className={`relative h-36 bg-gradient-to-br ${demo.gradient} p-6 flex items-end`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative text-white/90">{demo.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                      {demo.description}
                    </p>
                    <p className="text-sm text-primary-300/90 mb-5 italic leading-relaxed">
                      {demo.painPoint}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-6">
                      {demo.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-gray-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
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
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Use case tag */}
                    <p className="text-xs text-gray-500 mb-5 italic">
                      {demo.useCase}
                    </p>

                    {/* Button */}
                    <div className="flex items-center justify-between">
                      <span className="px-5 py-2.5 rounded-lg bg-primary-600/20 border border-primary-500/30 text-primary-300 text-sm font-medium group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all duration-300">
                        Try Demo
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

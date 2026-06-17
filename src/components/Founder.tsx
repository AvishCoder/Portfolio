"use client";

import { motion } from "framer-motion";
import {
  FOUNDER_NAME,
  FOUNDER_AGE,
  FOUNDER_CITY,
  FOUNDER_SCHOOL_CITY,
  FOUNDER_BIO,
} from "@/lib/site";

function getInitials(name: string): string {
  // Use first letter of the first two words, uppercased.
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0] ?? "").join("").toUpperCase() || "AI";
}

export default function Founder() {
  const initials = getInitials(FOUNDER_NAME);

  return (
    <section id="about" className="py-24 px-4 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Founder
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8 rounded-2xl border border-white/[0.08] bg-[#0f0f0f]"
        >
          {/* Avatar placeholder — initials until a real photo is added */}
          <div className="shrink-0 w-24 h-24 rounded-full bg-primary-500/10 border-2 border-primary-500/30 flex items-center justify-center text-primary-300 text-2xl font-bold">
            {initials}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1">
              {FOUNDER_NAME}{" "}
              <span className="text-gray-400 font-normal text-base">
                · {FOUNDER_AGE} years old
              </span>
            </h3>
            <p className="text-sm text-primary-300 mb-1">
              From {FOUNDER_CITY} · Studies in {FOUNDER_SCHOOL_CITY}
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">{FOUNDER_BIO}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

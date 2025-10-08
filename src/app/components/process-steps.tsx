"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const steps = [
  { label: "Plan", desc: "We align on goals and success metrics." },
  { label: "Design", desc: "We craft intuitive UI/UX that converts." },
  { label: "Develop", desc: "We build robust, scalable solutions." },
  { label: "Launch", desc: "We deploy with observability and care." },
  { label: "Grow", desc: "We iterate to improve performance." },
];

export default function ProcessSteps() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section id="process" className="py-20 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center text-black mb-16"
        >
          Our Process
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-semibold mb-4 mx-auto text-sm md:text-base">
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg text-black text-center">{s.label}</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

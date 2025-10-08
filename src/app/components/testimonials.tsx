"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const items = [
  {
    name: "Layla",
    role: "Founder, Dunes Boutique",
    quote:
      "AVM elevated our brand and improved conversions within weeks. Professional, fast, and reliable.",
  },
  {
    name: "Omar",
    role: "CTO, FinEdge",
    quote:
      "From architecture to UX, everything was meticulously executed. Our app is faster and more usable.",
  },
  {
    name: "Aisha",
    role: "Marketing Lead, NovaTech",
    quote:
      "Their creative and performance mindset is unmatched. The campaign results exceeded expectations.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section id="testimonials" className="py-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
        What Clients Say
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {items.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col"
          >
            <div className="flex items-center gap-4">
              <img
                alt={`${t.name} avatar`}
                src={`https://i.pravatar.cc/150?u=${encodeURIComponent(t.name)}`}
                className="h-12 w-12 rounded-full border object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-800">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </div>
            <blockquote className="mt-4 text-gray-600 text-sm leading-relaxed">
              “{t.quote}”
            </blockquote>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

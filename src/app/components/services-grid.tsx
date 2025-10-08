"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const services: Array<{ title: string; desc: string }> = [
  { title: "Website Development", desc: "High-performance, SEO-ready sites that look great on every device." },
  { title: "E-Commerce Solutions", desc: "Custom storefronts optimized for conversion and growth." },
  { title: "Mobile Apps", desc: "Intuitive iOS & Android apps that users love to use." },
  { title: "Digital Marketing", desc: "Performance-focused SEO, PPC, and social that drives measurable ROI." },
  { title: "Brand & Design", desc: "Identity, design systems, 2D/3D visuals, and motion graphics." },
  { title: "AI & Automation", desc: "Content assistants, analytics, and creative tooling powered by AI." },
];

export default function ServicesGrid() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      id="services"
      className="py-20 bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold text-center text-black mb-14"
        >
          Our Core Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-1.5 w-12 rounded-full bg-black mb-5" />
              <h3 className="font-semibold text-lg text-black mb-3 group-hover:text-gray-800 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

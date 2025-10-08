"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function Showcase() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const images = [
    { src: "/img/ui-detail-card.jpg", alt: "UI detail 1" },
    { src: "/img/dashboard-chart.png", alt: "UI detail 2" },
    { src: "/img/generic-mobile-app.png", alt: "UI detail 3" },
  ];

  return (
    <section id="work" className="py-20 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-black"
          >
            Craft, performance, and polish
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700"
          >
            From landing pages to complex e‑commerce and apps, we focus on clarity, speed, and brand.
          </motion.p>

          <div className="grid grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white transition-shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-28 md:h-36 object-cover"
                  priority
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Column */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border"
        >
          <video
            className="w-full h-full object-cover"
            src="https://www.pexels.com/download/video/3249672/"
            controls
            poster="/product-demo-frame.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
}

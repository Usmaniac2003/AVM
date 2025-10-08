"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  // Load custom font dynamically (Google Fonts example)
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[85vh] min-h-[560px] isolate flex items-center justify-center font-sans"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/6828728/"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold text-white"
        >
          Your Partner for Modern Web, Apps, and Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 md:mt-6 text-white/85 text-base md:text-lg"
        >
          We design, build, and scale digital products that convert — end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full  text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
          >
            Get a Free Quote
          </a>
          <a
            href="#work"
            className="inline-flex items-center rounded-full border border-white/30 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

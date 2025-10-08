"use client";

import { motion } from "framer-motion";
import SiteNavbar from "@/app/components/site-navbar";
import Hero from "@/app/components/hero";
import ServicesGrid from "@/app/components/services-grid";
import Showcase from "@/app/components/showcase";
import ProcessSteps from "@/app/components/process-steps";
import Testimonials from "@/app/components/testimonials";
import CTA from "@/app/components/cta";

export default function Page() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      <SiteNavbar />

      {/* Hero Section with background patterns */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative overflow-hidden"
      >
        <Hero />
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-300 to-purple-400 opacity-20 rounded-full -z-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-pink-300 to-yellow-300 opacity-20 rounded-full -z-10 blur-3xl" />
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto px-6 py-12 md:py-16"
      >
        <ServicesGrid />
      </motion.section>

      {/* Showcase Section with subtle pattern */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="bg-card relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <svg className="w-full h-full opacity-10" width="100%" height="100%">
            <defs>
              <pattern id="dots-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" className="text-muted-foreground/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
          <Showcase />
        </div>
      </motion.section>

      {/* Process Steps Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto px-6 py-12 md:py-16"
      >
        <ProcessSteps />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-10 left-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-300 opacity-10 rounded-full blur-3xl -z-10" />
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
          <Testimonials />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CTA />
      </motion.section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2025 AVM E-Commerce • Dubai, UAE</p>
            <p>info@avmecommerce.com • www.avmecommerce.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

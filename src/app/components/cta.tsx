"use client"

import { motion } from "framer-motion"

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        {/* Subtle animated dots background */}
        <svg aria-hidden="true" className="opacity-40" width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" className="text-muted-foreground/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 border shadow"
        >
          <h2 className="text-balance text-2xl md:text-3xl font-semibold">Ready to grow with AVM E‑Commerce?</h2>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Tell us about your goals. We’ll share an action plan in 24–48 hours.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@avmecommerce.com"
              className="inline-flex items-center rounded-full bg-background text-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Email Us
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-primary-foreground/10 text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary-foreground/20 transition"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

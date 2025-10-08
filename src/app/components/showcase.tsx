"use client"

import { motion } from "framer-motion"

export function Showcase() {
  return (
    <div id="work" className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Craft, performance, and polish
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground"
        >
          From landing pages to complex e‑commerce and apps, we focus on clarity, speed, and brand.
        </motion.p>

        <div className="grid grid-cols-3 gap-3">
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            alt="UI detail 1"
            className="rounded-xl object-cover w-full h-28 md:h-36 border"
            src="/ui-detail-card.jpg"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            alt="UI detail 2"
            className="rounded-xl object-cover w-full h-28 md:h-36 border"
            src="/dashboard-chart.png"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            alt="UI detail 3"
            className="rounded-xl object-cover w-full h-28 md:h-36 border"
            src="/generic-mobile-app.png"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="aspect-video w-full rounded-2xl overflow-hidden border"
      >
        <video
          className="w-full h-full object-cover"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          controls
          poster="/product-demo-frame.jpg"
        />
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"

const steps = [
  { label: "Plan", desc: "We align on goals and success metrics." },
  { label: "Design", desc: "We craft intuitive UI/UX that converts." },
  { label: "Develop", desc: "We build robust, scalable solutions." },
  { label: "Launch", desc: "We deploy with observability and care." },
  { label: "Grow", desc: "We iterate to improve performance." },
]

export function ProcessSteps() {
  return (
    <div id="process">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Process</h2>
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-muted rounded-xl border p-5 text-center"
          >
            <div className="text-sm font-semibold">
              {i + 1}. {s.label}
            </div>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

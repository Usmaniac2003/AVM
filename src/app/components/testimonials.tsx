"use client"

import { motion } from "framer-motion"

const items = [
  {
    name: "Layla",
    role: "Founder, Dunes Boutique",
    quote: "AVM elevated our brand and improved conversions within weeks. Professional, fast, and reliable.",
  },
  {
    name: "Omar",
    role: "CTO, FinEdge",
    quote: "From architecture to UX, everything was meticulously executed. Our app is faster and more usable.",
  },
  {
    name: "Aisha",
    role: "Marketing Lead, NovaTech",
    quote: "Their creative and performance mindset is unmatched. The campaign results exceeded expectations.",
  },
]

export function Testimonials() {
  return (
    <div id="testimonials">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">What clients say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border rounded-2xl p-6 h-full"
          >
            <div className="flex items-center gap-3">
              <img
                alt={`${t.name} avatar`}
                src={`/.jpg?height=48&width=48&query=${encodeURIComponent(t.name + " avatar")}`}
                className="h-12 w-12 rounded-full border object-cover"
              />
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
            <blockquote className="text-sm text-pretty text-muted-foreground mt-4">“{t.quote}”</blockquote>
          </motion.figure>
        ))}
      </div>
    </div>
  )
}

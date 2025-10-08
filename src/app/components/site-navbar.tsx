"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/app/lib/utils" // works if you created lib/utils.ts

export default function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#process", label: "Process" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-black">
          AVM E-Commerce
          <span className="sr-only">Home</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition"
          >
            Get a Quote
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-gray-100 transition"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative w-5 h-5">
            <span
              className={cn(
                "absolute left-0 top-1 block h-0.5 w-5 bg-black transition-all",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2.5 block h-0.5 w-5 bg-black transition-all",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-4 block h-0.5 w-5 bg-black transition-all",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-white"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-black text-white text-center px-4 py-2 text-sm font-medium hover:bg-gray-900 transition"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

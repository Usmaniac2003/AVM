"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const NAV_HEIGHT = 64; // navbar height in px

  const navItems = [
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "process", label: "Process" },
    { id: "testimonials", label: "Testimonials" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleScroll = (id: string) => {
    if (open) {
      // Close mobile menu first, then scroll after animation
      setOpen(false);
      setTimeout(() => scrollToSection(id), 300); // wait for animation
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="AVM E-Commerce"
            width={100}
            height={20}
            className="object-contain"
          />
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact")}
            className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-white"
          >
            <div className="px-6 py-4 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleScroll("contact")}
                className="block rounded-full bg-black text-white text-center px-4 py-2 text-sm font-medium hover:bg-gray-900 transition"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

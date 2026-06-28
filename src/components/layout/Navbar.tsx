"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "AI Income Paths", href: "#income-paths" },
  { label: "Free Resources", href: "#learning-hub" },
  { label: "YouTube", href: "https://youtube.com/@monetriskill", external: true },
  { label: "Instagram", href: "https://instagram.com/monetriskill", external: true },
  { label: "Contact", href: "mailto:hello@monetriskill.com", external: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#080808]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-sm font-bold">
            M
          </div>
          <span className="font-semibold text-white text-lg">MonetriSkill</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="px-3 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#calculator"
            className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Find My Path
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/5 px-4 pb-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="block py-3 text-sm text-white/60 hover:text-white border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#calculator"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-4 py-2 text-sm font-medium text-center bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg"
          >
            Find My Path
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}

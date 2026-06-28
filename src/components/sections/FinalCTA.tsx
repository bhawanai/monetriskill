"use client";

import { motion } from "framer-motion";
import { ArrowRight, Youtube, Instagram } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FinalCTA() {
  return (
    <SectionWrapper className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-violet-900/20 via-[#0d0d0d] to-blue-900/15 p-10 sm:p-16 text-center">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-radial from-violet-600/15 to-transparent blur-3xl pointer-events-none" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.02] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/8 flex items-center justify-center"
            >
              <ArrowRight size={22} className="text-violet-400" strokeWidth={1.5} />
            </motion.div>

            <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4 leading-tight tracking-tight">
              Your AI journey
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                starts today
              </span>
            </h2>
            <p className="text-white/35 max-w-lg mx-auto mb-10 text-base leading-relaxed">
              Thousands of beginners are already earning with AI. Your personalized roadmap is one quiz away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#calculator"
                className="flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                Calculate My AI Income Path
                <ArrowRight size={14} strokeWidth={2} />
              </a>
              <a
                href="https://youtube.com/@monetriskill"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/[0.04] border border-white/8 text-white/55 font-medium rounded-xl hover:bg-white/[0.07] hover:text-white hover:border-white/15 transition-all text-sm"
              >
                <Youtube size={15} strokeWidth={1.5} />
                Watch on YouTube
              </a>
              <a
                href="https://instagram.com/monetriskill"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/[0.04] border border-white/8 text-white/55 font-medium rounded-xl hover:bg-white/[0.07] hover:text-white hover:border-white/15 transition-all text-sm"
              >
                <Instagram size={15} strokeWidth={1.5} />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

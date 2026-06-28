"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Icon } from "@/components/ui/Icons";
import { MY_RECOMMENDATIONS } from "@/lib/constants";
import { ParticleField } from "@/components/ui/ParticleField";
import { HeroCoin } from "@/components/ui/HeroCoin";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Particle canvas */}
      <ParticleField />

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-radial from-violet-600/20 via-violet-600/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 20, 0], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/12 rounded-full blur-3xl"
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content fades out as you scroll */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/8 text-sm text-white/50 mb-8"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
          />
          Free AI income roadmaps — no course required
        </motion.div>

        {/* Headline with staggered words */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white mb-6"
        >
          Learn AI Skills That
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 bg-clip-text text-transparent"
          >
            Actually Make You Money
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Discover the best AI income path based on your skills, goals, and available time.
          Get a personalized roadmap in minutes — completely free.
        </motion.p>

        {/* CTA buttons — coin lands here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          id="cta-buttons"
        >
          {/* Coin drops onto this button */}
          <HeroCoin />

          <motion.a
            href="#calculator"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium rounded-xl text-sm overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.35)]"
          >
            {/* shimmer sweep */}
            <motion.span
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
            />
            Find My AI Income Path
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
          </motion.a>
          <motion.a
            href="https://youtube.com/@monetriskill"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3.5 bg-white/[0.04] border border-white/8 text-white/60 font-medium rounded-xl hover:bg-white/[0.07] hover:text-white hover:border-white/15 transition-all text-sm"
          >
            <Play size={13} fill="currentColor" />
            Watch Free Tutorials
          </motion.a>
        </motion.div>

        {/* Recommendations strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-[11px] text-white/18 uppercase tracking-widest mb-5 font-medium">
            My recommendations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {MY_RECOMMENDATIONS.map(({ icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.06, borderColor: "rgba(139,92,246,0.4)", backgroundColor: "rgba(139,92,246,0.08)" }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/8 transition-all cursor-default"
              >
                <Icon name={icon} size={13} className="text-white/30" strokeWidth={1.5} />
                <span className="text-xs text-white/30">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/12 flex items-start justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], y: [0, 3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="w-0.5 h-2 rounded-full bg-white/30"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

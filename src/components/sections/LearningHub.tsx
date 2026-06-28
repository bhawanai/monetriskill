"use client";

import { motion } from "framer-motion";
import { Youtube, Instagram, Zap, BookOpen, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { LucideIcon } from "lucide-react";

interface Resource {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  color: string;
  border: string;
  tag: string;
}

const RESOURCES: Resource[] = [
  {
    icon: Youtube,
    iconColor: "text-red-400",
    title: "YouTube Tutorials",
    description: "Free step-by-step video guides on every AI income path. New videos every week.",
    cta: "Watch now",
    href: "https://youtube.com/@monetriskill",
    color: "from-red-500/10 to-red-500/5",
    border: "hover:border-red-500/25",
    tag: "Free · Weekly uploads",
  },
  {
    icon: Instagram,
    iconColor: "text-pink-400",
    title: "Instagram Reels",
    description: "Short, actionable AI tips and income ideas. Perfect for learning on the go.",
    cta: "Follow us",
    href: "https://instagram.com/monetriskill",
    color: "from-pink-500/10 to-pink-500/5",
    border: "hover:border-pink-500/25",
    tag: "Free · Daily content",
  },
  {
    icon: Zap,
    iconColor: "text-amber-400",
    title: "Free AI Prompts",
    description: "Ready-to-use prompts for content creation, freelancing, and business automation.",
    cta: "Get prompts",
    href: "#calculator",
    color: "from-amber-500/10 to-amber-500/5",
    border: "hover:border-amber-500/25",
    tag: "Free · 100+ prompts",
  },
  {
    icon: BookOpen,
    iconColor: "text-blue-400",
    title: "Free Resources",
    description: "Templates, checklists, and guides to help you launch your AI income journey.",
    cta: "Download",
    href: "#calculator",
    color: "from-blue-500/10 to-blue-500/5",
    border: "hover:border-blue-500/25",
    tag: "Free · Always",
  },
];

export function LearningHub() {
  return (
    <SectionWrapper id="learning-hub" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/8 text-white/35 text-xs font-medium mb-4">
            Free Learning Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            Everything is free.
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Always.
            </span>
          </h2>
          <p className="text-white/35 max-w-lg mx-auto">
            Learn from YouTube, Instagram, and a free resource library — no paywall, ever.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RESOURCES.map((r, i) => {
            const IconComp = r.icon;
            return (
              <motion.a
                key={r.title}
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className={`group relative bg-gradient-to-br ${r.color} border border-white/8 ${r.border} rounded-2xl p-7 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center">
                    <IconComp size={18} className={r.iconColor} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] text-white/25 border border-white/8 px-2.5 py-1 rounded-full">
                    {r.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed mb-5">{r.description}</p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-white/40 group-hover:text-white/70 transition-colors">
                  {r.cta}
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

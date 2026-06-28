"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Icon } from "@/components/ui/Icons";
import { INCOME_PATHS } from "@/lib/constants";

export function IncomePathsSection() {
  return (
    <SectionWrapper id="income-paths" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-white/40 text-xs font-medium mb-4">
            AI Income Paths
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            9 proven ways to earn
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              with AI in 2026–2027
            </span>
          </h2>
          <p className="text-white/35 max-w-xl mx-auto text-base">
            From complete beginner to advanced — there&apos;s an AI income path that fits your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {INCOME_PATHS.map((path, i) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`group relative bg-gradient-to-br ${path.color} border border-white/8 ${path.border} rounded-2xl p-6 cursor-pointer transition-all duration-300 overflow-hidden card-glow`}
            >
              {/* Icon */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center">
                  <Icon name={path.icon} size={18} className={path.iconColor} strokeWidth={1.5} />
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={13} className="text-white/40" strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-base font-semibold text-white mb-1.5">{path.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed mb-5">{path.description}</p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-4 border-t border-white/8">
                <div>
                  <p className="text-[10px] text-white/20 uppercase tracking-wider mb-0.5">Difficulty</p>
                  <p className={`text-xs font-medium ${path.difficultyColor}`}>{path.difficulty}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/20 uppercase tracking-wider mb-0.5">Startup cost</p>
                  <p className="text-xs font-medium text-white/60">{path.startupCost}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/20 uppercase tracking-wider mb-0.5">Time needed</p>
                  <p className="text-xs font-medium text-white/60">{path.timeRequired}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/20 uppercase tracking-wider mb-0.5">Income</p>
                  <p className="text-xs font-medium text-white/60">{path.income}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

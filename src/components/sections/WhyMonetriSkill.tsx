"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Icon } from "@/components/ui/Icons";
import { WHY_CARDS } from "@/lib/constants";

export function WhyMonetriSkill() {
  return (
    <SectionWrapper className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            Why MonetriSkill?
          </h2>
          <p className="text-white/35 max-w-lg mx-auto">
            We&apos;re not another course platform. We&apos;re your free guide to AI income — always.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group bg-gradient-to-br ${card.color} border border-white/8 hover:border-white/15 rounded-2xl p-8 transition-all duration-300`}
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-5 group-hover:border-white/15 transition-colors">
                <Icon name={card.icon} size={20} className={card.iconColor} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

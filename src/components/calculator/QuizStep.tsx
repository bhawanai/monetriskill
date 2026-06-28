"use client";

import { motion, AnimatePresence } from "framer-motion";
import { OptionCard } from "./OptionCard";
import type { QuizOption } from "@/lib/constants";

interface QuizStepProps {
  step: number;
  total: number;
  question: string;
  subtitle: string;
  options: QuizOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}

export function QuizStep({
  step,
  total,
  question,
  subtitle,
  options,
  selectedValue,
  onSelect,
}: QuizStepProps) {
  const progress = ((step + 1) / total) * 100;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-white/25 mb-2">
            <span>{step + 1} of {total}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-0.5 bg-white/8 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: `${(step / total) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
            />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1.5 leading-snug">
          {question}
        </h3>
        <p className="text-white/35 text-sm mb-7">{subtitle}</p>

        <div className={`grid gap-2.5 ${options.length === 6 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
          {options.map((option) => (
            <OptionCard
              key={option.value}
              label={option.label}
              sub={option.sub}
              icon={option.icon}
              value={option.value}
              selected={selectedValue === option.value}
              onClick={() => onSelect(option.value)}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

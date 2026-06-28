"use client";

import { motion } from "framer-motion";
import { ExternalLink, RotateCcw, TrendingUp, Clock, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import type { QuizResult } from "@/lib/quiz-logic";

interface ResultsPreviewProps {
  result: QuizResult;
  name: string;
  onRestart: () => void;
}

const ROADMAP_LABELS = ["Learn tools", "Build skills", "Portfolio", "First client", "Scale income"];

export function ResultsPreview({ result, name, onRestart }: ResultsPreviewProps) {
  const firstName = name ? name.split(" ")[0] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
            <CheckCircle2 size={18} className="text-emerald-400" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          {firstName ? `${firstName}, your roadmap is ready` : "Your roadmap is ready"}
        </h3>
        <p className="text-white/35 text-sm">
          Here&apos;s your personalized AI income plan
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
        {[
          { label: "Match", value: `${result.matchScore}%`, icon: <Zap size={13} strokeWidth={1.5} />, color: "text-violet-400" },
          { label: "Difficulty", value: result.difficulty, icon: <TrendingUp size={13} strokeWidth={1.5} />, color: "text-blue-400" },
          { label: "Starts in", value: result.timeToStart, icon: <Clock size={13} strokeWidth={1.5} />, color: "text-cyan-400" },
          { label: "Income", value: result.incomeRange, icon: <TrendingUp size={13} strokeWidth={1.5} />, color: "text-emerald-400" },
        ].map((item) => (
          <div key={item.label} className="bg-white/[0.04] border border-white/8 rounded-xl p-3">
            <div className={`flex items-center gap-1 ${item.color} mb-1.5`}>
              {item.icon}
              <span className="text-xs opacity-60">{item.label}</span>
            </div>
            <div className="text-sm font-semibold text-white leading-tight">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Recommended tools */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 mb-3">
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-3">
          Recommended tools
        </p>
        <div className="flex flex-wrap gap-2">
          {result.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Action steps */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 mb-3">
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-5">
          5-step action plan
        </p>
        <div className="space-y-0">
          {result.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 + 0.2 }}
              className="flex gap-3.5"
            >
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">
                  {i + 1}
                </div>
                {i < result.steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-violet-500/30 to-transparent my-1" />
                )}
              </div>
              <div className="pb-5">
                <h5 className="text-sm font-medium text-white mb-0.5">{step.title}</h5>
                <p className="text-xs text-white/35 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual roadmap */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 mb-5">
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-5">
          Progress roadmap
        </p>
        <div className="flex items-start justify-between gap-1">
          {ROADMAP_LABELS.map((label, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full mb-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.4, type: "spring", stiffness: 200 }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
                    i === 0
                      ? "bg-emerald-500 text-white"
                      : i === ROADMAP_LABELS.length - 1
                      ? "bg-gradient-to-br from-violet-500 to-blue-500 text-white"
                      : "bg-white/8 text-white/40 border border-white/10"
                  }`}
                >
                  {i + 1}
                </motion.div>
                {i < ROADMAP_LABELS.length - 1 && (
                  <div className="flex-1 h-px bg-white/8 mx-1">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: i * 0.12 + 0.5, duration: 0.4 }}
                      className="h-full bg-gradient-to-r from-violet-500/30 to-transparent origin-left"
                    />
                  </div>
                )}
              </div>
              <span className="text-[10px] text-white/25 text-center leading-tight hidden sm:block w-full px-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <a
          href="https://youtube.com/@monetriskill"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-all text-sm"
        >
          Watch Free Tutorials
          <ExternalLink size={13} strokeWidth={2} />
        </a>
        <a
          href="https://instagram.com/monetriskill"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/8 text-white/60 font-medium rounded-xl hover:bg-white/[0.07] hover:text-white transition-all text-sm"
        >
          Follow on Instagram
          <ExternalLink size={13} strokeWidth={2} />
        </a>
      </div>

      <button
        onClick={onRestart}
        className="w-full flex items-center justify-center gap-1.5 mt-4 py-2 text-xs text-white/20 hover:text-white/40 transition-colors"
      >
        <RotateCcw size={12} />
        Retake the quiz
      </button>
    </motion.div>
  );
}

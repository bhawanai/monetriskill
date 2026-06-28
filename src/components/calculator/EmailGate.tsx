"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, CheckCircle2, TrendingUp, Clock, BarChart3 } from "lucide-react";
import type { QuizResult } from "@/lib/quiz-logic";

interface EmailGateProps {
  result: QuizResult;
  onSubmit: (name: string, email: string) => void;
}

export function EmailGate({ result, onSubmit }: EmailGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      onSubmit(name, email);
      setLoading(false);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Analysis complete pill */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
          <CheckCircle2 size={14} strokeWidth={2} />
          Analysis complete
        </div>
      </div>

      {/* Path preview card */}
      <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 mb-4">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Your best match</p>
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-xl font-semibold text-white">{result.title}</h3>
            <p className="text-white/40 text-sm mt-0.5">{result.difficulty}</p>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              {result.matchScore}%
            </div>
            <div className="text-xs text-white/25">match</div>
          </div>
        </div>
        {/* Match bar */}
        <div className="h-1 bg-white/8 rounded-full mb-5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${result.matchScore}%` }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <TrendingUp size={13} className="text-white/25 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xs text-white/25">Income potential</p>
              <p className="text-sm font-medium text-white">{result.incomeRange}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-white/25 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xs text-white/25">Time to start</p>
              <p className="text-sm font-medium text-white">{result.timeToStart}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blurred roadmap */}
      <div className="relative mb-6 rounded-2xl overflow-hidden">
        <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 pointer-events-none select-none" style={{ filter: "blur(5px)" }}>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Your personalized roadmap</p>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 mb-3.5">
              <div className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/30 flex-shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="h-2.5 bg-white/15 rounded-full" style={{ width: `${55 + i * 9}%` }} />
                <div className="h-1.5 bg-white/8 rounded-full" style={{ width: `${40 + i * 7}%` }} />
              </div>
            </div>
          ))}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[60, 80, 50].map((w, i) => (
              <div key={i} className="h-8 bg-white/5 rounded-lg" />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
            <Lock size={16} className="text-white/50" strokeWidth={1.5} />
          </div>
          <p className="text-sm font-medium text-white/60">Enter your email to unlock</p>
        </div>
      </div>

      {/* Email form */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 size={16} className="text-violet-400" strokeWidth={1.5} />
          <h3 className="text-base font-semibold text-white">Your roadmap is ready</h3>
        </div>
        <p className="text-white/35 text-sm mb-5 leading-relaxed">
          Enter your details to unlock your full AI income roadmap with tools, action steps, and resources.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.06] transition-all"
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.06] transition-all"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-all disabled:opacity-60 text-sm"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Unlock My Roadmap
                <ArrowRight size={15} strokeWidth={2} />
              </>
            )}
          </motion.button>
        </form>
        <p className="text-center text-xs text-white/20 mt-3">No spam · Unsubscribe anytime</p>
      </div>
    </motion.div>
  );
}

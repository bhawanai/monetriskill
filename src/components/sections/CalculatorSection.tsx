"use client";

import { AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { QuizStep } from "@/components/calculator/QuizStep";
import { EmailGate } from "@/components/calculator/EmailGate";
import { ResultsPreview } from "@/components/calculator/ResultsPreview";
import { useQuiz } from "@/hooks/useQuiz";
import { QUIZ_QUESTIONS } from "@/lib/constants";

export function CalculatorSection() {
  const { state, answers, answer, submitEmail, restart } = useQuiz(QUIZ_QUESTIONS.length);

  return (
    <SectionWrapper id="calculator" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
            ⚡ AI Income Calculator
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4">
            Find your perfect
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              AI income path
            </span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Answer 5 quick questions and get a personalized roadmap tailored to your goals, schedule, and experience level.
          </p>
        </div>

        {/* Calculator card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#0d0d0d] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/50">
            <AnimatePresence mode="wait">
              {state.phase === "quiz" && (
                <QuizStep
                  key={`step-${state.step}`}
                  step={state.step}
                  total={QUIZ_QUESTIONS.length}
                  question={QUIZ_QUESTIONS[state.step].question}
                  subtitle={QUIZ_QUESTIONS[state.step].subtitle}
                  options={QUIZ_QUESTIONS[state.step].options}
                  selectedValue={answers[QUIZ_QUESTIONS[state.step].id]}
                  onSelect={(value) => answer(QUIZ_QUESTIONS[state.step].id, value)}
                />
              )}
              {state.phase === "email" && (
                <EmailGate
                  key="email"
                  result={state.result}
                  onSubmit={(name) => submitEmail(name)}
                />
              )}
              {state.phase === "results" && (
                <ResultsPreview
                  key="results"
                  result={state.result}
                  name={state.name}
                  onRestart={restart}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

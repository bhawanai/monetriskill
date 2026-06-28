"use client";

import { useState } from "react";
import { computeResult, type QuizAnswers, type QuizResult } from "@/lib/quiz-logic";

export type QuizState =
  | { phase: "quiz"; step: number }
  | { phase: "email"; result: QuizResult }
  | { phase: "results"; result: QuizResult; name: string };

export function useQuiz(totalSteps: number) {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [state, setState] = useState<QuizState>({ phase: "quiz", step: 0 });

  function answer(questionId: string, value: string) {
    const next = { ...answers, [questionId]: value };
    setAnswers(next);

    if (state.phase === "quiz") {
      if (state.step < totalSteps - 1) {
        setTimeout(() => {
          setState({ phase: "quiz", step: state.step + 1 });
        }, 300);
      } else {
        const result = computeResult(next);
        setTimeout(() => {
          setState({ phase: "email", result });
        }, 400);
      }
    }
  }

  function submitEmail(name: string) {
    if (state.phase === "email") {
      setState({ phase: "results", result: state.result, name });
    }
  }

  function restart() {
    setAnswers({});
    setState({ phase: "quiz", step: 0 });
  }

  return { state, answers, answer, submitEmail, restart };
}

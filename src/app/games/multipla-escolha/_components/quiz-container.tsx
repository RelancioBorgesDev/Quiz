"use client";
import { useState } from "react";
import { Play } from "next/font/google";
import QuestionAndChoices from "./question-and-choices";
import StatsHeader from "./stats-header";
import questions from "@/questions.json";
import Link from "next/link";

const play = Play({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-play",
});

export default function QuizContainer() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const totalQuestions = questions.questions.length;

  const handleContinue = () => {
    if (userAnswer !== null) {
      if (
        userAnswer === questions.questions[currentQuestionIdx].correctAnswIdx
      ) {
        setCorrectAnswers(correctAnswers + 1);
      }

      if (currentQuestionIdx === totalQuestions - 1) {
        setQuizFinished(true);
      } else {
        setCurrentQuestionIdx(currentQuestionIdx + 1);
        setUserAnswer(null);
      }
    } else {
      alert("Selecione uma resposta para continuar");
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setUserAnswer(null);
    setCorrectAnswers(0);
    setQuizFinished(false);
  };

  const percentageCorrect = (correctAnswers / totalQuestions) * 100;

  return (
    <main
      className={`${play.className} h-screen flex items-center justify-center `}
    >
      <div className="w-[1050px] bg-question-content rounded-t-lg rounded-b-lg">
        {quizFinished ? (
          <div className="px-4 py-8 flex flex-col items-center justify-center gap-4">
            <h2 className="text-7xl font-bold">Quiz Finalizado!</h2>
            <p className="text-2xl">
              Porcentagem de respostas corretas: {percentageCorrect.toFixed(2)}%
            </p>
            <div className="flex items-center gap-4">
              <button
                className="bg-purple-700 p-2 rounded-sm font-bold"
                onClick={handleRestart}
              >
                Refazer o quiz
              </button>
              <Link href={"/"}>
                <button className="bg-gray-400 p-2 rounded-sm font-bold">
                  Voltar para o inicio
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <StatsHeader
              currentQuestion={currentQuestionIdx + 1}
              totalQuestions={totalQuestions}
            />
            <QuestionAndChoices
              question={questions.questions[currentQuestionIdx]}
              setUserAnsw={setUserAnswer}
            />
            <footer className="px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>{currentQuestionIdx + 1}</span>
                <span>
                  <progress
                    className="h-4 w-full max-w-md border-0"
                    value={currentQuestionIdx + 1}
                    max={totalQuestions}
                  />
                </span>
                <span>{totalQuestions}</span>
              </div>
              <div className="flex items-center gap-6">
                <button
                  className="bg-gray-400 p-2 rounded-sm font-bold"
                  onClick={() => setCurrentQuestionIdx(currentQuestionIdx - 1)}
                  disabled={currentQuestionIdx === 0}
                >
                  Voltar
                </button>
                {currentQuestionIdx === totalQuestions - 1 ? (
                  <button
                    className="bg-purple-700 p-2 rounded-sm font-bold"
                    onClick={handleContinue}
                  >
                    Finalizar
                  </button>
                ) : (
                  <button
                    className="bg-purple-700 p-2 rounded-sm font-bold"
                    onClick={handleContinue}
                  >
                    Continuar
                  </button>
                )}
              </div>
            </footer>
          </div>
        )}
      </div>
    </main>
  );
}

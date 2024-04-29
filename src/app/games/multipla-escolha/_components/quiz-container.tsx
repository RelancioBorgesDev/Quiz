"use client";
import { useState } from "react";
import { Play } from "next/font/google";
import QuestionAndChoices from "./question-and-choices";
import StatsHeader from "./stats-header";
import questions from "@/questions.json";
import Link from "next/link";
import Feedback from "@/components/feedback";

const play = Play({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-play",
});

export default function QuizContainer() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [correctAnswersCount, setcorrectAnswersCount] = useState(0);
  const [allUserAswers, setAllUserAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const totalQuestions = questions.questions.length;

  const handleContinue = () => {
    if (userAnswer !== null) {
      const correctAnsw =
        questions.questions[currentQuestionIdx].correctAnswIdx;

      setAllUserAnswers((prevAnswers) => [...prevAnswers, userAnswer]);
      if (userAnswer === correctAnsw) {
        setcorrectAnswersCount(correctAnswersCount + 1);
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
    setcorrectAnswersCount(0);
    setQuizFinished(false);
    setAllUserAnswers([]);
  };
  const percentageCorrect = (correctAnswersCount / totalQuestions) * 100;

  return (
    <main
      className={`${play.className} h-screen flex items-center justify-center `}
    >
      <div className="w-[1050px] bg-question-content rounded-t-lg rounded-b-lg">
        {quizFinished ? (
          <div className=" flex flex-col gap-4  ">
            <header className="pb-4 bg-question-header px-4 py-8 rounded-t-lg">
              <h2 className="text-5xl font-bold">Quiz Finalizado!</h2>
              <p className="text-2xl">
                Resultado Final: {correctAnswersCount}/{totalQuestions} -{" "}
                {percentageCorrect.toFixed(2)}%
              </p>
            </header>
            <div className="max-h-[400px] overflow-y-auto px-8 flex flex-col gap-4">
              {allUserAswers.map((userAnswerIndex, index) => {
                const question = questions.questions[index];
                if (question) {
                  return (
                    <Feedback
                      key={index}
                      problemQuestion={question.question}
                      userAsw={question.options[userAnswerIndex]}
                      correctAnsw={question.options[question.correctAnswIdx]}
                      questionIndex={index}
                    />
                  );
                }
              })}
            </div>
            <footer className="flex items-center rounded-b-lg gap-4 pt-4 px-4 py-8">
              <button
                className="bg-purple-700 p-2 rounded-sm font-bold hover:brightness-90"
                onClick={handleRestart}
              >
                Refazer o quiz
              </button>
              <Link href={"/"}>
                <button
                  className="bg-gray-400 p-2 rounded-sm font-bold hover:brightness-90"
                  onClick={handleRestart}
                >
                  Voltar para o início
                </button>
              </Link>
            </footer>
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
                    className="bg-purple-700 p-2 rounded-sm font-bold hover:brightness-105"
                    onClick={handleContinue}
                  >
                    Finalizar
                  </button>
                ) : (
                  <button
                    className="bg-purple-700 p-2 rounded-sm font-bold hover:brightness-105"
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

import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import RadioOption from "./radio-option";
import { Question } from "@/types/types";

interface QuestionAndChoicesProps {
  question: Question;
  setUserAnsw: Dispatch<SetStateAction<number | null>>;
  setAllUserAnsws: Dispatch<SetStateAction<number[]>>;
}

export default function QuestionAndChoices({
  question,
  setUserAnsw,
  setAllUserAnsws,
}: QuestionAndChoicesProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionChange = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setUserAnsw(optionIndex);
    setAllUserAnsws((prevUserAnswers) => [...prevUserAnswers, optionIndex]);
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [question]);

  return (
    <main className="py-6 px-4 flex flex-col gap-8 overflow-scroll">
      <section>
        <p className="text-xl">{question.question}</p>
      </section>
      <section className="flex flex-col gap-4">
        {question.options.map((opt, idx) => (
          <RadioOption
            key={idx}
            id={idx.toString()}
            question={opt}
            checked={selectedOption === idx}
            onChange={() => handleOptionChange(idx)}
          />
        ))}
      </section>
    </main>
  );
}

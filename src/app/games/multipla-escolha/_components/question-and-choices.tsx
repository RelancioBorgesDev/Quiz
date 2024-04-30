import { useState, Dispatch, SetStateAction, useEffect } from "react";
import RadioOption from "./radio-option";
import { Question } from "@/types/types";
import { useOpcoes } from "@/contexts/OpcoesContext";

interface QuestionAndChoicesProps {
  question: Question;
  setUserAnsw: Dispatch<SetStateAction<number | null>>;
}

export default function QuestionAndChoices({
  question,
  setUserAnsw,
}: QuestionAndChoicesProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionChange = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setUserAnsw(optionIndex);
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [question]);
  const { tamanhoFonte } = useOpcoes();

  return (
    <main className="py-6 px-4 flex flex-col gap-8 overflow-y-auto">
      <section>
        <p style={{ fontSize: `${tamanhoFonte}px` }}>{question.question}</p>
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

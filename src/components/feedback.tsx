import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FeedbackProps {
  problemQuestion: string;
  userAsw: string;
  correctAnsw: string;
  questionIndex: number;
}

export default function Feedback({
  problemQuestion,
  userAsw,
  correctAnsw,
  questionIndex,
}: FeedbackProps) {
  const isCorrect = userAsw === correctAnsw;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl truncate">
          <span className={`${isCorrect ? "text-green-500" : "text-red-500"}`}>
            Questão {questionIndex + 1})
            {problemQuestion.length > 30
              ? `${problemQuestion.slice(0, 60)}...`
              : problemQuestion}
          </span>{" "}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 py-4 px-4 text-lg">
          <span className={`${isCorrect ? "text-green-500" : "text-red-500"}`}>
            <span className="text-white font-bold">Sua resposta:</span>{" "}
            {userAsw}
          </span>
          <span className="text-green-500">
            <span className="text-white font-bold">Resposta correta:</span>{" "}
            {correctAnsw}
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

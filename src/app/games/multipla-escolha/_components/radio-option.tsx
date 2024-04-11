"use client";

interface RadioOptionProps {
  id: string | undefined;
  question: string;
}

export default function RadioOption({ id, question }: RadioOptionProps) {
  return (
    <label
      className={`flex gap-4 border-2 
        px-4 py-8 rounded-md cursor-pointer`}
    >
      <input type="radio" name="radioGroup" id={id} className="" />
      <div className="flex-grow">{question}</div>
    </label>
  );
}

import React from "react";

interface RadioOptionProps {
  id: string;
  question: string;
  checked: boolean;
  onChange: () => void;
}

export default function RadioOption({
  id,
  question,
  checked,
  onChange,
}: RadioOptionProps) {
  const handleChange = () => {
    onChange();
  };

  return (
    <label
      className={`flex gap-4 border-2 px-4 py-8 rounded-md cursor-pointer ${
        checked ? "border-4 border-purple-500" : ""
      }`}
    >
      <input
        type="radio"
        name="radioGroup"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <div className="flex-grow">{question}</div>
    </label>
  );
}

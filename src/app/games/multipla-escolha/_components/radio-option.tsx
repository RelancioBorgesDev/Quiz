import React from "react";
import { useOpcoes } from "@/contexts/OpcoesContext";

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
  const { tamanhoFonte } = useOpcoes();
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
      <div style={{ fontSize: `${tamanhoFonte}px` }}>{question}</div>
    </label>
  );
}

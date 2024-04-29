import React from "react";
import { useOpcoes } from "@/contexts/OpcoesContext";

const Opcoes = () => {
  const { tamanhoFonte, aumentarFonte, diminuirFonte } = useOpcoes();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <label className="text-xl text-center">Ajuste o tamanho da Fonte:</label>
      <button
        className="text-xl bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={aumentarFonte}
      >
        Aumentar
      </button>
      <span className="text-2xl text-zinc-950">{tamanhoFonte}</span>
      <button
        className="text-xl bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={diminuirFonte}
      >
        Diminuir
      </button>

      <span style={{ fontSize: `${tamanhoFonte}px` }}>Texto exemplo</span>
    </div>
  );
};

export default Opcoes;

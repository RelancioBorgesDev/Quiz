"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface OpcoesContextProps {
  tamanhoFonte: number;
  aumentarFonte: () => void;
  diminuirFonte: () => void;
}

const OpcoesContext = createContext({} as OpcoesContextProps);

export const OpcoesProvider = ({ children }: { children: ReactNode }) => {
  const [tamanhoFonte, setTamanhoFonte] = useState(16);

  const aumentarFonte = () => {
    setTamanhoFonte(tamanhoFonte + 1);
  };

  const diminuirFonte = () => {
    setTamanhoFonte(tamanhoFonte - 1);
  };

  return (
    <OpcoesContext.Provider
      value={{ tamanhoFonte, aumentarFonte, diminuirFonte }}
    >
      {children}
    </OpcoesContext.Provider>
  );
};

export const useOpcoes = () => useContext(OpcoesContext);

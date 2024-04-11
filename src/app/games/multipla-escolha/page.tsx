import { Play } from "next/font/google";
import React from "react";
import RadioOption from "./_components/radio-option";
import type { Metadata } from "next";
import QrCodeModal from "@/components/qrcode-modal";

const play = Play({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-play",
});

export const metadata: Metadata = {
  title: "Pergunta | 01",
};

export default function MultiplaEscolha() {
  return (
    <main
      className={`${play.className} h-screen flex items-center justify-center `}
    >
      <div className="w-[1050px] bg-question-content rounded-t-lg rounded-b-lg">
        <header className="bg-question-header flex items-center justify-between py-8 px-7 rounded-t-lg">
          <h2 className="text-4xl">Questão 01/06</h2>
          <span>
            <QrCodeModal />
          </span>
        </header>
        <main className="py-6 px-4 flex flex-col gap-8 overflow-scroll">
          <section>
            <p className="text-xl">
              A tese principal de Byung-Chul Han em Sociedade do Cansaço é:
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <RadioOption
              id="a"
              question="To create a component where clicking anywhere within the group selects the answer, you can wrap the input and the text inside a label element. "
            />

            <RadioOption
              id="b"
              question="To create a component where clicking anywhere within the group selects the answer, you can wrap the input and the text inside a label element."
            />
          </section>
        </main>
        <footer className="px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>01</span>
            <span>
              <progress
                className="h-4 w-full max-w-md  border-0"
                value={1}
                max={6}
              />
            </span>
            <span>06</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-gray-400 p-2 rounded-sm font-bold">
              Voltar
            </button>
            <button className="bg-purple-700 p-2 rounded-sm font-bold">
              Continuar
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}

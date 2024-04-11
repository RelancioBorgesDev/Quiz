"use client";
import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import { Play } from "next/font/google";
import Esc from "../components/esc";

const play = Play({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-play",
});

export default function Games() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${play.className} flex flex-col h-screen items-center justify-center relative`}
    >
      <h1 className="text-9xl font-bold drop-shadow-2xl italic absolute top-16 left-4">
        Jogar
      </h1>

      <section>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="flex flex-col w-[400px] cursor-pointer "
        >
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-purple-800 flex items-center justify-center py-24 rounded-t-lg"
          >
            <CircleHelp size={64} />
          </motion.header>
          <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white text-black px-4 py-2 rounded-b-lg flex flex-col gap-4 items-start"
          >
            <h1 className="text-5xl font-semibold">Multipla escolha</h1>
            <p className="">
              Teste seu conhecimento sobre <b>O Cansaço da Sociedade</b> com
              nosso quiz de múltipla escolha! Descubra o quanto você sabe sobre
              os temas abordados neste livro fascinante enquanto se diverte e
              aprende.
            </p>
          </motion.footer>
        </motion.div>
        <Esc />
      </section>
    </motion.main>
  );
}

"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full items-center justify-center gap-12 relative">
      <motion.span
        animate={{
          x: [
            -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, -50,
            -10,
          ],
          speed: 1.5,
          repeatDur: Infinity,
        }}
        className="font-bold absolute top-1 right-0 text-black text-7xl"
      >
        BYU
      </motion.span>
      <motion.span
        animate={{
          x: [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 10],
          speed: 1.5,
          repeatDur: Infinity,
        }}
        className="font-bold absolute top-24 left-0 text-black text-7xl"
      >
        HAN
      </motion.span>

      <motion.span
        animate={{
          x: [
            -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, -50,
            -10,
          ],
          speed: 1.5,
          repeatDur: Infinity,
        }}
        className="font-bold absolute top-64 right-0 text-black text-7xl"
      >
        SOCIE
      </motion.span>
      <motion.span
        animate={{
          x: [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 10],
          speed: 1.5,
          repeatDur: Infinity,
        }}
        className="font-bold absolute top-72 left-0 text-black text-7xl"
      >
        DADE
      </motion.span>

      <motion.span
        animate={{
          x: [
            -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, -50,
            -10,
          ],
          speed: 1.5,
          repeatDur: Infinity,
        }}
        className="font-bold absolute top-64 right-0 text-black text-7xl"
      >
        SOCIE
      </motion.span>

      <motion.span
        animate={{
          x: [
            -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, -50,
            -10,
          ],
          speed: 1.5,
          repeatDur: Infinity,
        }}
        className="font-bold absolute top-[600px] right-0 text-black text-7xl"
      >
        DO
      </motion.span>
      <motion.span
        animate={{
          x: [
            -1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, -50,
            -10,
          ],
          speed: 1.5,
          repeatDur: Infinity,
        }}
        className="font-bold absolute top-[700px] right-0 text-black text-7xl"
      >
        CANS
      </motion.span>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="text-7xl drop-shadow-2xl"
      >
        Quiz
      </motion.h1>
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="text-4xl"
      >
        Sociedade do cansaço
      </motion.h3>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="flex flex-col gap-6"
      >
        <motion.span whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
          <Link href={"/games"} className="text-2xl">
            Jogar
          </Link>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}>
          <Link href={""} className="text-2xl">
            Opções
          </Link>
        </motion.span>
      </motion.ul>
    </main>
  );
}

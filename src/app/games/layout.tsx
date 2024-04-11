import type { Metadata } from "next";
import { Play } from "next/font/google";

const play = Play({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-p2",
});

export const metadata: Metadata = {
  title: "Quiz | Jogos",
};

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${play.className} bg-purple-book max-h-screen h-screen text-white`}
    >
      {children}
    </main>
  );
}

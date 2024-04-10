import type { Metadata } from "next";
import { Press_Start_2P, Play } from "next/font/google";
import "./globals.css";

const p2 = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-p2",
});

const play = Play({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-play",
});

export const metadata: Metadata = {
  title: "Quiz | Inicio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={p2.className}>
        <main className="bg-purple-book max-h-screen h-screen">{children}</main>
      </body>
    </html>
  );
}

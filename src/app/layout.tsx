import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const p2 = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-p2",
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

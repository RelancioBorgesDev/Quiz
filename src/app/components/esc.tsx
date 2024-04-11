"use client";
import { useEffect } from "react";

export default function Esc() {
  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) {
        window.history.back();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return (
    <div
      className="absolute bottom-6 right-6 flex items-center gap-2 group transition-all ease-in-out duration-500"
      onClick={() => window.history.back()}
    >
      <span className="border-2 border-gray-400 rounded-md px-2 py-1 group-hover:bg-white group-hover:text-black group-hover:cursor-pointer group-hover:border-white font-bold">
        ESC
      </span>
      <span className="group-hover:cursor-pointer text-xl font-bold">Voltar</span>
    </div>
  );
}

import { useState } from "react";

function Flashcard({ front, back, flipped, onFlip }) {
  return (
    <div
      className={`w-[320px] md:w-[500px] h-[240px] md:h-[300px] flex items-center justify-center rounded-2xl shadow-xl p-8 text-xl md:text-2xl text-center select-none transition-all duration-500 ease-in-out cursor-pointer ${
        flipped ? "bg-green-100" : "bg-white"
      }`}
      onClick={onFlip}
    >
      {flipped ? back : front}
    </div>
  );
}

export default Flashcard;

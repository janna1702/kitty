"use client";
import Confetti from "react-confetti";
export default function secondPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <Confetti />
      <h1 className="font-bold text-2xl  text-pink-300">eeeeee!</h1>

      <img
        src={
          "https://media.tenor.com/wa9joT3KeXUAAAAi/peach-and-goma-peach-goma.gif"
        }
      />
      <form
        className=""
        action={"https://www.aviasales.com/?params=MSC1"}
        target="_blank"
      >
        <button className="bg-pink-300 text-neutral-50 border-pink-800 w-44 h-10 rounded-md text-xl">
          Купить билетик
        </button>
      </form>
    </div>
  );
}

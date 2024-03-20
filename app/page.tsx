"use client";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Rampart_One } from "next/font/google";

const rampart = Rampart_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const router = useRouter();
  const onNextPageHandler = () => {
    //push - redirects to the task page
    router.push("./page");
  };

  const moveButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const x =
      Math.random() * (window.innerWidth - event.currentTarget.offsetWidth);
    const y =
      Math.random() * (window.innerHeight - event.currentTarget.offsetHeight);
    event.currentTarget.style.left = `${x}px`;
    event.currentTarget.style.top = `${y}px`;
    console.log(x, y);
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col  items-center justify-center relative  t-12  text-pink-300">
        <h1 className="text-2xl font-sans">
          Илона, ты приедешь ко мне в гости?
        </h1>
        <div>
          <img
            className="w-96 "
            src="https://media.tenor.com/84Lqzp2XaGAAAAAi/peach-cat.gif"
          />
        </div>
        <div className="flex flex-row gap-20 mt-20 w-full justify-center">
          <div>
            <button
              className="bg-pink-300 text-neutral-50 border-pink-800 w-16 h-9 rounded-md text-xl"
              onClick={onNextPageHandler}
            >
              Да
            </button>
          </div>
          <div className=" h-3/4  ">
            <button
              className=" absolute bg-pink-300 text-neutral-50 border-pink-800 w-16 h-9 rounded-md text-xl "
              id={"move"}
              onMouseOver={moveButton}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100vh] relative justify-center  md:items-center">
      <div className="flex flex-col md:flex-row font-['Poppins']">
        <div className="absolute w-72 bottom-0 left-0 p-8">
          <p className="text-2xl  text-white">
            Full-Stack Developer & a Tech Enthusiast
          </p>
          <p className="text-gray-400">
            From <span className="text-[var(--clr-text-1)]">Jaipur</span>
          </p>
        </div>

        <div className="bord w-full h-full md:w-96 md:h-96 rounded-full border-[1rem] md:border-[2rem] border-[var(--clr-border-1)] overflow-hidden">
          <img
            src="/bot.png"
            alt="sm"
            className="w-full h-full overflow-hidden"
          />
        </div>
        <a href="/resume.pdf">
          <button className="md:absolute cursor-none h-12 w-1/3 hover:shadow-2xl hover:shadow-red-400/50 hover:scale-125 duration-200  w-32 bottom-10 right-20 flex justify-center items-center text-white rounded-lg bg-[var(--clr-border-1)] ">
            CV
          </button>
        </a>
      </div>
    </div>
  );
}

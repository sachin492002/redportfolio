import React from "react";
import "./projects.css";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
export default function Projects() {
  return (
    <div className='flex  flex-col '>
    <div className="mx-60 my-20 relative">
      <div className="w-1/2 py-10 flex relative flex-col">
        <div className="p-4 rounded-lg backdrop-blur-sm backdrop-saturate-200 bg-[var(--clr-project-1)] border-[1px] border-[var(--clr-border-project)]  z-10">
          <span className="font-bold text-[var(--clr-text-1)] text-2xl">
            Shopper
          </span>
          <p className="">
            Shopper is a project that utilizes React and natural Node.js to
            enable local traders to sell their goods and provides locals an
            awesome interface for shopping. Technologies used include React,
            Redis, and RESTful APIs etc.
          </p>
          <div className='inline-flex py-2 gap-2'>
              <FaReact className='text-[var(--clr-text-1)] text-2xl'/>
              <SiExpress className='text-[var(--clr-text-1)] text-2xl'/>
              <FaNodeJs className='text-[var(--clr-text-1)] text-2xl'/>
              <SiRedux className='text-[var(--clr-text-1)] text-2xl'/>
          </div>
        </div>
      </div>
      <div className="absolute  w-3/4 right-0 top-0 rounded-lg bottom-0">
        <a href="https://shopperby4.vercel.app/">
          <img
            src="/shopper-1.png"
            alt="no"
            className="hover:scale-110 transition-all delay-75  object-contain rounded-lg"
          />
        </a>
      </div>
    </div>
    <div className="mx-60 my-20 relative">
      <div className="w-1/2 py-10 flex relative flex-col">
        <div className="p-4 rounded-lg backdrop-blur-sm backdrop-saturate-200 bg-[var(--clr-project-1)] border-[1px] border-[var(--clr-border-project)]  z-10">
          <span className="font-bold text-[var(--clr-text-1)] text-2xl">
            MuseBox
          </span>
          <p>
            MuseBox is a project that utilizes NextJs and jiosavan api to
            enable users to search and listen for their favorite music. Technologies used include React,
            Redux toolkit etc.
          </p>
          <div className='inline-flex py-2 gap-2'>
              <TbBrandNextjs className='text-[var(--clr-text-1)] text-2xl'/>
              <SiRedux className='text-[var(--clr-text-1)] text-2xl'/>
              <SiTailwindcss className='text-[var(--clr-text-1)] text-2xl'/>
          </div>
        </div>
      </div>
      <div className="absolute w-3/4 right-0 top-0 rounded-lg bottom-0">
        <a href="https://museboxx.vercel.app/">
          <img
            src="/musebox.png"
            alt="no"
            className="hover:scale-110 transition-all delay-75  object-contain rounded-lg"
          />
        </a>
      </div>
    </div>
    <div className="mx-60 my-20 relative">
      <div className="w-1/2 py-10 flex relative flex-col">
        <div className="p-4 rounded-lg backdrop-blur-sm backdrop-saturate-200 bg-[var(--clr-project-1)] border-[1px] border-[var(--clr-border-project)]  z-10">
          <span className="font-bold text-[var(--clr-text-1)] text-2xl">
            FlickFix
          </span>
          <p>
            FlickFix is a NextJs project with a stunning and responsive ui which provides a ott platform template. It also utilizes concepts of infinite scroll and is a seo friendly web app.
          </p>
          <div className='inline-flex py-2 gap-2'>
              <TbBrandNextjs className='text-[var(--clr-text-1)] text-2xl'/>
              <SiRedux className='text-[var(--clr-text-1)] text-2xl'/>
              <SiTailwindcss className='text-[var(--clr-text-1)] text-2xl'/>
          </div>
        </div>
      </div>
      <div className="absolute w-3/4 right-0 top-0 rounded-lg bottom-0">
        <a href="https://stream-jet.vercel.app/">
          <img
            src="/FlickFix.png"
            alt="no"
            className="hover:scale-110 transition-all delay-75  object-contain rounded-lg"
          />
        </a>
      </div>
    </div>
    </div>
  );
}

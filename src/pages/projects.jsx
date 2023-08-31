import React from 'react';
import './projects.css';
export default function Projects() {
  return (<div className=" h-[100vh] font-['Orbitron']">
    <p className="text-xl text-[var(--clr-text-1)] text-center ">My Projects</p>
    <div className="relative flex flex-col md:flex-row gap-10 h-[100vh] justify-center items-center">
      
      <a
        href="https://shopperby4.vercel.app/"
        alt="Shopper"
     
      >
        <div className="card">
          <div className="wrapper">
            <img
              src="/shopper.png"
              alt=""
              className="cover-image"
            />
          </div>
          <img
            src="/shoppertit.png"
            className="title" alt=""
          />
          <img
            src="/shopperpresp.png"
            className="character" alt=""
          />
        </div>
      </a>

      <a
        href="https://museboxx.vercel.app/"
        alt="musebox"
      >
        <div className="card">
          <div className="wrapper">
            <img
              src="/preview.jpg"
              className="cover-image" alt=""
            />
          </div>
          <img
            src="/shoppertittle.png"
            className="title" alt=""
          />
          <img
            src="/museboxchar.png"
            className="character" alt=""
          />
        </div>
      </a>
    </div>
    </div>
  );
}

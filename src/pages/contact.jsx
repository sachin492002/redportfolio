import React from 'react'
import {AiFillInstagram,AiFillCodepenCircle} from 'react-icons/ai'
import {BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import {IoMdMailOpen} from 'react-icons/io'


export default function Contact() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[100vh]">
      <p className="text-[var(--clr-text-1)] font-['Orbitron'] text-3xl">Connect <span className="text-white">With Me</span></p>
        <div className="inline-flex text-4xl justify-between gap-10 p-20 flex-wrap text-[var(--clr-text-1)]">
           <a href="https://instagram.com/xo_sachin1?igshid=NTc4MTIwNjQ2YQ=="><AiFillInstagram className="hover:text- hover:scale-150 duration-200"/></a>
          <a href="https://codepen.io/xo_creature"><AiFillCodepenCircle className="hover:text- hover:scale-150 duration-200" /></a> 
          <a href="https://www.linkedin.com/in/sachin-meena-9188ab200/"><BsLinkedin className="hover:text- hover:scale-150 duration-200"/></a> 
           <a href="https://wa.link/a4v5yf"><BsWhatsapp className="hover:text- hover:scale-150 duration-200"/></a>
          <a href="mailto:mrsm492002@gmail.com"><IoMdMailOpen className="hover:text- hover:scale-150 duration-200"/></a> 
        </div>
    </div>
  )
}

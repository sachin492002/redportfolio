import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div className="flex flex-col relative justify-center items-center min-h-[100vh] px-16 py-10">
        <div className="text-[var(--clr-text-1)] font-['Poppins'] text-3xl">About <span className="text-white">Me</span></div> 
        <div className="text-center font-['Poppins'] ">
          <p className="text-[var(--clr-text-1)] text-md">Crafting Digital Experiences from Frontiers to Databases : Embracing the Full-Stack Adventure 🚀</p>
          <p>Hello, I'm <span className="text-[var(--clr-text-1)] text-3xl">Sachin</span>, and I thrive in the realm of digital craftsmanship. As a Full-Stack Developer, I'm a blend of creativity and logic, sculpting user-centric frontends while engineering sturdy backends.</p>
          <p className="hidden md:block">Imagine taking a concept and watching it evolve into a living, breathing application – that's my forte. With HTML, CSS, and JavaScript, I mold intuitive interfaces, and with databases, I architect the foundations that sustain them.

My journey is marked by curiosity and a passion for innovation. From pixels to databases, I'm at home in every layer of development. Join me in turning intricate ideas into elegant, functional realities. Together, we'll navigate the ever-changing landscape of technology, one elegant line of code at a time.</p>
        </div>
        <div className="inline-flex gap-10 mt-10 text-4xl text-[var(--clr-text-1)]">
          <Link to="https://github.com/sachin492002"><BsGithub/></Link>
          <a href="https://instagram.com/xo_sachin1?igshid=NTc4MTIwNjQ2YQ=="><BsInstagram/></a>
          <a href="https://www.linkedin.com/in/sachin-meena-9188ab200/"><BsLinkedin /></a>
        </div>
    </div>
  )
}

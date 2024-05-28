import React from 'react'
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className="inline-flex justify-between items-stretch  fixed right-0  bottom-0 text-xl translate-y-full origin-top-right rotate-90 p-8 sidebar">
            <Link to='/'><p className="text-[var(--clr-text-1)] font-['Poppins'] text-4xl">{'^'}</p></Link>
            <Link to='/about'><p className="text-white font-['Poppins'] hover:text-[var(--clr-text-1)] ml-20 transition-colors duration-300">About</p></Link>
            <Link to='/projects'><p className="text-white font-['Poppins'] hover:text-[var(--clr-text-1)] ml-24 transition-colors duration-300">Projects</p></Link>
            <Link to='/contact'><p className="text-white font-['Poppins'] hover:text-[var(--clr-text-1)] ml-24 transition-colors duration-300 ">Contact</p></Link>
    </div>
  )
}

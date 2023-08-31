import React from 'react'
import {Link}  from 'react-router-dom'
export default function Navbar() {
    
  return (
    <div className="inline-flex font-['Orbitron'] sticky justify-between w-full p-2 md:py-10 md:px-20">
        <Link to='/'>
      <p className="text-[var(--clr-text-1)] text-2xl font-semibold not-italic">{"<portfolio/>"}</p></Link>
      <div className="flex flex-col justify-end items-end text-2xl text-[var(--clr-text-1)]"><p>sachin</p><p>meena</p></div>
    </div>
  )
}

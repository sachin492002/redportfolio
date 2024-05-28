import React from 'react'
import {Link, useLocation}  from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { MdDeveloperMode } from "react-icons/md";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const location = useLocation();
  return (
    <nav className="fixed w-full top-0 z-10 flex flex-wrap items-center justify-center px-2 py-3 backdrop-blur-sm backdrop-saturate-200 bg-[var(--clr-project-1)] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
             className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug`}
              to="/"
            >
              <MdDeveloperMode className='md:hidden text-lg'/>
              {/* <p className='hidden md:block'>Home</p> */}
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <CiMenuFries />
            </button>
          </div>
          <div
            className={
              "lg:flex items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <Link
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  ${location.pathname === '/' ? 'text-[var(--clr-text-1)] transition-shadow shadow-lg rounded-lg shadow-[var(--clr-text-1)]':''}`}
                  to="/"
                >
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  ${location.pathname === '/projects' ? 'text-[var(--clr-text-1)] transition-shadow shadow-lg rounded-lg shadow-[var(--clr-text-1)]':''}`}
                  to="/projects"
                >
                Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                 className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  ${location.pathname === '/about' ? 'text-[var(--clr-text-1)] transition-shadow shadow-lg rounded-lg shadow-[var(--clr-text-1)]':''}`}
                  to="/about"
                >
                 About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  ${location.pathname === '/contact' ? 'text-[var(--clr-text-1)] transition-shadow shadow-lg rounded-lg shadow-[var(--clr-text-1)]':''}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

import logo from './logo.svg';
import './App.css';
import './stars.scss';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';

import Sidebar from './components/Sidebar';
import { motion } from 'framer-motion';
import {useEffect,useState,useRef} from 'react';

function App() {
  const cursor = useRef(null)
  // const changePosition = (e) => {
  //   cursor.current.style.top = `${e.clientY}px`;
  //   cursor.current.style.left = `${e.clientX}px`;
  // }
  return (
    
    <div className="overflow-hidden">
      {/* <div className="cursor-style flex flex-col-reverse rotate-45 origin-top items-center" ref={cursor} >
        <div className="light-saber-handle "></div>
        <div className="saber-seprator"></div>
        <div className="light-saber-blade"></div>
      </div> */}
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
  
      
      <Sidebar />
    </div>
  );
}

export default App;

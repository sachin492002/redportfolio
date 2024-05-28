import React from "react";
import "./projects.css";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const AllProjects = [
  {
    name: "Shopper",
    image: "/shopper-1.png",
    link: "https://shopperby4.vercel.app/",
    description:
      "Shopper is a project that utilizes React and natural Node.js to enable local traders to sell their goods and provides locals an awesome interface for shopping. Technologies used include React, Redis, and RESTful APIs etc.",
    skills: [
      <FaReact />,
      <FaNodeJs />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiExpress />,
    ],
  },
  {
    name: "MuseBox",
    image: "/musebox.png",
    link: "https://shopperby4.vercel.app/",
    description:
      "MuseBox is a project that utilizes NextJs and jiosavan api to enable users to search and listen for their favorite music. Technologies used include React, Redux toolkit etc.",
    skills: [
      <TbBrandNextjs />,
      <FaReact />,
      <FaNodeJs />,
      <SiRedux />,
      <SiTailwindcss />,
    ],
  },
  {
    name: "FlickFix",
    image: "/FlickFix.png",
    link: "https://stream-jet.vercel.app/",
    description:
      "FlickFix is a NextJs project with a stunning and responsive ui which provides a ott platform template. It also utilizes concepts of infinite scroll and is a seo friendly web app.",
    skills: [
      <TbBrandNextjs />,
      <FaReact />,
      <SiRedux />,
      <SiTailwindcss />,
    ],
  },
  {
 name :  'Boards',
 image: '/Boards.png',
 link:'https://toddlebysm.netlify.app',
 description: 'Boards is lightweigth web app to store your memories with a responsive ui built with reactjs. It includes the technologies like react, tailwindcss, redux etc.'
  ,
  skills:[
      <FaReact />,
      <SiRedux />,
      <SiTailwindcss />,
  ]
  },
  {
    name : 'Windows Portfolio',
    image : '/Windows.png',
    link : 'https://port-zeta-five.vercel.app',
    description :'It is a react based portfolio which mimics winodws 11 in user interfce. It can be used as a template for developer portcolios. ',
    skills :[
      <FaReact />,
      <SiTailwindcss />
    ]
  },
  {
    name : 'GallaryX',
    image : 'GallaryX.png',
    link : 'https://github.com/sachin492002/GallaryX',
    description : 'This a lightweight react-native app to show photos from device storage and it was built with expo router. ',
    skills : [
      <FaReact/>,
      <img src='/expo.png' alt='no'/>
    ]
  },
  
];

const Project = ({ pro }) => {
  return (
    <div className="relative flex lg:flex-row lg:justify-end lg:items-end flex-col-reverse  p-10 w-full">
      <div className=" lg:absolute lg:p-20  z-10 top-0 left-0 bottom-0 lg:w-1/2">
      <div className="p-4 rounded-b-lg lg:rounded-lg backdrop-blur-sm backdrop-saturate-200 bg-[var(--clr-project-1)] lg:border-[1px] lg:border-[var(--clr-border-project)]  z-10">
          <span className="font-bold text-[var(--clr-text-1)] text-2xl">
            {pro.name}
          </span>
          <p className="">{pro.description}</p>
          <div className="inline-flex py-2 gap-2 text-[var(--clr-text-1)] text-2xl">
            {pro?.skills?.map((skill) => {
              return skill;
            })}
          </div>
        </div>
      </div>
      <div className='w-full lg:w-3/4'>
     <a href={pro.link}>
           <img
             src={pro.image}
             alt="no"
             className="hover:scale-110 w-full  h-auto transition-all delay-75  lg:object-cover rounded-t-lg lg:rounded-lg"
           />
         </a>
      </div>
    </div>
  );
};
export default function Projects() {
  return (
    <div className="flex justify-center px-2 py-4  lg:px-20 lg:py-20 items-center flex-col gap-10">
      {AllProjects.map((project) => {
        return <Project pro={project} />;
      })}
    </div>
  );
}

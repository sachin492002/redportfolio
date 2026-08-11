import gitLink from '../../assets/images/links/github.svg';
import webLink from '../../assets/images/links/globe2.svg';

import FlickFix from '../../assets/images/projects/FlickFix.webp';
import Windows from '../../assets/images/projects/Windows.webp';
import gx from '../../assets/images/projects/GallaryX.webp';
import sh from '../../assets/images/projects/shopper-1.webp';
import boards from '../../assets/images/projects/Boards.png';
import musebox from '../../assets/images/projects/musebox.webp';
import portfolio from '../../assets/images/projects/redport.png';

import { FaMandalorian } from "react-icons/fa";
import { GrWindows } from "react-icons/gr";
import { SiYoutubemusic } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { IoClipboard } from "react-icons/io5";
import { FaLungs } from "react-icons/fa6";
import { MdOutlineLocationSearching } from "react-icons/md";
export const web = [
	{
		title: 'Red Portfolio',
		description: 'A portfolio website built with React and Framer Motion, showcasing my projects and skills in a visually appealing and interactive manner.',
		image:portfolio,
		icon: <FaMandalorian />,
		accent: '#FF0000',
		links: [ 'https://github.com/sachin492002/redportfolio' , 'https://redportfolio-phi.vercel.app/' ],
		technologies: ['React', 'Framer Motion'],
	},
	{
		title: 'Windows',
		description: '',
		technologies: ['React', 'Electron', 'TailwindCSS'],
		image: Windows,
		icon: <GrWindows />,
		accent: "#0a57f2",
		links: [ 'https://github.com/sachin492002/port' , 'https://port-zeta-five.vercel.app/' ],
	},
	{ 
		title: 'Musebox',
		description: 'A music streaming application built with Next.js.',
		image: musebox,
		icon: <SiYoutubemusic />,
		accent: '#14f7ec',
		links: [ 'https://github.com/sachin492002/musebox' , 'http://museboxx.vercel.app' ],
		technologies: ['Next.js', 'TailwindCSS', 'Redux'],
	},
	{
		title: 'FlickFix',
		description: 'A Netflix like application prototype built with Next.js.',
		technologies: ['Next.js','redux', 'TailwindCSS'],
		image: FlickFix,
		icon: <MdLocalMovies />,
		accent: '#FF0000',
		links: [ 'https://github.com/sachin492002/FlickFix' , 'https://stream-jet.vercel.app/' ]
	},
	{
		title: 'GallaryX',
		description: 'A photo gallery application built with React-Native.',
		technologies: ['React-Native', 'Expo', 'TailwindCSS'],
		image: gx,
		icon: <IoMdPhotos />,
		accent: '#bce3e3',
		links: [ 'https://github.com/sachin492002/GallaryX' ]
	},
	{
		title: 'Shopper',
		description: 'An e-commerce application built with MERN Stack.',
		technologies: ['MERN Stack', 'Redux', 'TailwindCSS'],
		image: sh,
		icon: <FaShop />,
		accent: '#00FFFF',
		links: [ 'https://github.com/sachin492002/MERN-E-commerce' , 'http://shopperby4.vercel.app' ]
	},
	{
		title: 'Boards',
		description: 'A task management application built with React.',
		technologies: ['React', 'TailwindCSS', 'Redux'],
		image: boards,
		icon: <IoClipboard />,
		accent: '#f73ee8',
		links: [ 'https://github.com/sachin492002/Boards' , 'https://toddlebysm.netlify.app/' ]
	},
	{
		title: 'Lung Cancer Detection',
		description: 'A thesis project on lung cancer detection using machine learning on gene expression data.',
		technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Keras', 'Flask', 'Heroku',],
		image:'https://ebv2e3r5onu.exactdn.com/wp-content/uploads/2024/05/lung-cancer.jpg?strip=all',
		icon: <FaLungs />,
		accent: '#ff6b6b',
		links: [ 'https://github.com/sachin492002/Lung-Cancer-Prediction-ON-gene-expression-data' , 'https://github.com/sachin492002/Lung-Cancer-Prediction-ON-gene-expression-data' ]
	},
	{
		title: 'A document search engine built with Python and Flask.',
		description: 'Basic Search Engine to implement Information Retrieval for finding relevant documents/books.',
		technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript','Information Retrieval','indexing','ranking','query processing'],
		image:'https://systematic.com/media/52uhz35v/gellerup_library_1920x1080-6.jpg?width=1120&height=1120&format=webp',
		icon: <MdOutlineLocationSearching />,
		accent: '#ff6b6b',
		links: [ 'https://github.com/sachin492002/BookFinder' , 'https://github.com/sachin492002/BookFinder' ]
	}
];


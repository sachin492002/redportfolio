import gitLink from '../../assets/images/links/github.svg';
import webLink from '../../assets/images/links/globe2.svg';

import FlickFix from '../../assets/images/projects/FlickFix.webp';
import Windows from '../../assets/images/projects/Windows.webp';
import gx from '../../assets/images/projects/GallaryX.webp';
import sh from '../../assets/images/projects/shopper-1.webp';
import boards from '../../assets/images/projects/Boards.png';
import musebox from '../../assets/images/projects/musebox.webp';
import portfolio from '../../assets/images/projects/redport.png';




export const web = [
	{
		name: 'Red Portfolio',
		cover: portfolio,
		links: [{ icon: gitLink, link: 'https://github.com/sachin492002/redportfolio' },{ icon: webLink, link: 'https://redportfolio-phi.vercel.app/' }],
	},
	{
		name: 'Windows',
		
		cover: Windows,
		links: [{ icon: gitLink, link: 'https://github.com/sachin492002/port' },{ icon: webLink, link: 'https://port-zeta-five.vercel.app/' }],
	},
	{ 
		name: 'Musebox',
		cover: musebox,
		links: [{ icon: gitLink, link: 'https://github.com/sachin492002/musebox' },{ icon: webLink, link: 'http://museboxx.vercel.app' }]
},
	{
		name: 'FlickFix',
		
		cover: FlickFix,
		links: [{ icon: gitLink, link: 'https://github.com/sachin492002/FlickFix' },{ icon: webLink, link: 'https://stream-jet.vercel.app/' }]
	},
	{
		name: 'GallaryX',
		cover: gx,
		links: [{ icon: gitLink, link: 'https://github.com/sachin492002/GallaryX' }]
	},
	{
		name: 'Shopper',
		
		cover: sh,
		links: [{ icon: gitLink, link: 'https://github.com/sachin492002/MERN-E-commerce' },{ icon: webLink, link: 'http://shopperby4.vercel.app' }]
	},
	{
		name: 'Boards',
		
		cover: boards,
		links: [{ icon: gitLink, link: 'https://github.com/sachin492002/Boards' },{ icon: webLink, link: 'https://toddlebysm.netlify.app/' }]
	},
];


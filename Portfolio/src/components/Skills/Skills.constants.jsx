import reactIcon from '../../assets/images/skills/react.png';
import htmlIcon from '../../assets/images/skills/html.png';
import cssIcon from '../../assets/images/skills/css.png';
import bootstrapIcon from '../../assets/images/skills/bootstrap.png';
import tailwindcssIcon from '../../assets/images/skills/tailwindcss.png';
import sqlIcon from '../../assets/images/skills/db.png';
import jsIcon from '../../assets/images/skills/js.png';
import nextjsIcon from '../../assets/images/skills/nextjs.png';

import nodejsIcon from '../../assets/images/skills/nodejs.png';
import djangoIcon from '../../assets/images/skills/django.png';

import psIcon from '../../assets/images/skills/ps.png';
import figmaIcon from '../../assets/images/skills/figma.png';

export const skillCat = {
	web: {
		categoryName: 'Frontend',
		percentage: 50,
		skillList: [
			{ name: 'HTML', xp: '8 YRS', icon: htmlIcon },
			{ name: 'CSS', xp: '8 YRS', icon: cssIcon },
			{ name: 'Javascript', xp: '4 YRS', icon: jsIcon },
			{ name: 'Bootstrap', xp: '5 YRS', icon: bootstrapIcon },
			{ name: 'Next js', xp: '3 YRS', icon: nextjsIcon },
			{ name: 'react js', xp: '2 YRS', icon: reactIcon },
			{ name: 'Tailwind css', xp: '2 YRS', icon: tailwindcssIcon },
		],
	},
	game: {
		categoryName: 'Backend',
		percentage: 20,
		skillList: [
			{ name: 'sql', xp: '2 YRS', icon: sqlIcon },
			{ name: 'node js', xp: '5 YRS', icon: nodejsIcon },
			{ name: 'django', xp: '3 YRS', icon: djangoIcon },
		],
	},
	design: {
		categoryName: 'Design',
		percentage: 30,
		skillList: [
			{ name: 'Photoshop', xp: '15 YRS', icon: psIcon },
			{ name: 'Figma', xp: '1 YR', icon: figmaIcon },
		],
	},
	soft: {
		categoryName: [ 'Perseverant', 'Patient', 'Enthusiastic', 'Hardworking', 'Amusing'],
		percentage: 100,
	},
};

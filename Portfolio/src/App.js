import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Background, generateBackgroundIcons, Menu, Welcome, About, Skills, Projects } from './components';


const App = () => {
	const location = useLocation();
	const [hasLoaded, setHasLoaded] = useState(false);
	const [bg, setBg] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);


	useEffect(() => {
		setBg(generateBackgroundIcons());
	}, []);

	return (
		<div className='App'>
				<AnimatePresence mode="wait">
					{hasLoaded ? (
						<motion.div key='content' className='content'>
							<Background background={bg} hasLoaded={hasLoaded} />
							<AnimatePresence mode="wait">
								<Routes location={location} key={location.pathname}>
									<Route path='/' element={<About pageTitle={'About'} />} />
									<Route path='/skills' element={<Skills pageTitle={'Skills'} />} />
									<Route path='/projects' element={<Projects pageTitle={'Projects'} />} />
								</Routes>
							</AnimatePresence>
							<Menu selectPage={setCurrentPage} currentPage={currentPage} />
						</motion.div>
					) : (
						<motion.div key='loader' className='loader'>
							<Background background={bg} hasLoaded={hasLoaded} />
							<Welcome setLoading={setHasLoaded} />
						</motion.div>
					)}
				</AnimatePresence>
		</div>
	);
};

export default App;

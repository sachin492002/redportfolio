import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Sachin Meena | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};

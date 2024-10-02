'use client';

import { type ReactNode, useEffect } from 'react';

export const ScrollbarProvider = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		const value = (window.innerWidth - document.body.clientWidth) / 16 + 'rem';
		document.documentElement.style.setProperty('--ko-landing-scrollbar-width', value);
	}, []);

	return children;
};
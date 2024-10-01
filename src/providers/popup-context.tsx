'use client';

import { createContext, MouseEvent, type ReactNode, useState } from 'react';

interface PopupContextType {
	isOpen: boolean;
	openPopup: () => void;
	closePopup: (e: MouseEvent | null, hard?: boolean) => void;
}

export const PopupContext = createContext<PopupContextType>({
	isOpen: false,
	openPopup: () => {},
	closePopup: () => {},
});

export const PopupProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openPopup = () => {
		setIsOpen(true)
		document.documentElement.classList.add("lock");
	};

	const closePopup = (e: MouseEvent | null, hard?: boolean) => {
		if (hard) {
			setIsOpen(false);
			document.documentElement.classList.remove("lock");
		}

		if (e) {
			const target = e.target as HTMLElement;

			if (target.hasAttribute('data-close-popup')) {
				setIsOpen(false);
				document.documentElement.classList.remove("lock");
			}
		}
	};

	const contextData = { isOpen, openPopup, closePopup };

	return (
		<PopupContext.Provider value={contextData}>
			{children}
		</PopupContext.Provider>
	);
};

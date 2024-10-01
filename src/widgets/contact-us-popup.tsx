'use client';

import { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { PopupContext } from '@/providers';
import { ContactUsForm } from '@/shared/ui';

export const ContactUsPopup = () => {
	const { isOpen, closePopup } = useContext(PopupContext)

	return (
		<div
			className={`px-4 fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex transition-all ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
			onClick={closePopup}
			data-close-popup
		>
			<button type="button" className="absolute top-4 right-4 p-3 rounded-full text-2xl bg-white"
					onClick={closePopup} data-close-popup>
				<IoClose className="pointer-events-none"/>
			</button>
			<ContactUsForm className="m-auto max-w-[420px] w-full"/>
		</div>
	);
}

'use client';

import { type ReactNode, useContext } from 'react';
import { PopupContext } from '@/providers';
import { Button } from '@/shared/ui/button';

type ContactUsButtonProps = {
	children: ReactNode;
	type?: 'button' | 'submit' | 'reset';
	design?: 'default' | 'bordered';
}

export const ContactUsButton = ({ children, design, type }: ContactUsButtonProps) => {
	const { openPopup } = useContext(PopupContext);

	return (
		<Button design={design} type={type} onClick={openPopup}>{children}</Button>
	)
}
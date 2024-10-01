import { type ReactNode } from 'react';
import { PopupProvider } from '@/providers';

export const Providers = ({ children }: { children: ReactNode }) => (
	<PopupProvider>
		{children}
	</PopupProvider>
);
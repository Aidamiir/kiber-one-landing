import { type ReactNode } from 'react';
import { PopupProvider, ScrollbarProvider } from '@/providers';

export const Providers = ({ children }: { children: ReactNode }) => (
	<PopupProvider>
		<ScrollbarProvider>
			{children}
		</ScrollbarProvider>
	</PopupProvider>
);
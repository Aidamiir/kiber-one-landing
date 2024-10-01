import { type ReactNode } from 'react';

export const Text = ({ children, className }: { children: ReactNode; className?: string; }) => (
	<p className={`text-lg max-lg:text-sm ${className}`}>
		{children}
	</p>
);
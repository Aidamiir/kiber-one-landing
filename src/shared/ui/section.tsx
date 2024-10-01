import { type ReactNode } from 'react';

export const Section = ({ children }: { children: ReactNode }) => (
	<section className="py-20 max-md:py-12">{children}</section>
);
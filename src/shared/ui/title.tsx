import { type ReactNode } from 'react';

type Props = {
	className?: string;
	children: ReactNode;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	size?: '5.5xl' | '5xl' | '4.5xl';
}

export const Title = ({ className, children, level = 2, size = '4.5xl' }: Props) => {
	const Tag = `h${level}` as const;
	return (
		<Tag
			className={`font-bold ${size === '5.5xl' ? 'text-[65px]' : ''} ${size === '5xl' ? 'text-5xl max-lg:text-3xl' : ''} ${size === '4.5xl' ? 'text-[34px] max-lg:text-2xl' : ''} ${className}`}
		>
			{children}
		</Tag>
	)
};
import { type ReactNode } from 'react';
import Image from 'next/image';

type Props = {
	src: string;
	alt: string;
	children: ReactNode;
}

export const AdvantagesItem = ({ src, alt, children }: Props) => {
	return (
		<div className="flex flex-col items-center h-full py-6 px-4 bg-white rounded-3xl shadow-md">
			<div className="w-[60px] h-[60px] mb-2 flex items-center justify-center">
				<Image
					width={50}
					height={50}
					src={src}
					alt={alt}
				/>
			</div>
			<p className="text-center text-md max-md:text-[14px]">{children}</p>
		</div>
	);
};
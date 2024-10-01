import { type ReactNode } from 'react';
import Image from 'next/image';
import { ContactUsButton, Title } from '@/shared/ui';

type Props = {
	src: string;
	alt: string;
	children: ReactNode;
}

export const ModuleItem = ({ children, src, alt }: Props) => {
	return (
		<div className="p-6 h-full flex flex-col gap-8 rounded-3xl bg-white shadow-xl">
			<Title level={3} className="text-xl h-12 max-lg:text-[16px] max-lg:leading-normal">
				{children}
			</Title>
			<div className="w-full h-[162px] overflow-hidden rounded-2xl">
				<Image
					className="object-cover w-full"
					width={306}
					height={162}
					src={src}
					alt={alt}
				/>
			</div>
			<ContactUsButton>Оставить заявку</ContactUsButton>
		</div>
	);
};
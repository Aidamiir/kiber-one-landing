import Image from 'next/image';

type Props = {
	reverse?: boolean;
	src: string;
	alt: string;
	firstText: string;
	secondText: string;
}

export const InfoCard = ({ reverse = false, src, alt, firstText, secondText }: Props) => (
	<div className="gap-4 flex flex-col items-center">
		<div className="w-[60px] aspect-square">
			<Image
				className="w-full h-full object-contain"
				width={60}
				height={60}
				src={src}
				alt={alt}
			/>
		</div>
		<div className={`flex items-center text-[22px] ${reverse ? 'flex-col-reverse' : 'flex-col'}`}>
			<div className="font-bold">{firstText}</div>
			<div>{secondText}</div>
		</div>
	</div>
);
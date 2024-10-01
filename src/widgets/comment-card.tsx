import Image from 'next/image';
import { Text } from '@/shared/ui';

type Props = {
	src: string;
	alt: string;
	name: string;
	whoIt: string;
	text: string;
}

export const CommentCard = ({ src, alt, name, whoIt, text }: Props) => {
	return (
		<div className="bg-white p-8 rounded-2xl flex flex-col gap-4 h-full">
			<div className="flex items-center gap-4">
				<Image
					className="rounded-full"
					width={60}
					height={60}
					src={src}
					alt={alt}
				/>
				<div>
					<div className="font-bold">{name}</div>
					<div className="text-gray-600 text-[14px] leading-normal">{whoIt}</div>
				</div>
			</div>
			<Text className="text-[14px] leading-normal">{text}</Text>
		</div>
	);
};
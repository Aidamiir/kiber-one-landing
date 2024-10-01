import Image from 'next/image';
import { ListItemWithMark, Section, Title } from '@/shared/ui';

type Props = {
	title: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	data: string[];
}

export const SectionWithMarkList = ({ title, src, alt, width, height, data }: Props) => {
	return (
		<Section>
			<div className="container flex items-center justify-between md:flex-row flex-col gap-8">
				<div className="flex flex-col gap-8">
					<Title className="max-w-[600px]">
						{title}
					</Title>
					<ul className="flex flex-col gap-4">
						{data.map((i) => (
							<li key={i}>
								<ListItemWithMark>{i}</ListItemWithMark>
							</li>
						))}
					</ul>
				</div>
				<Image
					width={width}
					height={height}
					src={src}
					alt={alt}
				/>
			</div>
		</Section>
	);
};
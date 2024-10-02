import Image from 'next/image';
import { Section, Text, Title } from '@/shared/ui';

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
								<div className="flex items-center gap-4">
									<div className="p-3 flex items-center bg-primary rounded-full">
										<Image
											className="m-auto"
											width={18}
											height={18}
											src="/img/icons/check-mark.svg"
											alt="Галочка"
										/>
									</div>

									<Text>{i}</Text>
								</div>
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
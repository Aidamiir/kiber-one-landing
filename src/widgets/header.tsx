import Link from 'next/link';
import Image from 'next/image';
import { ContactUsButton } from '@/shared/ui';

export const Header = () => {

	return (
		<header className="w-full">
			<div className="container py-8 flex items-center justify-between max-md:flex-col">
				<Link href="#">
					<Image
						className="max-lg:h-[50px] max-lg:w-full"
						width={485}
						height={67}
						src="/img/logo-with-text.png"
						alt="Первая Международная KIBERшкола для детей"
					/>
				</Link>
				<span className="max-md:hidden">
					<ContactUsButton>
						Занять место в KIBERone
					</ContactUsButton>
				</span>
			</div>
		</header>
	);
};
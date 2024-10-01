import Image from 'next/image';
import { Text } from '@/shared/ui';

export const Footer = () => {
	return (
		<footer className="bg-black py-16">
			<div className="container text-white flex items-center justify-between max-[450px]:flex-col-reverse gap-4">
				<div className="flex flex-col gap-4 max-[450px]:items-center">
					<Image
						className="w-full max-w-[168px] max-md:max-w-[130px]"
						width={168}
						height={86}
						src="/img/logo.avif"
						alt="Логотип"
					/>
					<Text className="text-sm">© 2023 KIBERone. Все права защищены </Text>
				</div>
				<div className="flex items-center gap-4">
					<Image
						width={26}
						height={26}
						src="/img/icons/calendar.svg"
						alt="Календарь"
					/>
					<div>
						<div>09.00 – 21.00</div>
						<div>ежедневно</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
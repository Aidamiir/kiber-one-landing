import Image from 'next/image';
import Link from 'next/link';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Text } from '@/shared/ui';

export const Footer = () => {
	return (
		<footer className="bg-black py-16">
			<div className="container text-white flex items-center justify-between max-[450px]:flex-col-reverse gap-10">
				<div className="flex flex-col gap-4 max-[450px]:items-center">
					<Image
						className="w-full max-w-[130px]"
						width={130}
						height={86}
						src="/img/logo.avif"
						alt="Логотип"
					/>
					<Text className="text-sm">© 2023 KIBERone. Все права защищены </Text>
				</div>
				<div className="flex flex-col gap-4 justify-center text-xs font-medium">
					<div className="flex items-center gap-4">
						<Image
							width={26}
							height={26}
							src="/img/icons/calendar.svg"
							alt="Календарь"
						/>
						<div className="flex flex-col gap-1">
							<div>09.00 – 21.00</div>
							<div>ежедневно</div>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<BsFillTelephoneFill className="text-primary text-[22px]"/>
						<div className="flex flex-col gap-1">
							<div>Армавир {" "}
								<Link
									href="tel:+79891220333"
									target="_blank"
									className="text-primary hover:text-primaryHover transition-colors"
								>
									+79891220333
								</Link>
							</div>
							<div>
								Курганинск {" "}
								<Link
									href="tel:+79892860333"
									target="_blank"
									className="text-primary hover:text-primaryHover transition-colors"
								>
									+79892860333
								</Link>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<Image
							width={26}
							height={26}
							src="/img/icons/map-icon.avif"
							alt="Метка карты"
						/>
						<div className="flex flex-col gap-1">
							<Link
								href="https://yandex.ru/maps/-/CDTOmGJk"
								target="_blank"
								className="text-primary hover:text-primaryHover transition-colors"
							>
								Армавир Халтурина 66, Мира 24Б
							</Link>

							<Link
								href="https://yandex.ru/maps/-/CDTOmX0d"
								target="_blank"
								className="text-primary hover:text-primaryHover transition-colors"
							>
								Курганинск Комсомольская 87Б
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
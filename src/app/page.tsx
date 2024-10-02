import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { fetchData } from '@/server_actions';
import { SectionWithMarkList } from '@/widgets';
import { ContactUsButton, Section, Text, Title, Video } from '@/shared/ui';
import YandexMap from '@/app/yandex-map';

export default async function Home() {
	const {
		infoCards,
		whatChildrenCanDo,
		schoolStats,
		advantages,
		modules,
		reasons,
		comments,
		awards
	} = await fetchData();

	return (
		<Fragment>
			<Section>
				<div className="container flex justify-between items-center max-md:flex-col max-md:gap-8">
					<div className="flex flex-col items-start gap-8">
						<Title className="max-w-[650px]" level={1} size="5xl">
							<span className="text-secondary">Создайте успешное будущее своему ребёнку {' '}</span>
							<span>вместе с IT-навыками от KIBERone в городе Армавир и Курганинск!</span>
						</Title>
						<Text>
							Мы знаем, чему учить детей, чтобы это было актуально через 15 лет!
						</Text>
						<ContactUsButton>
							Оставить заявку на пробное занятие
						</ContactUsButton>
					</div>
					<Image
						width={444}
						height={489}
						src="/img/bear-with-notebook.png"
						alt="Медведь с ноутбуком"
					/>
				</div>
			</Section>

			<Section>
				<div className="container">
					<ul className="lg:flex lg:items-center lg:justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-y-8 max-md:grid-cols-1">
						{infoCards.map(({ src, alt, firstText, secondText }, i) => (
							<li key={src}>
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
									<div
										className={`flex items-center text-[22px] ${i >= 2 ? 'flex-col-reverse' : 'flex-col'}`}>
										<div className="font-bold">{firstText}</div>
										<div>{secondText}</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Section>

			<Section>
				<div className="container flex flex-col items-center gap-10">
					<div className="flex flex-col gap-4 text-center">
						<Title>
							KIBERone – место, где дети и подростки получают навыки для успешного будущего и узнают всё о
							высоких технологиях
						</Title>
						<Text>
							30 секунд, чтобы познакомиться с KIBERone
						</Text>
					</div>

					<div
						className="max-w-[690px] h-[414px] max-lg:h-[350px] w-full bg-black overflow-hidden rounded-[40px]">
						<Video/>
					</div>

					<ContactUsButton>Оставить заявку</ContactUsButton>
				</div>
			</Section>

			<SectionWithMarkList
				title="Что умеют дети из KIBERone?"
				src="/img/bear-hand-up.png"
				alt="Медведь"
				width={400}
				height={484}
				data={whatChildrenCanDo}
			/>

			<Section>
				<div className="container gap-10 flex flex-col items-center justify-center">
					<Title className="max-w-[460px] text-center">
						Подарите ребёнку навыки международного уровня
					</Title>
					<Image
						className="w-full max-w-[627px]"
						width={627}
						height={309}
						src="/img/school-map.avif"
						alt="Карта школ"
					/>
					<ul className="flex items-center justify-center gap-14 max-md:grid max-md:grid-cols-2 text-center">
						{schoolStats.map(({ title, smallTitle, text }) => (
							<li key={title} className="font-bold">
								<div className="text-6xl max-lg:text-5xl max-md:text-4xl">{title} <span
									className="text-3xl">{smallTitle}</span>
								</div>
								<div className="text-3xl max-lg:text-2xl max-md:text-xl">{text}</div>
							</li>
						))}
					</ul>
					<ContactUsButton>Записаться с ребенком</ContactUsButton>
				</div>
			</Section>

			<Section>
				<div className="container flex flex-col items-center gap-8">
					<Title className="max-w-[600px] text-center">
						Преимущества Международной КИБЕРшколы для детей
					</Title>

					<ul className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
						{advantages.map(({ src, alt, text }) => (
							<li key={src}>
								<div
									className="flex flex-col items-center h-full py-6 px-4 bg-white rounded-3xl shadow-xl">
									<div className="w-[60px] h-[60px] mb-2 flex items-center justify-center">
										<Image
											width={50}
											height={50}
											src={src}
											alt={alt}
										/>
									</div>
									<p className="text-center text-md max-md:text-[14px]">{text}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Section>

			<Section>
				<div className="container flex justify-between items-center gap-12 max-md:flex-col-reverse">
					<Image
						className="w-full max-w-[450px]"
						width={450}
						height={450}
						src="/img/children.png"
						alt="Дети"
					/>
					<div className="flex flex-col items-start gap-8 w-full">
						<Title>
							Не упустите шанс помочь ребёнку построить успешную карьеру!
						</Title>
						<Text>
							Полученные в КИБЕРшколе навыки и знания дадут уверенный старт в востребованной профессии,
							помогут стать успешным специалистом!
						</Text>
						<ContactUsButton>Записаться на пробное занятие</ContactUsButton>
					</div>
				</div>
			</Section>

			<Section>
				<div className="container flex flex-col items-center gap-6">
					<Title className="text-center">
						<span className="text-secondary">Самая полная программа в сфере IT – <br/></span>
						<span>готовим ребенка к будущему &quot;под ключ&quot;</span>
					</Title>
					<Text>
						Более 60 модулей по разным IT-направлениям
					</Text>

					<ul className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
						{modules.map(({ src, alt, text }) => (
							<li key={src}>
								<div className="p-6 h-full flex flex-col gap-8 rounded-3xl bg-white shadow-xl">
									<Title level={3} className="text-xl h-12 max-lg:text-[16px] max-lg:leading-normal">
										{text}
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
							</li>
						))}
					</ul>
				</div>
			</Section>

			<Section>
				<div className="container flex justify-between items-center gap-16 max-md:flex-col-reverse">
					<Image
						className="max-w-[525] w-full"
						width={525}
						height={421}
						src="/img/mastering-it.png"
						alt="Осваивание IT"
					/>
					<div className="flex flex-col gap-10 max-w-[600px]">
						<Title>
							Как резиденты осваивают IT в KIBERone?
						</Title>

						<ul className="flex flex-col gap-8 pl-4">
							<li className="list-disc">
								<Text>
									Программа KIBERone построена по принципу последовательного освоения одного модуля
									за другим
								</Text>
							</li>
							<li className="list-disc">
								<Text>
									Попадая в KIBERone, ребёнок прокачивает знания с нуля и <span className="font-bold">к возрасту 14 лет обладает всеми навыками в полном объёме</span>
								</Text>
							</li>
						</ul>

						<div className="flex gap-4">
							<ContactUsButton>Оставить заявку</ContactUsButton>
							<ContactUsButton design="bordered">Узнать цену</ContactUsButton>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div className="container flex justify-between items-center gap-8 max-md:flex-col">
					<div className="flex flex-col justify-center gap-8 w-full">
						<Title>
							Каждый резидент <br/> получает сертификат <br/> международного образца
						</Title>
						<Text className="max-w-96">
							Проверить подлинность сертификата можно в Головном офисе компании
						</Text>
					</div>
					<Image
						className="max-w-[400] w-full"
						width={400}
						height={308}
						src="/img/certificates-with-children.png"
						alt="Сертификаты"
					/>
				</div>
			</Section>

			<Section>
				<div className="container flex items-center gap-10 justify-between max-md:flex-col-reverse">
					<Image
						className="w-full max-w-[350px]"
						width={350}
						height={378}
						src="/img/rich-children.png"
						alt="Ребенок с киберонами"
					/>
					<div className="max-w-[650px] w-full flex flex-col gap-8">
						<Title>
							Почему KIBERone?
						</Title>

						<ul className="pl-4">
							<li className="list-disc">
								KIBERone признан ЮНЕСКО лучшим проектом в мире в сфере цифровых технологий для детей
							</li>
							<li className="list-disc">
								KIBERone – учебное заведение, квалифицированное корпорацией Майкрософт
							</li>
							<li className="list-disc">
								KIBERone – лучшее образовательное учреждение с 2018 года на территории Евросоюза
							</li>
						</ul>
						<Image
							width={350}
							height={52}
							src="/img/companies.png"
							alt="Компании"
						/>
					</div>
				</div>
			</Section>

			<SectionWithMarkList
				title="5 причин освоить цифровые технологии"
				src="/img/ilon-mask.png"
				alt="Илон Маск"
				width={400}
				height={432}
				data={reasons}
			/>

			<Section>
				<div className="container flex flex-col gap-8 items-center">
					<Title size="5.5xl" className="max-md:text-3xl">
						ТЕ САМЫЕ ЭМОЦИИ
					</Title>
					<div className="flex gap-8 max-md:grid max-md:grid-cols-2">
						<Link href="/img/emojies/1.png" className="rounded-full overflow-hidden">
							<Image
								width={268}
								height={266}
								src="/img/emojies/1.png"
								alt="Дети"
							/>
						</Link>
						<Link href="/img/emojies/2.png" className="rounded-full overflow-hidden">
							<Image
								width={268}
								height={266}
								src="/img/emojies/2.png"
								alt="Дети"
							/>
						</Link>
						<Link href="/img/emojies/3.png" className="rounded-full overflow-hidden">
							<Image
								width={268}
								height={266}
								src="/img/emojies/3.png"
								alt="Дети"
							/>
						</Link>
						<Link href="/img/emojies/4.png" className="rounded-full overflow-hidden">
							<Image
								width={268}
								height={266}
								src="/img/emojies/4.png"
								alt="Дети"
							/>
						</Link>
					</div>
					<ContactUsButton>Оставить заявку</ContactUsButton>
				</div>
			</Section>

			<Section>
				<div className="container flex flex-col items-center gap-8">
					<Title>
						Что говорят родители о KIBERone
					</Title>

					<ul className="gap-8 grid grid-cols-3 max-lg:grid-cols-1">
						{comments.map(({ src, alt, text, whoIt, name }, index) => (
							<li key={index}>
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
									<Text className="text-sm leading-normal">{text}</Text>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Section>

			<Section>
				<div className="container flex flex-col items-center gap-8">
					<Title className="text-center">
						Локации KIBERone в Армавире и Курганинске
					</Title>

					<div className="p-8 bg-white rounded-2xl shadow-md w-full max-md:p-4">
						<div className="rounded-2xl overflow-hidden w-full">
							<YandexMap/>
						</div>
					</div>
				</div>
			</Section>

			<Section>
				<div className="container flex flex-col items-center gap-8">
					<Title>Награды KIBERone</Title>

					<div className="flex gap-4 max-md:grid max-md:grid-cols-2 max-[450px]:grid-cols-1">
						{awards.map(({ src, alt, text }) => (
							<div key={src} className="flex flex-col items-center text-center gap-2 w-full">
								<Image
									width={210}
									height={147}
									src={src}
									alt={alt}
								/>
								<div className="text-xs">{text}</div>
							</div>
						))}
					</div>
				</div>
			</Section>

			<Section>
				<div className="container flex flex-col gap-8">
					<Title className="text-center">Партнеры KIBERone</Title>
					<div
						className="flex items-center justify-between gap-2 max-md:grid-cols-3 max-md:grid max-[500px]:grid-cols-1">
						<div className="p-10 flex max-[500px]:justify-center">
							<Image
								className="max-[500px]:max-w-[120px]"
								width={230}
								height={105}
								src="/img/partners/1.avif"
								alt="Сколово"
							/>
						</div>
						<div className="p-10 flex max-[500px]:justify-center">
							<Image
								className="max-[500px]:max-w-[120px]"
								width={230}
								height={105}
								src="/img/partners/2.avif"
								alt="Майкрософт"
							/>
						</div>
						<div className="p-10 flex max-[500px]:justify-center">
							<Image
								className="max-[500px]:max-w-[120px]"
								width={230}
								height={105}
								src="/img/partners/3.avif"
								alt="Самсунг"
							/>
						</div>
						<div className="p-10 flex max-[500px]:justify-center">
							<Image
								className="max-[500px]:max-w-[120px]"
								width={230}
								height={105}
								src="/img/partners/4.avif"
								alt="Сбербанк"
							/>
						</div>
						<div className="p-10 flex max-[500px]:justify-center">
							<Image
								className="max-[500px]:max-w-[120px]"
								width={230}
								height={105}
								src="/img/partners/5.avif"
								alt="Роблокс"
							/>
						</div>
					</div>
				</div>
			</Section>
		</Fragment>
	);
}

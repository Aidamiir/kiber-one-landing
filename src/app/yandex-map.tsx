'use client';

import { useEffect } from 'react';

const YandexMap = () => {
	useEffect(() => {
		if (typeof window !== 'undefined' && !window.ymapsLoaded) {
			const script = document.createElement('script');
			script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
			script.type = 'text/javascript';
			script.onload = () => {
				if (window.ymaps) {
					window.ymaps.ready(init);
				}
			};
			document.body.appendChild(script);
			window.ymapsLoaded = true;
		}

		function init() {
			if (!document.getElementById('yandex-map')) return;

			if (!window.map) {
				const map = new window.ymaps.Map('yandex-map', {
					center: [44.880788, 40.887349],
					zoom: 9,
				});
				window.map = map;

				const placemark1 = new window.ymaps.Placemark([44.880788, 40.587349], {
					hintContent: 'Курганинск, Комсомольская 87Б',
					balloonContent: 'Адрес: Комсомольская 87Б',
				});
				map.geoObjects.add(placemark1);

				const placemark2 = new window.ymaps.Placemark([44.999057, 41.136561], {
					hintContent: 'Армавир, Халтурина 66',
					balloonContent: 'Адрес: Халтурина 66',
				});
				map.geoObjects.add(placemark2);

				const placemark3 = new window.ymaps.Placemark([44.997139, 41.127650], {
					hintContent: 'Армавир, Мира 24Б',
					balloonContent: 'Адрес: Мира 24Б',
				});
				map.geoObjects.add(placemark3);
			}
		}
	}, []);

	return <div id="yandex-map" style={{ width: '100%', height: '400px' }}></div>;
};

export default YandexMap;

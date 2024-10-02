interface YMaps {
	Map: new (container: string, options?: YMapOptions) => YMap;
	Placemark: new (coordinates: number[], properties?: YPlacemarkProperties) => YPlacemark;
	ready: (callback: () => void) => void;
}

interface YMap {
	geoObjects: {
		add: (placemark: YPlacemark) => void;
	};
}

interface YMapOptions {
	center?: number[];
	zoom?: number;
}

interface YPlacemarkProperties {
	hintContent?: string;
	balloonContent?: string;
}

declare global {
	interface Window {
		map: YMap | undefined;
		ymaps: YMaps;
		ymapsLoaded: boolean;
	}
}

export {};

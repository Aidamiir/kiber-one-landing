'use client'

import { useEffect } from 'react'
import { ym } from 'next-yandex-metrica';
import { usePathname, useSearchParams } from 'next/navigation'

export default function YandexMetrika() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const url = `${pathname}?${searchParams}`
		ym(98511220, 'hit', url);

	}, [pathname, searchParams])

	return null
}
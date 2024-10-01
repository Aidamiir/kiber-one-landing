import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
	try {
		const { name, number } = await req.json();

		const date = new Date();
		const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1)
			.toString()
			.padStart(2, '0')}.${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes()
			.toString()
			.padStart(2, '0')}`;

		const message = `Новая заявка!\n\nФИО: ${name}\nТелефон: ${number}\nДата: ${formattedDate}`;

		const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				text: message,
			}),
		});

		if (!response.ok) {
			new Error(`Ошибка при отправке сообщения: ${response.statusText}`);
		}

		const responseData = await response.json();

		return NextResponse.json({ success: true, data: responseData });
	}
	catch (e) {
		const error = e as { message?: string };
		console.error('Произошла ошибка при отправке данных', error);

		return NextResponse.json({ success: false, error: error.message }, { status: 500 });
	}
}

'use client';

import { useContext, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { ym } from 'next-yandex-metrica';

import { Button } from '@/shared/ui/button';
import { PopupContext } from '@/providers';

interface FormDto {
	name: string;
	number: string;
}

export const ContactUsForm = ({ className }: { className?: string }) => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm<FormDto>({ mode: 'onChange' });
	const { closePopup } = useContext(PopupContext);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSave: SubmitHandler<FormDto> = async ({ name, number }) => {
		setIsSubmitting(true);

		const toastId = toast.info('Отправка сообщения...', { autoClose: false });

		try {
			const response = await fetch('/api/send-telegram', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, number }),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				toast.update(toastId, {
					render: 'Сообщение успешно отправлено!',
					type: 'success',
					autoClose: 3000,
				});
				ym(98511220, 'reachGoal', 'form');
			}
			else {
				toast.update(toastId, {
					render: `Ошибка при отправке сообщения: ${result.error}`,
					type: 'error',
					autoClose: 3000,
				});
			}
		}
		catch (error) {
			toast.update(toastId, {
				render: `Ошибка: ${error}`,
				type: 'error',
				autoClose: 3000,
			});
		}
		finally {
			setIsSubmitting(false);
			closePopup(null, true);
			reset({ name: '', number: '' });
		}
	};

	return (
		<form className={`flex flex-col gap-4 bg-white p-8 rounded-3xl ${className}`} onSubmit={handleSubmit(onSave)}>
			<fieldset className="flex flex-col gap-2">
				<label htmlFor="name">ФИО</label>
				<input
					className="p-4 rounded-xl bg-gray-200"
					type="text"
					id="name"
					placeholder="Введите ФИО"
					{...register('name', { required: 'ФИО обязательно' })}
					disabled={isSubmitting} // Отключаем ввод при отправке
				/>
				{errors.name && (
					<span className="text-red-500 text-sm">{errors.name.message}</span>
				)}
			</fieldset>

			<fieldset className="flex flex-col gap-2">
				<label htmlFor="number">Номер</label>
				<InputMask
					mask="+7 (999) 999-99-99"
					alwaysShowMask={false}
					className="p-4 rounded-xl bg-gray-200"
					id="number"
					placeholder="+7 (987) 654-32-10"
					{...register('number', {
						required: 'Номер обязателен',
						pattern: {
							value: /^\+7 \((9\d{2})\) \d{3}-\d{2}-\d{2}$/,
							message: "Некорректно введен номер телефона"
						},
					})}
					disabled={isSubmitting}
				/>
				{errors.number && (
					<span className="text-red-500 text-sm">{errors.number.message}</span>
				)}
			</fieldset>

			<Button type="submit" disabled={isSubmitting}>
				{isSubmitting ? 'Отправка...' : 'Отправить'}
			</Button>
		</form>
	);
};

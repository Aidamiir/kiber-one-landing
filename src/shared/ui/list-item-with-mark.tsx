import { type ReactNode } from 'react';
import Image from 'next/image';
import { Text } from '@/shared/ui';

export const ListItemWithMark = ({ children }: { children: ReactNode }) => {
	return (
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

			<Text>{children}</Text>
		</div>
	);
};
import { DetailedHTMLProps, HTMLAttributes, type ReactNode } from 'react';

type ButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	children: ReactNode;
	type?: 'button' | 'submit' | 'reset';
	design?: 'default' | 'bordered';
	disabled?: boolean;
};

export const Button = ({ children, design = 'default', type = 'button', disabled, ...rest }: ButtonProps) => {
	return (
		<button
			className={`px-8 py-4 rounded-[30px] max-lg:text-sm shadow-lg font-semibold active:scale-95 transition ${
				design === 'default' ? "active:bg-primaryActive bg-primary hover:bg-primaryHover" : ''
			} ${design === 'bordered' ? 'bg-white border-2 border-solid border-black hover:bg-black hover:text-white' : ' '} 
			${disabled ? "opacity-60 pointer-events-none" : ""}`}
			type={type}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
};

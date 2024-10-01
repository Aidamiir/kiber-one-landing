import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

import React from "react";
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';

import { Providers } from '@/providers';
import { fetchData } from "@/server_actions";
import { ContactUsPopup, Footer, Header } from '@/widgets';

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const { metadata } = await fetchData();

	return (
		<html lang="ru" className={inter.className}>
		<head>
			<meta name="description" content={metadata.description}/>
			<meta name="keywords" content={metadata.keywords}/>
			<title>{metadata.title}</title>
			<link rel="icon" href="/img/favicon.png" type="image/png"/>
		</head>
		<body className="flex flex-col bg-gray-100">
		<Providers>
			<Header/>
			<main className="flex-auto">
				{children}
				<ContactUsPopup/>
				<ToastContainer position="top-center"/>
			</main>
			<Footer/>
		</Providers>
		</body>
		</html>
	);
}

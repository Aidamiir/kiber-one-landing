import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

import React from "react";
import Script from 'next/script';
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
		<body className="relative flex flex-col bg-gray-100">
		<Providers>
			<Header/>
			<main className="flex-auto">
				{children}
				<ContactUsPopup/>
				<ToastContainer position="top-center"/>
			</main>
			<Footer/>
		</Providers>

		<Script id="metrika-counter" strategy="afterInteractive">
			{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(98511220, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
			}
		</Script>
		</body>
		</html>
	);
}

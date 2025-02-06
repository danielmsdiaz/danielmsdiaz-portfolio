"use client"

import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import { Outfit } from 'next/font/google';

//components
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeProvider from "@/components/ThemeProvider";

import i18n from "@/i18/i18"
import { I18nextProvider } from "react-i18next";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <title>Portfólio Daniel Diaz</title>
        <meta name="description" content="Bem-vindo(a) ao meu portfólio!" />

        <meta property="og:title" content="Portfólio Daniel Diaz" />
        <meta property="og:description" content="Confira meu portfólio e meus projetos!" />
        <meta property="og:image" content="https://danielmsdiaz-portfolio.vercel.app/preview/preview.png" />
        <meta property="og:url" content="https://danielmsdiaz-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfólio Daniel Diaz" />
        <meta name="twitter:description" content="Confira meu portfólio e meus projetos!" />
        <meta name="twitter:image" content="https://danielmsdiaz-portfolio.vercel.app/preview/preview.png" />
        <link rel="icon" href="/icon.png" />

        <meta name="theme-color" content="#0d1117" />
      </head> */}

      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <I18nextProvider i18n={i18n}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </I18nextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

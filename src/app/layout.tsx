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
      <head>
        <title>Daniel Diaz | Desenvolvedor Fullstack</title>
        <meta name="description" content="Desenvolvedor Fullstack apaixonado por tecnologia. Explore meus projetos e entre em contato!" />

        <meta property="og:title" content="Daniel Diaz | Desenvolvedor Fullstack" />
        <meta property="og:description" content="Confira meu portfólio e conheça mais sobre meu trabalho como desenvolvedor Fullstack." />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:url" content="https://danielmsdiaz-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel Diaz | Desenvolvedor Fullstack" />
        <meta name="twitter:description" content="Desenvolvedor Fullstack apaixonado por tecnologia. Explore meus projetos!" />
        <meta name="twitter:image" content="/preview/preview.png" />
        <link rel="icon" href="/icon.png" />

        <meta name="theme-color" content="#0d1117" />
      </head>

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

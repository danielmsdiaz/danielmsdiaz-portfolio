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

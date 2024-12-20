"use client"

import ThemeToggler from "./ThemeToggler"
import LangToggler from "./LangToggler"
import Logo from "./Logo"
import Nav from "./Nav"
import MobileNav from "./mobile/MobileNav"
import { useEffect, useState } from "react"

const Header = () => {
  const [header, setHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${header ? `py-5 bg-white shadow-lg dark:bg-accent` : `py-5 dark:bg-transparent`} sticky top-0 z-30 transition-all`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary dark:hover:text-darkMode transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full" />
            <div className="flex gap-x-3 h-full">
              <LangToggler />
              <ThemeToggler />
            </div>
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

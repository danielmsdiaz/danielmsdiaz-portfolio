"use client"

import ThemeToggler from "./ThemeToggler"
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
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <header className={`${header ? `py-4 bg-white shadow-lg dark:bg-accent` : `py-6 dark:bg-transparent`} sticky top-0 z-30 transition-all`}>
      <div className="container mx-auto bg-color">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full" />
            <ThemeToggler />
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
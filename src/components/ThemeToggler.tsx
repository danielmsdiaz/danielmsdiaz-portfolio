"use client"

import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

const ThemeToggler = () => {
    const { theme , setTheme } = useTheme();

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div>
            <Button variant="outline" size="icon" onClick={handleThemeToggle} className="rounded-full">
                <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"/>
            </Button>
        </div>
    )
}

export default ThemeToggler
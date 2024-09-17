import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useState } from "react"

const ThemeToggler = () => {
    const [themes, setTheme] = useState();
    return (
        <div>
            <Button>
                <MoonIcon />
                <SunIcon />
            </Button>
        </div>
    )
}

export default ThemeToggler
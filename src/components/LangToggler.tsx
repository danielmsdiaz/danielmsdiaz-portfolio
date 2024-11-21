"use client"

import { Button } from "./ui/button"
import { US, BR } from 'country-flag-icons/react/3x2'
import { useTranslation } from "react-i18next"

const LangToggler = () => {

    const [t, i18n] = useTranslation("global");
    const handleChangeLanguage = () => {
        i18n.language == "en" ? i18n.changeLanguage("pt") : i18n.changeLanguage("en");
    }

    return (
        <div>
            <Button
                variant="outline"
                onClick={handleChangeLanguage}
                size="icon"
                className="relative rounded-full"
            >
                <US className={`h-[1.2rem] w-[1.2rem] absolute transition-transform ${i18n.language === "en" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
                <BR className={`h-[1.2rem] w-[1.2rem] absolute transition-transform ${i18n.language === "pt" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
            </Button>
        </div>
    )
}

export default LangToggler
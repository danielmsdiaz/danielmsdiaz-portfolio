"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"
import { RiTodoFill, RiBriefcase4Fill, RiTeamFill, RiArrowDownSLine } from "react-icons/ri"
import Socials from "./Socials"
import DevImg from "./DevImg"
import HeroStart from "./HeroAnimation"

import { saveAs } from "file-saver"

//translations
import { useTranslation } from "react-i18next"
import { blob } from "stream/consumers"

const Hero = () => {
    const [t, i18n] = useTranslation("global");
    const saveFile = () => {
        saveAs(i18n.language == "pt" ? "/hero/CV - DANIEL - PT.pdf" : "/hero/CURRICULO - DANIEL - ING.pdf", i18n.language == "pt" ? "CV - DANIEL - PT.pdf" : "CURRICULO - DANIEL - ING.pdf");
    };

    return (
        <section className="py-12 xl:py-24 h-[100vh] xl:h-[84vh] xl:pt-28 dark:bg-none">
            <div className="container mx-auto px-4">
                <div className="flex justify-between gap-x-8">
                    <div className="flex flex-col max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <HeroStart />
                        <h1 className="h1 mt-5 sm:mt-0">{t("hero.message")}</h1>
                        <p className="mt-5 subtitle max-w-[300px] xl:max-w-[600px] mx-auto xl:mx-0">
                            {t("hero.subtitle")}
                        </p>
                        <div className="flex flex-col gap-y-4 lg:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-4 text-base px-6 min-w-[170px]">
                                    {t("hero.contact")} <Send size={18} />
                                </Button>
                            </Link>
                            <Button onClick={saveFile} variant="secondary" className="gap-x-2 text-base min-w-[170px]">
                                {t("hero.download")} <Download size={18} />
                            </Button>
                        </div>
                        <Socials />
                    </div>
                    <div className="hidden lg:flex relative">
                        <div className="bg-hero_shape_light_2 dark:bg-hero_shape_dark_2 bg-no-repeat w-[500px] h-[500px] -top-1 -right-3">
                            <DevImg />
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary dark:text-darkMode" />
                </div>
            </div>
        </section>
    )
}

export default Hero
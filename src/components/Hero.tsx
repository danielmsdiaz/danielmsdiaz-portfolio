"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"
import { RiTodoFill, RiBriefcase4Fill, RiTeamFill, RiArrowDownSLine } from "react-icons/ri"
import Socials from "./Socials"
import DevImg from "./DevImg"
import HeroStart from "./HeroAnimation"

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 dark:bg-none">
            <div className="container mx-auto px-4">
                <div className="flex justify-between gap-x-8">
                    <div className="flex flex-col max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <HeroStart/>
                        <h1 className="h1">Hello, my name is Daniel Diaz</h1>
                        <p className="mt-4 subtitle max-w-[400px] mx-auto xl:mx-0">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-4 text-base px-6">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant="secondary" className="gap-x-2 text-base">
                                Download CV <Download size={18} />
                            </Button>
                        </div>
                        <Socials />
                    </div>
                    <div className="hidden xl:flex relative">
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
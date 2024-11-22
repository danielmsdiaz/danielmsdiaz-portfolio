"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import ProjectCard from "@/components/ProjectCard"
import { Swiper, SwiperSlide } from "swiper/react"
import Alert from "@/components/Alert"
import { useState } from "react"

//translation
import { useTranslation } from "react-i18next"

export interface Project {
    name: string,
    description: string,
    imgPath: string,
    stack: string[],
    status: string
}


const Projects = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [t, i18n] = useTranslation("global");

    const projectsList: Project[] = [
        {
            name: "Raíssa Sushi",
            description: t("projects.sushi.description"),
            imgPath: "/projects/sushi_light.png",
            stack: ["NextJs", "Tailwindcss", "Shadcn"],
            status: t("projects.sushi.status"),
        },
        {
            name: t("projects.imc.name"),
            description: t("projects.imc.description"),
            imgPath: "/projects/imc.png",
            stack: ["Reactjs"],
            status: t("projects.imc.status"),
        },
        {
            name: t("projects.workout.name"),
            description: t("projects.workout.description"),
            imgPath: "/projects/train.png",
            stack: ["Nextjs", "Tailwindcss", "NodeJs", "Express", "postgres"],
            status: t("projects.workout.status"),
        },
        {
            name: "Nunes Sports",
            description: t("projects.nunes.description"),
            imgPath: "/projects/sports.png",
            stack: ["ReactJs", "Tailwindcss", "PrimeReact UI"],
            status: t("projects.nunes.status"),
        }
    ];

    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[500px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">{t("projects.title")}</h2>
                    <p className="subtitle mb-8">{t("projects.subtitle")}</p>
                    <Link href="/projects">
                        <Button onClick={(e) => {
                            setShowAlert(true);
                            e.preventDefault();
                        }}>{t("projects.button")}</Button>
                    </Link>
                </div>
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 xl:mr-10">
                    <Swiper className="min-h-[500px] rounded-xl" slidesPerView={1} breakpoints={{
                        960: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {projectsList.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard index={index} item={item} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            {showAlert &&
                <Alert onClose={() => { setShowAlert(false) }} />
            }
        </section>
    )
}

export default Projects
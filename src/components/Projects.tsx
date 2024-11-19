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

export interface Project {
    name: string,
    description: string,
    imgPath: string,
    stack: string[],
    status: "COMPLETED" | "NOT_COMPLETED" | "IN_PROGRESS",
}

const projectsList: Project[] = [
    {
        name: "Raíssa Sushi",
        description: "teste teste tetet etete",
        imgPath: "/projects/sushi_light.png",
        stack: ["NextJs", "Tailwindcss", "Shadcn"],
        status: "IN_PROGRESS",
    },
    {
        name: "IMC Calculator",
        description: "teste teste tetet etete",
        imgPath: "/projects/imc.png",
        stack: ["Reactjs"],
        status: "IN_PROGRESS",
    },
    {
        name: "Workout Gerenciator",
        description: "teste teste tetet etete",
        imgPath: "/projects/train.png",
        stack: ["Nextjs", "Tailwindcss", "NodeJs", "Express", "postgres"],
        status: "NOT_COMPLETED",
    },
    {
        name: "Nunes Sports",
        description: "teste teste tetet etete",
        imgPath: "/projects/sports.png",
        stack: ["ReactJs", "Tailwindcss", "PrimeReact UI"],
        status: "COMPLETED",
    }
];

const Projects = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">Teste Teste Teste Teste TesteTeste Teste Teste Teste</p>
                    <Link href="/projects">
                        <Button onClick={(e) => {
                            setShowAlert(true);
                            e.preventDefault();
                        }}>All projects</Button>
                    </Link>
                </div>
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 xl:mr-10">
                    <Swiper className="h-[440px] rounded-xl" slidesPerView={1} breakpoints={{
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
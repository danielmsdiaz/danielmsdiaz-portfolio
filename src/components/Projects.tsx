"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import ProjectCard from "@/components/ProjectCard"
import { Swiper, SwiperSlide } from "swiper/react"

const Projects = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">Teste Teste Teste Teste TesteTeste Teste Teste Teste</p>
                    <Link href="/projects">
                        <Button>All projects</Button>
                    </Link>
                </div>
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 xl:mr-10">
                    <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {Array(6).fill(0).map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard index={index}/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Projects
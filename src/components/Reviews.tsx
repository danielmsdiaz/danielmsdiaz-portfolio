"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import NewReview from "./NewReview";
import { Button } from "./ui/button"

export interface Review {
    name: string,
    role: string,
    message: string,
    git: string,
    linkedin: string,
}

const reviewArray: Review[] = [
    {
        name: "Daniel",
        role: "Estudante",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        git: "https://github.com/felipealvesdev",
        linkedin: "https://www.linkedin.com/in/danielmsdiaz/"
    },
    {
        name: "Raissa",
        role: "Adm",
        message: "Meu queridinho",
        git: "https://github.com/felipealvesdev",
        linkedin: "https://www.linkedin.com/in/danielmsdiaz/"
        
    },
    {
        name: "Hector",
        role: "Pai",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        git: "https://github.com/felipealvesdev",
        linkedin: "https://www.linkedin.com/in/danielmsdiaz/"
    },
    {
        name: "Simone",
        role: "Mãe",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        git: "https://github.com/felipealvesdev",
        linkedin: "https://www.linkedin.com/in/danielmsdiaz/"
    }
]

const Reviews = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="section-title mb-6 text-center mx-auto">
                        Reviews
                    </h2>
                    <Button className="lg:hidden" onClick={() => {alert("asd")}}>Create Review</Button>
                </div>
                <div className="flex items-start gap-4">
                    <div className="hidden lg:flex w-[330px] justify-center h-[480px]">
                        <NewReview />
                    </div>
                    <Swiper
                        className="w-full rounded-xl h-[380px]"
                        slidesPerView={1}
                        spaceBetween={20}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1000: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {reviewArray.map((item, index) => (
                            <SwiperSlide key={index} className="w-1/4">
                                <NewReview item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Reviews;

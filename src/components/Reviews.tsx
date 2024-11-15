"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import NewReview from "./NewReview";

import { Button } from "./ui/button"

const Reviews = () => {
    return (
        <section className="mb-5">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="section-title mb-8 text-center mx-auto">
                        Reviews
                    </h2>
                    <Button className="lg:hidden" onClick={() => {alert("asd")}}>Create Review</Button>
                </div>
                <div className="flex items-start gap-4">
                    <div className="hidden lg:flex w-[330px] justify-center h-[480px]">
                        <NewReview />
                    </div>
                    <Swiper
                        className="h-[480px] w-full"
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
                        {Array(6).fill(0).map((item, index) => (
                            <SwiperSlide key={index} className="w-1/4">
                                <NewReview />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Reviews;

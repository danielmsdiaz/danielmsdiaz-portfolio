"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import NewReview from "./NewReview";
import { Button } from "./ui/button";
import RevSkeleton from "./RevSkeleton";
import Modal from "@/components/Modal";

//translator
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export interface Review {
    id: number;
    name: string;
    role: string;
    review: string;
    github: string;
    linkedin: string;
    createdAt: any;
}

const Reviews = () => {
    const [t, i18n] = useTranslation("global");
    const [reviews, setReviews] = useState<Review[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true); 

    const handleNewReview = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const fetchReviews = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/reviews", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="section-title mb-6 text-center mx-auto">
                        {t("reviews.title")}
                    </h2>
                    <Button className="lg:hidden" onClick={handleNewReview}>
                        Create Review
                    </Button>
                </div>
                <div className="flex items-start gap-4 justify-center">
                    <div className="hidden lg:flex justify-center w-1/3">
                        <NewReview setReviews={setReviews} />
                    </div>
                    {isLoading ? (
                        <RevSkeleton />
                    ) : reviews.length > 0 && (
                        <Swiper
                            className="w-full rounded-xl h-[380px]"
                            slidesPerView={1}
                            spaceBetween={20}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                1000: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {reviews.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <NewReview setReviews={setReviews} item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
                {showModal && (
                    <Modal setReviews={setReviews} handleCloseModal={handleCloseModal} />
                )}
            </div>
        </section>
    );
};

export default Reviews;

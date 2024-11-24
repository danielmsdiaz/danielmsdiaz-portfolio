"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Modal from "@/components/Modal";
import { Review } from "./Reviews";
import Image from "next/image";
import Socials from "./Socials"

//translator
import { useTranslation } from "react-i18next";

const NewReview = ({ item, setReviews }: { item?: Review, setReviews: React.Dispatch<React.SetStateAction<Review[]>> }) => { 
    const [showModal, setShowModal] = useState<boolean>(false);
    const [t, i18n] = useTranslation("global");

    const handleNewReview = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            {item ? (
                <Card className="text-center h-[330px] flex flex-col items-start gap-y-6">
                    <CardHeader className="flex flex-row w-full justify-start gap-x-2 items-center">
                        <Image src="/review/review-profile.png" alt="" width={60} height={60} />
                        <div className="flex flex-col items-start text-center w-full">
                            <CardTitle className="font-semibold max-w-[200px] truncate overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</CardTitle>
                            <CardDescription className="text-sm max-w-[200px] truncate overflow-hidden text-ellipsis whitespace-nowrap">{item.role}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="text-left h-[200px] overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-darkMode scrollbar-track-slate-300 mr-2">
                        {item.review}
                    </CardContent>
                    <CardFooter className="mx-auto">
                        <Socials item={item} />
                    </CardFooter>
                </Card>
            ) : (
                <Card className="p-4 text-center h-[330px] flex flex-col items-center w-full">
                    <CardHeader>
                        <CardTitle>{t("reviews.new.title")}</CardTitle>
                        <CardDescription>{t("reviews.new.subtitle")}</CardDescription>
                    </CardHeader>

                    <CardContent
                        onClick={handleNewReview}
                        className="mt-2 flex flex-col items-center flex-grow justify-around cursor-pointer hover:scale-105 transition-all"
                    >
                        <PlusCircledIcon className="w-12 h-12 text-primary dark:text-darkMode mb-2" />
                        <span className="text-primary dark:text-darkMode font-medium">{t("reviews.new.plus")}</span>
                    </CardContent>

                    <CardFooter>
                        <p className="text-gray-500 text-sm">{t("reviews.new.footer")}</p>
                    </CardFooter>
                </Card>
            )}
            {showModal && <Modal setReviews={setReviews} handleCloseModal={handleCloseModal} />}
        </>

    );
};

export default NewReview;

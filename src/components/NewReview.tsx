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

const NewReview = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleNewReview = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <Card className="p-4 text-center h-[87%] flex flex-col items-center">
                <CardHeader>
                    <CardTitle>Your Review</CardTitle>
                    <CardDescription>Share your thoughts about me</CardDescription>
                </CardHeader>

                <CardContent onClick={handleNewReview} className="mt-2 flex flex-col items-center flex-grow justify-around cursor-pointer hover:scale-105 transition-all">
                    <PlusCircledIcon className="w-12 h-12 text-primary dark:text-darkMode mb-2" />
                    <span className="text-primary dark:text-darkMode font-medium">Start Review</span>
                </CardContent>

                <CardFooter>
                    <p className="text-gray-500 text-sm">Thank You!</p>
                </CardFooter>
            </Card>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}/>
            )}
        </>
    );
};

export default NewReview;

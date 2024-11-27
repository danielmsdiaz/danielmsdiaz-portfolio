"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Review } from "@/types/reviews";

//translator
import { useTranslation } from "react-i18next";

const Modal = ({ handleCloseModal}: { handleCloseModal: () => void}) => {
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        github: "",
        role: "",
        linkedin: "",
        review: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        role: false,
        review: false
    });

    const validateForm = () => {
        const newErrors = {
            name: !formData.name.trim(),
            role: !formData.role.trim(),
            review: !formData.review.trim(),
        };

        setErrors(newErrors);

        return !Object.values(newErrors).includes(true);
    };

    const [loading, setLoading] = useState(false);

    const [t, i18n] = useTranslation("global");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        setLoading(true);

        if (!validateForm()) {
            return setLoading(false);
        }

        try {
            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorMsg = await response.json();
                if (errorMsg == "Comentário inapropriado") {
                    toast({
                        title: t("toast.titleError"),
                        variant: "destructive",
                        description: t("toast.descriptionError"),
                    })
                    return handleCloseModal();
                }
                return;
            }

            toast({
                title: t("toast.title"),
                description: t("toast.description"),
            })

            //const newReview = await response.json();
            //setReviews((prevReviews: any) => [...prevReviews, newReview]);

        }
        catch (err: any) {
            console.log(err);
        }
        finally {
            return handleCloseModal();
        }
    };

    return (
        <Dialog open onOpenChange={handleCloseModal}>
            <DialogContent className="max-w-[450px] sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>{t("form.title")}</DialogTitle>
                    <DialogDescription>{t("form.subtitle")}</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-3 md:grid md:grid-cols-2 md:justify-items-stretch md:gap-y-2">
                        <div className="flex items-center gap-x-4">
                            <Label htmlFor="name" className="text-left">
                                {t("form.name.label")}
                            </Label>
                            <Input
                                id="name"
                                placeholder={t("form.name.placeholder")}
                                className={`col-span-3 ${errors.name ? "border-red-500" : ""}`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex items-center gap-x-2 md:grid md:grid-cols-4 md:items-center md:gap-4">
                            <Label htmlFor="github" className="text-right">
                                GitHub
                            </Label>
                            <Input
                                id="github"
                                placeholder={t("form.git.placeholder")}
                                className="col-span-3"
                                value={formData.github}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`flex items-center ${i18n.language == "en" ? "gap-x-6" : "gap-x-3"}`}>
                            <Label htmlFor="role" className="text-left">
                                {t("form.role.label")}
                            </Label>
                            <Input
                                id="role"
                                placeholder={t("form.role.placeholder")}
                                className={`col-span-3 ${errors.role ? "border-red-500" : ""}`}
                                value={formData.role}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex items-center gap-x-2 md:grid md:grid-cols-4 md:items-center md:gap-4">
                            <Label htmlFor="linkedin" className="text-right">
                                LinkedIn
                            </Label>
                            <Input
                                id="linkedin"
                                placeholder={t("form.lin.placeholder")}
                                className="col-span-3"
                                value={formData.linkedin}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="review" className="text-right">
                            {t("form.review.label")}
                        </Label>
                        <Textarea
                            id="review"
                            placeholder={t("form.review.placeholder")}
                            className={`col-span-3 mt-2 ${errors.review ? "border-red-500" : ""}`}
                            value={formData.review}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit} disabled={loading}>
                        {t("form.button")}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Modal;

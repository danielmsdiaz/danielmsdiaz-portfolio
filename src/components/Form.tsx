"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";

//translation
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Form = () => {
    const [t, i18n] = useTranslation("global");
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const newErrors = {
            name: !formData.name.trim(),
            email: !formData.email.trim(),
            message: !formData.message.trim(),
        };

        setErrors(newErrors);
        return !Object.values(newErrors).includes(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    return toast({
                        title: t("email.titleError"),
                        variant: "destructive",
                        description: t("email.descriptionError")
                    })
                }

                toast({
                    title: t("email.title"),
                    description: t("email.description")
                })

            } catch (err: any) {
                // setError(err.message);
            }
        }
    };

    return (
        <form className="mb-[36px]" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-4">
                <div className="relative flex items-center">
                    <Input
                        type="text"
                        id="name"
                        placeholder={t("contactPage.name")}
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-red-500" : ""}
                    />
                    <User className="absolute right-6" size={20} />
                </div>
                <div className="relative flex items-center">
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : ""}
                    />
                    <MailIcon className="absolute right-6" size={20} />
                </div>
                <div className="relative flex items-center">
                    <Textarea
                        id="message"
                        placeholder={t("contactPage.message")}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-red-500" : ""}
                    />
                    <MessagesSquare className="absolute right-6" size={20} />
                </div>
                <Button type="submit" className="flex items-center rounded-full mx-auto w-1/2 xl:w-1/4 py-2">
                    {t("contactPage.button")}
                    <ArrowRightIcon className="ml-1" size={20} />
                </Button>
            </div>
        </form>
    );
};

export default Form;

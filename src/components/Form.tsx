"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react"

//translation
import { useTranslation } from "react-i18next"

const Form = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <form className="mb-[36px]">
            <div className="flex flex-col gap-y-4">
                <div className="relative flex items-center">
                    <Input type="name" id="name" placeholder={t("contactPage.name")} />
                    <User className="absolute right-6" size={20} />
                </div>
                <div className="relative flex items-center">
                    <Input type="email" id="email" placeholder="Email" />
                    <MailIcon className="absolute right-6" size={20} />
                </div>
                <div className="relative flex items-center">
                    <Textarea id="name" placeholder={t("contactPage.message")} />
                    <MessagesSquare className="absolute right-6" size={20} />
                </div>
                <Button className="flex items-center rounded-full mx-auto w-1/2 xl:w-1/4 py-2">{t("contactPage.button")}<ArrowRightIcon className="ml-1" size={20}/></Button>
            </div>
        </form>
    )
}

export default Form
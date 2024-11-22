"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

//translator
import { useTranslation } from "react-i18next";


const Modal = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
    const [t, i18n] = useTranslation("global");

    return (
        <Dialog open onOpenChange={handleCloseModal}>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>{t("form.title")}</DialogTitle>
                    <DialogDescription>
                        {t("form.subtitle")}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-y-4">
                    <div className="grid grid-cols-2 justify-items-stretch gap-y-2">
                        <div className="flex items-center gap-x-4">
                            <Label htmlFor="name" className="text-left">
                                {t("form.name.label")}
                            </Label>
                            <Input
                                id="name"
                                placeholder={t("form.name.placeholder")}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="github" className="text-right">
                                GitHub
                            </Label>
                            <Input
                                id="github"
                                placeholder={t("form.git.placeholder")}
                                className="col-span-3"
                            />
                        </div>
                        <div className={`flex items-center ${i18n.language == "en" ? "gap-x-6" : "gap-x-3" }`}>
                            <Label htmlFor="role" className="text-left">
                                {t("form.role.label")}
                            </Label>
                            <Input
                                id="role"
                                placeholder={t("form.role.placeholder")}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="linkedin" className="text-right">
                                LinkedIn
                            </Label>
                            <Input
                                id="linkedin"
                                placeholder={t("form.lin.placeholder")}
                                className="col-span-3"
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
                            className="col-span-3 mt-2"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={() => { alert("sda") }} type="submit">{t("form.button")}</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Modal
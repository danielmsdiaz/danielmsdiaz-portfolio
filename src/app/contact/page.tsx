"use client"

import Form from "@/components/Form"
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"
import Image from "next/image"

//translation
import { useTranslation } from "react-i18next"

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-col justify-around gap-y-9">
          <div className="flex flex-col text-center xl:text-left items-center xl:items-start">
            <div className="flex items-center gap-x-2 text-primary text-lg dark:text-darkMode mb-2">
              <span className="w-[20px] h-[2px] bg-primary dark:bg-darkMode"></span>
              <div>{t("contactPage.hello")}</div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col xl:w-1/2 w-full items-center xl:items-start">
                <h1 className="h1 max-w-xl my-7">{t("contactPage.title")}</h1>
                <p className="subtitle max-w-[400px]">{t("contactPage.subtitle")}</p>
              </div>
              <div className="hidden xl:flex flex-1 justify-center">
                <Image src="/contact/screen.png" alt="" width={390} height={300} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-14 xl:grid grid-cols-2">
            <div className="flex flex-col gap-10 xl:gap-y-14">
              <div className="flex items-center gap-x-4">
                <MailIcon size={18} className="text-primary dark:text-darkMode" />
                <div>dmachadosdiaz@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-4">
                <HomeIcon size={18} className="text-primary dark:text-darkMode" />
                <div>Recife/PE - Brazil</div>
              </div>
              <div className="flex items-center gap-x-4">
                <PhoneCall size={18} className="text-primary dark:text-darkMode" />
                <div>+55 (81) 98686-1345</div>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
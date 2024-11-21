"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

//translation
import { useTranslation } from 'react-i18next';

const Cta = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <section className="py-24">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8">{t("cto.message")}</h2>
                <Link href="/contact">
                    <Button>{t("cto.button")}</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta
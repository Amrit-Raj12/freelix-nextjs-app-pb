"use client"

import Image from "next/image"
import React, { useState } from "react"
import TV from "../img/image-1.jpg"
import { useTranslation } from "next-i18next"

const EnjoyPage = () => {
  const { t } = useTranslation("common")
  const [menu, setMenu] = useState(false)

  return (
    <div className="flex flex-col items-center gap-[50px] justify-center bg-black p-4 sm:flex-row">
      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0">
          <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                role="img"
                aria-label="people smiling"
                className="mx-auto"
                src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"
                alt="people smiling"
              />
            </div>
            <div role="contentinfo" className="w-full lg:w-1/2 h-full">
              <p className="text-red-700 uppercase text-xl mb-4">
                {t("OUR INTRODUCTION")}
              </p>
              <h1 className="text-white text-4xl lg:text-6xl font-black mb-8">
                {t(
                  "Discover Chillaxing Cinema: Redefine Entertainment with Us"
                )}
                !
              </h1>
              <p className="text-gray-500 font-regular mb-8">{t("joinUs")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnjoyPage

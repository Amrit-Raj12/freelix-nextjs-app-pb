import Image from "next/image"
import React from "react"
import TV from "../img/image-1.jpg"
import { useTranslation } from "next-i18next"

const WatchPage = () => {
  const { t } = useTranslation("common")

  return (
    <div className="flex flex-col items-center gap-[50px] justify-center bg-black p-4 sm:flex-row">
      <div className="w-full sm:w-96 h-[300px] text-white flex items-center mt-6 text-center md:text-justify">
        <div>
          <p className="text-4xl font-bold text-white mb-4">
            {t("Watch everywhere.")}
          </p>

          <p className="text-xl text-white">
            {t(
              "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            )}
          </p>
        </div>
      </div>
      <div className="w-80 h-[300px] text-white flex items-center mt-4">
        <Image
          src={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          }
          alt="netflix"
          width={530}
          height={400}
        />
      </div>
    </div>
  )
}

export default WatchPage

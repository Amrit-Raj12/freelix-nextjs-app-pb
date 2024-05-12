import Image from "next/image"
import React from "react"
import TV from "../img/image-1.jpg"
import { useTranslation } from "next-i18next"

const DownloadPage = () => {
  const { t } = useTranslation("common")

  return (
    <div className="flex flex-col items-center gap-[50px] justify-center bg-black p-4 sm:flex-row">
      <div className="w-80 h-[300px] text-white flex items-center mt-6">
        <Image
          src={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          }
          alt="netflix"
          width={530}
          height={400}
        />
      </div>
      <div className="w-full sm:w-96 h-[300px] text-white flex items-center mt-6 text-center md:text-justify">
        <div>
          <p className="text-4xl font-bold text-white mb-4">
            {t("Download your shows to watch offline.")}
          </p>

          <p className="text-xl text-white">
            {t(
              "Save your favourites easily and always have Something to watch."
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DownloadPage

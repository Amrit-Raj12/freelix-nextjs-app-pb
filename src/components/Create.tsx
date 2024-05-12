import Image from "next/image"
import React from "react"
import TV from "../img/image-1.jpg"
import { useTranslation } from "next-i18next"

const CreatePage = () => {
  const { t } = useTranslation("common")

  return (
    <div className="flex flex-col items-center gap-[50px] justify-center bg-black p-4 sm:flex-row">
      <div className="w-80 h-[300px] text-white flex items-center mt-6">
        <Image
          src={
            "https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          }
          alt="netflix"
          width={530}
          height={400}
        />
      </div>
      <div className="w-full sm:w-96 h-[300px] text-white flex items-center mt-6 text-center md:text-justify">
        <div className="md:text-left">
          <p className="text-4xl font-bold text-white mb-4">
            {t("Create profiles for children.")}
          </p>
          {/* <p className="text-4xl font-bold text-white mb-4 md:hidden flex">
            Create profiles for children.
          </p> */}
          <p className="text-xl text-white">
            {t(
              "Send children on adventures with their favourite characters in a space made just for them-free with your membership."
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreatePage

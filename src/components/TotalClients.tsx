import React from "react"
import { useTranslation } from "next-i18next"

export default function TotalClient() {
  const { t } = useTranslation("common")
  return (
    <div className="dark:bg-gray-900">
      <div className="pb-10">
        <div className="mx-auto bg-gradient-to-l from-red-600 to-red-700 h-80">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <div className="mt-20">
                <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">
                  {t("By the numbers")}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-gray-900 shadow rounded-2xl">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold leading-10 text-center text-white">
                4000+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-red-600">
                {t("Movies")}
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-gray-900 shadow rounded-2xl">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold leading-10 text-center text-white">
                2000+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-red-600">
                {t("TV Shows")}
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-gray-900 shadow rounded-2xl">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold leading-10 text-center text-white">
                4000+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-red-600">
                {t("Animated")}
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-gray-900 shadow rounded-2xl">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold leading-10 text-center text-white">
                10,000+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-red-600">
                {t("Total")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

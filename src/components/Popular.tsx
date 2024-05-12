import React from "react"
import { useTranslation } from "next-i18next"

const Popular = () => {
  const { t } = useTranslation("common")
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div role="contentinfo" className="w-full lg:w-1/2 h-full mt-20 ml-20">
        <p className="text-red-700 uppercase text-xl mb-4">{t("Populars")}</p>
        <h1 className="text-white text-4xl lg:text-6xl font-black mb-8">
          {t("The Most Popular Movies To Watch")}!
        </h1>
      </div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          <div className=" relative">
            <div className=" relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full h-[420px]"
                src="https://w0.peakpx.com/wallpaper/71/226/HD-wallpaper-dune-2021-movie-poster.jpg"
                alt="A girl Posing Img"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className="font-medium text-base leading-4 bg-red-500 rounded py-3 w-full mt-2 text-white">
                  {t("Watch Now")}
                </button>
              </div>
            </div>
            <p className="text-center text-sm leading-5 text-white font-bold md:mt-6 mt-4">
              {t("Best movie of 2024")}
            </p>
          </div>
          <div className=" relative ">
            <div className=" relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full h-[420px]"
                src="https://resizing.flixster.com/ZG21srOlQ19778Sye-GZXGC8YVE=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26207394_b_v13_ab.jpg"
                alt="A girl Posing Img"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className="font-medium text-base leading-4 bg-red-500 rounded py-3 w-full mt-2 text-white">
                  {t("Watch Now")}
                </button>
              </div>
            </div>
            <p className="text-center text-sm leading-5 text-white font-bold md:mt-6 mt-4">
              {t("Best Series of 2024")}
            </p>
          </div>
          <div className=" relative ">
            <div className=" relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full h-[420px]"
                src="https://w0.peakpx.com/wallpaper/544/422/HD-wallpaper-prabhas-kalki-movie.jpg"
                alt="A girl Posing Img"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className="font-medium text-base leading-4 bg-red-500 rounded py-3 w-full mt-2 text-white">
                  {t("Watch Now")}
                </button>
              </div>
            </div>
            <p className="text-center text-sm leading-5 text-white font-bold md:mt-6 mt-4">
              {t("Best Bollywood of 2024")}
            </p>
          </div>
          <div className=" relative ">
            <div className=" relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full h-[420px]"
                src="https://images-na.ssl-images-amazon.com/images/I/91Z6JnuiehL.jpg"
                alt="A girl Posing Img"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className="font-medium text-base leading-4 bg-red-500 rounded py-3 w-full mt-2 text-white">
                  {t("Watch Now")}
                </button>
              </div>
            </div>
            <p className="text-center text-sm leading-5 text-white font-bold md:mt-6 mt-4">
              {t("Watch Now")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular

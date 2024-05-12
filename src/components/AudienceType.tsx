import React from "react"
import { useTranslation } from "next-i18next"
import { t } from "i18next"

interface AnimatedComponentProps {
  imageUrl: string
  alt: string
  title: string
}

const ImageCard: React.FC<AnimatedComponentProps> = ({
  imageUrl,
  alt,
  title,
}) => {
  return (
    <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 md:h-56 p-2 pt-6">
      <img
        src={imageUrl}
        alt={alt}
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-red-500 relative hover:cursor-pointer">
          {/* Play icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.75 14.75V5.25L14.5 10L7.75 14.75Z"
              clipRule="evenodd"
            />
          </svg>
          {/* Animated pulse effect */}
          <div className="absolute h-full w-full rounded-full border-4 border-red-300 animate-ping opacity-75"></div>
        </div>
      </div>
      <p className="text-white font-bold text-center mt-2">{title}</p>
    </div>
  )
}

const AudienceType = () => {
  const { t } = useTranslation("common")

  return (
    <div className="bg-black pb-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <ImageCard
            imageUrl="https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/back-view-of-creative-film-maker-working-on-a-movi-2021-08-27-17-08-20-utc-1.jpg"
            alt="Image 1"
            title={t("Family Movies")}
          />
          <ImageCard
            imageUrl="https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/back-view-of-creative-film-maker-working-on-a-movi-2021-08-27-17-08-20-utc-1.jpg"
            alt="Image 2"
            title={t("Teen Movies")}
          />
          <ImageCard
            imageUrl="https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/back-view-of-creative-film-maker-working-on-a-movi-2021-08-27-17-08-20-utc-1.jpg"
            alt="Image 3"
            title={t("Kids Movies")}
          />
          <ImageCard
            imageUrl="https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/back-view-of-creative-film-maker-working-on-a-movi-2021-08-27-17-08-20-utc-1.jpg"
            alt="Image 4"
            title={t("Anime")}
          />
        </div>
      </div>
    </div>
  )
}

export default AudienceType

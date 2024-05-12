import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import MobileSlider from "./MobileSlider"
import { imageBaseURl, imagePath, imageProtocol } from "@/util/constant"
import { useRouter } from "next/router"

type allGenresType = {
  allGenres: Array<string>
  sliderData: Record<string, any[]>
}

const MovieSlider: React.FC<allGenresType> = ({
  allGenres,
  sliderData,
}): JSX.Element => {
  const moviesArrayLength = 10
  const [numberOfSections, setNumberOfSections] = useState(0)

  const router = useRouter()

  useEffect(() => {
    setNumberOfSections(Math.floor(moviesArrayLength / 5))
    if (moviesArrayLength % 5 > 0) {
      setNumberOfSections((prev) => prev + 1)
    }
  }, [moviesArrayLength])

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props
    return (
      <div className="absolute left-5 top-0 -mx-4 h-full flex items-center text-red-400">
        <button className="prev-arrow bg-transparent" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
    )
  }

  const CustomNextArrow = (props: any) => {
    const { onClick } = props
    return (
      <div className="absolute right-5 top-0 -mx-4 h-full flex items-center text-red-400">
        <button className="prev-arrow" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    )
  }

  const items = [
    { title: "Live", description: "Description 1" },
    { title: "Live", description: "Description 2" },
    { title: "Live", description: "Description 3" },
    { title: "Live", description: "Description 3" },
    { title: "Live", description: "Description 3" },
    { title: "Live", description: "Description 3" },
    { title: "Live", description: "Description 3" },
    { title: "Live", description: "Description 3" },
    { title: "Live", description: "Description 3" },
    // Add more items as needed
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className="p-2 m-2">
        {allGenres?.length > 0 &&
          allGenres?.map((item, index) => (
            <div
              key={`genre-${index}`}
              className="wrapper grid gap-2 grid-cols-new3 overflow-hidden scroll-smooth mb-5 bg-black"
            >
              <p className="absolute text-white mx-2 my-8 uppercase border-[#ff1e1e] border-b">
                {item.replace(/\i/g, "")}
              </p>
              {Array.from({ length: numberOfSections }).map((section, idx) => {
                let i = idx - 1
                let j = idx + 1
                if (idx === 0) {
                  i = numberOfSections - 1
                } else if (idx === numberOfSections - 1) {
                  j = 0
                }
                return (
                  <div className="h-96" key={i}>
                    <Carousel
                      responsive={responsive}
                      containerClass="h-96"
                      infinite={true}
                      autoPlay={true}
                      customLeftArrow={<CustomPrevArrow />}
                      customRightArrow={<CustomNextArrow />}
                    >
                      {sliderData[item] &&
                        sliderData[item]
                          .slice(idx * 5, idx * 5 + 5)
                          .map((itm, idy) => (
                            <div key={index} className="md:p-8 p-0">
                              <div className=" relative md:h-64 h-96">
                                <div className="md:w-full w-[200px] rounded-lg shadow-md md:h-52 h-60 dark:bg-[#1F2937] dark:border dark:border-gray-500 cursor-pointer absolute inset-0 aspect-w-1 aspect-h-1">
                                  <Image
                                    src={`${imageProtocol}${imageBaseURl}${imagePath}${itm.thumbnail}`}
                                    alt={itm.name}
                                    fill
                                    className="rounded-xl"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                                  <div
                                    className="absolute bottom-0 text-white p-2 w-full flex justify-between"
                                    style={{
                                      backgroundImage:
                                        "linear-gradient(to top, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                                    }}
                                  >
                                    <div className="p-4 text-sm">
                                      <p>{itm?.name}</p>
                                      <p className="text-[12px] opacity-85">
                                        ({itm?.year}) <span>{itm.rating}</span>
                                        <span className="ml-2">
                                          IMDB: {itm?.imdb_rating}
                                        </span>
                                      </p>
                                    </div>
                                    <div className="p-4">
                                      <svg
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#ffffff"
                                        className="bi bi-three-dots-vertical w-5 h-10"
                                        stroke="#ffffff"
                                      >
                                        <g
                                          id="SVGRepo_bgCarrier"
                                          strokeWidth={"0"}
                                        ></g>
                                        <g
                                          id="SVGRepo_tracerCarrier"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="px-8 py-10 bg-cover rounded-lg shadow-md h-64 z-20 dark:bg-[#1F2937] dark:border dark:border-gray-500 cursor-pointer transform transition duration-500 md:hover:scale-125 hover:scale-125 opacity-0 hover:opacity-100"
                                  style={{
                                    backgroundImage: `url(${imageProtocol}${imageBaseURl}${imagePath}${itm.thumbnail})`,
                                  }}
                                >
                                  <div
                                    className="absolute top-1/3 left-[45%] text-white rounded-full border-[1px] border-[#ff1e1e] w-8 h-8 flex items-center justify-center"
                                    onClick={() => router.push("/watch")}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="#000"
                                      className="bi bi-play"
                                      viewBox="0 0 16 16"
                                      id="IconChangeColor"
                                    >
                                      <path
                                        d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                                        id="mainIconPathAttribute"
                                        fill="#ff1e1e"
                                      ></path>
                                    </svg>
                                  </div>

                                  <div
                                    className="absolute bottom-0 left-0 text-white p-2 w-full flex justify-between"
                                    style={{
                                      backgroundImage:
                                        "linear-gradient(to top, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                                    }}
                                  >
                                    <div className="p-4 text-sm">
                                      <p>{itm?.name}</p>
                                      <p className="text-[12px] opacity-85">
                                        ({itm?.year}) <span>{itm.rating}</span>
                                        <span className="ml-2">
                                          IMDB: {itm?.imdb_rating}
                                        </span>
                                      </p>
                                    </div>
                                    <div className="p-4">
                                      <svg
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#ffffff"
                                        className="bi bi-three-dots-vertical w-5 h-10"
                                        stroke="#ffffff"
                                      >
                                        <g
                                          id="SVGRepo_bgCarrier"
                                          strokeWidth={"0"}
                                        ></g>
                                        <g
                                          id="SVGRepo_tracerCarrier"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  {/* <div className="md:h-52 h-20"></div> */}
                                </div>
                              </div>
                            </div>
                          ))}
                    </Carousel>
                  </div>
                )
              })}
            </div>
          ))}
      </div>
      {/* ssss */}

      <div className="hidden h-96">
        <Carousel
          responsive={responsive}
          containerClass="h-96"
          customLeftArrow={<CustomPrevArrow />}
          customRightArrow={<CustomNextArrow />}
        >
          {items.map((item, index) => (
            // <Carousel.Item key={index}>
            <div key={index} className="md:p-8 p-0">
              <div className=" relative md:h-52 h-96">
                <div className="bg-white md:w-full w-[200px] rounded-lg shadow-md md:h-52 h-60 dark:bg-[#1F2937] dark:border dark:border-gray-500 cursor-pointer absolute inset-0">
                  <Image
                    src="https://wallpapercave.com/wp/wp6568154.jpg"
                    alt="movie"
                    width={320}
                    height={192}
                  />
                </div>
                <div
                  className="px-8 py-10 bg-cover rounded-lg shadow-md h-64 z-20 dark:bg-[#1F2937] dark:border dark:border-gray-500 cursor-pointer transform transition duration-500 md:hover:scale-125 hover:scale-125 opacity-0 hover:opacity-100"
                  style={{
                    backgroundImage: `url(https://wallpapercave.com/wp/wp6568154.jpg)`,
                  }}
                >
                  {/* <Image
                  src="https://wallpapercave.com/wp/wp6568154.jpg"
                  alt="movie"
                  width={320}
                  height={384}
                /> */}
                  {/* <div className="md:h-52 h-20"></div> */}
                </div>
              </div>
            </div>
            // </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default MovieSlider

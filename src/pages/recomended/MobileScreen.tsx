import NetflixLoader from "@/components/FreelixLoaderMobile"
import NewRelease from "@/components/NewRelease"
import UserAuthHeader from "@/components/UserAuthHeader"
import { imageBaseURl, imagePath, imageProtocol } from "@/util/constant"
import {
  Chip,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { Carousel } from "react-responsive-carousel"

type moviesType = {
  name: string
  thumbnail: string
  length: number
  year: string
  rating: string
  description: [string]
  _id: string
  genre: [string]
  imdb_rating: number
  language: [string]
  trailer_url: string
  movie_url: string
}

type handleOpenProp = {
  handleOpen: () => void
  setIframeHeight: (height: string) => void
  data: Array<{
    label: string
    value: string
    desc: string
  }>
  handleTrailer: (title: string, url: string) => void
  caraouselData: Array<moviesType>
  allGenres: string[]
  sliderData: Record<string, any[]>
  loading: boolean
  hours: number
  minutes: number
}

const MobileScreen: React.FC<handleOpenProp> = ({
  handleOpen,
  setIframeHeight,
  data,
  caraouselData,
  handleTrailer,
  allGenres,
  sliderData,
  loading,
  hours,
  minutes,
}) => {
  const router = useRouter()

  useEffect(() => {
    setIframeHeight("400")
  }, [])
  return (
    <>
      {loading ? (
        // <AnimationComponent />
        <div className="flex md:hidden">
          <NetflixLoader />
        </div>
      ) : (
        <div className="bg-black">
          {/* <UserAuthHeader hours={hours} minutes={minutes} /> */}
          <UserAuthHeader />
          <div className="overflow-hidden">
            <div className="bg-black">
              <Carousel
                showArrows={true}
                infiniteLoop
                autoPlay
                showThumbs={false}
                swipeable={false}
                emulateTouch={false}
              >
                {/* @ts-ignore */}
                {caraouselData?.length > 0 &&
                  caraouselData?.map((item, index) => (
                    <div key={index}>
                      {/* <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 25%)",
                }}
              ></div>
              <img src={`${imageProtocol}${imageBaseURl}${imagePath}${item.thumbnail}`} alt={item.name} /> */}
                      <div className="relative w-full">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(to top, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 25%)",
                          }}
                        ></div>
                        <img
                          src={`${imageProtocol}${imageBaseURl}${imagePath}${item.thumbnail}`}
                          // height={120}
                          style={{ height: "250px" }}
                          alt="Your image alt text"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* Movie Slider */}
                      <div className="z-20 w-screen">
                        <div className="px-14 overflowX-hidden h-full flex items-start w-full">
                          {/* later use */}
                          {/* <Image
                    src={`${imageProtocol}${imageBaseURl}${imagePath}${item.thumbnail}`}
                    width={180}
                    style={{ height: '80px', width: '100%' }}
                    height={90}
                    alt={item.name}
                  /> */}
                        </div>
                        <div className="mx-4 mt-2 text-white relative -top-[90%] left-10 z-20">
                          <p className="text-2xl text-justify">{item.name}</p>
                          <div className="flex text-xs ">
                            <p className="m-2">{item.year} |</p>
                            <Chip
                              value={item.rating}
                              className="bg-blue-800 rounded-none w-[45px] h-[25px] m-2"
                            />
                            <p className="m-2">
                              |{" "}
                              {`${Math.floor(item.length / 60)}hr ${
                                item.length % 60
                              }min`}{" "}
                              |
                            </p>
                            <p className="m-2">{item.genre[0]}</p>
                          </div>

                          <div className="w-3/5 text-justify">
                            <p className="text-sm mb-3">
                              {item.description[0]}
                            </p>
                            <div className="flex w-screen">
                              <button
                                type="button"
                                className="flex items-center focus:outline-none text-white bg-[#ff1e1e] rounded font-medium text-sm px-5 py-2.5 mr-2 mb-2 p-4 h-[30px]"
                                // onClick={() =>
                                //   handleTrailer(item.name, item.trailer_url)
                                // }
                                onClick={() => router.push("/watch")}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-play"
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  <path
                                    d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                                    id="mainIconPathAttribute"
                                    fill="#ffffff"
                                  ></path>
                                </svg>
                                Play
                              </button>

                              <button
                                type="button"
                                className="flex items-center focus:outline-none text-white bg-inherit border rounded border-current font-medium text-sm px-5 py-2.5 mr-2 mb-2 p-4 h-[30px]"
                              >
                                + MY LIST
                              </button>
                            </div>
                            <div className="mt-8 flex items-center">
                              <div
                                // onClick={handleOpen}
                                onClick={() =>
                                  handleTrailer(item.name, item.trailer_url)
                                }
                                className="cursor-pointer rounded-full border hover:border-gray-600 w-[26] h-[26] p-2 mr-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-play"
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  <path
                                    d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                                    id="mainIconPathAttribute"
                                    fill="#ffffff"
                                  ></path>
                                </svg>
                              </div>
                              WATCH TRAILER
                            </div>
                            {/* Tabs start */}
                            <div className="mt-5 hidden">
                              <Tabs value="html">
                                {/* @ts-ignore */}
                                <TabsHeader className="bg-[#ff1e1e] text-white rounded-none">
                                  {data?.map(({ label, value }) => (
                                    //@ts-ignore
                                    <Tab
                                      className="bg-[#ff1e1e] text-black rounded-none"
                                      key={value}
                                      value={value}
                                    >
                                      {label}
                                    </Tab>
                                  ))}
                                </TabsHeader>
                                {/* @ts-ignore */}
                                <TabsBody>
                                  {data.map(({ value, desc }) => (
                                    <TabPanel
                                      key={value}
                                      value={value}
                                      className="text-white"
                                    >
                                      {desc}
                                    </TabPanel>
                                  ))}
                                </TabsBody>
                              </Tabs>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>
          {/* Slider */}
          <div className="relative">
            <NewRelease allGenres={allGenres} sliderData={sliderData} />
          </div>
        </div>
      )}
    </>
  )
}

export default MobileScreen

import ContinueWatch from "@/components/ContinueWatch"
import NewRelease from "@/components/NewRelease"
import UserAuthHeader from "@/components/UserAuthHeader"
import {
  Chip,
  Dialog,
  DialogBody,
  DialogHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react"
import Image from "next/image"
import React, { Fragment, useEffect, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import MobileScreen from "./MobileScreen"
// import MoviesData from "@/components/data/movies.json"
import { useSelector } from "react-redux"
import { selectUser } from "@/redux/userSlice"
import { imageBaseURl, imagePath, imageProtocol } from "@/util/constant"
import Cookies from "js-cookie"
import { API_BASE_URL } from "@/constants/commonApi"
import AnimationComponent from "@/components/LoaderAnimation"
import NetflixLoader from "@/components/FreelixLoader"
import { useRouter } from "next/router"
import MovieSlider from "@/components/MovieSlider"
import { useDispatch } from "react-redux"
import { addMovie } from "@/redux/myLIstSlice"
import NotFoundPage from "@/components/Notfound"
import NotFound from "@/components/Notfound"
import FilterComponent from "@/components/FiltersComponent"

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

const Recomended: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [iframeHeight, setIframeHeight] = useState<string>("515")
  const [movieTrailer, setMovieTrailer] = useState<string>()
  const [trailerTitle, setTrailerTitle] = useState<string>()
  const [MoviesData, setMoviesData] = useState([])
  const [allGenres, setAllGenres] = useState<string[]>([])
  const [sliderData, setSliderData] = useState<Record<string, any[]>>({})
  const [caraouselData, setCarasoulData] = useState<Array<moviesType>>([])

  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [addedMovies, setAddedMovies] = useState<string[]>([])

  const [loading, setLoading] = useState(true)

  const userData = useSelector(selectUser)

  const router = useRouter()

  // console.log('user--->', userData)

  const handleOpen = () => {
    setOpen(!open)
  }

  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ]

  const getMovies = async () => {
    // console.log('token', userData)
    const response = await fetch(`${API_BASE_URL}/api/movie/prefered`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData?.token}`,
      },
    })

    return response.json()
  }

  useEffect(() => {
    setLoading(true)
    getMovies().then(async (res) => {
      let data = await res
      setMoviesData(data?.result)
      // console.log("MoviesData-------->>>>", data)
      if (data?.result) {
        const genres = Object.keys(data?.result).filter(
          (genre) => data?.result[genre].length > 0
        )
        setAllGenres(genres)

        // Create sliderData by filtering movieData based on allGenres
        const filteredSliderData: Record<string, any[]> = {}
        genres.forEach((genre) => {
          filteredSliderData[genre] = data?.result[genre]
        })
        setSliderData(filteredSliderData)
      }
      // data = data?.content?.length > 0 && data?.content?.slice(0,2);
      setCarasoulData(data?.slider)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    })
  }, [])

  const handleTrailer = (title: string, url: string) => {
    setMovieTrailer(url)
    setTrailerTitle(title)
    handleOpen()
  }

  // useEffect(() => {
  //   let data = []
  //   console.log("MoviesData-------->>>>", MoviesData)
  //   data = MoviesData?.length > 0 && MoviesData?.slice(0,2);
  //   setCarasoulData(data)
  // }, [MoviesData])

  // console.log("sllss", MoviesData);

  // const userString = Cookies.get("user")
  // const user = userString ? JSON.parse(userString) : null
  // // console.log("cookies", user)

  // useEffect(() => {
  //   setHours(Math.floor(user?.watch_limit / 60))
  //   setMinutes(user?.watch_limit % 60)
  // }, [user?.watch_limit])

  useEffect(() => {
    const storedMovies = localStorage.getItem("addedMovies")
    if (storedMovies) {
      setAddedMovies(JSON.parse(storedMovies))
    }
  }, []) // Run only once on component mount to initialize addedMovies from localStorage

  const dispatch = useDispatch()

  const handleAddMovie = (
    name: string,
    rating: string,
    length: number,
    language: Array<string>,
    id: string,
    thumbnail: string
  ) => {
    const movie = {
      name,
      rating,
      length,
      language,
      id,
      thumbnail,
    }
    dispatch(addMovie(movie))
    setAddedMovies([...addedMovies, id])
    localStorage.setItem("addedMovies", JSON.stringify([...addedMovies, id]))
  }

  // console.log("dddsadsa", caraouselData, sliderData)

  return (
    <>
      {loading ? (
        // <AnimationComponent />
        // <div className="md:flex hidden">
        <NetflixLoader />
      ) : (
        // </div>
        <div className="hidden md:block">
          <UserAuthHeader />
          {/* <FilterComponent /> */}
          {!caraouselData || caraouselData?.length === 0 ? (
            <NotFound />
          ) : (
            <>
              <div className="h-scree">
                <div className="">
                  <Carousel
                    showArrows={true}
                    infiniteLoop
                    showThumbs={false}
                    dynamicHeight={true}
                    autoPlay
                    className=""
                  >
                    {/* @ts-ignore */}
                    {caraouselData?.length > 0 &&
                      caraouselData?.map((item, index) => (
                        <div key={index} className="">
                          {/* <div
                  className="absolute inset-0 h-screen"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%)",
                  }}
                ></div> */}
                          <div className="relative w-full h-screen">
                            {/* <div
                          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${imageProtocol}${imageBaseURl}${imagePath}${item.thumbnail})`,
                          }}
                        /> */}
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to top, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 100%)",
                              }}
                            ></div>
                            <Image
                              src={`${imageProtocol}${imageBaseURl}${imagePath}${item.thumbnail}`}
                              // src={`https://wallpapercave.com/wp/RyLpppm.jpg`}
                              alt="Your image alt text"
                              height={1080}
                              width={1920}
                              className="w-full h-full object-fit object-center"
                            />
                          </div>
                          {/* <img src={`${imageProtocol}${imageBaseURl}${imagePath}${item.thumbnail}`} className="h-screen" style={{ backgroundSize: "cover" }} /> */}
                          <div className="absolute z-20 top-[16.25rem] left-10">
                            <Image
                              src={`${imageProtocol}${imageBaseURl}${imagePath}${item.thumbnail}`}
                              width={180}
                              style={{
                                marginTop: "-30px",
                                height: "180px",
                                width: "180px",
                                objectFit: "cover",
                              }}
                              // height={100}
                              height={20}
                              alt="netflix"
                            />
                          </div>
                          <div className="absolute z-20 top-[26.25rem] left-10 text-white">
                            <p className="text-xl text-justify">{item.name}</p>
                            <div className="flex text-xs">
                              <p className="m-2">{item.year}&nbsp;|&nbsp;</p>
                              <Chip
                                value={item.rating}
                                className="bg-transparent border rounded-none w-[65px] h-[25px] m-2"
                              />
                              <p className="m-2 text-xs">
                                |&nbsp;
                                {`${Math.floor(item.length / 60)}hr ${
                                  item.length % 60
                                }min`}
                                &nbsp; |
                              </p>
                              <p className="m-2">{item.genre[0]}</p>
                            </div>

                            <div className="flex">
                              <button
                                type="button"
                                // onClick={() =>
                                //   handleTrailer(item.name, item.trailer_url)
                                // }
                                onClick={() =>
                                  router.push(`/watch/${item?._id}`)
                                }
                                className="flex items-center focus:outline-none text-white bg-[#ff1e1e] rounded font-medium text-sm px-5 py-2.5 mr-2 mb-2 p-4 h-[30px]"
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
                                onClick={() =>
                                  handleAddMovie(
                                    item.name,
                                    item.rating,
                                    item.length,
                                    item.language,
                                    item._id,
                                    item.thumbnail
                                  )
                                }
                                disabled={addedMovies.includes(item._id)}
                                className="flex items-center focus:outline-none text-white rounded bg-inherit border border-current font-medium text-sm px-5 py-2.5 mr-2 mb-2 p-4 h-[30px]"
                              >
                                {addedMovies.includes(item._id)
                                  ? "Added To My List"
                                  : "+ MY LIST"}
                              </button>
                            </div>

                            <div className="w-[50%] text-justify">
                              <p className="text-sm mb-3">{item.description}</p>

                              <div className="mt-8 flex items-center">
                                <div
                                  // onClick={handleOpen}
                                  onClick={() =>
                                    handleTrailer(item.name, item.trailer_url)
                                  }
                                  className="cursor-pointer rounded-full border hover:border-[#ff1e1e] w-[26] h-[26] p-2 mr-1"
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
                                WATCH TRAILER
                              </div>
                              {/* Tabs start */}
                              <div className="mt-5 hidden">
                                <Tabs value="html">
                                  {/* @ts-ignore */}
                                  <TabsHeader className="bg-[#ff1e1e] text-white rounded-none">
                                    {data.map(({ label, value }) => (
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

                          {/* <p className="legend">Legend 1</p> */}
                        </div>
                      ))}
                  </Carousel>
                </div>
                {/* Suffle Cards */}
                {/* <NewRelease allGenres={allGenres} sliderData={sliderData} /> */}
                {/* <ContinueWatch /> */}
                <MovieSlider allGenres={allGenres} sliderData={sliderData} />
                {/* <TrendingNow />
    <TopTen /> */}
              </div>

              <Fragment>
                {/* @ts-ignore */}
                <Dialog
                  open={open}
                  handler={handleOpen}
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                  }}
                  className="bg-inherit text-white border-0 outline-0 rounded-none"
                  size="lg"
                >
                  {/* @ts-ignore */}
                  <DialogHeader className="border-0">
                    <div className="flex justify-between w-[100%] text-white">
                      <div>{trailerTitle && trailerTitle} Official Tailer</div>
                      <div onClick={handleOpen} className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-x-circle"
                          viewBox="0 0 16 16"
                          id="IconChangeColor"
                        >
                          <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            id="mainIconPathAttribute"
                            fill="#ffffff"
                          ></path>
                          <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            id="mainIconPathAttribute"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </DialogHeader>
                  {/* @ts-ignore */}
                  <DialogBody className="border-0 m-0 p-0" divider>
                    <iframe
                      width="100%"
                      height={iframeHeight}
                      src={`https://www.youtube.com/embed/${movieTrailer}`}
                      title="YouTube video player"
                      allow="accelerometer"
                      className=""
                      allowFullScreen
                    ></iframe>
                  </DialogBody>
                </Dialog>
              </Fragment>
            </>
          )}
        </div>
      )}
      <div className="md:hidden">
        <MobileScreen
          handleOpen={handleOpen}
          setIframeHeight={setIframeHeight}
          data={data}
          caraouselData={caraouselData}
          handleTrailer={handleTrailer}
          allGenres={allGenres}
          sliderData={sliderData}
          loading={loading}
          hours={hours}
          minutes={minutes}
        />
      </div>
    </>
  )
}

export default Recomended

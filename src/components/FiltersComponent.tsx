import { clearFilter, filterSuccess } from "@/redux/filerSlice"
import { selectUser } from "@/redux/userSlice"
import { getRequest } from "@/util/getRequest"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const FilterComponent = () => {
  const [showFilters, setShowfilters] = useState(false)
  const [check, setCheck] = useState({
    movies: false,
    shows: false,
    animation: false,
    all: false,
    action: false,
    comedy: false,
    drama: false,
    horror: false,
    thriller: false,
    adventure: false,
    scifi: false,
    biography: false,
    fantasy: false,
    english: false,
    hindi: false,
    japanese: false,
    korean: false,
    // 2023:false,
    // 2024: false,
    // 13: false,
    // 16: false
  })

  const [language, setLanguage] = useState<string[]>([])
  const [rating, setRating] = useState<string[]>([])
  const [genre, setGenre] = useState<string[]>([])
  const [year, setYear] = useState<string[]>([])

  const dispatch = useDispatch()

  const userData = useSelector(selectUser)

  useEffect(() => {
    // Dispatch the clear action when the component mounts
    dispatch(clearFilter())
  }, [dispatch])

  const {
    movies,
    shows,
    animation,
    all,
    action,
    comedy,
    drama,
    horror,
    thriller,
    adventure,
    scifi,
    biography,
    fantasy,
    english,
    hindi,
    japanese,
    korean,
    // 2023,
    // 2024,
    // 13,
    // 16
  } = check

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    })
  }

  const applyFilters = (e: any) => {
    setCheck({
      ...check,
      movies: false,
      shows: false,
      animation: false,
      all: false,
      comedy: false,
      drama: false,
      horror: false,
      thriller: false,
      adventure: false,
      scifi: false,
      biography: false,
      fantasy: false,
      english: false,
      hindi: false,
      japanese: false,
      korean: false,
      // 2023:false,
      // 2024: false,
      // 13: false,
      // 16: false
    })

    e.preventDefault()
    const params = new URLSearchParams()
    if (language.length > 0) params.append("language", JSON.stringify(language))
    if (rating.length > 0) params.append("rating", JSON.stringify(rating))
    if (genre.length > 0) params.append("genre", JSON.stringify(genre))

    async function fetchData() {
      try {
        let baseFilterUrl = "/api/movie/search-movie?"

        // if (genre.length === 0) {
        //   genreArray = ["Action", "Drama", "Comedy", "Thriller"]
        // } else {
        //   genreArray = genre
        // }

        // if (rating.length === 0) {
        //   ratingArray = ["PG-13", "PG-16"]
        // } else {
        //   ratingArray = rating
        // }

        // if (language.length === 0) {
        //   languageArray = ["English", "Hindi", "Japanese", "Korean"]
        // } else {
        //   languageArray = language
        // }

        // if (year.length === 0) {
        //   yearArray = ["2023", "2024"]
        // } else {
        //   yearArray = year
        // }

        let isUrlfilter = false
        if (language.length > 0) {
          if (isUrlfilter) {
            baseFilterUrl = baseFilterUrl + "&"
          }
          baseFilterUrl = baseFilterUrl + "language=" + JSON.stringify(language)
          isUrlfilter = true
        }

        if (rating.length > 0) {
          if (isUrlfilter) {
            baseFilterUrl = baseFilterUrl + "&"
          }
          baseFilterUrl = baseFilterUrl + "rating=" + JSON.stringify(rating)
          isUrlfilter = true
        }

        if (genre.length > 0) {
          if (isUrlfilter) {
            baseFilterUrl = baseFilterUrl + "&"
          }
          baseFilterUrl = baseFilterUrl + "genre=" + JSON.stringify(genre)
          isUrlfilter = true
        }

        if (year.length > 0) {
          if (isUrlfilter) {
            baseFilterUrl = baseFilterUrl + "&"
          }
          baseFilterUrl = baseFilterUrl + "year=" + JSON.stringify(year)
          isUrlfilter = true
        }
        const responseData = await getRequest<any>({
          endpoint: baseFilterUrl,
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        })

        // console.log("ress", responseData)

        if (responseData.success) {
          // console.log(responseData.content)
          dispatch(filterSuccess(responseData.content))
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()

    setShowfilters(false)
  }

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div className=" flex justify-between items-center mb-4">
          {/*  filters Button (md and plus Screen) */}
          <button
            onClick={() => setShowfilters(!showFilters)}
            className="cursor-pointer sm:flex hidden hover:bg-red-700  py-2 px-6 bg-transparent flex text-sm leading-4 font-normal text-white justify-center items-center border border-red-500 rounded-3xl outline-none"
          >
            <svg
              className=" mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 4V8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4V14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 4V5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </button>
        </div>
        {/* <p className=" text-xl leading-5 text-gray-600 font-medium">
          09 Products
        </p> */}

        {/* Filters Button (Small Screen)  */}

        <button
          onClick={() => setShowfilters(!showFilters)}
          className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
        >
          <svg
            className=" mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 4V8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4V14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 4V5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9V20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Filters
        </button>
      </div>

      <div
        id="filterSection"
        className={
          "relative md:py-0 lg:px-20 md:px-6 py-9 px-4 bg-transparent w-full " +
          (showFilters ? "block" : "hidden")
        }
      >
        {/* Cross button Code  */}
        <div
          onClick={() => setShowfilters(false)}
          className="cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
        >
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ea1f1f"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M19 5L5 19M5.00001 5L19 19"
                stroke="#ea1f1f"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>

        {/* Type Section */}
        <div>
          <div className=" flex space-x-2">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ea1f1f"
              stroke="#ea1f1f"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M13.5 11h-1.729L8.438 6H9.5l.5-.5v-4L9.5 1h-4l-.5.5v4l.5.5h1.062l-3.333 5H1.5l-.5.5v3l.5.5h3l.5-.5v-3l-.5-.5h-.068L7.5 6.4l3.068 4.6H10.5l-.5.5v3l.5.5h3l.5-.5v-3l-.5-.5zM6 5V2h3v3H6zm-2 7v2H2v-2h2zm9 2h-2v-2h2v2z"></path>
              </g>
            </svg>
            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-red-800 ">
              Type
            </p>
          </div>
          <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Movies"
                name="movies"
                value="Movies"
                // checked={leather}
                onChange={changeHandler}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600 "
                    htmlFor="Movies"
                  >
                    Movies
                  </label>
                </div>
              </div>
            </div>

            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Shows"
                name="shows"
                value="Shows"
                // checked={leather}
                onChange={changeHandler}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600 "
                    htmlFor="Shows"
                  >
                    TV Shows
                  </label>
                </div>
              </div>
            </div>

            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="All"
                name="all"
                value="All"
                // checked={leather}
                onChange={changeHandler}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600 "
                    htmlFor="All"
                  >
                    All
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-red-500 lg:w-6/12 w-full md:my-10 my-8" />

        {/* Genre Section */}
        <div>
          <div className=" flex space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="#ea1f1f"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z"
                stroke="#ea1f1f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z"
                stroke="#ea1f1f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-red-800 ">
              Genre
            </p>
          </div>
          <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
            <div className=" flex justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Action"
                name="action"
                value="Action"
                // checked={action}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Action"
                  >
                    Action
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Comedy"
                name="comedy"
                value="Comedy"
                // checked={comedy}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Comedy"
                  >
                    Comedy
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Horror"
                name="horror"
                value="Horror"
                // checked={horror}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Horror"
                  >
                    Horror
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Thriller"
                name="thriller"
                value="Thriller"
                // checked={thriller}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Thriller"
                  >
                    Thriller
                  </label>
                </div>
              </div>
            </div>

            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Adventure"
                name="adventure"
                value="Adventure"
                // checked={adventure}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Adventure"
                  >
                    Adventure
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Scifi"
                name="scifi"
                value="Scifi"
                // checked={scifi}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Scifi"
                  >
                    Sci-fi
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Biography"
                name="biography"
                value="Biography"
                // checked={biography}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Biography"
                  >
                    Biography
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Drama"
                name="drama"
                value="Drama"
                // checked={drama}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Drama"
                  >
                    Drama
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Fantasy"
                name="fantasy"
                value="Fantasy"
                // checked={fantasy}
                // onChange={changeHandler}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Fantasy"
                  >
                    Fantasy
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="Animation"
                name="animation"
                value="Animation"
                // checked={animation}
                // onChange={changeHandler}
                onChange={(e) => {
                  if (e.target.checked) {
                    setGenre([...genre, e.target.value])
                  } else {
                    setGenre(genre.filter((gen) => gen !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="Animation"
                  >
                    Animation
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        {/* Country Section */}
        <div>
          <div className=" flex space-x-2">
            <svg
              fill="#ea1f1f"
              width="24px"
              height="24px"
              viewBox="-0.86 0 33.604 33.604"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g transform="translate(-481.237 -128.948)">
                  <path d="M482.237,162.552a1,1,0,0,1-1-1v-32.6h21.707v17.8H483.237v14.8A1,1,0,0,1,482.237,162.552Zm1-17.8h17.707v-13.8H483.237Z"></path>
                  <path d="M502.951,135.709l7.547.051a.631.631,0,0,1,.625.629v10.576a.629.629,0,0,1-.629.629h-7.149a.4.4,0,0,1-.394-.394V135.709m-2-2.014v13.5a2.394,2.394,0,0,0,2.394,2.394h7.149a2.629,2.629,0,0,0,2.629-2.629V136.389a2.629,2.629,0,0,0-2.611-2.629l-9.561-.065Z"></path>
                </g>
              </g>
            </svg>
            <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-red-800">
              Country
            </p>
          </div>
          <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
            <div className=" flex md:justify-center md:items-center items-center justify-start ">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="US"
                name="english-us"
                value="English"
                // checked={us}
                // onChange={changeHandler}
                onChange={(e) => {
                  if (e.target.checked) {
                    setLanguage([...language, e.target.value])
                  } else {
                    setLanguage(
                      language.filter((lang) => lang !== e.target.value)
                    )
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="US"
                  >
                    United State
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center ">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="IN"
                name="hindi"
                value="Hindi"
                // checked={in}
                // onChange={changeHandler}
                onChange={(e) => {
                  if (e.target.checked) {
                    setLanguage([...language, e.target.value])
                  } else {
                    setLanguage(
                      language.filter((lang) => lang !== e.target.value)
                    )
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="IN"
                  >
                    INDIA
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex md:justify-center md:items-center items-center justify-end ">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="UK"
                name="english"
                value="English"
                // checked={uk}
                // onChange={changeHandler}
                onChange={(e) => {
                  if (e.target.checked) {
                    setLanguage([...language, e.target.value])
                  } else {
                    setLanguage(
                      language.filter((lang) => lang !== e.target.value)
                    )
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="UK"
                  >
                    United Kingdom
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex md:justify-center md:items-center items-center justify-start ">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="KR"
                name="korean"
                value="Korean"
                // checked={kr}
                // onChange={changeHandler}
                onChange={(e) => {
                  if (e.target.checked) {
                    setLanguage([...language, e.target.value])
                  } else {
                    setLanguage(
                      language.filter((lang) => lang !== e.target.value)
                    )
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="KR"
                  >
                    Korean
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        {/* Year Section */}
        <div>
          <div className=" flex space-x-2">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z"
                  fill="#974c3f"
                  fill-opacity="0.24"
                ></path>
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="15"
                  rx="2"
                  stroke="#ea1f1f"
                  stroke-width="1.2"
                ></rect>
                <path
                  d="M7 3L7 6"
                  stroke="#ea1f1f"
                  stroke-width="1.2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M17 3L17 6"
                  stroke="#ea1f1f"
                  stroke-width="1.2"
                  stroke-linecap="round"
                ></path>
                <rect
                  x="7"
                  y="12"
                  width="4"
                  height="2"
                  rx="0.5"
                  fill="#ea1f1f"
                ></rect>
                <rect
                  x="7"
                  y="16"
                  width="4"
                  height="2"
                  rx="0.5"
                  fill="#ea1f1f"
                ></rect>
                <rect
                  x="13"
                  y="12"
                  width="4"
                  height="2"
                  rx="0.5"
                  fill="#ea1f1f"
                ></rect>
                <rect
                  x="13"
                  y="16"
                  width="4"
                  height="2"
                  rx="0.5"
                  fill="#ea1f1f"
                ></rect>
              </g>
            </svg>
            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-red-800 ">
              Year
            </p>
          </div>
          <div className=" flex mt-8 space-x-8">
            <div className=" flex justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="2024"
                name="2024"
                value="2024"
                // checked={2024}
                onChange={(e) => {
                  if (e.target.checked) {
                    setYear([...year, e.target.value])
                  } else {
                    setYear(year.filter((yr) => yr !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="2024"
                  >
                    2024
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="2023"
                name="2023"
                // checked={2023}
                // onChange={changeHandler}
                onChange={(e) => {
                  if (e.target.checked) {
                    setYear([...year, e.target.value])
                  } else {
                    setYear(year.filter((yr) => yr !== e.target.value))
                  }
                }}
                value="2023"
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="2023"
                  >
                    2023
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        {/* Rating Section */}
        <div>
          <div className=" flex space-x-2">
            <svg
              fill="#ea1f1f"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 72 72"
              enable-background="new 0 0 72 72"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M65.81,68h-60c-1.104,0-2-0.896-2-2s0.896-2,2-2h60c1.104,0,2,0.896,2,2S66.914,68,65.81,68z"></path>
                  </g>
                  <g>
                    <path d="M23.19,53.068c0,3.828-3.104,6.932-6.932,6.932h-5.137c-3.828,0-6.932-3.104-6.932-6.932V32.932 C4.19,29.104,7.294,26,11.122,26h5.137c3.828,0,6.932,3.104,6.932,6.932V53.068z M19.19,32.932c0-1.619-1.313-2.932-2.932-2.932 h-5.137c-1.619,0-2.932,1.313-2.932,2.932v20.137C8.19,54.688,9.503,56,11.122,56h5.137c1.619,0,2.932-1.313,2.932-2.932V32.932z"></path>
                  </g>
                  <g>
                    <path d="M46.19,53.068c0,3.828-3.104,6.932-6.932,6.932h-5.137c-3.828,0-6.932-3.104-6.932-6.932V21.932 c0-3.828,3.104-6.932,6.932-6.932h5.137c3.828,0,6.932,3.104,6.932,6.932V53.068z M42.19,21.932c0-1.619-1.313-2.932-2.932-2.932 h-5.137c-1.619,0-2.932,1.313-2.932,2.932v31.137c0,1.619,1.313,2.932,2.932,2.932h5.137c1.619,0,2.932-1.313,2.932-2.932V21.932z "></path>
                  </g>
                  <g>
                    <g>
                      <g>
                        <path d="M56,19c-0.553,0-0.81-0.447-0.81-1v-6.038C55.19,10,56.801,10,57.456,10h2.354c0.552,0,1,0.447,1,1s-0.448,1-1,1h-2.354 c-0.336,0-0.531,0.016-0.644,0.035L56.905,18C56.905,18.553,56.552,19,56,19z"></path>
                      </g>
                      <g>
                        <path d="M55.81,21.18c-0.261,0-0.521-0.11-0.71-0.29c-0.181-0.189-0.29-0.45-0.29-0.71s0.109-0.52,0.29-0.71 c0.38-0.38,1.05-0.37,1.42,0c0.18,0.19,0.29,0.44,0.29,0.71c0,0.26-0.11,0.521-0.29,0.71 C56.329,21.069,56.069,21.18,55.81,21.18z"></path>
                      </g>
                    </g>
                    <g>
                      <path d="M68.19,53.068c0,3.828-3.104,6.932-6.932,6.932h-5.137c-3.828,0-6.932-3.104-6.932-6.932V10.932 C49.19,7.104,52.294,4,56.122,4h5.137c3.828,0,6.932,3.104,6.932,6.932V53.068z M64.19,10.932C64.19,9.313,62.878,8,61.259,8 h-5.137c-1.619,0-2.932,1.313-2.932,2.932v42.137c0,1.619,1.313,2.932,2.932,2.932h5.137c1.619,0,2.932-1.313,2.932-2.932V10.932 z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-red-800 ">
              Rating
            </p>
          </div>
          <div className=" flex mt-8 space-x-8">
            <div className=" flex justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="13+"
                name="13+"
                value="PG-13"
                // checked={13+}
                // onChange={changeHandler}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value])
                  } else {
                    setRating(rating.filter((rat) => rat !== e.target.value))
                  }
                }}
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="13+"
                  >
                    13+
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <input
                className="w-4 h-4 mr-2"
                type="checkbox"
                id="16+"
                name="16+"
                // checked={16+}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value])
                  } else {
                    setRating(rating.filter((rat) => rat !== e.target.value))
                  }
                }}
                value="PG-16"
              />
              <div className=" inline-block">
                <div className=" flex space-x-6 justify-center items-center">
                  <label
                    className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                    htmlFor="16+"
                  >
                    16+
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
          <button
            onClick={applyFilters}
            className="w-full hover:bg-red-800 text-base leading-4 font-medium py-4 px-10 text-white bg-red-600"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterComponent

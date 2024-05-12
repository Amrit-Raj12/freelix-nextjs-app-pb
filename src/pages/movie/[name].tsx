import React, { useEffect, useState } from "react"
import UserAuthHeader from "@/components/UserAuthHeader"
import { getRequest } from "@/util/getRequest"
import { useSelector } from "react-redux"
import { selectUser } from "@/redux/userSlice"
import { API_BASE_URL } from "@/constants/commonApi"
import { imageBaseURl, imagePath, imageProtocol } from "@/util/constant"
import MovieCardLoader from "@/components/ContentLoaders/MovieCard"
import FilterComponent from "@/components/FiltersComponent"

type Movie = {
  _id: number
  name: string
  year: string
  length: number
  genre: Array<string>
  language: Array<string>
  rating: string
  imdb_rating: string
  // Add more fields as per your API response
}

type Props = {
  movie: Movie[]
}

const name = () => {
  const [movieData, setMovieData] = useState<Props>()

  const userData = useSelector(selectUser)

  const searchResult = useSelector((state: any) => state.search.results)
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage, setMoviesPerPage] = useState(16)
  const [totalPage, setTotalPage] = useState(1)

  const [loading, setLoading] = useState<boolean>(false)

  const filterResult = useSelector((state: any) => state.filter.results)

  // console.log("fikl", filterResult)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)

      if (filterResult.length > 0) {
        setMovieData(filterResult)
        setLoading(false)
      } else if (searchResult.length > 0) {
        setMovieData(searchResult)
        setLoading(false)
      } else {
        try {
          const responseData = await getRequest<any>({
            endpoint: "/api/movie/all",
            headers: {
              // Optional: Add any headers you need
              Authorization: `Bearer ${userData.token}`,
            },
          })

          // console.log("ress", responseData)

          if (responseData.success) {
            setCurrentPage(responseData.currentPage)
            setMoviesPerPage(responseData.pageToken)
            setMovieData(responseData.movie)
            setTotalPage(responseData.totalPages)
            setLoading(false)
          }
        } catch (error) {
          // Handle error
          console.error("Error fetching data:", error)
          setLoading(false)
        }
      }
    }

    fetchData()
  }, [searchResult, filterResult])

  // useEffect(() => {
  //   if (searchResult.length > 0) {
  //     setMovieData(searchResult)
  //   }
  // }, [searchResult])

  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>Error: {error.message}</div>

  // Logic to calculate pagination
  const indexOfLastMovie = currentPage * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
  const currentMovies = Array.isArray(movieData)
    ? movieData?.slice(indexOfFirstMovie, indexOfLastMovie)
    : []

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // if (loading)
  //   return (
  //     <>
  //       <MovieCardLoader />
  //     </>
  //   )
  function paginationMain(total: number, curr: number, vis: number) {
    let buttons = []
    if (curr > 1) {
      buttons.push(
        <button
          onClick={() => paginate(currentPage - 1)}
          className={`mx-1 px-3 py-1 rounded-full focus:outline-none text-red-500`}
        >
          Prev
        </button>
      )
    }
    let start = Math.max(1, curr - Math.floor(vis / 2))
    let end = Math.min(total, start + vis - 1)
    if (end - start < vis - 1) {
      start = Math.max(1, end - vis + 1)
    }
    if (start > 1) {
      buttons.push(<span className="text-red-500">...</span>)
    }
    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          onClick={() => paginate(i)}
          className={`mx-1 px-3 py-1 rounded-full focus:outline-none text-red-500 ${
            currentPage === i
              ? "bg-red-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      )
    }
    if (end < total) {
      buttons.push(<span className="text-red-500">...</span>)
    }
    if (vis + 1 < total) {
      buttons.push(
        <button
          onClick={() => paginate(currentPage + 1)}
          className={`mx-1 px-3 py-1 rounded-full focus:outline-none text-red-500 ${
            currentPage === currentPage + 1
              ? "bg-red-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {total}
        </button>
      )
    }
    if (curr < total) {
      buttons.push(
        <button
          onClick={() => paginate(currentPage + 1)}
          className={`mx-1 px-3 py-1 rounded-full focus:outline-none text-red-500`}
        >
          Next
        </button>
      )
    }
    return buttons
  }

  // paginationMain()

  // console.log("pagination", paginationMain())
  // console.log("dddd", movieData)

  return (
    <div className="bg-black">
      <UserAuthHeader />
      <FilterComponent />
      {/* Movie Grid */}
      <div className="bg-black">
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-center justify-center">
            {/* Card Start */}
            {loading
              ? Array.from({ length: 16 }).map((_, index) => (
                  <MovieCardLoader key={index} />
                ))
              : Array.isArray(movieData) &&
                currentMovies?.length > 0 &&
                currentMovies.map((item) => (
                  <div
                    key={item._id}
                    className="flex max-w-sm w-[280px] bg-black shadow-md rounded-lg overflow-hidden mx-auto"
                  >
                    <div
                      className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                      data-movie-id={item._id}
                    >
                      <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                      <div
                        className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
                        data-lity=""
                        //   href=""
                      >
                        <div className="poster__info align-self-end w-[220px]">
                          <div className="h-32"></div>
                          <div className="space-y-6 detail_info">
                            <div className="flex flex-col space-y-2 inner">
                              <a
                                className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-500"
                                data-unsp-sanitized="clean"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-10 h-10"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                                  Watch
                                </div>
                              </a>
                              <h3
                                className="text-xl font-bold text-white"
                                data-unsp-sanitized="clean"
                              >
                                {item.name}
                              </h3>
                              <div className="mb-0 text-sm text-red-400">
                                {item.genre.join(" | ")}
                              </div>
                            </div>
                            <div className="flex flex-row justify-between datos">
                              <div className="flex flex-col datos_col">
                                <div className="text-sm text-red-400">
                                  Rating
                                </div>
                                <div className="popularity">{item.rating}</div>
                              </div>
                              <div className="flex flex-col datos_col">
                                <div className="text-sm text-red-400">Imdb</div>
                                <div className="release">
                                  {item.imdb_rating}
                                </div>
                              </div>
                              <div className="flex flex-col datos_col">
                                <div className="text-sm text-red-400">
                                  Length
                                </div>
                                <div className="release">{item.length}</div>
                              </div>
                            </div>
                            <div className="flex flex-col overview">
                              <div className="flex flex-col"></div>
                              <div className="text-xs text-red-400 mb-2">
                                Language
                              </div>
                              <p className="text-xs text-gray-100 mb-6">
                                {item.language.join(",")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="absolute inset-0 transform w-full -translate-y-4"
                        src={`${imageProtocol}${imageBaseURl}${imagePath}${item.thumbnail}`}
                      />
                    </div>
                  </div>
                ))}
            {/* Card Ends */}
          </div>
        </div>
      </div>
      {/* // Pagination */}
      <div className="flex justify-center bg-black my-0 py-2">
        {/* {Array.from(
          {
            length: Array.isArray(movieData)
              ? Math.ceil(movieData?.length / moviesPerPage)
              : 0,
          },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded-full focus:outline-none ${
                currentPage === i + 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          )
        )} */}

        <>{paginationMain(totalPage, currentPage, 3)}</>
      </div>
    </div>
  )
}

export default name

// fun gen(total: Int, curr: Int, vis: Int) {
//   val pages = mutableListOf<Any>()

//   if (curr > 1) {
//       println("Prev")
//   }
//   var start = maxOf(1, curr - vis / 2)
//   var end = minOf(total, start + vis - 1)
//   if (end - start < vis - 1) {
//       start = maxOf(1, end - vis + 1)
//   }
//   if (start > 1) {
//       println("...")
//   }
//   for (i in start..end) {
//       println(i)
//   }
//   if (end < total) {
//       println("...")
//   }
//   if(vis+1<total){
//       println(total)
//   }
//   if (curr < total) {
//       println("Nextx")
//   }
// }

// fun main() {
//   val total = 15
//   val curr = 1
//   val vis = 3

//   gen(total, curr, vis)
// }

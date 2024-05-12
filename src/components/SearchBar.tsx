import { FormEvent, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Cookies from "js-cookie"
import { API_BASE_URL } from "@/constants/commonApi"
import { imageBaseURl, imagePath, imageProtocol } from "@/util/constant"
import { Scrollbars } from "react-custom-scrollbars-2"
import Link from "next/link"
import { useDispatch } from "react-redux"
import {
  clearSearch,
  searchFailure,
  searchStart,
  searchSuccess,
} from "@/redux/moviesSlice"
import { useSelector } from "react-redux"
import { usePathname } from "next/navigation"

interface Movie {
  _id: string
  name: string
  thumbnail: string
  imdb_rating: number
  year: string
  length: number
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("")
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  )
  const [searchResults, setSearchResults] = useState<Movie[]>([])

  const token = Cookies.get("token")

  const dispatch = useDispatch()

  useEffect(() => {
    // Dispatch the clear action when the component mounts
    dispatch(clearSearch())
  }, [dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setQuery(e.target.value)

    const inputQuery = e.target.value
    setQuery(inputQuery)
    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }
    setTypingTimeout(setTimeout(() => search(inputQuery), 500)) // Adjust the delay as needed
  }

  const search = async (searchQuery: string) => {
    try {
      if (searchQuery.length === 0) {
        setSearchResults([])
        dispatch(searchSuccess([]))
        return
      }

      dispatch(searchStart())
      const response = await fetch(
        `${API_BASE_URL}/api/movie/search-movie-byname/${searchQuery}`,
        {
          method: "GET",
          mode: "cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      dispatch(searchSuccess(data?.content))
      setSearchResults(data?.content)
    } catch (error) {
      console.error("Error fetching data:", error)
      dispatch(searchFailure("Error fetching data"))
    }
  }

  const searchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }
    await search(query)
  }

  // function for format movie length
  const formatMovieLength = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    return `${hours}hr:${minutes}min`
  }

  // const searchResult = useSelector((state: any) => state.search.results)

  // console.log("Search Results:", searchResult)

  const pathname = usePathname()

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
        onSubmit={searchSubmit}
      >
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="bg-transparent border-red-500 border rounded-full px-4 py-2 pr-10 outline-none focus:border-red-600 transition-colors duration-300 w-[400px]"
        />

        <button type="submit" className="bg-transparent border-none">
          <svg
            width="32px"
            height="32px"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#afa7a7"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.30524 15.7137C6.4404 14.8306 5.85381 13.7131 5.61824 12.4997C5.38072 11.2829 5.50269 10.0233 5.96924 8.87469C6.43181 7.73253 7.22153 6.75251 8.23924 6.05769C10.3041 4.64744 13.0224 4.64744 15.0872 6.05769C16.105 6.75251 16.8947 7.73253 17.3572 8.87469C17.8238 10.0233 17.9458 11.2829 17.7082 12.4997C17.4727 13.7131 16.8861 14.8306 16.0212 15.7137C14.8759 16.889 13.3044 17.5519 11.6632 17.5519C10.0221 17.5519 8.45059 16.889 7.30524 15.7137V15.7137Z"
                stroke="#afa7a7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M11.6702 7.20292C11.2583 7.24656 10.9598 7.61586 11.0034 8.02777C11.0471 8.43968 11.4164 8.73821 11.8283 8.69457L11.6702 7.20292ZM13.5216 9.69213C13.6831 10.0736 14.1232 10.2519 14.5047 10.0904C14.8861 9.92892 15.0644 9.4888 14.9029 9.10736L13.5216 9.69213ZM16.6421 15.0869C16.349 14.7943 15.8741 14.7947 15.5815 15.0879C15.2888 15.381 15.2893 15.8559 15.5824 16.1485L16.6421 15.0869ZM18.9704 19.5305C19.2636 19.8232 19.7384 19.8228 20.0311 19.5296C20.3237 19.2364 20.3233 18.7616 20.0301 18.4689L18.9704 19.5305ZM11.8283 8.69457C12.5508 8.61801 13.2384 9.02306 13.5216 9.69213L14.9029 9.10736C14.3622 7.83005 13.0496 7.05676 11.6702 7.20292L11.8283 8.69457ZM15.5824 16.1485L18.9704 19.5305L20.0301 18.4689L16.6421 15.0869L15.5824 16.1485Z"
                fill="#afa7a7"
              ></path>
            </g>
          </svg>
        </button>
      </motion.form>

      <div
        className={`h-64 overflow-hidden ${
          pathname === "/recomended" ? "" : "hidden"
        }`}
      >
        <Scrollbars>
          {searchResults?.length > 0 &&
            searchResults.map((movie) => (
              <div
                key={movie._id}
                className="bg-black w-full flex items-center p-1 rounded-xl shadow relative mb-2 z-50 cursor-pointer"
                style={{ minHeight: "100px" }}
              >
                <div className="flex-grow p-3">
                  <div
                    className="font-semibold text-gray-200 w-40 text-sm"
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {movie.name}
                  </div>
                  <div className="flex row-auto text-sm text-gray-400">
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#bbb9b9"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                          stroke="#bbb9b9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                    {movie.imdb_rating.toFixed(1)} | {movie.year} |
                    {formatMovieLength(movie.length)}
                  </div>
                </div>
                <div className="flex items-center space-x-4 absolute right-0 top-0 bottom-0">
                  <img
                    src={`${imageProtocol}${imageBaseURl}${imagePath}${movie.thumbnail}`}
                    alt="My profile"
                    className="w-auto h-2/3"
                    style={{ transform: "skew(-10deg)" }}
                  />
                </div>
              </div>
            ))}
        </Scrollbars>
      </div>
    </>
  )
}

export default SearchBar

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Logo from "../img/logo.png"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { Tooltip } from "@mui/material"
import happyEmoji from "./assets/happy.gif"
import sadEmoji from "./assets/sad.gif"
import angryEmoji from "./assets/angry.gif"
import TimerProgress from "./TimerProgress"
import SearchBar from "./SearchBar"
import { usePathname } from "next/navigation"
import { shouldDisplayText } from "@/util/checkPath"

type userType = {
  userName: String
  mood: String
}

type propsType = {
  // hours: number
  // minutes: number
}

const UserAuthHeader: React.FC<propsType> = (): JSX.Element => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [tokenCookie, setTokenCookie] = useState<string | undefined>()
  const [userCookie, setUserCookie] = useState<userType | undefined>()

  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)

  const router = useRouter()

  const pathname = usePathname()

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const userString = Cookies.get("user")
    const user = userString ? JSON.parse(userString) : null
    setUserCookie(user)

    const tkn = Cookies.get("token")
    setTokenCookie(tkn)
  }, [])

  const handleLogout = () => {
    Cookies.remove("token")
    Cookies.remove("user")

    // Redirect to the login page after logout
    router.push("/auth/login")
  }

  const setEmoji = (mood: any) => {
    if (mood === "happy") {
      return (
        <Tooltip title={mood}>
          <li className="md:text-2xl cursor-pointer">
            {/* 😊 */}
            <Image src={happyEmoji} alt="😊" width="32" height="32" />
          </li>
        </Tooltip>
      )
    } else if (mood === "sad") {
      return (
        <Tooltip title={mood}>
          <li className="md:text-2xl cursor-pointer">
            {/* 😔 */}
            <Image src={sadEmoji} alt="😔" width="32" height="32" />
          </li>
        </Tooltip>
      )
    } else if (mood === "angry") {
      return (
        <Tooltip title={mood}>
          <li className="md:text-2xl cursor-pointer">
            {/* 😡 */}
            <Image src={angryEmoji} alt="😡" width="32" height="32" />
          </li>
        </Tooltip>
      )
    } else {
      return null
    }
  }

  const userString = Cookies.get("user")
  const user = userString ? JSON.parse(userString) : null
  // console.log("cookies", user)

  useEffect(() => {
    setHours(Math.floor(user?.watch_limit / 60))
    setMinutes(user?.watch_limit % 60)
  }, [user?.watch_limit])

  return (
    <div
      style={{ backgroundImage: "", backgroundSize: "cover" }}
      className="bg-black"
    >
      <div
        className=""
        // style={{
        //   backgroundImage: 'linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,1))',
        // }}
      >
        <nav className="text-white md:h-[80px] flex flex-row md:flex-row justify-between p-5 items-center md:items-start">
          <div className="md:mb-0 mt-5">
            <Link href="/">
              <Image
                src={Logo}
                width={150}
                height={25}
                alt="netflix"
                className="md:w-auto md:h-auto md:-mt-12 w-full h-20"
              />
            </Link>
          </div>

          <div
            className={`md:flex ${
              isMenuOpen
                ? "block absolute -right-5 top-10 text-black bg-red-700 p-2 z-20"
                : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row">
              <li
                className={`mb-2 md:mb-0 md:ml-2 md:mt-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:flex sm:hidden ${
                  pathname === "/" ? "border-b-2 border-red-500" : ""
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`mb-2 md:mb-0 md:ml-2 md:mt-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:flex sm:hidden ${
                  pathname === "/recomended" ? "border-b-2 border-red-500" : ""
                }`}
              >
                <Link href="/recomended">Recomended</Link>
              </li>
              <li
                className={`mb-2 md:mb-0 md:ml-2 md:mt-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:flex sm:hidden ${
                  pathname === "/movie/new" ? "border-b-2 border-red-500" : ""
                }`}
              >
                <Link href="/movie/new">Movies</Link>
              </li>

              <li
                className={`mb-2 md:mb-0 md:ml-2 md:mt-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:flex sm:hidden ${
                  pathname === "/my-list" ? "border-b-2 border-red-500" : ""
                }`}
              >
                <Link href="/my-list">My List</Link>
              </li>
              <li
                onClick={() => router.push("/user-prefrence")}
                className={`mb-2 md:mb-0 md:ml-2 md:mt-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:flex sm:hidden ${
                  pathname === "/user-prefrence"
                    ? "border-b-2 border-red-500"
                    : ""
                }`}
              >
                Preference
              </li>
              {/* Seach Bar */}
              <div className="ml-8 md:block hidden">
                {shouldDisplayText(pathname) && <SearchBar />}
              </div>

              <span className="w-full h-[1px] bg-gray-50 mb-2 md:hidden sm:flex" />
              <span className="md:hidden flex text-white md:hover:text-red-600 hover:text-black mb-2 md:mb-0 md:ml-2">
                Mood {setEmoji(userCookie?.mood)}
              </span>
              <li className="mb-2 md:mb-0 md:ml-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black flex sm:hidden capitalize">
                {userCookie ? userCookie.userName : "PROFILE"}
              </li>
              {tokenCookie ? (
                <li
                  className="mb-2 md:mb-0 md:ml-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black flex sm:hidden"
                  onClick={handleLogout}
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    id="sign-out-left-3"
                    data-name="Flat Line"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transition: "fill 0.3s" }}
                    className="icon flat-line hover:fill-red-500 hover:stroke-red-500 fill-white stroke-white"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <polyline id="primary" points="6 15 3 12 6 9"></polyline>
                      <line
                        id="primary-2"
                        data-name="primary"
                        x1="3"
                        y1="12"
                        x2="17"
                        y2="12"
                      ></line>
                      <path
                        id="primary-3"
                        data-name="primary"
                        d="M17,20h3a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H17"
                      ></path>
                    </g>
                  </svg>
                </li>
              ) : (
                <li className="mb-2 md:mb-0 md:ml-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:flex sm:hidden">
                  Login
                </li>
              )}
            </ul>
          </div>
          <nav className="flex flex-col md:flex-row md:justify-end -mt-5">
            <ul className="flex text-white md:mr-2">
              {/* Hidden For Later Use */}
              <li className="mb-2 md:mb-0 md:ml-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black hidden">
                <div className="relative mr-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-[30px] text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    |
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-inherit h-[30px] border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-3/4 md:w-full pl-10 p-2.5 mt-2 sm:mt-4"
                    placeholder="Search"
                    required
                  />
                </div>
              </li>
              {/* In Future */}
              {/* <div className="w-[200px] md:flex items-center mt-6">
                <TimerProgress hours={hours} minutes={minutes} />
              </div> */}

              <div className="hidden md:flex items-center mt-4">
                {setEmoji(userCookie?.mood)}
                <li className="mb-2 md:mb-0 md:ml-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:block sm:hidden uppercase">
                  {userCookie ? userCookie.userName : "PROFILE"}
                </li>
                {tokenCookie ? (
                  <li
                    className="mb-2 md:mb-0 md:ml-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:block sm:hidden"
                    onClick={handleLogout}
                    title="Sign Out"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      id="sign-out-left-3"
                      data-name="Flat Line"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transition: "fill 0.3s" }}
                      className="icon flat-line hover:fill-red-500 hover:stroke-red-500 fill-white stroke-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <polyline
                          id="primary"
                          points="6 15 3 12 6 9"
                        ></polyline>
                        <line
                          id="primary-2"
                          data-name="primary"
                          x1="3"
                          y1="12"
                          x2="17"
                          y2="12"
                        ></line>
                        <path
                          id="primary-3"
                          data-name="primary"
                          d="M17,20h3a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H17"
                        ></path>
                      </g>
                    </svg>
                  </li>
                ) : (
                  <li className="mb-2 md:mb-0 md:ml-2 cursor-pointer text-white md:hover:text-red-600 hover:text-black md:block sm:hidden">
                    LOGIN
                  </li>
                )}
              </div>
            </ul>
          </nav>
          <div className="md:hidden">
            {/* Burger icon for small screens */}
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default UserAuthHeader

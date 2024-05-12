"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Logo from "../img/logo.png"
import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileHeader from "./MobileHeader"
import { useDispatch } from "react-redux"
import { setEmailData } from "@/redux/emailSlice"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { useTranslation } from "next-i18next"
import { motion } from "framer-motion"
import headerBG from "../img/header.jpg"

type userType = {
  userName: String
}

const Header: React.FC = (): JSX.Element => {
  const { t } = useTranslation("common")

  const [show, setShow] = useState(false)

  const pathname = usePathname()

  const [isLoading, setIsLoading] = useState(false)

  const [email, setEmail] = useState<string | null>()

  const [tokenCookie, setTokenCookie] = useState<string | undefined>()
  const [userCookie, setUserCookie] = useState<userType | undefined>()

  const dispatch = useDispatch()
  const router = useRouter()

  const handleChange = (locale: any) => {
    // i18n.changeLanguage(locale)
    router.push(router.pathname, router.asPath, { locale })
  }

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault()
    // Set isLoading to true to trigger the loading animation
    setIsLoading(true)
    /* @ts-ignore */
    dispatch(setEmailData({ email: email }))

    setTimeout(() => {
      // Reset isLoading to false after the action is completed
      router.push("/auth/sign-up")
      setIsLoading(false)
    }, 2000)
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

  return (
    <>
      <div
        style={{
          // backgroundImage: `url(https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png)`,
          backgroundImage: `url(https://res-console.cloudinary.com/dcdchgx6z/thumbnails/v1/image/upload/v1714397006/aGVhZGVyX2QyaGY3bA==/drilldown)`,
          backgroundSize: "cover",
        }}
        className="hidden sm:block lg:block h-screen"
      >
        <div className="h-screen" style={{ background: "rgba(0,0,0,0.8)" }}>
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white h-[40px] flex justify-between p-5"
          >
            <div className="">
              <Link href="/">
                <Image
                  src={Logo}
                  width={200}
                  style={{ marginTop: "0" }}
                  // height={45}
                  alt="netflix"
                />
              </Link>
            </div>
            {pathname === "/auth/login" ||
            pathname === "/auth/get-password-token" ||
            pathname === "/auth/reset-password" ? (
              <></>
            ) : (
              <ul className="flex justify-center">
                <li className="rounded-sm mr-[20px] text-left p-2">
                  {t("News")}
                </li>
                <li className="rounded-sm mr-[20px] text-left p-2">
                  {/* <button
                    id="dropdownDefaultButton"
                    onClick={() => setShow(!show)}
                    data-dropdown-toggle="dropdown"
                    className="border rounded-sm w-[120px] h-[30px] mr-[20px] text-left p-2"
                  >
                    <span className="flex justify-between items-center text-xs ml-2 ">
                      English
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-down"
                        viewBox="0 0 16 16"
                        id="IconChangeColor"
                      >
                        <path
                          d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                          id="mainIconPathAttribute"
                        ></path>
                      </svg>
                    </span>
                  </button> */}
                  {/* <!-- Dropdown menu --> */}
                  <select
                    className="block px-0 w-[120px] h-[30px] text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer cursor-pointer"
                    onChange={(e) => handleChange(e.target.value)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      <path
                        d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
                        id="mainIconPathAttribute"
                      ></path>
                    </svg>
                    <option value="en" className="text-black">
                      English
                    </option>
                    <option value="hi" className="text-black">
                      Hindi
                    </option>
                  </select>
                  {/* <div
                    id="dropdown"
                    className={`z-10 ${
                      show ? "" : "hidden"
                    } bg-white divide-y divide-gray-100 rounded-lg shadow w-[120px] dark:bg-gray-700`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-red-600"
                        >
                          English
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-red-600"
                        >
                          Hindi
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </li>
                <li>
                  {tokenCookie ? (
                    <div className="flex items-center">
                      <p className="text-xl capitalize cursor-pointer hover:text-red-600 mx-2">
                        {userCookie && userCookie.userName}
                      </p>
                      <p
                        className="text-xl capitalize cursor-pointer hover:text-red-600"
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
                      </p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center focus:outline-none text-white bg-[#ff1e1e] font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 p-4 h-[30px]"
                    >
                      <Link href="/auth/login">{t("Sign In")}</Link>
                    </button>
                  )}
                </li>
              </ul>
            )}
          </motion.nav>

          {pathname === "/auth/login" ||
          pathname === "/auth/get-password-token" ||
          pathname === "/auth/reset-password" ? (
            <></>
          ) : (
            <div className="flex h-screen items-center justify-center">
              <div className="m-auto p-5 text-center">
                <div className="flex justify-center">
                  <div className="w-2/4 p-4 text-left">
                    <p className="text-2xl text-white mb-4">
                      {t("Welcome")}
                      <span className="text-gray-400"> ───────────────</span>
                    </p>

                    <p className="text-8xl font-bold text-white">
                      {t("Unlimited")}
                    </p>

                    <p className="text-xl text-white my-4">
                      {t("watchCancel")}
                    </p>

                    {tokenCookie ? (
                      <div className="flex items-center justify-center w-full mt-2">
                        <button
                          className="hover:bg-red-900 focus:outline-none text-white text-center bg-[#ff1e1e] rounded text-xl p-4 w-48 h-[60px] ml-2"
                          onClick={() => router.push("/recomended")}
                        >
                          {t("Continue")}
                        </button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleClick}
                        className="flex  items-center justify-start mt-2 mx-auto"
                      >
                        <input
                          className="w-[400px] bg-black focus:outline-white h-[60px] focus:bg-transparent opacity-60 placeholder-white p-2 rounded border-2 text-white"
                          placeholder={t("Enter email")}
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />

                        <button
                          type="submit"
                          className={`flex items-center justify-center hover:bg-red-900 focus:outline-none text-white text-center bg-[#ff1e1e] rounded text-xl p-4 w-48 h-[60px] ml-2 ${
                            isLoading ? "opacity-70" : ""
                          }`}
                          // onClick={handleClick}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <svg
                              className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
                              viewBox="0 0 24 24"
                            ></svg>
                          ) : (
                            <>{`${t("Get Started")} >`}</>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                  <div className="w-50 p-4 flex items-center justify-center">
                    <Link href="/recomended">
                      <div className="p-12">
                        <div className="flex justify-center items-center h-28 w-28 rounded-full bg-red-500 relative hover:cursor-pointer ml-2">
                          {/* Play icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-white"
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
                        <p className="text-white text-xl font-bold uppercase underline">
                          {t("Watch Now")}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden">
        <MobileHeader
          handleClick={handleClick}
          setEmail={setEmail}
          isLoading={isLoading}
          handleChange={handleChange}
        />
      </div>
    </>
  )
}

export default Header

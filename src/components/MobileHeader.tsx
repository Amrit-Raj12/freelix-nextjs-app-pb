// MobileHeader.js

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Logo from "../img/logo.png"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

type userType = {
  userName: String
}

type PropType = {
  handleClick: (e: React.FormEvent) => void
  setEmail: (e: string | null) => void
  isLoading: boolean
  handleChange: (locale: string) => void
}

const MobileHeader: React.FC<PropType> = ({
  handleClick,
  setEmail,
  isLoading,
  handleChange,
}) => {
  const [show, setShow] = useState(false)
  const pathname = usePathname()
  // const [isLoading, setIsLoading] = useState(false)

  const [tokenCookie, setTokenCookie] = useState<string | undefined>()
  const [userCookie, setUserCookie] = useState<userType | undefined>()

  const router = useRouter()
  const { t } = useTranslation("common")

  // const handleClick = (e:  React.FormEvent) => {
  //   e.preventDefault()
  //   // Set isLoading to true to trigger the loading animation
  //   setIsLoading(true);

  //   // Simulate an asynchronous action (e.g., API call) with setTimeout
  //   setTimeout(() => {
  //     // Reset isLoading to false after the action is completed
  //     setIsLoading(false);
  //   }, 2000);
  // };

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
    <div
      className="sm:hidden bg-cover bg-center bg-fixed h-[800px] relative"
      style={{
        backgroundImage: `url(https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png)`,
      }}
    >
      {/* Mobile View */}
      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div className="absolute top-0 left-0 w-full p-5">
          <Link href="/">
            <Image src={Logo} width={150} height={25} alt="netflix" />
          </Link>
        </div>
        <nav
          className={`absolute top-8 right-0 ${
            pathname === "/auth/login" ||
            pathname === "/auth/get-password-token" ||
            pathname === "/auth/reset-password"
              ? "hidden"
              : "flex"
          } justify-between items-center p-5`}
        >
          <button
            id="mobileDropdownButton"
            onClick={() => setShow(!show)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 1.5A.5.5 0 0 1 2.5 1h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 1.5zM2.5 4A.5.5 0 0 0 2 4.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2.5 4zM2 6.5A.5.5 0 0 1 2.5 6h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 6.5zM2.5 9A.5.5 0 0 0 2 9.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2.5 9zM2 11.5A.5.5 0 0 1 2.5 11h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 11.5zM6 13a.5.5 0 0 1 .5.5H11a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </nav>
        <div
          id="mobileDropdown"
          className={`${
            show ? "block" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute top-20 right-4`}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              {/* <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Language
              </a> */}
              <select
                className="block w-[120px] h-[30px] text-[18px] bg-transparent border-0 border-b-2 px-3 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer cursor-pointer"
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
                <option value="" className="text-black hidden" disabled>
                  Language
                </option>
                <option value="en" className="text-black text-[16px]">
                  English
                </option>
                <option value="hi" className="text-black text-[16px]">
                  Hindi
                </option>
              </select>
            </li>
            {/* <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                SignIn
              </a>
            </li> */}
            {tokenCookie ? (
              <li>
                <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-xl cursor-pointer capitalize">
                  {userCookie && userCookie.userName}
                </p>
                <p
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-xl cursor-pointer"
                  onClick={handleLogout}
                >
                  {/* {t("Logout")} */}
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
                </p>
              </li>
            ) : (
              <button
                type="button"
                className="flex items-center focus:outline-none focus:bg-red-900 text-white bg-[#ff1e1e] font-medium rounded text-sm py-2.5 mr-2 mb-2 p-4 h-[30px] w-full"
              >
                <Link
                  href="/auth/login"
                  className="block px-4 py-2 hover:bg-red-900 hover:opacity-100 h-[30px] w-full hover:text-black"
                >
                  {t("Sign In")}
                </Link>
              </button>
            )}
          </ul>
        </div>
      </div>
      <div
        className={`${
          pathname === "/auth/login" ||
          pathname === "/auth/get-password-token" ||
          pathname === "/auth/reset-password"
            ? "hidden"
            : "flex"
        } items-center justify-center h-full`}
      >
        <div className="m-auto p-5 text-center text-white z-50">
          <p className="text-xl mb-4">{t("Welcome")}</p>
          <p className="text-4xl font-bold">{t("Unlimited")}</p>
          <p className="text-xl mt-4">{t("watchCancel")}</p>
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
              className="flex flex-col items-center mt-4"
            >
              <input
                className="w-full bg-black focus:outline-white h-12 focus:bg-transparent opacity-60 placeholder-white p-2 rounded border-2 text-white"
                placeholder={t("Enter email")}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <button
                type="submit"
                className={`mt-2 bg-[#ff1e1e] text-white text-xl p-2 w-48 rounded ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-red-900"
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
      </div>
    </div>
  )
}

export default MobileHeader

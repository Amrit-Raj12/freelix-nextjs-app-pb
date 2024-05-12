import Image from "next/image"
import React from "react"
import Logo from "../img/logo.png"
import Link from "next/link"
import { useSelector } from "react-redux"
// import { selectAuthData } from '@/redux/store'
import { clearUser, selectUser } from "@/redux/userSlice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { clearEmail } from "@/redux/emailSlice"
import { usePathname } from "next/navigation"

const AuthHeader = () => {
  const dispatch = useDispatch()

  const userData = useSelector(selectUser)

  const router = useRouter()

  const pathname = usePathname()

  // console.log("user--->", userData)

  const handleLogout = () => {
    dispatch(clearUser())
    dispatch(clearEmail())
    router.push("/auth/login")
  }

  return (
    <div className="h-20  border-b-2 bg-white">
      <nav className="text-white flex justify-between items-center px-5">
        <div className="h-10 sm:h-20">
          <Link href="/">
            <Image src={Logo} width={150} height={25} alt="netflix" />
          </Link>
        </div>
        {pathname != "/auth/sign-up" && (
          <div className="flex items-center justify-center">
            {/* @ts-ignore */}
            {userData?.user?.userName ? (
              <div className="flex items-center justify-center">
                <ul className="flex items-center">
                  {/* @ts-ignore */}
                  <li className="mr-4 cursor-pointer hover:text-black font-bold text-[#ff1e1e] text-xl md:relative md:top-0 md:right-0 absolute top-8 right-12 capitalize">
                    {userData?.user?.userName}
                  </li>
                  <li
                    className="cursor-pointer hover:text-black font-bold text-[#ff1e1e] text-xl md:relative md:top-0 md:right-0 absolute top-8 -right-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="text-red-500 hover:text-black font-bold text-xl md:relative md:top-0 absolute top-8 right-0"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  )
}

export default AuthHeader

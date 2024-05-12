import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setUserData } from "@/redux/userSlice"
import Cookies from "js-cookie"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import { API_BASE_URL } from "@/constants/commonApi"

const Login: React.FC = (): JSX.Element => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    remember_me: false,
  })

  const [errorMessage, setErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const router = useRouter()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: e.target.value,
    }))
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      password: e.target.value,
    }))
  }

  const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      remember_me: e.target.checked,
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const postData = async (url = "", data = {}) => {
    const formData = new URLSearchParams(Object.entries(data))

    // console.log('formData', formData)

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: formData,
    })

    return response.json()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)

    postData(`${API_BASE_URL}/api/user/login`, user)
      .then((data) => {
        if (data?.success) {
          dispatch(setUserData({ token: data?.token, user: data?.user }))
          Cookies.set("token", data.token)
          Cookies.set("user", JSON.stringify(data.user))
          router.push("/recomended")
        } else {
          setErrorMessage(data?.message)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log("error", err)
        setIsLoading(false)
      })
  }

  return (
    <div className="m-auto p-5 absolute top-[40%] left-[50%] -translate-x-[40%] md:-translate-x-[50%] -translate-y-[30%] md:-translate-y-[50%]">
      <form onSubmit={handleSubmit}>
        {/* @ts-ignore */}
        <Card
          className="w-96 h-[31.25rem] text-white text-left p-5"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <p className="px-5 text-[2rem] font-[700]">Sign In</p>
          {/* @ts-ignore */}
          <CardBody className="flex flex-col gap-4">
            <span className="text-sm text-red-500 text-center">
              {errorMessage}
            </span>
            <div className="relative">
              {/* @ts-ignore */}
              <Input
                label="Email"
                size="lg"
                // value={email}
                onChange={handleEmailChange}
                className="text-white"
                required
              />
            </div>
            <div className="relative">
              {/* @ts-ignore */}
              <Input
                label="Password"
                size="lg"
                type={showPassword ? "text" : "password"}
                // value={password}
                onChange={handlePasswordChange}
                className="text-white"
                required
              />
              <div
                className="absolute inset-y-0 right-2 flex items-center px-3 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <span className="h-5 w-5 text-gray-500 text-sm cursor-pointer">
                    <VisibilityOffOutlinedIcon />
                  </span>
                ) : (
                  <span className="h-5 w-5 text-gray-500 text-sm cursor-pointer">
                    <RemoveRedEyeOutlinedIcon />
                  </span>
                )}
              </div>
            </div>
          </CardBody>
          {/* @ts-ignore */}
          <CardFooter className="pt-0">
            <button
              type="submit"
              className={`flex items-center justify-center focus:outline-none text-white text-center bg-[#ff1e1e] hover:bg-red-900 rounded text-xl mt-2 p-4 w-[100%] h-[40px] ${
                isLoading ? "opacity-70" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "Sign In"
              )}
            </button>
            <div className="text-center w-full flex justify-center">
              <Link
                className="float-right text-xs mt-3 hover:underline hover:text-gray-400"
                href="/auth/get-password-token"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="-ml-2.5 text-xs mt-5">
              {/* @ts-ignore */}
              <Checkbox
                label="Remember Me"
                className="w-4 h-4 text-white rounded-sm"
                onChange={handleRememberChange}
              />
              {/* <a className="float-right text-xs mt-3 hover:underline hidden" href='#'>Need Help?</a> */}
            </div>
            <Typography
              variant="small"
              className=" flex justify-left text-gray-400"
            >
              New to Freelix?
              <Link href="/auth/sign-up" className="text-white ml-1">
                Sign up now.
              </Link>
            </Typography>
            {/* <p className="text-[12px]">
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot. <span className="text-blue-500">Learn more.</span>
            </p> */}
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default Login

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
import AuthHeader from "@/components/AuthHeader"
import MobileScreen from "./MobileScreen"
import { useDispatch } from "react-redux"
// import { setAuthData } from "@/redux/store";
import { setUserData } from "@/redux/userSlice"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { clearEmail, selectEmail } from "@/redux/emailSlice"
import { API_BASE_URL } from "@/constants/commonApi"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import Link from "next/link"
import Cookies from "js-cookie"

const SignUpPage: React.FC = (): JSX.Element => {
  const emailData = useSelector(selectEmail)

  console.log("email", emailData)

  // const handleEmail = () => {
  //   dispatch(clearEmail())
  // }

  const [user, setUser] = useState({
    username: "",
    email: emailData?.email ? emailData?.email : "",
    password: "",
  })

  const [errorMessage, setErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      username: e.target.value,
    }))
  }

  const dispatch = useDispatch()

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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: emailData?.email ? emailData?.email : e.target.value,
    }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      password: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Perform your login logic using the 'user' state
    // console.log('Submitted user:', user);

    postData(`${API_BASE_URL}/api/user/signup`, user)
      .then((data) => {
        if (data?.success) {
          // console.log("resp", data)
          // dispatch(setAuthData({ token, user: userData }));
          // dispatch(setAuthData({ token: data?.token, user: data?.user }));
          const userData = {
            token: data?.token,
            user: data?.user,
          }
          dispatch(setUserData({ token: data?.token, user: data?.user }))
          Cookies.set("token", data.token)
          Cookies.set("user", JSON.stringify(data.user))
          router.push("/user-prefrence")
        } else {
          setErrorMessage(data?.message)
        }
      })
      .catch((err) => {
        console.log("error", err)
      })
  }

  const mobileProps = {
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    errorMessage,
    showPassword,
    togglePasswordVisibility,
  }

  return (
    <>
      <AuthHeader />
      <div
        className="hidden sm:flex sm:items-center sm:justify-center lg:block m-auto p-5 sticky"
        // style={{ top: "45%", left: "50%", transform: "translate(-50%, -45%)" }}
      >
        <form onSubmit={handleSubmit}>
          {/* @ts-ignore */}
          <Card className="w-[500px] text-black text-left p-5 radius">
            <p className="px-5 mb-2 text-sm">STEP 1 OF 2</p>
            <p className="px-5 mb-2 text-4xl font-bold">Welcome back!</p>
            <p className="px-5 mb-2 text-4xl font-bold">
              Joining Freelix is easy.
            </p>
            <p className="px-5 mb-2 text-xl">
              Enter your details and you&apos;ll be watching in no time.
            </p>
            {/* @ts-ignore */}
            <CardBody className="flex flex-col gap-4">
              <span className="text-sm text-red-500 text-center">
                {errorMessage}
              </span>
              {/* @ts-ignore */}
              <Input
                label="Username"
                size="lg"
                className="rounded-none"
                onChange={handleNameChange}
              />
              {/* @ts-ignore */}
              <Input
                label="Email"
                size="lg"
                className="rounded-none"
                defaultValue={emailData?.email ? emailData?.email : ""}
                // value={emailData?.email ? emailData?.email : ""}
                onChange={handleEmailChange}
              />
              <div className="relative">
                {/* @ts-ignore */}
                <Input
                  label="Password"
                  size="lg"
                  type={showPassword ? "text" : "password"}
                  // value={password}
                  onChange={handlePasswordChange}
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
                className="flex items-center justify-center focus:outline-none text-white text-center bg-[#ff1e1e] rounded text-xl mt-2 p-4 w-[100%] h-[60px]"
              >
                NEXT
              </button>
            </CardFooter>
            <div className="text-xs">
              <span className="text-sm mt-3 ml-2">
                Already Have An Account?
              </span>
              <Link
                className="text-sm mt-3 text-blue-500 hover:underline"
                href="/auth/login"
              >
                Login
              </Link>
            </div>
          </Card>
        </form>
      </div>
      <div className="md:hidden sm:hidden lg:hidden">
        <MobileScreen {...mobileProps} />
      </div>
    </>
  )
}

export default SignUpPage

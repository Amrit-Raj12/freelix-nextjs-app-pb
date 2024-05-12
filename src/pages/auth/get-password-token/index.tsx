import { API_BASE_URL } from "@/constants/commonApi"
import { selectUser } from "@/redux/userSlice"
import { getData } from "@/util/submitHandler"
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const GetPasswordToken: React.FC = () => {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [copyTitle, setCopyTitle] = useState("Copy")
  const [loading, setLoading] = useState(false)
  const [showGoTo, setShowGoTo] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const userData: any = useSelector(selectUser)

  const generateOTP = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    getData(`${API_BASE_URL}/api/user/reset/password?email=${email}`, {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${userData?.token}`,
    }).then(async (res) => {
      let data = await res
      // console.log("Response-------->>>>", data);
      if (data?.success) {
        let newOtp = data?.updatedUser?.reset_password_token
        setOtp(newOtp)
        setLoading(false)
        setShowGoTo(true)
      } else {
        setErrorMessage(data?.message)
      }
      setLoading(false)
      // setShowGoTo(false)
    })

    // const newOTP = '123456';
    // setOtp(newOTP);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(otp)
    setCopyTitle("Copied")

    setTimeout(() => {
      setCopyTitle("Copy")
    }, 2000)
  }

  useEffect(() => {}, [showGoTo])

  return (
    <div className="m-auto p-5 absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-[30%] md:-translate-y-[50%]">
      <form onSubmit={generateOTP} className="space-y-4">
        {/* @ts-ignore */}
        <Card
          className="w-96 h-[31.25rem] text-white text-left p-5"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <p className="px-5 text-[2rem] font-[700]">Forgot Password</p>
          {/* @ts-ignore */}
          <CardBody className="flex flex-col gap-4">
            <span className="text-sm text-red-500 text-center">
              {errorMessage}
            </span>
            <div className="relative">
              {/* @ts-ignore */}
              <Input
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-white"
                required
              />
            </div>
            <div className="relative">
              {/* @ts-ignore */}
              <Input
                label="OTP"
                type="text"
                id="otp"
                value={otp}
                readOnly
                className="text-white"
                required
              />
              <div className="absolute inset-y-0 right-2 flex items-center px-3 focus:outline-none">
                <span
                  className="text-xs cursor-pointer hover:text-blue-700 float-right"
                  onClick={copyToClipboard}
                >
                  {copyTitle}
                </span>
              </div>
            </div>
          </CardBody>
          {/* @ts-ignore */}
          <CardFooter className="pt-0">
            <button
              type="submit"
              className="flex items-center justify-center focus:outline-none text-white text-center bg-[#ff1e1e] hover:bg-red-900 rounded text-xl mt-2 p-4 w-[100%] h-[40px]"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "Get OTP"
              )}
            </button>
            {showGoTo && (
              <div className="w-full flex justify-start">
                <span className="text-xs mt-3">Go To:-</span>
                <Link
                  className="text-xs mt-3 hover:underline hover:text-gray-400"
                  href="/auth/reset-password"
                >
                  {" "}
                  Reset Password Page
                </Link>
              </div>
            )}
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default GetPasswordToken

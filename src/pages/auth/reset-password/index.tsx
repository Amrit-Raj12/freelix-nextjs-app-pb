import { API_BASE_URL } from "@/constants/commonApi"
import { selectUser } from "@/redux/userSlice"
import { getData, patchData, postData } from "@/util/submitHandler"
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSelector } from "react-redux"

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [copyTitle, setCopyTitle] = useState("Copy")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const userData: any = useSelector(selectUser)

  const router = useRouter()

  const updateHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const passwordData = {
      reset_password_token: otp,
      new_password: newPassword,
      confirm_password: confirmPassword,
      email: email,
    }

    patchData(
      `${API_BASE_URL}/api/user/reset/password`,
      {
        "Content-Type": "application/x-www-form-urlencoded",
        // "Authorization": `Bearer ${userData?.token}`,
      },
      passwordData
    ).then(async (res) => {
      let data = await res
      // console.log("Response-------->>>>", data);
      if (data?.success) {
        setLoading(false)
        router.push("/auth/login")
      } else {
        setErrorMessage(data?.message)
      }
      setLoading(false)
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

  return (
    <div className="m-auto p-5 absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-[30%] md:-translate-y-[50%]">
      <form onSubmit={updateHandler} className="space-y-4">
        {/* @ts-ignore */}
        <Card
          className="w-96 h-[31.25rem] text-white text-left p-5"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <p className="px-5 text-[2rem] font-[700]">Reset Password</p>
          {/* @ts-ignore */}
          <CardBody className="flex flex-col gap-4">
            <span className="text-sm text-red-500 text-center">
              {errorMessage}
            </span>
            <div className="relative">
              {/* @ts-ignore */}
              <Input
                label="Reset OTP"
                type="number"
                id="otp"
                name="reset_password_token"
                // value={email}
                onChange={(e) => setOtp(e.target.value)}
                className="text-white"
                required
              />
            </div>
            <div className="relative">
              {/* @ts-ignore */}
              <Input
                label="Email"
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="text-white"
                required
              />
            </div>

            <div className="relative">
              {/* @ts-ignore */}
              <Input
                label="New Password"
                type="password"
                id="new_password"
                name="new_password"
                onChange={(e) => setNewPassword(e.target.value)}
                className="text-white"
                required
              />
            </div>
            <div className="relative">
              {/* @ts-ignore */}
              <Input
                label="Confirm Password"
                type="password"
                id="confirm_password"
                name="confirm_password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-white"
                required
              />
            </div>
          </CardBody>
          {/* @ts-ignore */}
          <CardFooter className="pt-0">
            <button
              type="submit"
              className={`flex items-center justify-center focus:outline-none text-white text-center bg-[#ff1e1e] hover:bg-red-900 rounded text-xl mt-2 p-4 w-[100%] h-[40px] ${
                loading ? "opacity-70" : ""
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "Change Password"
              )}
            </button>
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
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default ResetPasswordPage

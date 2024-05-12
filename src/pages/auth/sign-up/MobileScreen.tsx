import { Input } from "@material-tailwind/react"
import React from "react"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import Link from "next/link"
import { useSelector } from "react-redux"
import { selectEmail } from "@/redux/emailSlice"

type propsType = {
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  errorMessage: string
  showPassword: boolean
  togglePasswordVisibility: () => void
}

const MobileScreen: React.FC<propsType> = ({
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  errorMessage,
  showPassword,
  togglePasswordVisibility,
}): JSX.Element => {
  const emailData = useSelector(selectEmail)

  return (
    <div className="text-black text-left p-5 rounded border border-gray-300">
      <div className="text-justify border-b-2">
        <p className="mb-2 text-sm">STEP 1 OF 2</p>
        <p className="mb-2 text-2xl font-bold">Welcome back!</p>
        <p className="mb-2 text-2xl font-bold">Joining Freelix is easy.</p>
        <p className="mb-2 text-sm">
          Enter your preference details and you&apos;ll be watching in no time.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
          {/* @ts-ignore */}
          <Input
            label="Email"
            size="lg"
            className="rounded-none mb-4"
            defaultValue={emailData?.email ? emailData?.email : ""}
            // value={emailData?.email ? emailData?.email : ""}
            onChange={handleEmailChange}
          />
        </div>

        {/* <div className="mb-4">
          <Input label="Password" size="lg" className="rounded-none" onChange={handlePasswordChange} />
        </div> */}
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
        <div className="mt-4">
          <button
            className="flex items-center justify-center focus:outline-none text-white text-center bg-[#ff1e1e] rounded text-xl mt-2 p-4 w-full h-[60px]"
            type="submit"
          >
            NEXT
          </button>
        </div>

        <div className="text-xs mt-2">
          <span className="text-sm mt-3 ml-2">Already Have An Account?</span>
          <Link
            className="text-sm mt-3 text-blue-500 hover:underline"
            href="/auth/login"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default MobileScreen

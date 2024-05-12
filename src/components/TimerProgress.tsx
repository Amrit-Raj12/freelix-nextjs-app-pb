import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

type propsType = {
  hours: number
  minutes: number
}

const TimerProgress: React.FC<propsType> = ({ hours, minutes }) => {
  const initialTime = {
    hours,
    minutes,
    seconds: 60,
  }
  const [progress, setProgress] = useState(100)
  const [totalSeconds, setTotalSeconds] = useState(
    initialTime.hours * 3600 + initialTime.minutes * 60 + initialTime.seconds
  )

  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1)

      if (totalSeconds == 30) {
        const confirmed = window.confirm(
          "Your session is about to expire. Click OK to go to Preferences Page to increase the duration."
        )
        if (confirmed) {
          window.location.href = "/user-prefrence"
        }
      }

      if (totalSeconds == 0) {
        Cookies.remove("token")
        Cookies.remove("user")

        // Redirect to the login page after logout
        router.push("/auth/login")
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [totalSeconds])

  useEffect(() => {
    setProgress(
      (totalSeconds /
        (initialTime.hours * 3600 +
          initialTime.minutes * 60 +
          initialTime.seconds)) *
        100
    )
  }, [totalSeconds])

  let color = "bg-green-500"
  if (progress <= 40 && progress > 20) {
    color = "bg-yellow-500"
  } else if (progress <= 20) {
    color = "bg-red-500"
  }
  return (
    <div>
      <div className={`w-full h-4 ${color} rounded-2xl flex flex-row-reverse`}>
        <div
          className={`h-full rounded-2xl bg-gray-200`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-sm text-[#ff1e1e]">{`Session Time Left: ${Math.floor(
        totalSeconds / 3600
      )}:${Math.floor((totalSeconds % 3600) / 60)}:${
        totalSeconds % 60 < 10 ? "0" : ""
      }${totalSeconds % 60}`}</div>
    </div>
  )
}

export default TimerProgress

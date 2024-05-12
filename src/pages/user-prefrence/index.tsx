import React, { useEffect, useState } from "react"
import AuthHeader from "@/components/AuthHeader"
import { useForm, SubmitHandler } from "react-hook-form"
import DesktopScreen from "./DesktopScreen"
import MobileScreen from "./MobileScreen"
import { useSelector } from "react-redux"
import { selectUser } from "@/redux/userSlice"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { API_BASE_URL } from "@/constants/commonApi"
import Cookies from "js-cookie"

interface FormData {
  watchLimit: number
  mood: string
  contentType: string
}

type moodType = {
  angry: boolean
  happy: boolean
  sad: boolean
}

const UserPreferencePage: React.FC = (): JSX.Element => {
  const { control, handleSubmit } = useForm<FormData>()

  const userData: any = useSelector(selectUser)

  const router = useRouter()

  // console.log('user--->', userData)

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [watchLimit, setWatchLimit] = useState(240)
  const [contentType, setContentType] = useState("all")
  const [mood, setMood] = useState<moodType>({
    angry: false,
    happy: true,
    sad: false,
  })

  const handleHoursChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHours(parseInt(e.target.value, 10))
  }

  const handleMinutesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMinutes(parseInt(e.target.value, 10))
  }

  const dispatch = useDispatch()

  // console.log('userData', userData)

  useEffect(() => {
    setContentType(userData?.user?.content_type)
    setWatchLimit(userData?.user?.watch_limit)
    setMood({
      happy: userData?.user.mood == "happy" ? true : false,
      sad: userData?.user.mood == "sad" ? true : false,
      angry: userData?.user.mood == "angry" ? true : false,
    })
  }, [userData])

  useEffect(() => {
    setHours(Math.floor(watchLimit / 60))
    setMinutes(watchLimit % 60)
  }, [watchLimit])

  const postData = async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/user/user-preference`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData?.token}`,
        // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcml0QGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2NWJiNGI3M2Q1OGZkMDc2M2Y1ZDA0OTIiLCJpYXQiOjE3MDcxMTczMzAsImV4cCI6MTcwNzIwMzczMH0.uNKdsHEr23uYYjP1oXFOW3sMEcRf7-3qkDyp6yCI3Zw"
        // Add your custom headers here
        // 'Custom-Header': 'value'
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })

    return response
  }

  const onSubmit: SubmitHandler<FormData> = async (e) => {
    /* @ts-ignore */
    e.preventDefault()

    // let userMood = ''
    let direct_mood
    if (mood["happy"]) {
      direct_mood = "happy"
    } else if (mood["sad"]) {
      direct_mood = "sad"
    } else if (mood["angry"]) {
      direct_mood = "angry"
    }

    let newWatchLimit = hours * 60 + minutes

    const preferenceData = {
      content_type: contentType,
      watch_limit: newWatchLimit,
      mood: direct_mood,
    }

    let userData = Cookies.get("user")
    userData = userData ? JSON.parse(userData) : {}
    // console.log('preferenceData===========', preferenceData)
    postData(preferenceData).then((res) => {
      if (res.status == 200) {
        // dispatch(setUserData({ token: data?.token, user: data?.user }));

        /* @ts-ignore */
        userData.mood = preferenceData.mood
        /* @ts-ignore */
        userData.watch_limit = preferenceData.watch_limit
        /* @ts-ignore */
        userData.content_type = preferenceData.content_type
        Cookies.set("user", JSON.stringify(userData))
        router.push("/recomended")
      }
    })
  }

  return (
    <>
      <AuthHeader />
      <div className="hidden md:block">
        <DesktopScreen
          control={control}
          handleSubmit={() => {}}
          hours={hours}
          minutes={minutes}
          mood={mood}
          /* @ts-ignore */
          setMood={setMood}
          handleHoursChange={handleHoursChange}
          handleMinutesChange={handleMinutesChange}
          onSubmit={onSubmit}
          contentType={contentType}
          /* @ts-ignore */
          setContentType={setContentType}
        />
      </div>
      <div className="md:hidden mt-8 flex items-center justify-center">
        <MobileScreen
          control={control}
          handleSubmit={() => {}}
          hours={hours}
          minutes={minutes}
          handleHoursChange={handleHoursChange}
          handleMinutesChange={handleMinutesChange}
          onSubmit={onSubmit}
          mood={mood}
          setMood={setMood}
          contentType={contentType}
          /* @ts-ignore */
          setContentType={setContentType}
        />
      </div>
    </>
  )
}

export default UserPreferencePage

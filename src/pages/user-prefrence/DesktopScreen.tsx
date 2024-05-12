import { selectUser } from "@/redux/userSlice"
import React, { useEffect, useState } from "react"
import { SubmitHandler, Controller } from "react-hook-form"
import { useSelector } from "react-redux"

interface DesktopScreenProps {
  control: any
  handleSubmit: SubmitHandler<any>
  hours: number
  minutes: number
  handleHoursChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handleMinutesChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onSubmit: SubmitHandler<any>
  setMood: () => void
  mood: {
    happy: boolean
    sad: boolean
    angry: boolean
  }
  contentType: string
  setContentType: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const DesktopScreen: React.FC<DesktopScreenProps> = ({
  control,
  handleSubmit,
  hours,
  minutes,
  handleHoursChange,
  handleMinutesChange,
  onSubmit,
  // handleMoodChange,
  mood,
  setMood,
  contentType,
  setContentType,
}): JSX.Element => {
  const userData = useSelector(selectUser)

  // console.log('userData', userData)
  // const [mood, setMood] = useState(false)

  useEffect(() => {}, [mood])

  return (
    <div
      className="m-auto p-5 flex items-center justify-center"
      // style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      <div className="w-[500px] text-black text-left p-5 rounded border border-gray-300">
        <p className="px-5 mb-2 text-sm">STEP 2 OF 2</p>
        <p className="px-5 mb-2 text-4xl font-bold">Welcome!</p>
        <p className="px-5 mb-2 text-4xl font-bold">Joining Netflix is easy.</p>
        <p className="px-5 mb-2 text-xl">
          Enter your preference details and you&apos;ll be watching in no time.
        </p>
        <form className="mx-4" onSubmit={onSubmit}>
          <div className="hidden">
            <label
              htmlFor="watchLimit"
              className="block text-sm font-medium text-black-700"
            >
              Watch Limit
            </label>
          </div>
          <div className="flex my-2 hidden">
            <div className="w-1/2">
              <label className="text-black-700 text-sm font-bold mb-2 mr-2">
                Hours:
              </label>
              <select
                className="appearance-none border rounded w-2/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                value={hours}
                onChange={handleHoursChange}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="text-black-700 text-sm font-bold mb-2 mr-2">
                Minutes:
              </label>
              <select
                className="appearance-none border rounded w-2/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                value={minutes}
                onChange={handleMinutesChange}
              >
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4 hidden">
            <p className="text-gray-600 mt-2">
              You Selected: {hours} hours, {minutes} minutes
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black-700">
              Mood
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                {/* {console.log('mood', mood)} */}
                <input
                  type="radio"
                  name="mood"
                  className="mr-2"
                  // defaultChecked={moodProps.happy}
                  // onChange={handleMoodChange}
                  checked={mood?.happy}
                  onChange={() =>
                    /* @ts-ignore */
                    setMood({ ...mood, angry: true, sad: false, happy: true })
                  }
                />
                😄 Happy
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="mood"
                  className="mr-2"
                  // defaultChecked={moodProps.sad}
                  checked={mood?.sad}
                  onChange={() =>
                    /* @ts-ignore */
                    setMood({ ...mood, angry: false, sad: true, happy: false })
                  }
                />
                😢 Sad
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="mood"
                  className="mr-2"
                  // defaultChecked={moodProps.angry}
                  checked={mood?.angry}
                  onChange={() =>
                    /* @ts-ignore */
                    setMood({ ...mood, angry: true, sad: false, happy: false })
                  }
                />
                😠 Angry
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="contentType"
              className="block text-sm font-medium text-black-700"
            >
              Content Type
            </label>
            <select
              id="contentType"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue={contentType}
              /* @ts-ignore */
              onChange={(e) => setContentType(e.target.value)}
            >
              <option value="movies">Movies</option>
              <option value="series">Series</option>
              <option value="all">All</option>
            </select>
          </div>
          <div className="mt-4">
            <button
              className="flex items-center justify-center focus:outline-none text-white text-center bg-[#ff1e1e] rounded text-xl mt-2 p-4 w-full h-[60px]"
              type="submit"
            >
              Let&apos;s Watch
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DesktopScreen

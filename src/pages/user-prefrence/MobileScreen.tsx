import React from "react"
import { SubmitHandler, Controller } from "react-hook-form"

interface MobileScreenProps {
  control: any
  handleSubmit: SubmitHandler<any>
  hours: number
  minutes: number
  handleHoursChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handleMinutesChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onSubmit: SubmitHandler<any>
  mood: boolean | any
  setMood: (p: any) => void
  contentType: string
  setContentType: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const MobileScreen: React.FC<MobileScreenProps> = ({
  control,
  handleSubmit,
  hours,
  minutes,
  handleHoursChange,
  handleMinutesChange,
  onSubmit,
  mood,
  setMood,
  contentType,
  setContentType,
}): JSX.Element => {
  return (
    <div className="text-black text-left p-5 rounded border border-gray-300 w-4/5">
      <div className="text-justify border-b-2">
        <p className="mb-2 text-sm">STEP 2 OF 2</p>
        <p className="mb-2 text-2xl font-bold">Welcome back!</p>
        <p className="mb-2 text-2xl font-bold">Joining Netflix is easy.</p>
        <p className="mb-2 text-sm">
          Enter your preference details and you&apos;ll be watching in no time.
        </p>
      </div>

      <form className="mt-4" onSubmit={onSubmit}>
        <label
          htmlFor="watchLimit"
          className="hidden text-sm font-medium text-black-700"
        >
          Watch Limit
        </label>
        <div className="hidden">
          <div className="w-full mr-2">
            <label
              htmlFor="hours"
              className="block text-sm font-medium text-black-700"
            >
              Hours:
            </label>
            <select
              id="hours"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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

          <div className="w-full">
            <label
              htmlFor="minutes"
              className="block text-sm font-medium text-black-700"
            >
              Minutes:
            </label>
            <select
              id="minutes"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
              <input
                type="radio"
                name="mood"
                checked={mood?.happy}
                onChange={() =>
                  setMood({ ...mood, angry: true, sad: false, happy: true })
                }
                className="mr-2"
              />
              😄 Happy
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="mood"
                checked={mood?.sad}
                onChange={() =>
                  setMood({ ...mood, angry: false, sad: true, happy: false })
                }
                className="mr-2"
              />
              😢 Sad
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="mood"
                checked={mood?.angry}
                onChange={() =>
                  setMood({ ...mood, angry: true, sad: false, happy: false })
                }
                className="mr-2"
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
  )
}

export default MobileScreen

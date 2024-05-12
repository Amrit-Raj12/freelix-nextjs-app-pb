import ReactPlayer from "react-player"
import { useState, useRef, useEffect } from "react"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import FastRewindIcon from "@mui/icons-material/FastRewind"
import FastForwardIcon from "@mui/icons-material/FastForward"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import SubtitlesIcon from "@mui/icons-material/Subtitles"
import AudiotrackIcon from "@mui/icons-material/Audiotrack"
import SettingsIcon from "@mui/icons-material/Settings"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import Slider from "@mui/material/Slider"
import UserAuthHeader from "@/components/UserAuthHeader"
import ContinueWatch from "@/components/ContinueWatch"
import Cookies from "js-cookie"
import { API_BASE_URL } from "@/constants/commonApi"
import WatchLoader from "@/components/ContentLoaders/WatchLoader"
import Loader from "@/components/Loader"
import MovieDetails from "@/components/MovieDetails"
import { useRouter } from "next/router"
import { parseCookies } from "nookies"

interface VideoPlayerProps {
  url: string
  title: string
  movieDetails: any
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url = "https://tartarus.feralhosting.com/firepig/JP/MOVIES/The%20Avengers%20%282012%29/The.Avengers.2012.720p.BluRay.x264.YIFY.mp4",
  title = "Avengers First",
  movieDetails,
}) => {
  const [playing, setPlaying] = useState<boolean>(true)
  const [volume, setVolume] = useState<number>(0.8)
  const [played, setPlayed] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const playerRef = useRef<ReactPlayer>(null)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [loading, setIsLoading] = useState(true)

  const [videoUrl, setVideoUrl] = useState(null)

  const token = Cookies.get("token")

  const router = useRouter()

  const movieID = router.query

  useEffect(() => {
    // Fetch video URL with access token included in headers
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}api/movie/stream-movie/65bb51a1d58fd0763f5d0497`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        if (response.status === 206) {
          const videoBlob = await response.blob()
          /* @ts-ignore */
          setVideoUrl(URL.createObjectURL(videoBlob))
          setIsLoading(false)
        } else {
          throw new Error("Failed to fetch video")
          setIsLoading(true)
        }
      } catch (error) {
        console.error("Error fetching video:", error)
        setIsLoading(true)
      }
    }

    const interval = setInterval(() => {
      setIsLoading(false)
    }, 1000) // Simulate loading progress with an interval

    return () => clearInterval(interval)

    // fetchVideoUrl()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        playerRef.current &&
        playerRef.current.getCurrentTime &&
        playerRef.current.getDuration
      ) {
        const currentTime = playerRef.current.getCurrentTime()
        const duration = playerRef.current.getDuration()
        setCurrentTime(currentTime)
        setDuration(duration)
        setPlayed(currentTime / duration)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
    setVolume(newValue as number)
  }

  const handleBackward = () => {
    playerRef.current &&
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
  }

  const handleForward = () => {
    playerRef.current &&
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
  }

  const handleNext = () => {
    // Logic to play the next video
  }

  const handleFullscreen = () => {
    /* @ts-ignore */
    const playerElement = playerRef.current.getInternalPlayer()
    if (playerElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        playerElement.requestFullscreen()
      }
    }
  }

  const calculateSliderColor = (value: number) => {
    const red = Math.round(255 * value)
    const green = Math.round(255 * (1 - value))
    return `rgb(${red}, ${green}, ${green})`
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`
  }

  const userString = Cookies.get("user")
  const user = userString ? JSON.parse(userString) : null

  useEffect(() => {
    setHours(Math.floor(user?.watch_limit / 60))
    setMinutes(user?.watch_limit % 60)
  }, [user?.watch_limit])

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // console.log("movieDetails", movieDetails)

  return (
    <div className="bg-black">
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full bg-black">
          <UserAuthHeader />
          <div className="relative" onClick={handlePlayPause}>
            <ReactPlayer
              ref={playerRef}
              url={url}
              light={movieDetails.content[0].thumbnail}
              /* @ts-ignore */
              // url={videoUrl}
              width={"100%"}
              height={1080}
              playing={playing}
              volume={volume}
              controls={false}
              onClick={handlePlayPause}
            />
            <div
              className="absolute bottom-0 left-0 right-0 flex flex-col lg:flex-row justify-between px-4 py-2 bg-transparent bg-opacity-75 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center">
                <button
                  onClick={handlePlayPause}
                  className="mr-2 text-white hover:text-[#ff1e1e] opacity-50"
                >
                  {playing ? <PauseIcon /> : <PlayArrowIcon />}
                </button>
                <button onClick={handleBackward} className="mr-2">
                  <FastRewindIcon
                    sx={{ color: "white" }}
                    className="opacity-50 hover:text-[#ff1e1e]"
                  />
                </button>
                <button onClick={handleForward}>
                  <FastForwardIcon
                    sx={{ color: "white" }}
                    className="opacity-50 hover:text-[#ff1e1e]"
                  />
                </button>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setVolume(volume === 0 ? 0.5 : 0)}
                  className="mr-2 opacity-50 text-white hover:text-[#ff1e1e]"
                >
                  {volume === 0 ? (
                    <VolumeOffIcon className="opacity-50 text-[#ff1e1e]" />
                  ) : (
                    <VolumeUpIcon />
                  )}
                </button>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={handleVolumeChange}
                  className="mr-2 lg:mx-2"
                  sx={{ width: "150px", color: calculateSliderColor(volume) }}
                  // color="secondary"
                />
                <span className="text-white lg:mr-4">
                  {movieDetails?.content[0].name}
                </span>
                <button>
                  <SkipNextIcon onClick={handleNext} sx={{ color: "white" }} />
                </button>
                <button>
                  <SettingsIcon sx={{ color: "white" }} />
                </button>
                <button>
                  <AudiotrackIcon sx={{ color: "white" }} />
                </button>
                <button>
                  <SubtitlesIcon sx={{ color: "white" }} />
                </button>
                <button onClick={handleFullscreen}>
                  <FullscreenIcon sx={{ color: "white" }} />
                </button>
              </div>
            </div>
            <div
              className="md:flex hidden items-center justify-end px-4 py-2 bg-transparent bg-opacity-75 absolute bottom-10 left-0 right-0"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-white">{formatTime(currentTime)}</span>
              <Slider
                min={0}
                max={1}
                step={0.001}
                value={played}
                onChange={(event, newValue) => {
                  if (playerRef.current) {
                    const duration = playerRef.current.getDuration()
                    if (duration) {
                      playerRef.current.seekTo((newValue as number) * duration)
                    }
                  }
                }}
                sx={{ flex: 1, mx: 1, color: "#FFFFFF" }}
              />
              <span className="text-white">{formatTime(duration)}</span>
            </div>
          </div>

          {/* <div className="bg-black h-[350px] flex items-center justify-center md:hidden">
            <h4 className="text-white border-[#ff1e1e] border-b absolute mx-2 -my-8 uppercase">
              Continue Watch
            </h4>
          </div> */}
          {/* Slider */}
          {/* <ContinueWatch /> */}
          <MovieDetails
            thumbnail={movieDetails?.content[0].thumbnail}
            name={movieDetails?.content[0].name}
            rating={movieDetails?.content[0].rating}
            language={movieDetails?.content[0].language}
            imdb={movieDetails?.content[0].imdb_rating}
            length={movieDetails?.content[0].length}
            description={movieDetails?.content[0].description}
            genre={movieDetails?.content[0].genre}
          />
        </div>
      )}
    </div>
  )
}

/* @ts-ignore */
export async function getServerSideProps({ params, req }) {
  const { id } = params
  const cookies = parseCookies({ req }) // Parse cookies from the request
  const authToken = cookies["token"] // Replace 'token' with the name of your token cookie

  try {
    const res = await fetch(`${API_BASE_URL}/api/movie/get-movie/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch")
    }
    const movieDetails = await res.json()
    return {
      props: {
        movieDetails,
      },
    }
  } catch (error) {
    console.error("Error fetching movieDetails:", error)
    return {
      props: {
        movieDetails: null,
      },
    }
  }
}

export default VideoPlayer

// url = 'https://tartarus.feralhosting.com/firepig/JP/MOVIES/The%20Avengers%20(2012)/The.Avengers.2012.720p.BluRay.x264.YIFY.mp4', title = 'Avengers First'

// url="https://tartarus.feralhosting.com/firepig/JP/MOVIES/The%20Avengers%20(2012)/The.Avengers.2012.720p.BluRay.x264.YIFY.mp4"

import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectMovies, removeMovie, removeAllMovies } from "@/redux/myLIstSlice"
import UserAuthHeader from "@/components/UserAuthHeader"
import Image from "next/image"
import { imageBaseURl, imagePath, imageProtocol } from "@/util/constant"

const MyList = () => {
  const movies = useSelector(selectMovies)
  const dispatch = useDispatch()
  const [addedMovies, setAddedMovies] = useState<string[]>([])

  useEffect(() => {
    const storedMovies = localStorage.getItem("addedMovies")
    if (storedMovies) {
      setAddedMovies(JSON.parse(storedMovies))
    }
  }, [])

  const handleDelete = (movieId: string) => {
    dispatch(removeMovie({ id: movieId }))
    const updatedMovies = addedMovies.filter((movieIdd) => movieIdd !== movieId)
    setAddedMovies(updatedMovies)
    localStorage.setItem("addedMovies", JSON.stringify(updatedMovies))
  }

  const handleRemoveAll = () => {
    dispatch(removeAllMovies())
    setAddedMovies([])
    localStorage.setItem("addedMovies", "")
  }

  const removeSlice = (item: number) => {
    // setListData(listData.filter((v, i) => i !== item))
  }

  return (
    <div className="bg-black h-screen">
      <UserAuthHeader />
      <div className="p-4 m-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-red-500">
          My List
        </p>
        <button onClick={handleRemoveAll}>Remove All</button>
        <div className="border-red-500 border">
          {movies?.length > 0 &&
            movies?.map((movie: any, index: number) => (
              // <li key={index} className="text-red-500">
              //   <p>Name: {movie.name}</p>
              //   <p>Rating: {movie.rating}</p>
              //   <p>Length: {movie.length}</p>
              //   <p>Language: {movie.language}</p>
              //   <button onClick={() => handleDelete(movie.id)}>Delete</button>
              //   <hr />
              // </li>

              <div
                key={index}
                className={`inline-flex bg-black justify-between items-center w-full px-4 py-4 text-sm font-medium border-b border-red-500 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
              >
                {/* <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg> */}
                {/* <div>
                <div className="inline-flex items-center">
                  <Image
                    src={`${imageProtocol}${imageBaseURl}${imagePath}${movie.thumbnail}`}
                    alt="Your image alt text"
                    height={340}
                    width={80}
                    className="h-[90px] object-fit object-center"
                  />
                  <p className="ml-2 text-red-500">{movie.name}</p>
                </div>

                <div>
                  <p className="ml-2 text-red-500">{movie.rating}</p>
                  <p className="ml-2 text-red-500">{movie.length}</p>
                  <p className="ml-2 text-red-500">{movie.language}</p>
                </div>
              </div> */}

                <div className="flex items-center">
                  <div className="bg-black-100 rounded-sm p-2.5">
                    <Image
                      src={`${imageProtocol}${imageBaseURl}${imagePath}${movie.thumbnail}`}
                      alt={movie.name}
                      height={340}
                      width={80}
                      className="h-[90px] object-fit object-center"
                    />
                  </div>
                  <div className="pl-3">
                    <div className="flex items-center text-sm leading-none">
                      <p className="font-semibold text-gray-200">
                        {movie.name}
                      </p>
                      <p className="text-red-500 ml-3">{movie.rating}</p>
                    </div>
                    <p className="text-xs md:text-sm leading-none text-red-500 mt-2">
                      {movie.length}
                    </p>
                    <p className="text-xs md:text-sm leading-none text-red-500 mt-2 uppercase">
                      {movie.language.join(", ")}
                    </p>
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleDelete(movie.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-x-circle"
                    viewBox="0 0 16 16"
                    id="IconChangeColor"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      id="mainIconPathAttribute"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                      id="mainIconPathAttribute"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MyList

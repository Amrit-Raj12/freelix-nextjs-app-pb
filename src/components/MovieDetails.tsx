import Image from "next/image"
import React, { useState } from "react"

interface MovieDetails {
  thumbnail: string
  name: string
  rating: string
  language: Array<string>
  length: string
  imdb: string
  description: string
  genre: Array<string>
}

const MovieDetails: React.FC<MovieDetails> = ({
  thumbnail,
  name,
  rating,
  language,
  length,
  imdb,
  description,
  genre,
}) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  const tabs = [
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
  ]

  return (
    <div>
      <div className="mb-10 z-50 md:w-[10%] w-full">
        {/* <h1 className="text-[#ff1e1e] mb-10 text-4xl">Movie Name</h1> */}
        {/* <h4 className="text-white border-[#ff1e1e] border-b mb-10 uppercase p-4 md:text-left text-center">
          Movie Name
        </h4> */}
      </div>
      <div className="md:my-20 -my-10 bg-black">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 bg-black flex">
            <figure className="mt-5 mb-4 ml-auto mr-auto sm:-mt-16 sm:mr-0 sm:ml-8 sm:mb-0 w-full relative">
              <div className="absolute w-10 h-12 -mt-3 -ml-3 bg-red-800 z-0 hidden sm:block" />
              <Image
                src={thumbnail}
                alt="gg"
                width={200}
                height={400}
                className="relative z-10 block ml-auto mr-auto sm:ml-0 sm:mr-0 sm:w-full sm:h-80 object-cover"
              />
            </figure>
          </div>
          <div className="w-full sm:w-9/12 bg-black flex">
            <div className="bg-black sm:-mt-16 sm:mr-8 w-full h-64 relative rounded-tr-lg text-red-800">
              <div className="flex-col text-gray-300 p-4">
                <p className="pt-4 text-2xl text-red-500 font-bold">{name}</p>
                <hr className=" bg-red-500" />
                <div className="text-md flex justify-between px-4 my-2">
                  <span className="font-bold ">
                    {length + " min"}
                    <span className="font-bold px-2 text-red-500"> | </span>
                    {language.join(", ")}
                    <span className="font-bold px-2 text-red-500"> | </span>
                    Crime, Drama, Thriller
                  </span>
                  <span className="font-bold"></span>
                </div>
                <p className="hidden md:block px-4 my-4 text-sm text-left">
                  {description}
                </p>

                <p className="flex text-md px-4 my-2">
                  <span className="font-bold text-red-500 mx-2"> Imdb: </span>
                  {imdb}/10
                  <span className="font-bold text-red-500 mx-2"> | </span>
                  <span className="font-bold text-red-500 mx-2">Genre:</span>
                  {genre.join(", ")}
                </p>

                <div className="text-xs hidden">
                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    TRAILER
                  </button>

                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    IMDB
                  </button>

                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    AMAZON
                  </button>
                </div>
              </div>
              {/* <ul className="flex flex-wrap pl-2 pr-2 mb-2 sm:pt-5 sm:pb-5 sm:pl-8 sm:pr-8 sm:space-x-6 text-sm font-light">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={
                      index === activeTab
                        ? "active cursor-pointer font-semibold border-b-2 border-red-600 leading-loose pr-3"
                        : "cursor-pointer hover:font-semibold border-b-2  hover:border-red-600 leading-loose pr-3"
                    }
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.title}
                  </li>
                ))}
              </ul>
              {activeTab === 0 && (
                <div className="flex flex-wrap sm:divide-x divide-red-400 pl-2 pr-2 sm:pl-8 sm:pr-8">
                  <div className="space-y-4 w-full  mb-4 sm:mb-auto sm:w-auto sm:pr-16">
                    <div className="flex items-center">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_UX32_CR0,0,32,44_AL_.jpg"
                        alt="gg"
                        className="w-10 h-10 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm font-bold text-gray-400">
                        Jake Gyllenhaal
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BMTg2NTk2MTgxMV5BMl5BanBnXkFtZTgwNjcxMjAzMTI@._V1_UX32_CR0,0,32,44_AL_.jpg"
                        alt="gg"
                        className="w-10 h-10 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm font-bold text-gray-400">
                        Amy Adams
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BMjE0NzM5MTc5OF5BMl5BanBnXkFtZTgwMjc3ODYxODE@._V1_UX32_CR0,0,32,44_AL_.jpg"
                        alt="gg"
                        className="w-10 h-10 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm font-bold text-gray-400">
                        Michael Shannon
                      </span>
                    </div>
                  </div>
                  <div className="mg-2 sm:mb-0 space-y-4 w-full sm:w-auto sm:pl-16">
                    <div className="flex items-center">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BMzE5MzI0MzY2OF5BMl5BanBnXkFtZTgwODE3MTk4MTE@._V1_UY44_CR1,0,32,44_AL_.jpg"
                        alt="gg"
                        className="w-10 h-10 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm font-bold text-gray-400">
                        Aaron Johnson
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BODY3MDQ4MTQ4Nl5BMl5BanBnXkFtZTgwNDU2NzU1MDE@._V1_UY44_CR1,0,32,44_AL_.jpg"
                        alt="gg"
                        className="w-10 h-10 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm font-bold text-gray-400">
                        Isla Fisher
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BZmE0YWNjNzYtMDE1OS00OTMzLTlkYTMtNWFjMzVkODZlOGE3XkEyXkFqcGdeQXVyMzUxMzIxMDA@._V1_UY44_CR7,0,32,44_AL_.jpg"
                        alt="gg"
                        className="w-10 h-10 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm font-bold text-gray-400">
                        Ellie Bamber
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && <div>Tab 2</div>}
              {activeTab === 2 && <div>Tab 3</div>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails

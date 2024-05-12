"use client"

import Image from "next/image"
import React, { useState } from "react"
import Logo from "../img/logo.png"
import { usePathname } from "next/navigation"
import Link from "next/link"

const MovieHeader = () => {
  return (
    <div
      style={{ backgroundImage: ``, backgroundSize: "cover" }}
      className="h-[800px]"
    >
      <div
        className="h-[62.5rem]"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,1))",
        }}
      >
        <nav className="text-white h-[40px] flex justify-between p-5">
          <div className="h-[20px]">
            <Link href="/">
              <Image
                src={Logo}
                width={150}
                style={{ marginTop: "-30px" }}
                height={25}
                alt="netflix"
              />
            </Link>
          </div>
          {
            <div>
              <ul className="flex justify-center">
                <li className="ml-2 cursor-pointer hover:text-gray-500">
                  <Link href="/">Home</Link>
                </li>
                <li className="ml-2 cursor-pointer hover:text-gray-500">
                  <Link href="/shows">TV Shows</Link>
                </li>
                <li className="ml-2 cursor-pointer hover:text-gray-500">
                  Movies
                </li>
                <li className="ml-2 cursor-pointer hover:text-gray-500">
                  Latest
                </li>
                <li className="ml-2 cursor-pointer hover:text-gray-500">
                  My List
                </li>
              </ul>
            </div>
          }
          <div>
            <div className="relative mr-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-[30px] text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                |
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-inherit h-[30px] border border-gray-300 text-white text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search"
                required
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MovieHeader

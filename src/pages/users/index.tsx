"use client"

import React, { useState } from "react"
import { Avatar } from "@material-tailwind/react"
import Image from "next/image"

const User = () => {
  const [hidden, setHidden] = useState(false)

  const [listData, setListData] = useState([
    {
      id: 0,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU",
      title: "Profile",
    },
    {
      id: 1,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU",
      title: "Settings",
    },
    {
      id: 2,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU",
      title: "Messages",
    },
    {
      id: 3,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU",
      title: "Download",
    },
    {
      id: 4,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU",
      title: "Download",
    },
    {
      id: 5,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU",
      title: "Download",
    },
    {
      id: 6,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU",
      title: "Download",
    },
  ])
  // const [ID, setID] = useState(0)

  let ID = 0

  const removeSlice = (item: number) => {
    setListData(listData.filter((v, i) => i !== item))
  }

  const lists = listData.map((item, index) => {
    return (
      <div
        key={index}
        className={`inline-flex bg-black justify-between items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
      >
        {/* <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg> */}
        <div className="inline-flex items-center">
          {/*@ts-ignore  */}
          {/* <Image src={item.avatar} alt='avatar' width={200} height={80} /> */}
          <video width={340} height={80} id="myvideo" className="h-[80px]">
            <source src={item.avatar} type="video/mp4" />
          </video>
          <p className="ml-2">{item.title}</p>
        </div>
        <div className="cursor-pointer" onClick={(e) => removeSlice(index)}>
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
    )
  })

  // const listData = [
  //   {
  //     id:0,
  //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU',
  //     title: 'Profile'
  //   },
  //   {
  //     id:1,
  //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU',
  //     title: 'Settings'
  //   },
  //   {
  //     id:2,
  //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU',
  //     title: 'Messages'
  //   },
  //   {
  //     id:3,
  //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU',
  //     title: 'Download'
  //   }
  // ]

  return (
    <div className="mt-[10%] p-5 absolute text-white">
      <p className="text-4xl font-bold text-white mb-4">My List</p>
      <div className="w-screen overflow-y-auto h-[400px]">
        <div className="w-[95%] text-white bg-blackborder border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {/* {listData?.map((item, idx) => (
              <div key={idx} className={`relative ${ hidden && 'hidden'} inline-flex justify-between items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
                <div className='inline-flex items-center'>
                <Avatar src={item.avatar} alt="avatar" size="sm" variant="circular" />
                <p className='ml-2'>{item.title}</p>
                </div>
                <div className='cursor-pointer' onClick={() => removeSlice(item.id)}>X</div> 
            </div>
           )) } */}
          {lists}
        </div>
      </div>
    </div>
  )
}

export default User

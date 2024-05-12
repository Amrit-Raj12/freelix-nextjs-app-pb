// "use client"

// import Image from 'next/image'
// import React, { Fragment, useState } from 'react'
// // import MovieImg from '../../img/image-1.jpg'
// import { 
//   Chip, 
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
// // import SuflImg from '../../img/image-1.jpg'
// import NewRelease from '@/components/NewRelease';
// import ContinueWatch from '@/components/ContinueWatch';
// import TrendingNow from '@/components/TrendingNow';
// import TopTen from '@/components/TopTen';

// const BrowsePage = () => {

//   const [open, setOpen] = useState(false)
 
//   const handleOpen = () => setOpen(!open)

//   const data = [
//     {
//       label: "HTML",
//       value: "html",
//       desc: `It really matters and then like it really doesn't matter.
//       What matters is the people who are sparked by it. And the people 
//       who are like offended by it, it doesn't matter.`,
//     },
//     {
//       label: "React",
//       value: "react",
//       desc: `Because it's about motivating the doers. Because I'm here
//       to follow my dreams and inspire other people to follow their dreams, too.`,
//     },
//     {
//       label: "Vue",
//       value: "vue",
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
//     {
//       label: "Angular",
//       value: "angular",
//       desc: `Because it's about motivating the doers. Because I'm here
//       to follow my dreams and inspire other people to follow their dreams, too.`,
//     },
//     {
//       label: "Svelte",
//       value: "svelte",
//       desc: `We're not always in the position that we want to be at.
//       We're constantly growing. We're constantly making mistakes. We're
//       constantly trying to express ourselves and actualize our dreams.`,
//     },
//   ];

//   return (
//     <div className='mt-[10%] p-5 absolute text-white'>
//         <div>
//             <Image src='https://images.thedirect.com/media/article_full/berlin.jpg' width={180} style={{marginTop: '-30px'}} height={25} alt='netflix' />
//         </div>
//         <div className='flex text-xs'>
//             <p className='m-2'>2020 |</p>
//             <Chip value="12+" className='bg-red-800 rounded-none w-[45px] h-[25px] m-2' />
//             <p className='m-2'>| 1h 55min |</p>
//             <p className='m-2'>Action</p>
//         </div>
//         <div className='w-[50%]'>
//           <p className='text-sm mb-3'>
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
//           </p>
//           <div className='flex'>
//           <button type="button" className="flex items-center focus:outline-none text-white bg-red-800 font-medium text-sm px-5 py-2.5 mr-2 mb-2 p-4 h-[30px]">
//             Play
//           </button>

//           <button type="button" className="flex items-center focus:outline-none text-white bg-inherit border border-current font-medium text-sm px-5 py-2.5 mr-2 mb-2 p-4 h-[30px]">
//             + MY LIST
//           </button>
//           </div>
//           <div className='mt-8 flex items-center'>
//             <div onClick={handleOpen} className='cursor-pointer rounded-full border hover:border-gray-600 w-[26] h-[26] p-2 mr-1'>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
//             </div>
//             WATCH TRAILER
//           </div>
//           {/* Tabs start */}
//           <div className='mt-5 hidden'>
//           <Tabs value="html">
//              {/* @ts-ignore */}
//             <TabsHeader className='bg-red-800 text-white rounded-none'>
//               {data.map(({ label, value }) => (
//                 //@ts-ignore 
//             <Tab className='bg-red-600 text-black rounded-none' key={value} value={value}>
//               {label}
//             </Tab>
//               ))}
//             </TabsHeader>
//             {/* @ts-ignore */}
//             <TabsBody>
//               {data.map(({ value, desc }) => (
//                 <TabPanel key={value} value={value} className='text-white'>
//                   {desc}
//                 </TabPanel>
//               ))}
//             </TabsBody>
//           </Tabs>
//         </div>
//       </div>

//         <Fragment>
//           {/* @ts-ignore */}
//           <Dialog
//           open={open}
//           handler={handleOpen}
//           animate={{
//             mount: { scale: 1, y: 0 },
//             unmount: { scale: 0.9, y: -100 },
//           }}
//           className='bg-inherit text-white border-0 outline-0 rounded-none'
//           size='lg'
//         >
//           {/* @ts-ignore */}
//           <DialogHeader className='border-0'>
//             <div className='flex justify-between w-[100%] text-white'>
//               <div>Mulan Official Tailer</div>
//             <div onClick={handleOpen} className='cursor-pointer'>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" id="mainIconPathAttribute" fill="#ffffff"></path> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
//             </div>
//           </div>
//         </DialogHeader>
//         {/* @ts-ignore */}
//         <DialogBody className='border-0 m-0 p-0' divider>
//           <iframe 
//             width="775"
//             height="515"
//             src='https://www.youtube.com/embed/KK8FHdFluOQ'
//             title='YouTube video player'
//             allow='accelerometer'
//             className=''
//             allowFullScreen></iframe> 
//         </DialogBody>
//       </Dialog>
//     </Fragment>

//     {/* Suffle Cards */}
//     <NewRelease />
//     <ContinueWatch />
//     <TrendingNow />
//     <TopTen />
//   </div>
//   )
// }

// export default BrowsePage


import React from 'react'

const index = () => {
  return (
    <div>Availbale Soon...</div>
  )
}

export default index
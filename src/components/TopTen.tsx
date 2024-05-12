import Image from 'next/image'
import React from 'react'
import SuflImg from '../img/image-1.jpg'

const TopTen = () => {
  return (
    <div className="wrapper grid gap-2 grid-cols-new3 overflow-hidden scroll-smooth mb-5">
      <p className='absolute text-white my-[10px]'>Top Ten</p>
      <section id="sectionTop1" className='w-[100%] relative grid gap-2 grid-cols-new5 mx-0 my-10'>
        <a href="#sectionTop3" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 left-0">‹</a>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
          <a href="#sectionTop2" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 right-0">›</a>
      </section>
      <section id="sectionTop2" className='w-[100%] relative grid gap-2 grid-cols-new5 mx-0 my-5'>
          <a href="#sectionTop1" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 left-0">‹</a>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
          <a href="#sectionTop3" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 right-0">›</a>
      </section>
      <section id="sectionTop3" className='w-[100%] relative grid gap-2 grid-cols-new5 mx-0 my-5'>
          <a href="#sectionTop2" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 left-0">‹</a>
        <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
        <div className="item">
          <Image width={340} height={190} src={SuflImg} alt="movie" />
        </div>
          <a href="#sectionTop1" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 right-0">›</a>
      </section>
    </div>
  )
}

export default TopTen
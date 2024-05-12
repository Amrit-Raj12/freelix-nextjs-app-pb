// import Image from 'next/image'
import React from "react"
// import SuflImg from '../img/image-1.jpg'
// import './ContinueWatch.css'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import styles from "./ContinueWatch.module.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
}
const sliderImageUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
  },
]

const ContinueWatch = () => {
  return (
    // <div className="wrapper grid gap-2 grid-cols-new3 overflow-hidden scroll-smooth mb-5 bg-black">
    //   <p className='absolute text-white my-[10px] mx-4'>Continue Watch</p>
    //   <section id="sectionWatch1" className='w-[100%] relative grid gap-2 grid-cols-new5 mx-0 my-10'>
    //     <a href="#sectionWatch3" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 left-0">‹</a>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //       <a href="#sectionWatch2" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 right-0">›</a>
    //   </section>
    //   <section id="sectionWatch2" className='w-[100%] relative grid gap-2 grid-cols-new5 mx-0 my-5'>
    //       <a href="#sectionWatch1" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 left-0">‹</a>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //       <a href="#sectionWatch3" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 right-0">›</a>
    //   </section>
    //   <section id="sectionWatch3" className='w-[100%] relative grid gap-2 grid-cols-new5 mx-0 my-5'>
    //       <a href="#sectionWatch2" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 left-0">‹</a>
    //     <div className="item px-0 py-0.5 transition duration-250 hover:mx-10 hover:my-0 hover:scale-150">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //     <div className="item">
    //       <Image width={340} height={190} src={SuflImg} alt="movie" />
    //     </div>
    //       <a href="#sectionWatch1" id='arrow__btn' className="absolute text-white no-underline text-8xl bg-inherit w-20 p-5 text-center z-10 top-0 bottom-0 right-0">›</a>
    //   </section>
    // </div>
    <>
      {/* <div>
      <header className="page-head">
        <h1>Netflix</h1>
      </header>
      <ul className="items">
        <li>
          <div className="bg-img" style={{backgroundImage: "url('https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg')"}}></div>
          <a href="#">
            <div className="content">
              <h2>Orange is the new black</h2>
            </div>
          </a>
        </li>
        <li>
          <div className="bg-img" style={{backgroundImage: "url('https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg')"}}></div>
          <a href="#">
            <div className="content">
              <h2>Ugly Betty</h2>
            </div>
          </a>
        </li>
        <li>
          <div className="bg-img" style={{backgroundImage: "url('https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg')"}}></div>
          <a href="#">
            <div className="content">
              <h2>Big</h2>
            </div>
          </a>
        </li>
        <li>
          <div className="bg-img" style={{backgroundImage: "url('https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg')"}}></div>
          <a href="#">
            <div className="content">
              <h2>The Apprentice</h2>
            </div>
          </a>
        </li>
        <li>
          <div className="bg-img" style={{backgroundImage: "url('https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg')"}}></div>
          <a href="#">
            <div className="content">
              <h2>Veep</h2>
            </div>
          </a>
        </li>
      </ul>
    </div> */}
      <div className={styles.parent}>
        <h4 className="text-white border-[#ff1e1e] border-b absolute mx-2 -my-8 uppercase">
          Continue Watch
        </h4>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass={styles["custom-dot-list-style"]}
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className={styles.slider} key={index}>
                <img src={imageUrl.url} alt="movie" />
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default ContinueWatch

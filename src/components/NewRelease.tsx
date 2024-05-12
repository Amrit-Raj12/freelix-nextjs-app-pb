import React, { useEffect, useState } from "react";
import { imageBaseURl, imagePath, imageProtocol } from "@/util/constant";
import MobileSlider from "./MobileSlider";

type allGenresType = {
  allGenres: Array<string>;
  sliderData: Record<string, any[]>
};

const NewRelease: React.FC<allGenresType> = ({
  allGenres,
  sliderData,
}): JSX.Element => {
  const moviesArrayLength = 10;

  // const videoRefs = Array.from({ length: moviesArrayLength }, () =>
  //   useRef<HTMLVideoElement | null>(null)
  // );
  const [stop, setStop] = useState(false);
  const [numberOfSections, setNumberOfSections] = useState(0);
  let moviesData = [1, 2, 3, 4, 5, 6];

  const [slData, setSlData] = useState([]);

  const handleVideo = (index: number) => {
    // setStop(!stop);
    // const currentVideoRef = videoRefs[index].current;
    // if (currentVideoRef) {
    //   if (stop) {
    //     currentVideoRef.pause();
    //   } else {
    //     currentVideoRef.play();
    //   }
    // }
  };

  const handleData = async () => {
    const res = await fetch("user-prefrence", {
      headers: {
        authorization: "",
      },
    });
  };

  useEffect(() => {
    setNumberOfSections(Math.floor(moviesArrayLength / 5));
    if (moviesArrayLength % 5 > 0) {
      setNumberOfSections((prev) => prev + 1);
    }
  }, [moviesArrayLength]);

  // console.log('sliderData', sliderData)
  

  return (
    <div className="p-2 m-2">
      {allGenres?.length > 0 &&
        allGenres?.map((item, index) => (
          <div
            key={`genre-${index}`}
            className="wrapper grid gap-2 grid-cols-new3 overflow-hidden scroll-smooth mb-5 bg-black"
          >
            <p className="absolute text-white mx-2 my-8 uppercase border-[#ff1e1e] border-b">{item}</p>
            {Array.from({ length: numberOfSections }).map((section, idx) => {
              let i = idx - 1;
              let j = idx + 1;
              if (idx === 0) {
                i = numberOfSections - 1;
              } else if (idx === numberOfSections - 1) {
                j = 0;
              }
              return (
                <div key={`sec-${idx}`}>
                 <section
                  
                  id={`section${index}${idx}`}
                  className="hidden relative md:grid gap-2 grid-cols-new5 mx-0 overflow-x-auto overflow-y-hidden whitespace-nowrap"
                >
                  <a
                    href={`#section${index}${i}`}
                    className="absolute text-white no-underline md:text-8xl text-4xl bg-inherit p-5 text-center z-50 top-20 bottom-0 left-0 opacity-50 hover:opacity-100 hover:text-[#ff1e1e]"
                  >
                    ‹
                  </a>
                  {sliderData[item] &&
                    sliderData[item]
                      .slice(idx * 5, idx * 5 + 5)
                      .map((itm, idy) => {
                        let idx = idy;
                        return (
                          <div
                            key={`sld-${idy}`}
                            id={`divsection${index}${idx}`}
                            className="item lg:w-[90%] p-1 mt-16"
                          >
                            <div
                              className="flex relative"
                              onMouseEnter={() => handleVideo(idx)}
                            >
                              {/* <video
                              width={340}
                              height={190}
                              id={`myvideo${idx}`}
                              ref={videoRefs[idx]}
                            >
                              <source
                                src="https://www.w3schools.com/html/mov_bbb.mp4"
                                type="video/mp4"
                              />
                            </video> */}
                              <img
                                src={`${imageProtocol}${imageBaseURl}${imagePath}${itm.thumbnail}`}
                                alt={itm.name}
                                className="absolute inset-0 w-80 md:h-48 h-32 object-cover object-fit"
                                // style={{ width: "340px", height: "190px" }}
                              />
                              <div className="px-8 py-10 relative z-20 w-full border border-gray-200 bg-white transform transition duration-500 md:hover:scale-125 hover:scale-125 opacity-0 hover:opacity-100 overflow-hidden">
                                {/* <iframe
                                  className="absolute inset-0 w-full h-full object-cover object-center z-20"
                                  src={`https://www.youtube.com/embed/${itm?.trailer_url}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1`}
                                  frameBorder="0"
                                  allow="autoplay"
                                  allowFullScreen
                                ></iframe> */}
                                 <img
                                src={`${imageProtocol}${imageBaseURl}${imagePath}${itm.thumbnail}`}
                                alt={itm.name}
                                className="absolute inset-0 w-full h-full object-cover object-center z-20"
                                // style={{ width: "340px", height: "190px" }}
                              />
                                <div className="md:h-40 h-20"></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  <a
                    href={`#section${index}${j}`}
                    id="arrow__btn"
                    className="absolute text-white no-underline md:text-8xl text-4xl bg-inherit w-20 p-5 text-center z-50 top-20 bottom-0 right-0 opacity-50 hover:opacity-100 hover:text-[#ff1e1e]"
                  >
                    ›
                  </a>
                </section>
                <div className="md:hidden flex">
                <MobileSlider sliderData={sliderData[item]} item={item} />
                  </div>
             
             </div>);
            })}
          </div>
        ))}
    </div>
  );
};

export default NewRelease;

{
  /* <div>
{allGenres.map(genre => renderGenreSlider(genre))}
</div> */
}

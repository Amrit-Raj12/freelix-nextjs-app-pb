import { imageBaseURl, imagePath, imageProtocol } from "@/util/constant";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';

const MobileSlider: React.FC<any> = ({ sliderData }) => {
  const items = sliderData || [];
  const groupedItems: any[] = [];

  const [showScrollDownButton, setShowScrollDownButton] = useState(false);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > (window.innerHeight / 2);
      const isAtBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;

      setShowScrollDownButton(isScrollingDown && !isAtBottom);
      setShowScrollUpButton(isScrollingDown && scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Group every two items together
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <>
     {showScrollDownButton && (
        <button className="fixed bottom-4 right-4 bg-transparent text-[#ff1e1e] font-bold py-2 px-4 rounded-full animate-bounce z-50" onClick={handleScrollDown}>
          <ArrowCircleDownRoundedIcon />
        </button>
      )}
      {showScrollUpButton && (
        <button className="fixed bottom-12 right-4 bg-transparent text-[#ff1e1e] font-bold py-2 px-4 rounded-full animate-bounce z-50" onClick={handleScrollUp}>
          <ArrowCircleUpRoundedIcon />
        </button>
      )}
      <Carousel
        className="w-full"
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              emulateTouch={true}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={80}
              autoPlay
              key='movie-carousel'
      >
        {sliderData.map((idx:string) => {
          return (
            // <Carousel
            //   className="w-full"
            //   showArrows={false}
            //   showIndicators={false}
            //   showStatus={false}
            //   emulateTouch={true}
            //   infiniteLoop={true}
            //   centerMode={true}
            //   centerSlidePercentage={80}
            //   autoPlay
            //   key='movie-carousel'
            // >
            <div key={`cr-${idx}`}>
              {groupedItems.map((group, idx) => (
                <div key={idx} className="item -ml-10 p-0 mt-16 w-full">
                  <div className="flex relative">
                    {group.map((itm: any, idy: string) => (
                      <div
                        key={`gr-${idy}`}
                        className="w-1/2 relative ml-2 transition-transform duration-500 transform hover:scale-150 hover:z-50"
                      >
                        <img
                          src={`${imageProtocol}${imageBaseURl}${imagePath}${itm.thumbnail}`}
                          alt={itm.name}
                          className="absolute inset-0 w-full h-full object-cover object-center bg-cover"
                        />
                        <div className="md:h-40 h-20"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            {/* </Carousel> */}
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default MobileSlider;

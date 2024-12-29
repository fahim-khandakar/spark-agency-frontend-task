import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import guaranteeLogo from "../../assets/10 jaar garantie.png";
import badgeLogo from "../../assets/top_pro_10_2024 1.png";
import googleLogo from "../../assets/pngegg 1.png";
import handPhoto from "../../assets/image 4.png";

import Navbar from "../Navbar/Navbar";
import MiniCardLine from "./partials/Mini Card/MiniCard";
import Marquee from "react-fast-marquee";
import RightSideContent from "./partials/Right Side Content/RightSideContent";
import FullBottomContent from "./partials/Full Bottom Content/FullBottomContent";
import BottomLeftContent from "./partials/Bottom Left Content/BottomLeftContent";
import CenterContent from "./partials/Center Content/CenterContent";
import FormContent from "./partials/Form Content/FormContent";
import { useState } from "react";
import { slides } from "./config/constant";

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section className="relative w-full min-h-screen">
      {/* Navbar */}
      <Navbar activeSlide={activeSlide} />

      {/* Hero Carousel */}
      <div className="absolute inset-0">
        <Swiper
          loop={true}
          className="h-full"
          onSlideChange={(swiper) =>
            setActiveSlide(slides[swiper.activeIndex]?.id)
          }
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`
                 w-full
                 h-full bg-cover bg-center flex items-center`}
                style={{
                  backgroundImage: `url(${slide?.id != 8 && slide.image})`,
                }}
              >
                <main className="w-full">
                  {slide?.id === 2 && (
                    <div>
                      <Marquee>
                        <MiniCardLine items={slide?.items} />
                      </Marquee>
                      <div className="flex justify-between absolute bottom-5 left-0 right-0 gap-5 flex-wrap">
                        <div className="flex gap-5 items-center">
                          <div className="w-[120px] h-[40px] lg:w-[186px] lg:h-[63px]">
                            <img
                              className="w-full h-full object-contain"
                              src={guaranteeLogo}
                              alt="Warranty Badge"
                            />
                          </div>
                          <div className="w-[50px] h-[60px] lg:w-[69px] lg:h-[79px]">
                            <img
                              className="w-full h-full object-contain"
                              src={badgeLogo}
                              alt="Badge"
                            />
                          </div>
                          <div className="w-[90px] h-[36px] lg:w-[115px] lg:h-[48px]">
                            <img
                              className="w-full h-full object-contain"
                              src={googleLogo}
                              alt="Google Logo"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="lg:w-[463px]  lg:h-[157px] w-[115px] h-[48px]">
                            <img
                              className="w-full h-full object-contain"
                              src={handPhoto}
                              alt="Hand Photo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {(slide?.id === 4 || slide?.id === 5) && (
                    <RightSideContent data={slide?.data} />
                  )}
                  {(slide?.id === 7 || slide?.id === 1) && (
                    <FullBottomContent data={slide?.data} />
                  )}
                  {slide?.id === 3 && <BottomLeftContent data={slide?.data} />}
                  {slide?.id === 6 && <CenterContent data={slide?.data} />}
                  {slide?.id === 8 && <FormContent data={slide} />}
                </main>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;

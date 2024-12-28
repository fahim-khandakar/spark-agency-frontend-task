import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import rectangle1 from "../../assets/Rectangle 1.png";
import rectangle2 from "../../assets/Rectangle 2.png";
import rectangle3 from "../../assets/Rectangle 3.png";
import rectangle4 from "../../assets/Rectangle 4.png";
import rectangle5 from "../../assets/Rectangle 5.png";
import rectangle6 from "../../assets/Rectangle 6.png";
import rectangle7 from "../../assets/Rectangle 7.png";
import Navbar from "../Navbar/Navbar";
import MiniCardLine from "./partials/Mini Card/MiniCard";
import Marquee from "react-fast-marquee";
import RightSideContent from "./partials/Right Side Content/RightSideContent";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: rectangle1,
      title: "Welcome to Our Service",
      description: "We provide the best solutions for your needs.",
    },
    {
      id: 2,
      image: rectangle2,
      items: [
        {
          id: 1,
          name: "Fermin Vargas",
          sub_role: "Construction",
          role: "manager",
          position: "top",
        },
        {
          id: 2,
          name: "Fermin Vargas",
          sub_role: "Construction",
          role: "manager",
          position: "bottom",
        },
        {
          id: 3,
          name: "Fermin Vargas",
          sub_role: "Construction",
          role: "manager",
          position: "top",
        },
        {
          id: 4,
          name: "Fermin Vargas",
          sub_role: "Construction",
          role: "manager",
          position: "bottom",
        },
        {
          id: 5,
          name: "Fermin Vargas",
          sub_role: "Construction",
          role: "manager",
          position: "top",
        },
        {
          id: 6,
          name: "Fermin Vargas",
          sub_role: "Construction",
          role: "manager",
          position: "bottom",
        },
      ],
    },
    {
      id: 3,
      image: rectangle3,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority.",
    },
    {
      id: 4,
      image: rectangle4,
      data: {
        title: `Wij bieden een
         duurzame en passende oplossing voor uw klus.`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

        button: "Contact Us",
      },
    },
    {
      id: 5,
      image: rectangle5,
      data: {
        title: `Wij bieden een
         duurzame en passende oplossing voor uw klus.`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

        button: "Contact Us",
      },
    },
    {
      id: 6,
      image: rectangle6,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority.",
    },
    {
      id: 7,
      image: rectangle7,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority.",
    },
  ];

  return (
    <section className="relative w-full h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Carousel */}
      <div className="absolute inset-0">
        <Swiper loop={true} className="h-full">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="w-full">
                  {slide?.id === 2 && (
                    <Marquee>
                      <MiniCardLine items={slide?.items} />
                    </Marquee>
                  )}
                  {(slide?.id === 4 || slide?.id === 5) && (
                    <RightSideContent data={slide?.data} />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;

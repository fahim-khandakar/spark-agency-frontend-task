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
import rectangle46 from "../../assets/Rectangle 46.png";
import Navbar from "../Navbar/Navbar";
import MiniCardLine from "./partials/Mini Card/MiniCard";
import Marquee from "react-fast-marquee";
import RightSideContent from "./partials/Right Side Content/RightSideContent";
import FullBottomContent from "./partials/Full Bottom Content/FullBottomContent";
import BottomLeftContent from "./partials/Bottom Left Content/BottomLeftContent";
import CenterContent from "./partials/Center Content/CenterContent";
import FormContent from "./partials/Form Content/FormContent";
import { useState } from "react";

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [
    {
      id: 1,
      image: rectangle1,
      data: {
        title: `Wij bieden een duurzame en passende oplossing voor uw klus.`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

        button: "Contact Us",
      },
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
      data: {
        title: `Wij bieden een duurzame en passende oplossing voor uw klus.`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

        button: "Contact Us",
      },
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
      data: {
        title: `Wij bieden een duurzame en passende oplossing voor uw klus.`,
        sub_title: "Uw adres",
        description: `Via uw adres kunnen we openbare en vrij verkrijgbare informatie, bijv. kadaster-gegevens en satelliet beelden,
gebruiken om een optimaal beeld te vormen van uw dak.`,

        button: "Contact Us",
      },
    },
    {
      id: 7,
      image: rectangle7,
      data: {
        title: `Wij bieden een duurzame en passende oplossing voor uw klus.`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

        button: "Contact Us",
      },
    },
    {
      id: 8,
      image: rectangle46,
      data: {
        title: `Wij bieden een duurzame en passende oplossing voor uw klus.`,
        sub_title: "Uw adres",
        description: `Via uw adres kunnen we openbare en vrij verkrijgbare informatie, bijv. kadaster-gegevens en satelliet beelden,
gebruiken om een optimaal beeld te vormen van uw dak.`,
      },
      form_title: `Vraag hieronder 
een offerte op`,
    },
  ];

  return (
    <section className="relative w-full h-screen">
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
                    <Marquee>
                      <MiniCardLine items={slide?.items} />
                    </Marquee>
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

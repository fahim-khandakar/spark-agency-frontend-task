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
import MiniCardLine from "../../Components/Mini Card/MiniCard";

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
      title: "Innovative Ideas",
      description: "Transforming your visions into reality.",
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
      title: "Customer Satisfaction",
      description: "Your happiness is our priority.",
    },
    {
      id: 5,
      image: rectangle5,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority.",
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
                  <MiniCardLine />
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

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { carouselData } from "./config/constant";

const carousel = (slider) => {
  const z = 600;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function ClientCarousel() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            {carouselData?.carousels?.map((item, index) => (
              <div key={index} className="carousel__cell">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={item?.img}
                  alt="Carousel Image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-80 md:px-20 px-5 space-y-5 text-formTitle">
        <p>{carouselData?.descriptionOne}</p>
        <p>{carouselData?.descriptionOne}</p>
      </div>
    </section>
  );
}

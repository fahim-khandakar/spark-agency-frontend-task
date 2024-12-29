import { aboutUsData } from "./config/constant";
import guaranteeLogo from "../../assets/10 jaar garantie.png";
import badgeLogo from "../../assets/top_pro_10_2024 1.png";
import googleLogo from "../../assets/pngegg 1.png";
import groupPhoto from "../../assets/Group 19.png";

const AboutUs = () => {
  return (
    <section>
      {/* Title */}
      <h1 className="text-[80px] md:text-[200px] lg:text-[347px] font-bold text-formTitle text-center">
        {aboutUsData?.title}
      </h1>
      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start  lg:mt-16 gap-8 lg:gap-16 px-4 md:px-5 lg:px-20 ">
        {/* Left Content */}
        <div className="lg:w-2/5 space-y-5 text-justify px-4 lg:px-0">
          <p className="text-lg">{aboutUsData?.descriptionOne}</p>
          <p className="text-lg">{aboutUsData?.descriptionTwo}</p>
          <div className="flex justify-center lg:justify-start items-center gap-5 flex-wrap">
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
        </div>
        {/* Right Content */}
        <div className="lg:w-3/5 px-4 lg:px-0">
          <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto mx-auto">
            <img
              className="w-full h-auto object-contain"
              src={groupPhoto}
              alt="Group Photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

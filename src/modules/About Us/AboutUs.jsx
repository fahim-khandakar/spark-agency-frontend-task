import { aboutUsData } from "./config/constant";
import guaranteeLogo from "../../assets/10 jaar garantie.png";
import badgeLogo from "../../assets/top_pro_10_2024 1.png";
import googleLogo from "../../assets/pngegg 1.png";
import groupPhoto from "../../assets/Group 19.png";

const AboutUs = () => {
  return (
    <section>
      <h1 className="text-[347px] font-bold text-formTitle">
        {aboutUsData?.title}
      </h1>
      <div className="flex ">
        <div className="w-2/5 pl-10 space-y-5">
          <p className="text-lg">{aboutUsData?.descriptionOne}</p>
          <p className="text-lg">{aboutUsData?.descriptionTwo}</p>
          <div className="flex  items-center gap-10">
            <div className="w-[186px] h-[63px]">
              <img
                className="w-full h-full"
                src={guaranteeLogo}
                alt="Warranty Badge"
              />
            </div>
            <div className="w-[69px] h-[79px]">
              <img className="w-full h-full" src={badgeLogo} alt="Badge" />
            </div>
            <div className="w-[115px] h-[48px]">
              <img
                className="w-full h-full"
                src={googleLogo}
                alt="Google Logo"
              />
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="w-[800px] mx-auto h-[675px]">
            <img className="w-full h-full" src={groupPhoto} alt="Group Photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

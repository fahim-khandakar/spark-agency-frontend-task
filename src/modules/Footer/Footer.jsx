import { data } from "./config/constant";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end  px-5">
        <h3 className="text-[50px] md:text-[96px] font-actor">
          {data?.leftTitle}
        </h3>
        <h1 className="text-[150px] md:text-[347px] font-bold font-nobile">
          {data?.rightTitle}
        </h1>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4  text-lg p-5 font-actor">
        <p>{data?.bottomOne}</p>
        <p>{data?.bottomTwo}</p>
        <p>{data?.bottomThree}</p>
        <p>{data?.bottomFour}</p>
      </div>
    </div>
  );
};

export default Footer;

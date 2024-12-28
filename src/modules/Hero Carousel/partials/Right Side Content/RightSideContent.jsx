import PropTypes from "prop-types";

const RightSideContent = ({ data }) => {
  return (
    <div className="text-right flex justify-end pr-20">
      <div className="w-1/2">
        <h1 className="text-[64px] text-heroTitle">{data?.title}</h1>
        <p className="text-xl text-primaryText">{data?.description}</p>
        <button className="bg-btnBg w-[280px] mt-5 rounded-full py-2 text-primaryText">
          {data?.button}
        </button>
      </div>
    </div>
  );
};

RightSideContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
};

export default RightSideContent;

import PropTypes from "prop-types";

const RightSideContent = ({ data }) => {
  return (
    <section className="text-right flex justify-end px-5 sm:px-10 lg:pr-20">
      <div className="w-full sm:w-3/4 lg:w-1/2">
        <h1 className="text-3xl sm:text-5xl lg:text-[64px] text-heroTitle font-tiltWarp">
          {data?.title}
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl text-primaryText mt-3 font-actor">
          {data?.description}
        </p>
        <button className="bg-btnBg w-full sm:w-[200px] lg:w-[280px] mt-5 rounded-full py-2 text-primaryText font-actor">
          {data?.button}
        </button>
      </div>
    </section>
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

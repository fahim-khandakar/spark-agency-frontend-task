import PropTypes from "prop-types";

const FullBottomContent = ({ data }) => {
  return (
    <section className="px-6 sm:px-20 flex items-end min-h-screen pb-10 sm:pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-60 w-full">
        {/* Title Section */}
        <h1 className="text-[34px] md:text-[64px] text-heroTitle text-center sm:text-left sm:w-1/2 font-tiltWarp">
          {data?.title}
        </h1>

        {/* Description and Button Section */}
        <div className="text-center sm:text-right sm:w-1/2 font-actor">
          <p className="text-base sm:text-xl text-primaryText">
            {data?.description}
          </p>
          <button className="bg-btnBg w-full sm:w-[280px] mt-5 rounded-full py-2 text-primaryText">
            {data?.button}
          </button>
        </div>
      </div>
    </section>
  );
};

FullBottomContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
};

export default FullBottomContent;

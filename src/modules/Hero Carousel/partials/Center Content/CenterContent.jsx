import PropTypes from "prop-types";

const CenterContent = ({ data }) => {
  return (
    <section className="px-5 sm:px-10 lg:px-20 flex items-center min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-[64px] w-full lg:w-1/2 text-heroTitle text-center lg:text-left">
          {data?.title}
        </h1>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h4 className="font-medium text-lg sm:text-xl lg:text-2xl text-primaryText">
            {data?.sub_title}
          </h4>
          <p className="text-sm sm:text-lg lg:text-xl text-primaryText pb-2 mt-2">
            {data?.description}
          </p>
          <input
            placeholder="Singel 63 1012VD Amsterdam"
            className="rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-btnBg"
          />
          <div className="flex justify-center lg:justify-end">
            <button className="bg-btnBg w-full sm:w-[200px] lg:w-[280px] mt-5 rounded-full py-2 text-primaryText">
              {data?.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

CenterContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
};

export default CenterContent;

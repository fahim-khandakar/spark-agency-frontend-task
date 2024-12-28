import PropTypes from "prop-types";

const BottomLeftContent = ({ data }) => {
  return (
    <section className="px-5 sm:px-10 lg:px-20 flex items-end min-h-screen pb-10 sm:pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-60">
        <div className="text-left w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] text-heroTitle">
            {data?.title}
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-primaryText mt-3">
            {data?.description}
          </p>
        </div>
        <div className="w-full text-right">
          <button className="bg-btnBg w-full sm:w-[200px] lg:w-[280px] mt-5 rounded-full py-2 text-primaryText">
            {data?.button}
          </button>
        </div>
      </div>
    </section>
  );
};

BottomLeftContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
};

export default BottomLeftContent;

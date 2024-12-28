import PropTypes from "prop-types";

const BottomLeftContent = ({ data }) => {
  return (
    <section className="px-20 flex items-end min-h-screen pb-20">
      <div className=" flex justify-between items-end  gap-60">
        <div className="text-left w-1/2">
          <h1 className="text-[64px]  text-heroTitle">{data?.title}</h1>
          <p className="text-xl text-primaryText">{data?.description}</p>
        </div>
        <div>
          <button className="bg-btnBg w-[280px] mt-5 rounded-full py-2 text-primaryText">
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

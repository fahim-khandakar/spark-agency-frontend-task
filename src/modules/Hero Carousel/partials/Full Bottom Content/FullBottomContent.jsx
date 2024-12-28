import PropTypes from "prop-types";

const FullBottomContent = ({ data }) => {
  return (
    <section className="px-20 flex items-end min-h-screen pb-20">
      <div className=" flex justify-between items-center gap-60">
        <h1 className="text-[64px] w-1/2 text-heroTitle">{data?.title}</h1>
        <div className="text-right w-1/2">
          <p className="text-xl text-primaryText">{data?.description}</p>
          <button className="bg-btnBg w-[280px] mt-5 rounded-full py-2 text-primaryText">
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

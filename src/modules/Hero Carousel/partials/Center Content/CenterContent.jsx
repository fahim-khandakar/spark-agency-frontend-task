import PropTypes from "prop-types";

const CenterContent = ({ data }) => {
  return (
    <section className="px-20 flex items-center min-h-screen">
      <div className=" flex justify-between items-center">
        <h1 className="text-[64px] w-1/2 text-heroTitle">{data?.title}</h1>
        <div className="text-left w-1/2">
          <h4 className="font-medium text-2xl text-primaryText">
            {data?.sub_title}
          </h4>
          <p className="text-xl text-primaryText pb-2">{data?.description}</p>
          <input
            placeholder="Singel 63 1012VD Amsterdam"
            className="rounded-md w-full px-3 py-1"
          />
          <div className="flex justify-end">
            <button className="bg-btnBg w-[280px] mt-5 rounded-full py-2 text-primaryText">
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

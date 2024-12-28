import PropTypes from "prop-types";

const FormContent = ({ data }) => {
  return (
    <div className="flex">
      <div
        className={`
        w-4/6
        h-full bg-cover bg-center flex items-center`}
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      >
        <section className="px-28 flex items-center min-h-screen">
          <div className=" flex justify-between items-center">
            <div className="text-left ">
              <h4 className="font-medium text-2xl text-primaryText">
                {data?.data?.sub_title}
              </h4>
              <p className="text-xl text-primaryText pb-2">
                {data?.data?.description}
              </p>
              <input
                placeholder="Singel 63 1012VD Amsterdam"
                className="rounded-md w-full px-3 py-1"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="w-2/6 flex items-center justify-center">
        <div>
          <h1 className="text-5xl text-center pb-5 text-formTitle w-2/3 mx-auto">
            {data?.form_title}
          </h1>
          <div className="w-3/5 mx-auto space-y-4 border p-5">
            <div className="space-y-1">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                placeholder="Value"
                className="border w-full rounded-lg px-3 py-2"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="surName">Surname</label>
              <input
                name="surName"
                placeholder="Value"
                className="border w-full rounded-lg px-3 py-2"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                placeholder="Value"
                className="border w-full rounded-lg px-3 py-2"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Value"
                className="border w-full rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <button className="bg-formTitle w-full rounded-md py-2 text-primaryText">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormContent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number?.isRequired,
    image: PropTypes.string.isRequired,
    data: PropTypes.shape({
      sub_title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    form_title: PropTypes.string.isRequired,
  }),
};

export default FormContent;

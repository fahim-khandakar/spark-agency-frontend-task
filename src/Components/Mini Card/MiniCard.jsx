import avatar from "../../assets/Avatar.png";

const MiniCardLine = () => {
  const items = [
    {
      id: 1,
      name: "Fermin Vargas",
      sub_role: "Construction",
      role: "manager",
      position: "top",
    },
    {
      id: 2,
      name: "Fermin Vargas",
      sub_role: "Construction",
      role: "manager",
      position: "bottom",
    },
    {
      id: 3,
      name: "Fermin Vargas",
      sub_role: "Construction",
      role: "manager",
      position: "top",
    },
    {
      id: 4,
      name: "Fermin Vargas",
      sub_role: "Construction",
      role: "manager",
      position: "bottom",
    },
    {
      id: 5,
      name: "Fermin Vargas",
      sub_role: "Construction",
      role: "manager",
      position: "top",
    },
    {
      id: 6,
      name: "Fermin Vargas",
      sub_role: "Construction",
      role: "manager",
      position: "bottom",
    },
  ];

  return (
    <div className="">
      {/* Horizontal connecting line */}
      <div className="absolute top-1/2 left-0 w-full ">
        <div className="h-[1px]  bg-white " />
        {items.map((item, index) => (
          <div
            key={item.id}
            className="absolute h-[12px] bg-white "
            style={{
              left: `${(index / (items.length - 1)) * 100}%`,
              width: "107px",
              transform: "translateX(-50%)",
              top: item.position === "top" ? "-2px" : "-2px",
            }}
          />
        ))}
      </div>

      <div className="relative flex  items-center justify-between  ">
        {items.map((item) => (
          <div key={item.id} className="relative group">
            <div
              className={`
                bg-white rounded-2xl shadow-md
                ${item.position === "top" ? "mb-28" : "mt-32"}
              `}
            >
              <div className="flex items-center justify-end gap-5 w-[290px] h-[97px]">
                <div className="space-y-1 text-end">
                  <h3 className="font-medium text-xl">{item.name}</h3>
                  <p className="text-xs text-[#78858F]">{item.sub_role}</p>
                  <p className="text-xs text-[#78858F]">{item.role}</p>
                </div>

                <div className="w-[107px] h-[97px] overflow-hidden rounded-r-2xl">
                  <img
                    src={avatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCardLine;

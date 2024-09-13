import ArrowRightIcon from "@/assets/ArrowRightIcon";
import React from "react";

const Project = () => {
  const client = [
    {
      name: "CEO Gym",
      type: "Website",
      link: "",
    },

    {
      name: "Frienzy Kitchen",
      type: "Mobile App",
      link: "",
    },

    {
      name: "Zendove",
      type: "Mobile App",
      link: "",
    },
  ];
  return (
    <div className="mt-[5rem] font-[manrope-regular] w-[90%]  m-auto">
      {/* success stories */}
      <div>
        <p className="text-center font-extrabold md:text-[1.5rem] mb-[0.7rem] ">
          Success Stories: Our Work in Action
        </p>
        <p className="  text-center mb-[4rem]">
          Discover a portfolio of visually stunning and strategically crafted
          past digital projects that showcase our creativity and expertise.
        </p>
      </div>
      {/* success cards */}
      <div className=" flex gap-2 justify-between">
        {/* card */}
        {client.map((item, index) => (
          <div key={index} className="w-[413px] h-[426px] bg-[#0A4FBB] rounded-xl flex relative ">
            {/* clients */}
            <div className=" bg-[#F5F8FA] p-6 h-[90px] flex justify-between w-[90%] m-auto border-4 border-[#EEF3F6] rounded-md absolute bottom-4 left-5">
              {/* client details */}
              <span className="h-full my-auto ">
                <p className=" font-bold text-[0.9rem]">{item.name}</p>
                <p className=" font-semibold text-[0.8rem]">{item.type}</p>
              </span>
              <span className="w-[32.5px] h-[32.5px] my-auto flex items-center justify-center rounded-full bg-[#0A4FBB]">
                <ArrowRightIcon />
              </span>
            </div>
          </div>
        ))}

      </div>
      <div className=" flex justify-center mt-[5rem] ">
    <button className=" bg-[#0A4FBB] p-[16px] text-[#EBEDEE] rounded-lg">View All Projects</button>
      </div>
    </div>
  ); 
};

export default Project;

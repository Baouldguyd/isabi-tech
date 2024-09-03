import React from "react";

const HeroPage = () => {
  return (
    <div className=" h-[70svh]  bg-yellow-400 flex  items-center ">
      <div className="  h-[80%] w-[100%] bg-green-700 flex p-4 gap-4">
        {/* call to action */}
        <div className="bg-blue-600 h-full w-[70%]">
cta
        </div>

        {/* image container */}
        <div className=" bg-red-400 h-full w-[30%]">
img
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

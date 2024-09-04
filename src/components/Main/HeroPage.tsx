import ArrowRightIcon from "@/assets/ArrowRightIcon";
import React from "react";

const HeroPage = () => {
  return (
    <div className=" h-[70svh]   flex  items-center ">
      <div className="  h-[80%] w-[100%]  flex p-4 gap-4">
        {/* call to action */}
        <div className="bg-[#EBEDEE] h-full w-[70%] rounded-md">
          {/* Header */}
          <div className=" flex justify-center items-center md:mt-8 flex-col gap-4 p-10">
            <p className="  text-3xl w-[70%] m-auto text-center font-[manrope-bold]">Empowering Your Business Potential</p>
            <p className=" font-[manrope-light] text-base">
              We specialize in crafting cutting-edge websites and applications
              that resonate with your audience. Let us transform your vision
              into a captivating digital reality, setting your brand apart in
              the digital sphere.
            </p>
          </div>
          {/* CTA Button */}
          <div className=" w-[50%] m-auto flex gap-4">
            {/* Arrow right button */}
            <div className=" h-[56px] w-[56px]  border-2 border-[#0A4FBB] p-2 flex items-center justify-center border-r-[#EBEDEE] rounded-full">
              <button className=" w-[100%] h-[100%] bg-[#0A4FBB] flex items-center justify-center rounded-full"><ArrowRightIcon/></button>
            </div>
            <button className="">Let&apos;s Transform Your Business</button>
          </div>
        </div>

        {/* image container */}
        <div className=" bg-[#0A4FBBCC] h-full w-[30%] rounded-md">img</div>
      </div>
    </div>
  );
};

export default HeroPage;

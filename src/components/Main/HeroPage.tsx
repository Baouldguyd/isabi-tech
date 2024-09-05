import ArrowRightIcon from "@/assets/ArrowRightIcon";
import DotIcon from "@/assets/Icon/DotIcon";
import Image from "next/image";
import brainImage from "@/assets/Logo/brain.svg"


const HeroPage = () => {
  const services = [
    {
      name: "WEBSITE DEVELOPMENT",
      link : ""
    },
    {
      name: "MOBILE APP DEVELOPMENT",
    },
    {
      name: "BRAND DESIGN",
    },
    {
      name: "BUSINESS PROMOTION",
    },
  ];

  return (
    <div className=" h-[70svh]   ">
      <div className="  h-[80%] w-[100%]  grid grid-cols-[1fr_30rem] p-4 gap-4">
        {/* call to action */}
        <div className="bg-[#EBEDEE] h-full rounded-md">
          {/* Header */}
          <div className=" flex justify-center items-center md:mt-8 flex-col gap-4 p-10">
            <p className="  text-3xl w-[70%] m-auto text-center font-[manrope-bold]">
              Empowering Your Business Potential
            </p>
            <p className=" font-[manrope-light] text-base text-center md:w-[80%]">
              We specialize in crafting cutting-edge websites and applications
              that resonate with your audience. Let us transform your vision
              into a captivating digital reality, setting your brand apart in
              the digital sphere.
            </p>
          </div>
          {/* CTA Button */}
          <div className=" justify-center items-center flex ">
            <div className=" flex gap-[12px]">
              {/* Arrow right button */}
              <div className=" h-[56px] w-[56px]  border-2 border-[#0A4FBB] p-2 flex items-center justify-center border-r-[#EBEDEE] rounded-full">
                <button className=" w-[100%] h-[100%] bg-[#0A4FBB] flex items-center justify-center rounded-full">
                  <ArrowRightIcon />
                </button>
              </div>

              <button className=" bg-[#0A4FBB] text-[#EBEDEE] text-[14px]  rounded-lg pl-2 pr-2 ">
                Let&apos;s Transform Your Business
              </button>
            </div>
          </div>

          <div className=" flex justify-around items-center gap-3 h-[56px] w-[97%] bg-[#F5F8FA] mt-28 ml-5">
            {services.map((item, index) => (
              <span key={index} className=" flex gap-2 items-center justify-center">
                <span className=" w-[10px] h-[10px] bg-[#0A4FBB] rounded-full"><DotIcon/></span>
                <span className=" text-[#59595A] font-[manrope-semibold]">{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* image container */}
        <div className="  h-full  rounded-md ">
          <Image
          alt="Brain Image"
          src={brainImage}
          className=" w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

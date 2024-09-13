import React from "react";
import Logo from "@/assets/Logo/Logo.png"

const AboutUs = () => {
  return (
    <div className=" mt-[5rem] font-[manrope-regular] w-[90%]  m-auto">
      {/* header */}
      <p className=" text-center font-extrabold md:text-[1.5rem] mb-[1rem]">About iSabi Technologies</p>
      <p className=" text-center mb-[4rem]" >
        {" "}
        We offer a 12 months Free Technical Support program after the project is
        completed to train your staff on how to continuously manage your
        website.
      </p>
      {/* content */}
      <div className=" flex gap-2 justify-between ">
        {/* text content */}
        <div className=" flex flex-col gap-4 h-[50%] w-[50%] my-auto">
          <p className="w-[82%]">
            Isabi Technologies began with a vision to empower businesses through
            innovation and dedication. Our mission is to embody the
            &lsquo;I Can&lsquo;spirit, delivering exceptional services that elevate your brand.
          </p>
          <p className="w-[82%] ">
            At Isabi, we pride ourselves on our commitment to excellence,
            creativity, and client satisfaction. Our team of experts thrives on
            transforming challenges into opportunities.
          </p>
        </div>
        {/* image content */}
        <div className=" w-[443px] h-[380px] flex justify-center items-center bg-[#0A4FBB] rounded-xl">
        <div className=" w-[70px] h-[70px] bg-[#EBEDEE] rounded-md flex justify-center items-center">
        <img alt="logo" src="Logo" />
      </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

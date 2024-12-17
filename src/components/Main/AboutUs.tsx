import React from "react";
import Logo from "@/assets/Logo/Logo.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" mt-[5rem] font-[manrope-regular] md:w-[90%]  m-auto">
      {/* header */}
      <p className=" text-center font-extrabold md:text-[1.5rem] mb-[1rem] text-[1.5rem] ">
        About iSabi Technologies
      </p>
      <p className=" text-center mb-[4rem]">
        {" "}
        We offer a 12 months Free Technical Support program after the project is
        completed to train your staff on how to continuously manage your
        website.
      </p>
      {/* content */}
      <div className=" flex gap-2 justify-between md:flex-row flex-col ">
        {/* text content */}
        <div className=" flex flex-col gap-4 h-[50%] w-[90%] md:w-[50%] m-auto ">
          <p className="md:w-[82%] md:text-left text-center ">
            Isabi Technologies began with a vision to empower businesses through
            innovation and dedication. Our mission is to embody the &lsquo;I
            Can&lsquo;spirit, delivering exceptional services that elevate your
            brand.
          </p>
          <p className="md:w-[82%] md:text-left text-center ">
            At Isabi, we pride ourselves on our commitment to excellence,
            creativity, and client satisfaction. Our team of experts thrives on
            transforming challenges into opportunities.
          </p>
        </div>
        {/* image content */}
        <div className=" md:w-[443px] h-[380px]  rounded-xl">
       
          
          <Image alt="logo" width={70} height={100}  className="w-[70%] h-full m-auto" src={"https://res.cloudinary.com/dxjjjt3zt/image/upload/v1734255427/og06z5b25kthhwpsypla.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

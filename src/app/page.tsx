"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import React from "react";

const Page = () => {
  return (
    <div className=" grid grid-rows-[7rem_1fr_3rem]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;

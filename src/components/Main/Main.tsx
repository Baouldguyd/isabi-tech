import React from "react";
import HeroPage from "./HeroPage";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Project from "./Project";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className=" flex flex-col gap-2">
      <HeroPage />
      <Services />
      <AboutUs/>
      <Project/>
      <Testimonials/>
      <Contact/>
    </div>
  );
};

export default Main;

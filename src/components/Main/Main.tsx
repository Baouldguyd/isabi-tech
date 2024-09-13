import React from "react";
import HeroPage from "./HeroPage";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Project from "./Project";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <div>
      <HeroPage />
      <Services />
      <AboutUs/>
      <Project/>
      <Testimonials/>
    </div>
  );
};

export default Main;

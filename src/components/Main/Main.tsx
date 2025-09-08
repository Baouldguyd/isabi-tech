import React from "react";
import HeroPage from "./HeroPage";
import Services from "./Services";
import AboutUs from "./AboutUs";
import PortfolioGallery from "./PortfolioGallery";
import TestimonialCarousel from "./TestimonialCarousel";
import Contact from "./Contact";
import StatsSection from "./StatsSection";
import TechStack from "./TechStack";

const Main = () => {
  return (
    <main className="flex flex-col gap-16 md:gap-24 py-8">
      <HeroPage />
      <StatsSection />
      <TechStack />
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>
      <section id="about" className="scroll-mt-20">
        <AboutUs />
      </section>
      <section id="portfolio" className="scroll-mt-20">
        <PortfolioGallery />
      </section>
      <section className="scroll-mt-20">
        <TestimonialCarousel />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
  );
};

export default Main;
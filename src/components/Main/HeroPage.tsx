import Image from "next/image";
import brainImage from "@/assets/Logo/brain.svg";
import Slider from "./Slider";
import HeroCTA from "@/components/ui/HeroCTA";

const HeroPage = () => {
  return (
    <div className="md:h-[80svh] h-auto w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="h-full w-full mx-auto md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* call to action */}
        <div className="bg-white rounded-xl shadow-medium p-6 md:p-10 flex flex-col justify-center">
          {/* Header */}
          <div className="flex justify-center items-center flex-col gap-6 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-800">
              Empowering Your Business Potential
            </h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl">
              We specialize in crafting cutting-edge websites and applications
              that resonate with your audience. Let us transform your vision
              into a captivating digital reality, setting your brand apart in
              the digital sphere.
            </p>
          </div>
          {/* CTA Button */}
          <HeroCTA 
            primaryText="Let's Transform Your Business" 
            secondaryText="See our work" 
            href="#contact" 
          />

          <div className="mt-12">
            <div className="w-full">
              <Slider />
            </div>
          </div>
        </div>
        {/* image container */}
        <div className="h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-medium flex items-center justify-center mt-8 md:mt-0">
          <Image
            alt="Brain Image - representing creative thinking and innovation"
            src={brainImage}
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
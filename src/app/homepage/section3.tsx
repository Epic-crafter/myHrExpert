import React from "react";
import { Button } from "@/components/ui/button";



const HeroSection = () => {
  return (
    <>
  
      <div className="bg-[#00053D] lg:min-h-[67vh] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Content Container */}
          <div className="w-full lg:w-3/5 px-4 lg:px-16 py-8 lg:pt-32 lg:pb-16">
            {/* Left Content */}
            <div className="max-w-[600px] relative z-10">
              <p className="text-[#94A3B8] mb-3 text-sm tracking-wider uppercase">
                Empowering Your Business: Unleash Potential with us!
              </p>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-5 leading-tight">
                We work with you to <br className="hidden md:block" />
                make your vision a reality
              </h1>

              <p className="text-[#94A3B8] text-base lg:text-lg mb-6 lg:mb-10 leading-relaxed">
                Together, we'll build a stronger foundation for growth and long-term success. Let us bring your vision to life!
                <br className="hidden md:block" />
              </p>

    

           
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <Button
                  className="border-2 border-[#2563EB] text-[#2563EB] bg-transparent px-8 py-3 text-base font-medium rounded hover:bg-[#2563EB] hover:text-white transition-colors"
                >
                  Button
                </Button>
                <Button
                  className="bg-[#2563EB] text-white px-8 py-3 text-base font-medium rounded hover:bg-[#1d4ed8] transition-colors"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>

        
          <div className="hidden lg:block lg:w-2/5 relative">
        
            {/* Image of the Pot */}
            <img
              src="./Img (2).png"
              alt="Pot"
              className="absolute top-[121px] right-28 w-auto"
            />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default HeroSection;


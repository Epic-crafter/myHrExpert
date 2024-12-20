"use client";

import React from "react";
import { Button } from "@/components/ui/button";



const HeroSection = () => {
  return (
    <>

      <div className="bg-[#00053D] min-h-[67vh] relative overflow-hidden flex flex-col lg:flex-row">
        {/* Content Container */}
        <div className="w-full lg:w-3/5 px-4 lg:px-16 pt-20 lg:pt-[5rem] pl-[11rem] lg:pl-[11rem]">

          {/* Left Content */}
          <div className="max-w-[600px] relative z-10">
            <p className="text-[#94A3B8] mb-3 text-sm tracking-wider uppercase">
              BUSINESS CONSULTING
            </p>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Ultimate Solutions for<br className="hidden md:block" />
              Modern Businesses
            </h1>

            <p className="text-[#94A3B8] text-base lg:text-lg mb-10 leading-relaxed">
              Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci
              <br className="hidden md:block" />
              non rhoncus lobortis id neque...
            </p>

  


            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
             
              <Button
                className="bg-[#2563EB] text-white px-8 py-3 text-base font-medium rounded hover:bg-[#1d4ed8] transition-colors"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Right Design Element */}
        <div className="w-full lg:w-2/5 mt-8 lg:mt-0 relative">
          {/* Background Design */}
          <div className="relative">
  <img
    src="./aboutus-images/image copy 9.png"
    alt="Background"
    className="hidden lg:block w-full h-auto"
  />
  {/* image */}
  <img
    src="./aboutus-images/image copy 10.png"
    alt="Pot"
    className="hidden lg:block absolute top-0 right-0 lg:right-28 w-1/2 lg:w-auto transform translate-y-10"
  />
</div>

        </div>
      </div>

    </>
  );
};

export default HeroSection;

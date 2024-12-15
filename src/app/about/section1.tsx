"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#00053D] min-h-[67vh] relative overflow-hidden flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-3/5 px-4 md:px-8 lg:px-16 pt-16 md:pt-20 lg:pt-[5rem] text-center lg:text-left">
          <div className="max-w-[600px] mx-auto lg:mx-0 relative z-10">
            <p className="text-[#94A3B8] mb-3 text-sm tracking-wider uppercase">
              BUSINESS CONSULTING
            </p>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Ultimate Solutions for
              <br className="hidden md:block" />
              Modern Businesses
            </h1>

            <p className="text-[#94A3B8] text-base md:text-lg mb-8 leading-relaxed">
              Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci
              <br className="hidden md:block" />
              non rhoncus lobortis id neque...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button className="bg-[#2563EB] text-white px-8 py-3 text-base font-medium rounded hover:bg-[#1d4ed8] transition-colors">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Right Design Element */}
        <div className="w-full lg:w-2/5 mt-8 lg:mt-0 relative">
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Image */}
            <img
              src="./aboutus-images/image copy 9.png"
              alt="Background"
              className="hidden lg:block w-full h-auto"
            />
            {/* Foreground Image */}
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

"use client";

import React from "react";
import { Button } from "@/components/ui/button";




const HeroSection = () => {
  return (
    <>

      <div className="bg-[#00053D] h-[55vh] relative overflow-hidden flex flex-col lg:flex-row ">
        {/* Content Container */}
        <div className="w-full lg:w-3/5 px-4 lg:px-16 pt-20 lg:pt-32">
          {/* Left Content */}
          <div className="max-w-[600px] relative z-10">
            {/* <p className="text-[#94A3B8] mb-3 text-sm tracking-wider uppercase">
              BUSINESS CONSULTING
            </p> */}

            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
              Ultimate Solutions for<br className="hidden md:block" />
              Modern Businesses
            </h1>

            <p className="text-[#94A3B8] text-base lg:text-lg mb-10 leading-relaxed">
            At MyHRExpert, we understand that every business is unique. Our mission is to provide innovative and customized personnel solutions tailored to meet the specific operational and HR needs of our clients.
            </p>

        


            {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
             
              <Button
                className="bg-[#2563EB] text-white px-8 py-3 text-base font-medium rounded hover:bg-[#1d4ed8] transition-colors"
              >
                Learn more
              </Button>
            </div> */}
          </div>
        </div>

        <div className="w-full lg:w-2/5 mt-8 lg:mt-0 relative">
        
      
          <img
            src="./aboutus/image5.jpg"
            alt="Pot"
            className="hidden lg:block absolute right-0 lg:right-0 w-1/2 lg:w-auto margin top-[0px]"
          />
        </div>
      </div>

    </>
  );
};

export default HeroSection;

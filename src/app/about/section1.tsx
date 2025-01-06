"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#00053D] flex flex-col items-end md:flex-row md:justify-evenly">

        <div className="max-w-[600px] z-10 p-8 flex flex-col justify-center items-center">
          <p className="text-[#94A3B8] text-base lg:text-lg mt-10 mb-10 leading-relaxed">
            Ultimate Solutions for Modern Businesses - At MyHRExpert, we deliver
            tailored HR solutions that align with your unique business needs.
            Our experienced team combines industry expertise with innovative
            technology to streamline your HR processes and enhance efficiency.
            We prioritize employee engagement and retention, fostering a
            positive workplace culture that drives productivity. With a
            comprehensive range of services—from talent acquisition to
            performance management—we are your all-in-one HR partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Button className="bg-[#2563EB] text-white px-8 py-3 text-base font-medium rounded hover:bg-[#1d4ed8] transition-colors">
              Learn more
            </Button>
          </div>
        </div>

        {/* Right Design Element */}
        <div className="max-w-[600px] h-full flex lg:items-end">
            <img
              src="./aboutus/image4.png"
              alt="Background"
              className="lg:block w-full"
            />
          </div>
      </div>
    </>
  );
};

export default HeroSection;

"use client";

import React from "react";
import { Button } from "@/components/ui/button";



const HeroSection = () => {
  return (
    <>

      <div className="bg-[#00053D] flex flex-col md:flex-row md:justify-between">
        {/* Content Container */}
        <div className="w-full">

          {/* Left Content */}
          <div className="max-w-[600px] z-10 p-8 flex justify-center items-center">
            {/* <p className="text-[#94A3B8] mb-3 text-sm tracking-wider uppercase">
              BUSINESS CONSULTING
            </p> */}

            {/* <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
              Ultimate Solutions for Modern Businesses - </h1><p className="text-[#94A3B8] text-base lg:text-lg mb-10 leading-relaxed">
            Ultimate Solutions for Modern Businesses - At MyHRExpert, we deliver tailored HR solutions that align with your unique business needs. Our experienced team combines industry expertise with innovative technology to streamline your HR processes and enhance efficiency. We prioritize employee engagement and retention, fostering a positive workplace culture that drives productivity. With a comprehensive range of services—from talent acquisition to performance management—we are your all-in-one HR partner. Committed to ensuring compliance and mitigating risks, we deliver proven results. Experience the MyHRExpert advantage and unlock your organization’s full potential today!             
            </p>
               */}
            

            <p className="text-[#94A3B8] text-base lg:text-lg mt-10 mb-10 leading-relaxed">
            Ultimate Solutions for Modern Businesses - At MyHRExpert, we deliver tailored HR solutions that align with your unique business needs. Our experienced team combines industry expertise with innovative technology to streamline your HR processes and enhance efficiency. We prioritize employee engagement and retention, fostering a positive workplace culture that drives productivity. With a comprehensive range of services—from talent acquisition to performance management—we are your all-in-one HR partner. Committed to ensuring compliance and mitigating risks, we deliver proven results. Experience the MyHRExpert advantage and unlock your organization’s full potential today!             
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

        {/* Right Design Element */}
        <div className="w-full">
          {/* Background Design */}
          <div className="relative">
  <img
    src="./aboutus/image4.png"
    alt="Background"
    className="lg:block w-full"
  />
  {/* image */}
  {/* <img
    src="./aboutus-images/image copy 10.png"
    alt="Pot"
    className="hidden lg:block absolute top-0 right-0 lg:right-28 w-1/2 lg:w-auto transform translate-y-10"
  /> */}
</div>

        </div>
      </div>

    </>
  );
};

export default HeroSection;

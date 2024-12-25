"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>

      <div className="bg-[#00053D]  relative overflow-hidden flex flex-col lg:flex-row">
        {/* Content Container */}
        <div className="w-500px lg:w-3/5 px-2 lg:px-12 pt-16 lg:pt-28">
          {/* Left Content */}
          <div className="max-w-[600px] relative z-5">
            {/* <p className="text-[#94A3B8] mb-2 text-sm tracking-wider uppercase">
              BUSINESS CONSULTING
            </p> */}

            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Ultimate Solutions for<br className="hidden md:block" />
              Modern Businesses
            </h1>

            {/* <p className="text-[#94A3B8] text-base lg:text-lg mb-10 leading-relaxed">
              Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci
              <br className="hidden md:block" />
              non rhoncus lobortis id neque...
            </p> */}

        


            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
             <Link href='/contact' className='mx-auto'>
              <Button
                className="bg-[#2563EB] text-white px-8 py-3  align-middleitems-center text-base font-medium rounded hover:bg-[#1d4ed8] transition-colors"
              >
                Contact Us
                
              </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-half lg:w-2/5 mt-6 lg:mt-0 relative">
        
      
          <img
            src="./homepageimages/image13.png"
            alt="Pot"
            className="hidden lg:block right-0 lg:right-20 w-1/2 lg:w-auto margin"
          />
        </div>
      </div>

    </>
  );
};

export default HeroSection;

'use client';
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-[#00053D] min-h-[80vh] relative overflow-hidden flex flex-col">
      <div className="pt-[120px] pl-[64px] w-full flex flex-row justify-between flex-wrap">
        <div className="max-w-[600px] z-10 mb-10 px-4 flex-1 sm:flex-none">
          <p className="text-[#94A3B8] mb-3 text-sm tracking-wide uppercase">
            BUSINESS CONSULTING
          </p>

          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            Progressive solutions <br />
            for progressive businesses.
          </h1>

          <p className="text-[#94A3B8] text-lg mb-10 leading-relaxed">
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies.
            Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis
            volutpat. Vitae aliquam malesuada varius felis.
          </p>

          <div className="flex gap-6 flex-wrap">
            <Button className="bg-[#2563EB] text-white px-8 py-3 text-base font-medium rounded-md">
              Learn more
            </Button>
          </div>
        </div>

        <div className="right-design-element flex-1 sm:hidden relative px-4 flex justify-center items-center">
          <img
            src="./Img (2).png"
            alt="Decorative Element"
            className="max-w-full h-auto relative"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

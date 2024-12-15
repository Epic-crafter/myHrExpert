"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import Section from "./homepage/section";
import Section2 from "./homepage/section2";
import Section21 from "./homepage/section2.1";
import Section3 from "./homepage/section3";
import Section4 from "./homepage/section4";
import Section5 from "./homepage/section5";

const BlueArrow = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#2563EB" />
    <path
      d="M8 6L12 10L8 14"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#00053D] min-h-[67vh] relative overflow-hidden flex flex-col lg:flex-row">
        {/* Content Container */}
        <div className="w-full lg:w-3/5 px-4 sm:px-8 lg:px-16 pt-16 sm:pt-20 lg:pt-[5rem]">
          {/* Left Content */}
          <div className="max-w-[600px] relative z-10 space-y-4">
            <p className="text-[#94A3B8] mb-3 text-sm tracking-wider uppercase">
              Empowering Your Business: Unleash Potential with us!
            </p>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We work with you to{" "}
              <br className="hidden md:block" />
              make your vision a reality
            </h1>

            <p className="text-[#94A3B8] text-sm sm:text-base lg:text-lg leading-relaxed">
              Together, we’ll build a stronger foundation for growth and
              long-term success. Let us bring your vision to life!
              <br className="hidden md:block" />
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <BlueArrow />
                  <span className="text-white">Strategic excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <BlueArrow />
                  <span className="text-white">Business consulting</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BlueArrow />
                <span className="text-white">Innovation</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button className="border-2 border-[#2563EB] text-[#2563EB] bg-transparent px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded hover:bg-[#2563EB] hover:text-white transition-colors">
                Button
              </Button>
              <Button className="bg-[#2563EB] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded hover:bg-[#1d4ed8] transition-colors">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Right Design Element */}
        <div className="w-full lg:w-2/5 mt-6 lg:mt-0 relative">
          {/* Background Design */}
          <img
            src="./Group.png"
            alt="Background"
            className="hidden lg:block w-full h-auto object-cover"
          />
          {/* Image of the Woman */}
          <img
            src="./pot.png"
            alt="Pot"
            className="hidden lg:block absolute top-0 right-0 w-[40%] sm:w-[30%] lg:w-auto"
          />
        </div>
      </div>
      <Section />
      <Section2 />
      <br />
      <br />
      <Section21 />
      <br />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
};

export default HeroSection;

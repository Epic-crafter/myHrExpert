"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import Section from "./homepage/section";
import Section2 from "./homepage/section2";
import Section21 from "./homepage/section2.1";
import Section3 from "./homepage/section3";
import Section4 from "./homepage/section4";
import Section5 from "./homepage/section5";
import Link from "next/link";

// const BlueArrow = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
// //     <circle cx="10" cy="10" r="10" fill="#2563EB" />
//     <path
//       d="M8 6L12 10L8 14"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#00053D] flex flex-col lg:flex-row">
        {/* Content Container */}
        <div className="w-full flex md:flex-row flex-col md:justify-between md:p-16 p-6">

          {/* Left Content */}
          <div className="section-1 z-5 md:w-full">
            {/* <p className="text-[#94A3B8] mb-3 text-sm tracking-wider uppercase">
            Empowering Your Business: Unleash Potential with us!
            </p> */}

            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">

            Empowering Your Business: Unleash Potential with us!          
              </h1>

            <p className="text-[#94A3B8] text-base lg:text-lg mb-10 leading-relaxed">
            Welcome to MyHRexpert, India’s leading HR services provider. With a proven record of partnering with 50+ top Indian brands, we specialize in building and managing HR solutions for startups, SMEs, and industry leaders. Our expert team delivers innovative, tech-driven services to empower your business for growth and success. Let us be your trusted partner on the path to excellence!              <br className="hidden md:block" />
              
            </p>

            {/* Features
            <div className="mb-10">
              <div className="flex flex-col md:flex-row gap-4 md:gap-16 mb-4">
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
            </div> */}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* <Button
                className="border-2 border-[#2563EB] text-[#2563EB] bg-transparent px-8 py-3 text-base font-medium rounded hover:bg-[#2563EB] hover:text-white transition-colors"
              >
                Button
              </Button> */}
              <Link href="/contact" className="mx-auto">
              <Button
                className="bg-[#2563EB] text-white px-8 py-3 mx-auto text-base font-medium rounded hover:bg-[#1d4ed8] transition-colors"
              >
                GET IN TOUCH
              </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Design Element */}
        <div className="section-2 w-full md:w-full flex justify-center items-end">
          {/* Background Design */}
          {/* <img
            src="./Group.png"
            alt="Background"
            className="hidden lg:block w-full h-auto"
          /> */}
          {/* Image of the Woman */}
          <img
            src="./homepageimages/home.png"
            alt="Pot"
            className="lg:block object-cover h-auto lg:h-[51vh]"
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

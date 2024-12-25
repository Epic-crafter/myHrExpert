import React from 'react'
import ContactForm from './GetInTouchSection3'
const HeroSection1 = () => {
  return (
    <div className="bg-[#000D51] min-h-screen flex flex-col md:flex-row gap-20 md:gap-0">
    <div className="section-1 flex-1 relative p-6 md:p-12">
      <div className="hero-text-btn absolute w-full md:w-[474px] gap-[40px] top-[231px] left-0 md:left-auto mx-auto md:mx-0 text-start">
        {/* <span className="text-[#FFFFFFCC] text-sm">Contact us</span> */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-2 w-full md:w-[474px]">
        "Have HR Challenges? We’ve Got Solutions!"
        </h1>
        <p className="text-[#FFFFFFCC] text-xs md:text-sm mt-2 w-full md:w-[474px]">
        Whether it’s a query, a partnership, or feedback, we’re all ears.
        </p>
        {/* <div className="mt-4 px-4 md:px-[0]">
          <button className="text-white bg-[#2460FD] border-2 border-[#2460FD] border-solid px-4 py-2 text-sm rounded w-full md:w-[192px] h-[50px] flex justify-center items-center">
            Learn more
          </button>
        </div> */}
      </div>
    </div>
  

    <div className="section-2 hidden md:flex relative h-auto top-0 md:top-0 flex-1 justify-center items-center p-6 md:p-12 right-12">
      <div className="relative w-full max-w-lg">
        <ContactForm></ContactForm>
      </div>
    </div>
  </div>
  
  )
}

export default HeroSection1
import React from 'react'
import ContactForm from './GetInTouchSection3'
const HeroSection1 = () => {
  return (
    <div className="bg-[#000D51] flex flex-col md:flex-row">
    <div className="section-1 flex justify-center items-center p-6 md:p-12">
      <div className="hero-text-btn gap-[40px] mx-auto md:mx-0 text-center">
        {/* <span className="text-[#FFFFFFCC] text-sm">Contact us</span> */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">
        "Have HR Challenges? We&rsquo;ve Got Solutions!"
        </h1>
        <p className="text-[#FFFFFFCC] text-xs md:text-sm mt-2">
        Whether it&rsquo;s a query, a partnership, or feedback, we&rsquo;re all ears.
        </p>
        {/* <div className="mt-4 px-4 md:px-[0]">
          <button className="text-white bg-[#2460FD] border-2 border-[#2460FD] border-solid px-4 py-2 text-sm rounded w-full md:w-[192px] h-[50px] flex justify-center items-center">
            Learn more
          </button>
        </div> */}
      </div>
    </div>
  

    <div className="section-2 flex flex-col md:flex-row relative h-auto p-6 md:p-12 w-full md:w-1/2">
      <div className="w-full">
        <ContactForm></ContactForm>
      </div>
    </div>
  </div>
  
  )
}

export default HeroSection1
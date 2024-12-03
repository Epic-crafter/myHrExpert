import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-auto pt-16 pr-18 pb-5 pl-18 bg-[#000D51]">
    <div className="nav-container flex flex-wrap md:flex-nowrap justify-between gap-5">
      <div className="section-1 flex flex-col justify-between w-full md:w-1/4">
        <div className="logo flex items-center mb-4">
          <img src="/img/Icon.png" alt="" className="mr-2" />
          <h2 className="text-white text-[16px] font-[600]">BUSINESS <br /> CONSULTING</h2>
        </div>
        <p className="w-full md:w-[312px] text-[#FFFFFFCC] text-[16px] font-[400] mb-4">
          Velit facilisi senectus velit elementum. Consequat vel arcu feugiat dui eu tempor pretium at porta. Dui pellentesque sagittis
        </p>
        <div className="subscribe flex flex-col">
          <h2 className="text-white text-[16px] font-[600] mb-4">Subscribe Us</h2>
          <div className="subscribe-icon flex gap-3">
            <img src="/img/footer/Facebook_black.png" alt="" />
            <img src="/img/footer/frame 90.png" alt="" />
            <img src="/img/footer/instagram_black.png" alt="" />
          </div>
        </div>
      </div>
  
      <div className="section-2-services flex flex-col w-full md:w-[167px]">
        <h2 className="text-[#FFFFFF] font-[700] text-[16px] mb-2">Services</h2>
        <div className="flex flex-col text-[#FFFFFFCC] font-[400] space-y-2">
          <a href="#">Marketing Strategy</a>
          <a href="#">Financial management</a>
          <a href="#">Business Strategy</a>
          <a href="#">Sales and Marketing</a>
          <a href="#">Human Resources</a>
        </div>
      </div>
  
      <div className="section-3-useful-links w-full md:w-[167px]">
        <h2 className="text-[#FFFFFF] font-[700] text-[16px] mb-2">Useful links</h2>
        <div className="flex flex-col text-[#FFFFFFCC] font-[400] space-y-2">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">F.A.Q</a>
        </div>
      </div>
  
      <div className="section-4-newsletter w-full md:w-[394px] flex flex-col justify-between mt-8 md:mt-0">
        <div className="info flex justify-between flex-wrap md:flex-nowrap mb-6">
          <div className="address gap-2 w-full md:w-[180px]">
            <h1 className="font-[700] text-[16px] text-[#F7F6F6]">Address</h1>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">8592 Fairground</p>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">St. Tallahassee,</p>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">FL 32303</p>
          </div>
  
          <div className="contact flex flex-col w-full md:w-[180px]">
            <h1 className="font-[700] text-[16px] text-[#F7F6F6]">Email</h1>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">teverett@optonline.net</p>
            <h1 className="font-[700] text-[16px] text-[#F7F6F6] mt-4">Phone</h1>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">(863) 267-3634</p>
          </div>
        </div>
  
        <div className="newsletter">
          <h2 className="font-[700] text-[16px] text-[#F7F6F6] mb-2">Subscribe for our newsletter</h2>
          <p className="text-[#FFFFFFCC] text-[16px] font-[400] mb-4">
            Consequat vel arcu feugiat dui eu tempor pretium
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your email"
              className="bg-white border-solid border-white w-full md:w-[274px] h-[40px] p-2"
            />
            <button className="w-[112px] h-[40px] bg-[#2460FD] text-white px-4">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  
    <p className="flex justify-center text-[#FFFFFFCC] bg-[#000D51] mt-5 text-sm">
      ©Copyright Business Consulting 2024. Design by Figma.guru
    </p>
  </div>
  
  )
}

export default Footer

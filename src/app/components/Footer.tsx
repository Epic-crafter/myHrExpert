import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full h-auto px-3 pt-16 bg-[#000D51]">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div className="section-1 flex flex-col">
        <div className="logo flex items-center mb-4">
          <img src="/homepageimages/logo4.png" alt="" className="mr-2"  />
          {/* <h2 className="text-white text-[16px] font-[600]">BUSINESS <br /> CONSULTING</h2> */}
        </div>
        <p className="text-[#FFFFFFCC] text-[16px] font-[400] mb-4">
        Empowering businesses with expert HR solutions.        </p>
        <div className="subscribe flex flex-col">
          <h2 className="text-white text-[16px] font-[600] mb-4">Subscribe Us</h2>
          <div className="subscribe-icon flex gap-3">
            <img src="/img/footer/Facebook_black.png" alt="" />
            <img src="/img/footer/frame 90.png" alt="" />
            <img src="/img/footer/instagram_black.png" alt="" />
          </div>
        </div>
      </div>
  
      <div className="section-2-services flex flex-col">
        <h2 className="text-[#FFFFFF] font-[700] text-[16px] mb-2">Services</h2>
        <div className="flex flex-col text-[#FFFFFFCC] font-[400] space-y-2">
          <a href="#">Talent Acuisition</a>
          <a href="#">Training&Development
          </a>
          <a href="#">Performance Management
          </a>
          <a href="#">Policy Development
          </a>
          <a href="#">HR Compliances
          </a>
        </div>
      </div>
  
      <div className="section-3-useful-links">
        <h2 className="text-[#FFFFFF] font-[700] text-[16px] mb-2">Useful links</h2>
        <div className="flex flex-col text-[#FFFFFFCC] font-[400] space-y-2">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
  
      <div className="section-4-newsletter flex flex-col justify-between mt-8 md:mt-0">
        <div className="info flex flex-col">
          <div className="address mb-6">
            <h1 className="font-[700] text-[16px] text-[#F7F6F6]">Address</h1>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">540, Niti Khand-1,</p>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">Indrapuram,</p>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">Ghaziabad - 201014</p>
          </div>
  
          <div className="contact flex flex-col">
            <h1 className="font-[700] text-[16px] text-[#F7F6F6]">Email</h1>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]"> info@myhrexpert.in</p>
            <h1 className="font-[700] text-[16px] text-[#F7F6F6]">Phone</h1>
            <p className="text-[#FFFFFFCC] text-[16px] font-[400]">+91-9220795585</p>
          </div>
        </div>
  
        <div className="newsletter">
          <h2 className="font-[700] text-[16px] text-[#F7F6F6] mb-2">Be the first to know about innovative HR solutions and industry news. Subscribe now!</h2>
          <p className="text-[#FFFFFFCC] text-[16px] font-[400] mb-4">
            
          </p>
          <div className="flex gap-3 md:w-full">
            <input
              type="text"
              placeholder="Your email"
              className="bg-white border-solid border-white h-[40px] p-2 md:w-1/2"
            />
            <button className="h-[40px] bg-[#2460FD] text-white px-4">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <Link href='https://amiigo.in'>
    <p className="text-center text-[#FFFFFFCC] bg-[#000D51] mt-5 text-sm py-3">
    © 2024 MyHRExpert. All rights reserved.Design and Maintained by Amiigo Tech
    </p>
    </Link>
  </div>
  
  )
}

export default Footer

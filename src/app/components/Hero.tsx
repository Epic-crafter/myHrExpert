import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="bg-[#000D51] flex flex-col md:flex-row h-auto md:h-[500px] justify-between">
  <div className="section-1 flex flex-col justify-center items-center md:items-start md:text-start text-center w-full md:w-[50%] mt-16 px-6 h-auto md:h-[330px] ">
    <div className="hero-text max-w-md">
      {/* <h5 className="text-[#f8ededcc] text-xl mb-6">Services</h5> */}
      <h2 className="text-[#ffffff] text-3xl md:text-4xl font-bold mt-0">
      Discover how we can empower your business!
      </h2>
      <p className="text-[#FFFFFFCC] text-xs md:text-sm mt-2">
      At My HR Expert, we deliver tailored solutions to meet your unique needs. From strategic HR support to innovative recruitment and business consultation, our services are designed to drive success. We prioritize quality, transparency, and personalized service to ensure exceptional results.
      </p>
    </div>

    <div className="mt-4">
      <div className="text-white bg-[#2460FD] w-[192px] h-[50px] text-center flex justify-center items-center">
        <Link href='/contact'>
        <button className="border-2 border-[#2460FD] border-solid px-2 py-2 text-sm">Contact Us

        </button>
        </Link>
      </div>
    </div>
  </div>

  <div className="section-2 w-full md:w-[50%] flex justify-center items-center">
    <div className="fram-img relative w-full">
      {<img src="/service/image5.png" alt="img frame"
      className='w-full object-contain'
      />}
    </div>

    {/* <div className="-img-marble relative left-[850px] transform -translate-x-1/2 top-[-500px] z-[10]">
      <img className="z-[10]" src="/img/marble 2.png" alt="img marble" />
    </div> */}
  </div>
</div>

  )
}

export default Hero

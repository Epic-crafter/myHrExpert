import React from 'react'

const LatestProjSection7 = () => {
  return (
    <div className="flex flex-col bg-[#F7F6F6] w-full h-auto pt-[60px] pb-[120px] gap-6">
  <div className="ml-6 md:ml-[75px] text-center md:text-left">
    <span className="text-[14px] md:text-[16px] text-[#6A6E7A]">BUSINESS CONSULTING</span>
    <h2 className="text-black text-[24px] md:text-[40px]">Latest projects</h2>
  </div>

  <div className="img-card flex flex-wrap justify-center md:justify-start gap-6 md:gap-[40px] px-6">
    <div className="flex flex-col card w-full md:w-[48%] max-w-[518px] gap-4">
      <img className="w-full h-auto" src="/img/Section-7/Img (1).png" alt="Project 1" />
      <div className="title-text flex flex-col gap-4">
        <h3 className="text-[#000D51] font-[600] text-[18px] md:text-[20px]">
          Building business agility begins with culture
        </h3>
        <p className="text-[#000D5199] font-[400] text-[14px] md:text-[16px]">
          Fringilla lacus eu porta neque turpis mauris nisi. Enim sed placerat aliquam lectus elit
        </p>
      </div>
    </div>

    <div className="flex flex-col card w-full md:w-[48%] max-w-[518px] gap-4">
      <img className="w-full h-auto" src="/img/Section-7/Img (2).png" alt="Project 2" />
      <div className="title-text flex flex-col gap-4">
        <h3 className="text-[#000D51] font-[600] text-[18px] md:text-[20px]">
          Building business agility begins with culture
        </h3>
        <p className="text-[#000D5199] font-[400] text-[14px] md:text-[16px]">
          Libero lectus viverra bibendum pellentesque rhoncus donec fermentum arcu ut
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default LatestProjSection7

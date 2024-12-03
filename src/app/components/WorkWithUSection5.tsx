import React from 'react'

const WorkWithUSection5 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto bg-[#F7F6F6] p-6 md:pt-[107px] md:pr-[182px] md:pb-[107px] md:pl-[182px] gap-8 md:gap-[134px] items-center">
  <div className="image-container w-full md:w-[416px] md:h-[416px] flex justify-center">
    <img className="max-w-full max-h-full object-cover" src="/img/section-5 img/Img.png" alt="Business Consulting" />
  </div>


  <div className="text-section w-full md:w-[526px] h-auto gap-4 md:gap-[20px] flex flex-col justify-center items-start md:items-start">
    <span className="text-[14px] md:text-[16px] font-[400] text-[#000D5199]">
      Business consulting
    </span>
    <h2 className="text-[24px] md:text-[40px] font-[600] text-[#000D51]">
      We work with you to make your vision a reality
    </h2>
    <p className="text-[14px] md:text-[16px] font-[400] text-[#000D5199]">
      Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius felis.
    </p>
  </div>
</div>

  )
}

export default WorkWithUSection5

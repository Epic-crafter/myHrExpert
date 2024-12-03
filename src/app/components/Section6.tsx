import React from 'react'

const Section6 = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto bg-[#000D51] p-6 md:pt-[60px] md:pr-[182px] md:pb-[60px] md:pl-[182px] gap-6 md:gap-[40px]">
  {/* Title Section */}
  <span className="text-[14px] md:text-[16px] font-[400] text-[#FFFFFFCC] text-center">
    BUSINESS CONSULTING
  </span>
  
  {/* Headline */}
  <div className="flex flex-col justify-center items-center text-center">
    <h2 className="text-[#F7F6F6] text-[24px] md:text-[40px] font-[600]">
      A business that thrives on the knowledge
    </h2>
    <h2 className="text-[#F7F6F6] text-[24px] md:text-[40px] font-[600]">
      and insight of the leaders
    </h2>
  </div>
  

  <div className="img-text flex flex-col gap-6 md:gap-[40px] items-center">
    <img className="w-full max-w-[600px]" src="/img/section-6/Img+ button.png" alt="Business Consulting" />
    
    <div className="flex flex-col md:flex-row justify-between text-container w-full max-w-[1076px] gap-6 md:gap-0 text-[14px] md:text-[16px] font-[400] text-[#FFFFFFCC]">
      <p className="w-full md:w-[50%]">
        Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies. Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius felis.
      </p>
      <p className="w-full md:w-[50%]">
        Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius felis.
      </p>
    </div>
  </div>
</div>

  )
}

export default Section6

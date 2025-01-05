import React from 'react'

const WorkWithUSection5 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto bg-[#F7F6F6] md:px-24 md:py-16 items-center justify-between space-x-5">
  <div className="image-container w-full md:w-[416px] md:h-[416px] flex justify-center">
    <img className="max-w-full max-h-full object-cover" src="/service/image9.png" alt="Business Consulting" />
  </div>


  <div className="text-section md:w-[526px] h-auto gap-4 md:gap-[20px] flex flex-col justify-center items-start md:items-start md:py-0 px-3 py-8">
    {/* <span className="text-[14px] md:text-[16px] font-[400] text-[#000D5199]">
      Business consulting
    </span> */}
    <h2 className="text-[24px] md:text-[40px] font-[500] text-[#000D51]">
      We work with you to make your vision a reality!
    </h2>
    <p className="text-[14px] md:text-[16px] font-[400] text-[#02040e99]">
    At My HR Expert, we partner with you to bring your vision to life. Whether it’s building exceptional teams or streamlining HR processes, our customized solutions align with your business goals, ensuring sustainable success. Together, we create strategies that drive growth and empower your organization to thrive.    </p>
  </div>
</div>

  )
}

export default WorkWithUSection5

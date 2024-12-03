import React from 'react'

const KnowMoreSection4 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto p-6 md:h-[240px] md:pt-[40px] md:pr-[20px] md:pb-[40px] md:pl-[20px] bg-[#000D51] gap-4">
  <div className="text-center">
    <h2 className="text-white text-[24px] md:text-[32px]">
      Want to know more?
    </h2>
    <h2 className="text-white text-[24px] md:text-[32px]">
      Contact with our business consultant
    </h2>
  </div>

  <div className="bg-[#2460FD] flex justify-center items-center w-[160px] h-[40px]">
    <button className="text-white border-2 border-[#2460FD] px-4 py-1 hover:bg-white hover:text-[#2460FD] transition-all">
      Learn more
    </button>
  </div>
</div>

  )
}

export default KnowMoreSection4

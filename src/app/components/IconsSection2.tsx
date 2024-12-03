import React from 'react'

const IconsSection2 = () => {
  return (
    <div className='gap-10 md:gap-20 flex flex-wrap justify-center md:justify-between md:px-[182px] md:py-[40px] px-[20px] py-[20px]'>
      <div className="item1 w-[196px] flex flex-col gap-[20px] items-center">
        <img className='w-[24px] h-[24px]' src="/img/iconsSection2/Icon (3).png" alt="" />
        <h2 className='text-xl text-[#000D51] '>Adress</h2>
        <div className='flex flex-col items-center'>
        <p className='text-[#000D5199] md:text-sm text-xs'>19 North Road Piscataway,</p>
        <p className='text-[#000D5199] md:text-sm text-xs'>NJ 08854</p>
        </div>
      </div>

      <div className="item1 flex flex-col gap-[20px] items-center">
        <img className='w-[24px] h-[24px]' src="/img/iconsSection2/Icon (4).png" alt="" />
        <h2 className='text-xl text-[#000D51] '>Email</h2>
        <div className='flex flex-col items-center'>
        <p className='text-[#000D5199] md:text-sm text-xs'>gamma@sbcglobal.net</p>
        <p className='text-[#000D5199] md:text-sm text-xs'>gamma@sbcglobal.net</p>
        </div>
      </div>

      <div className="item1 flex flex-col gap-[20px] items-center">
        <img className='w-[24px] h-[24px]' src="/img/iconsSection2/Icon (5).png" alt="" />
        <h2 className='text-xl text-[#000D51] '>Phone</h2>
        <div className='flex flex-col items-center'>
        <p className='text-[#000D5199] md:text-sm text-xs'                             >(246) 917-5787</p>
        <p className='text-[#000D5199] md:text-sm text-xs'>(246) 917-5787</p>
        </div>
      </div>

      <div className="item1 flex flex-col gap-[20px] items-center">
        <img className='w-[24px] h-[24px]' src="/img/iconsSection2/Icon (7).png" alt="" />
        <h2 className='text-xl text-[#000D51] '>Open hours</h2>
        <div className='flex flex-col items-center'>
        <p className='text-[#000D5199] md:text-sm text-xs'>Mon-Sat: 8 AM - 06 PM</p>
        <p className='text-[#000D5199] md:text-sm text-xs'>Sun: day off</p>
        </div>
      </div>
    </div>
  )
}

export default IconsSection2

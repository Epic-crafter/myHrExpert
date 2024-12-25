import React from 'react'

const IconsSection2 = () => {
  return (
    <div className='gap-10 md:gap-20 flex flex-wrap justify-center md:justify-between md:px-[182px] md:py-[40px] px-[20px] py-[20px]'>
      <div className="item1 w-[196px] flex flex-col gap-[20px] items-center">
        <img className='w-[100px] h-[100px]' src="/homepageimages/location.png" alt="" />
        <h2 className='text-xl text-[#000D51] '>Adress</h2>
        <div className='flex flex-col items-center'>
        <p className='text-[#000D5199] md:text-sm text-xs'>540, Niti Khand-1, Indrapuram,</p>
        <p className='text-[#000D5199] md:text-sm text-xs'>Ghaziabad - 201014</p>
        </div>
      </div>

      <div className="item1 flex flex-col gap-[20px] items-center">
        <img className='w-[104px] h-[104px]' src="/homepageimages/mail.png" alt="" />
        <h2 className='text-xl text-[#000D51] '>Email</h2>
        <div className='flex flex-col items-center'>
        <p className='text-[#000D5199] md:text-sm text-xs'> info@myhrexpert.in</p>
        {/* <p className='text-[#000D5199] md:text-sm text-xs'>gamma@sbcglobal.net</p> */}
        </div>
      </div>

      <div className="item1 flex flex-col gap-[20px] items-center">
        <img className='w-[104px] h-[104px]' src="homepageimages/phone.png" alt="" />
        <h2 className='text-xl text-[#000D51] '>Phone/WhatsApp</h2>
        <div className='flex flex-col items-center'>
        <p className='text-[#000D5199] md:text-sm text-xs'>+91-9220795585</p>
        {/* <p className='text-[#000D5199] md:text-sm text-xs'>(246) 917-5787</p> */}
        </div>
      </div>

      <div className="item1 flex flex-col gap-[20px] items-center">
        <img className='w-[104px] h-[104px]' src="/homepageimages/open.png" alt="" />
        <h2 className='text-xl text-[#000D51] '>Open hours</h2>
        <div className='flex flex-col items-center'>
        <p className='text-[#000D5199] md:text-sm text-xs'>Mon-Sat: 9:00 AM - 7:00 PM</p>
        {/* <p className='text-[#000D5199] md:text-sm text-xs'>Sun: day off</p> */}
        </div>
      </div>
    </div>
  )
}

export default IconsSection2

import React from 'react'

const OurOfficesSection4 = () => {
  return (
    <div className='h-auto md:h-[745px] flex flex-col gap-[40px] bg-[#F7F6F6] md:px-[182px] md:py-[60px] px-6'>
      <div className="section-1">
        <div className="header flex flex-col">
            <span className="text-[#000D51] text-sm">Business consulting</span>
            <div className="header-text flex justify-between">
            <h1 className="text-[#000D51] text-2xl md:text-4xl font-bold mt-2 w-full md:w-[474px]">Our offices</h1>
            <p className='text-[#000D5199] md:text-sm text-xs w-full md:w-[448px]'>Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque. 
Sed lorem ut nulla tortor sit eget felis. Integer malesuada cur</p>
        </div>
        </div>
      </div>

      <div className="section-2">
        <div className="cards h-auto md:h-[486px] flex flex-wrap justify-center md:flex-nowrap gap-10">
            <div className="card-1">
                <img src="/img/OurOfficesSection4/Img (5).png" alt="" />
                <div className="card-text bg-white p-4 md:p-[20px]">
                    <div className="card-header flex flex-col gap-3">
                        <h1 className="text-[#000D51] text-[24px] font-[600]">New - York</h1>
                        <div className='flex flex-col'>
                        <p className='text-[#000D5199] md:text-sm text-xs'>7914 Lees Creek St. Dayton, </p>
                        <p className='text-[#000D5199] md:text-sm text-xs'>OH 45420</p>
                        </div>
                        <div className='flex flex-col'>
                        <p className='text-[#000D5199] md:text-sm text-xs'>gamma@sbcglobal.net</p>
                        <p className='text-[#000D5199] md:text-sm text-xs'>(246) 917-5787</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-2">
                <img src="/img/OurOfficesSection4/Img (5).png" alt="" />
                <div className="card-text bg-white p-4 md:p-[20px]">
                    <div className="card-header flex flex-col gap-3">
                        <h1 className="text-[#000D51] text-[24px] font-[600]">London</h1>
                        <div className='flex flex-col'>
                        <p className='text-[#000D5199] md:text-sm text-xs'>506 Division Road Pembroke Pines, </p>
                        <p className='text-[#000D5199] md:text-sm text-xs'>FL 33028</p>
                        </div>
                        <div className='flex flex-col'>
                        <p className='text-[#000D5199] md:text-sm text-xs'>jaxweb@verizon.net</p>
                        <p className='text-[#000D5199] md:text-sm text-xs'>(644) 911-3520</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-3">
                <img src="/img/OurOfficesSection4/Img (5).png" alt="" />
                <div className="card-text bg-white p-4 md:p-[20px]">
                    <div className="card-header flex flex-col gap-3">
                        <h1 className="text-[#000D51] text-[24px] font-[600]">Brussels</h1>
                        <div className='flex flex-col'>
                        <p className='text-[#000D5199] md:text-sm text-xs'>8592 Fairground St. Tallahassee, </p>
                        <p className='text-[#000D5199] md:text-sm text-xs'>FL 32303</p>
                        </div>
                        <div className='flex flex-col'>
                        <p className='text-[#000D5199] md:text-sm text-xs'>aibrahim@sbcglobal.net</p>
                        <p className='text-[#000D5199] md:text-sm text-xs'>(360) 476-4400</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurOfficesSection4

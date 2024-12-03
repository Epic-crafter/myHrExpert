import React from 'react'

const ServiceOfferSection3 = () => {
  return (
    <div className="bg-[#F7F6F6] pt-[120px] pb-[120px]">
  <div className="section-1 sm:flex-col h-auto sm:gap-4 mb-[40px] px-4 md:px-[182px]">
    <span className="text-[#000D5199] text-center sm:text-left">Business consulting</span>
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl sm:text-3xl text-[#000D51] font-[600] text-center sm:text-left">
        What services do we offer <br /> for your business
      </h1>
      <p className="text-[#000D5199] text-center sm:text-left w-full sm:w-[448px]">
        Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque. 
        Sed lorem ut nulla tortor sit eget felis. Integer malesuada cur.
      </p>
    </div>
  </div>

  
  <div className="section-2 w-full flex flex-wrap justify-center gap-4 px-4">
    {[
      {
        img: "/img/cards/Icon (1).png",
        title: "Marketing Strategy",
        desc: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis.",
      },
      {
        img: "/img/cards/abstract-shape(2).png",
        title: "Financial Management",
        desc: "Sed lorem ut nulla tortor sit eget felis. Sit aliquet elementum ac nibh lorem nulla.",
      },
      {
        img: "/img/cards/marble 2 (1).png",
        title: "Business Strategy",
        desc: "Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant.",
      },
      {
        img: "/img/cards/abstract(3) 2.png",
        title: "Sales and Marketing",
        desc: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis.",
      },
      {
        img: "/img/cards/abstract-shape(1).png",
        title: "Digital Technology",
        desc: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis.",
      },
      {
        img: "/img/cards/abstract(1).png",
        title: "Human Resources",
        desc: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis.",
      },
      {
        img: "/img/cards/cross.png",
        title: "Commercial Analytics",
        desc: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis.",
      },
      {
        img: "/img/cards/rectangles 1.png",
        title: "Technology Insights",
        desc: "Sed lorem ut nulla tortor sit eget felis. Sit aliquet elementum ac nibh lorem nulla.",
      },
      {
        img: "/img/cards/figures.png",
        title: "Program Management",
        desc: "Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant.",
      },
    ].map((card, index) => (
      <div
        key={index}
        className="flex flex-col w-full sm:w-[332px] h-auto bg-white gap-4 p-6"
      >
        <img className="w-[60px] h-[60px] mx-auto sm:mx-0" src={card.img} alt="" />
        <h2 className="text-[20px] font-[500] text-[#000D51] text-center sm:text-left">{card.title}</h2>
        <p className="text-[#000D5199] text-[16px] font-[400] text-center sm:text-left">{card.desc}</p>
        <button className="border-[2px] border-[#2460FD] bg-[#2460FD] text-white flex justify-center items-center mx-auto sm:mx-0 w-[160px] h-[40px]">
          Details <img className="ml-2" src="/img/cards/arrow-right.png" alt="" />
        </button>
      </div>
    ))}
  </div>
</div>

  )
}

export default ServiceOfferSection3

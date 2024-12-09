import React from 'react';

const Business = () => {
  const sectors = [
    {
      title: "Real Estate",
      image: "./blurimg.png",
      alt: "Real Estate Sector"
    },
    {
      title: "Agriculture",
      image: "./image2.png",
      alt: "Agriculture Sector"
    },
    {
      title: "Travel",
      image: "./image3.png",
      alt: "Travel Sector"
    },
    {
      title: "Automotive",
      image: "./image4.png",
      alt: "Automotive Sector"
    },
    {
      title: "Financial Services",
      image: "./image5.png",
      alt: "Financial Services Sector"
    },
    {
      title: "Construction",
      image: "./image6.png",
      alt: "Construction Sector"
    },
    {
      title: "Retail",
      image: "./image7.png",
      alt: "Retail Sector"
    },
    {
      title: "Logistic",
      image: "./image8.png",
      alt: "Logistic Sector"
    }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start mb-14 px-5">
        <div className="flex flex-col gap-0 max-w-xl">
          <span className="text-base font-semibold text-[#000D51] uppercase tracking-wide">BUSINESS CONSULTING</span>
          <span className="text-[40px] font-bold text-[#000D51] leading-tight">
            What sectors of the economy do we serve
          </span>
        </div>
        <p className="flex items-start max-w-md">
          <img src="./image.png" alt="Business Icon" className="w-[43px] h-[45px] mr-3 mt-1" />
          <span className="text-sm leading-7 text-gray-600">
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies. Tincidunt massa amet sagittis aliquam turpis volutpat.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center max-w-[1000px] mx-auto">
        {sectors.map((sector, index) => (
          <div key={index} className="relative w-full h-[220px] overflow-hidden group">
            <img
              src={sector.image}
              alt={sector.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            <div className="absolute bottom-5 left-5 text-white text-lg font-medium z-10">
              {sector.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Business;

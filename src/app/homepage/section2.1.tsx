import React from 'react';

const Business = () => {
  const sectors = [
    { title: "Higher Shiksha", image: "./homepageimages/image copy 2.png", alt: "Higher Shiksha Sector" },
    { title: "Pharmalinkin", image: "./homepageimages/Pharmalinkin.png", alt: "Pharmalinkin Sector" },
    { title: "Face Transformers", image: "./homepageimages/FACE Transformers1111.png", alt: "Face Transformers Sector" },
    { title: "Unacademy", image: "./homepageimages/image copy 9.png", alt: "Unacademy Sector" },
    { title: "Genpact", image: "./homepageimages/image copy 3.png", alt: "Genpact Sector" },
    { title: "Unico", image: "./homepageimages/image copy 4.png", alt: "Unico Sector" },
    { title: "Collegetour", image: "./homepageimages/image copy 5.png", alt: "Collegetour Sector" },
    { title: "Logistic", image: "./homepageimages/image copy 6.png", alt: "Logistic Sector" },
  ];

  return (
    <div className="px-5">
      <div className="flex flex-col md:flex-row justify-between items-start mb-14">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-base font-semibold text-[#000D51] uppercase tracking-wide">BUSINESS CONSULTING</span>
          <span className="text-3xl md:text-4xl font-bold text-[#000D51] leading-tight">
            What sectors of the economy do we serve
          </span>
        </div>
        <p className="flex items-start max-w-md mt-5 md:mt-0">
          <img src="./image.png" alt="Business Icon" className="w-11 h-11 mr-3 mt-1" />
          <span className="text-sm leading-7 text-gray-600">
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies. Tincidunt massa amet sagittis aliquam turpis volutpat.
          </span>
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden shadow-md group"
          >
            <div className="absolute inset-0">
              <img
                src={sector.image}
                alt={sector.alt}
                className="w-full h-full object-contain bg-white transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white text-lg font-medium z-10">
              {sector.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;


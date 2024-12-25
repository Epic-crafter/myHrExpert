
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Business = () => {
  const sectors = [
    { title: "Higher Shiksha", image: "./homepageimages/icon1.jpg", alt: "Higher Shiksha Sector" },
    { title: "Pharmalinkin", image: "./homepageimages/icon.jpg", alt: "Pharmalinkin Sector" },
    { title: "Face Transformers", image: "./homepageimages/icon01.jpg", alt: "Face Transformers Sector" },
    { title: "Unacademy", image: "./homepageimages/icon6.png", alt: "L'amour Bakehouse Sector" },
    { title: "Genpact", image: "./homepageimages/icon7.png", alt: "Collegepartner Sector" },
    { title: "Unico", image: "./homepageimages/icon3.png", alt: "Unico Foods Sector" },
    { title: "Collegetour", image: "./homepageimages/icon5.png", alt: "Collegetour Sector" },
    { title: "Amiigo", image: "./homepageimages/image copy7.jpeg", alt: "Amiigo Sector" },
    { title: "Intelenet", image: "./homepageimages/icon9.png", alt: "Intelenet Sector" },
  ];
  

  return (
    <div className="px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-14">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-base font-semibold text-[#000D51] uppercase tracking-wide">BUSINESS CONSULTING</span>
          <span className="text-3xl md:text-4xl font-bold text-[#000D51] leading-tight">
            What sectors of the economy do we serve
          </span>
        </div>
        {/* <p className="flex items-start max-w-md mt-5 md:mt-0">
          <img src="./image.png" alt="Business Icon" className="w-11 h-11 mr-3 mt-1" />
          <span className="text-sm leading-7 text-gray-600">
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies. Tincidunt massa amet sagittis aliquam turpis volutpat.
          </span>
        </p> */}
      </div>

      {/* Grid Section */}

      <Swiper
      spaceBetween={60}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
className='w-full h-[200px] px-4 lg:px-24'
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
navigation={true}
modules={[Autoplay, Pagination, Navigation]}
>
      {sectors.map((sector, index) => (
          <SwiperSlide
            key={index}
            className="relative aspect-square h-[120px] bg-gray-100 rounded-lg overflow-hidden shadow-md group"
          >
            <img
              src={sector.image}
              alt={sector.alt}
              className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white text-lg font-medium z-10">
              {sector.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  


     
    </div>
  );
};

export default Business;

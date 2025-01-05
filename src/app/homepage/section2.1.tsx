"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Business = () => {
  const sectors = [
    { title: "Higher Shiksha", image: "./homepageimages/logo002.jpeg", alt: "Higher Shiksha Sector" },
    { title: "Pharmalinkin", image: "./homepageimages/icon.jpg", alt: "Pharmalinkin Sector" },
    { title: "Face Transformers", image: "./homepageimages/logo003.jpeg", alt: "Face Transformers Sector" },
    { title: "L'amour Bakehouse", image: "./homepageimages/logo007.jpeg", alt: "L'amour Bakehouse Sector" },
    { title: "Collegepartner", image: "./homepageimages/logo006.jpeg", alt: "Collegepartner Sector" },
    { title: "Unico", image: "./homepageimages/logo004.jpeg", alt: "Unico Foods Sector" },
    { title: "Collegetour", image: "./homepageimages/logo005.jpeg", alt: "Collegetour Sector" },
    { title: "Amiigo", image: "./homepageimages/image copy7.jpeg", alt: "Amiigo Sector" },
    { title: "Intelenet", image: "./homepageimages/icon9.png", alt: "Intelenet Sector" },
  ];
  

  return (
    <div className="px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-3xl md:text-4xl font-bold text-[#000D51] leading-tight">
            What sectors of the economy do we serve
          </span>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-[#000D51]'
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="pb-12"
        >
          {sectors.map((sector, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-md group">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img
                    src={sector.image}
                    alt={sector.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-lg font-medium z-10">
                  {sector.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-[#000D51] !w-8 !h-8 !left-0 after:!text-xl"></div>
        <div className="swiper-button-next !text-[#000D51] !w-8 !h-8 !right-0 after:!text-xl"></div>
      </div>
    </div>
  );
};

export default Business;


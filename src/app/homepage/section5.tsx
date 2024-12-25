import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react"; // This import is unused, you may remove it if not needed
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NewsSection = () => {
  const newsItems = [
    {
      date: "25.01.24",
      category: "Business consulting",
      title: "Building business agility begins with culture",
      image: "./homepageimages/image copy7.jpeg",
      link: "#"
    },
    {
      date: "25.01.24",
      category: "Business consulting",
      title: "Strategies to protect your profits",
      image: "./homepageimages/image copy7.jpeg",
      link: "#"
    },
    {
      date: "25.01.24",
      category: "Business consulting",
      title: "We Bring Flexibility & Cost Efficiency",
      image: "./homepageimages/image copy7.jpeg",
      link: "#"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-600 uppercase mb-2">
            Business Consulting
          </div>
          <h2 className="text-4xl font-bold text-navy-900">
            Latest news
          </h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='w-full h-[400px] px-6 lg:px-24'
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
          {newsItems.map((newsItem, index) => (
            <SwiperSlide
              key={index}
              className="relative aspect-square h-[120px] bg-gray-100 rounded-lg overflow-hidden shadow-md group"
            >
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-lg font-medium z-10">
                {newsItem.title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsSection;

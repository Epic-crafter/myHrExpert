"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface NewsItem {
  title: string;
  imageUrl: string;
}

const NewsSection = () => {
  const [data, setData] = useState<NewsItem[]>([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blog/get-3-blog");
      const blogs = await res.json();
      if (blogs.length > 0) {
        setData(blogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    console.log("Data loaded:", data); // Debugging fetched data
  }, [data]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Latest news</h2>
        </div>

        <div className="relative px-4 md:px-8">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="!pb-12"
            onSwiper={(swiper) => {
              console.log("Swiper initialized:", swiper); // Debugging Swiper instance
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {data.map((newsItem, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[300px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={newsItem.imageUrl}
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg md:text-xl font-medium">
                      {newsItem.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="custom-prev absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-md transition-all duration-300 hover:scale-110"
            aria-label="Previous"
            onClick={() => console.log("Previous clicked")}
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
          </button>
          <button
            className="custom-next absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-md transition-all duration-300 hover:scale-110"
            aria-label="Next"
            onClick={() => console.log("Next clicked")}
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
          </button>

          <div className="custom-pagination absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2"></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #000;
          opacity: 0.2;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }

        .custom-prev,
        .custom-next {
          opacity: 0.7;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .custom-prev:hover,
        .custom-next:hover {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default NewsSection;

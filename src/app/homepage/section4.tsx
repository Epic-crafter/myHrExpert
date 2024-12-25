import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const TestimonialSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <Swiper
          spaceBetween={30}
          slidesPerView={1}
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
          
            <SwiperSlide
              
              className="relative aspect-square h-[120px] bg-gray-100 rounded-lg overflow-hidden shadow-md group"
            >
                 <div className="bg-white rounded-lg shadow-lg p-12 flex flex-col md:flex-row gap-12 items-start relative">

<div className="w-full md:w-96 h-96 bg-blue-600 rounded-lg flex-shrink-0 overflow-hidden">

  <img
    src="./homepageimages/image copy7.jpeg" 
    alt="Testimonial"
    className="w-full h-full object-cover"
  />
</div>

{/* Right side - Content */}
<div className="flex-1">
  <h2 className="text-3xl font-bold mb-8 text-navy-900">Amiigo</h2>
  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
  Their tailored approach helped us navigate complex challenges and achieve our business goals more efficiently. The professionalism and strategic insights they provided have truly made a difference in our operations. We highly recommend their services to anyone seeking effective and results-driven consulting.
  </p>
  
  <div className="mt-4">
    <h3 className="font-medium text-xl">Gaurav Pandey</h3>
    <p className="text-gray-500">CEO / Amiigo Group</p>
  </div>
</div>

<div className="absolute bottom-12 right-12">
  <span className="text-6xl font-serif text-navy-900">&quot;</span>
</div>
</div>
              
            </SwiperSlide>
            <SwiperSlide
              
              className="relative aspect-square h-[120px] bg-gray-100 rounded-lg overflow-hidden shadow-md group"
            >
                 <div className="bg-white rounded-lg shadow-lg p-12 flex flex-col md:flex-row gap-12 items-start relative">

<div className="w-full md:w-96 h-96 bg-blue-600 rounded-lg flex-shrink-0 overflow-hidden">

  <img
    src="./homepageimages/ic1.jpg" 
    alt="Testimonial"
    className="w-full h-full object-cover"
  />
</div>

{/* Right side - Content */}
<div className="flex-1">
  <h2 className="text-3xl font-bold mb-8 text-navy-900">Higher Shiksha</h2>
  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
  "Building an education startup required passionate and talented individuals, and MyHRexpert delivered exactly that. Their meticulous approach to understanding our needs and sourcing the right talent has been a key factor in our success. We couldn’t have done it without them!"  </p>
  
  <div className="mt-4">
    <h3 className="font-medium text-xl">Abhishek</h3>
    <p className="text-gray-500">Business Head</p>
  </div>
</div>

<div className="absolute bottom-12 right-12">
  <span className="text-6xl font-serif text-navy-900">&quot;</span>
</div>
</div>
              
            </SwiperSlide>
            <SwiperSlide
              
              className="relative aspect-square h-[120px] bg-gray-100 rounded-lg overflow-hidden shadow-md group"
            >
                 <div className="bg-white rounded-lg shadow-lg p-12 flex flex-col md:flex-row gap-12 items-start relative">

<div className="w-full md:w-96 h-96 bg-blue-600 rounded-lg flex-shrink-0 overflow-hidden">

  <img
    src="./homepageimages/icon.jpg" 
    alt="Testimonial"
    className="w-full h-full object-cover"
  />
</div>

{/* Right side - Content */}
<div className="flex-1">
  <h2 className="text-3xl font-bold mb-8 text-navy-900">Pharmalinkin</h2>
  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
  "Finding the right talent in the pharmaceutical industry requires precision and deep understanding, and MyHRexpert has excelled on both fronts. Their expertise in navigating niche recruitment, compliance, and workforce management has been instrumental in building a team that drives innovation and growth for our company. They are a trusted partner we highly recommend."  </p>
  
  <div className="mt-4">
    <h3 className="font-medium text-xl">Gaurav Bhardwaj</h3>
    <p className="text-gray-500">Director & CEO</p>
  </div>
</div>

<div className="absolute bottom-12 right-12">
  <span className="text-6xl font-serif text-navy-900">&quot;</span>
</div>
</div>
              
            </SwiperSlide>
            <SwiperSlide
              
              className="relative aspect-square h-[120px] bg-gray-100 rounded-lg overflow-hidden shadow-md group"
            >
                 <div className="bg-white rounded-lg shadow-lg p-12 flex flex-col md:flex-row gap-12 items-start relative">

<div className="w-full md:w-96 h-96 bg-blue-600 rounded-lg flex-shrink-0 overflow-hidden">

  <img
    src="./homepageimages/icon3.png" 
    alt="Testimonial"
    className="w-full h-full object-cover"
  />
</div>

{/* Right side - Content */}
<div className="flex-1">
  <h2 className="text-3xl font-bold mb-8 text-navy-900">Unico</h2>
  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
  "As a new business, finding the right talent and setting up HR processes felt overwhelming until we partnered with MyHRexpert. Their team not only helped us hire top-notch talent but also designed a seamless HR framework tailored to our needs. Their dedication and expertise have been invaluable to our growth journey."  </p>
  
  <div className="mt-4">
    <h3 className="font-medium text-xl">Kshitiz Bagla</h3>
    <p className="text-gray-500">Director & CEO</p>
  </div>
</div>

<div className="absolute bottom-12 right-12">
  <span className="text-6xl font-serif text-navy-900">&quot;</span>
</div>
</div>
              
            </SwiperSlide>
        </Swiper>
   
    </div>
  );
};

export default TestimonialSection;

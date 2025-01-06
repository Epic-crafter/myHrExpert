import React from 'react';

const Section8 = () => {
  return (
    <div
      className="relative flex items-center justify-center bg-cover bg-center h-screen w-full"
      style={{
        backgroundImage: "url('/service/image8.png')",
        backgroundSize: "cover", // Ensure the image covers the container
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling of the image
      }}
    >
      {/* Full-page black overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top of the overlay */}
      <div className="relative text-center text-white p-6">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
          Are you looking for innovative solutions?
        </h1>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-sm text-white/80 font-normal md:text-base">
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur
          </p>
          <p className="text-sm text-white/80 font-normal md:text-base">
            vel interdum leo justo at ultricies. Tincidunt
          </p>
        </div>
        <button className="w-40 h-10 mt-4 text-white bg-[#2460FD] border-2 border-[#2460FD] hover:bg-[#1d50ca] transition duration-200">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Section8;

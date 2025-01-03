import React from 'react';

const LogoGrid = () => {
  const logos = [
    {
      id: 'D+',
      src: './aboutus-images/image copy 12.png',
      alt: 'D+ Company'
    },
    {
      id: 'FA',
      src: './aboutus-images/image copy 20.png',
      alt: 'FA Company'
    },
    {
      id: 'A',
      src: './aboutus-images/image copy 24.png',
      alt: 'A Company'
    },
    {
      id: 'RCA',
      src: './aboutus-images/image copy 22.png',
      alt: 'RCA Company'
    },
    {
      id: 'Company',
      src: './aboutus-images/image copy 23.png',
      alt: 'Company'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-8 my-8 shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.05)]">
      <div className="grid md:grid-cols-5 grid-cols-2 space-y-6 justify-center items-center">
        {logos.map((logo) => (
          <div key={logo.id} className="w-full h-full flex justify-center items-center">
            <img src={logo.src} alt={logo.alt} className="w-[46px] h-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;

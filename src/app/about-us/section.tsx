import React from 'react';


const BusinessConsulting = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-[#94A3B8] mb-3 text-sm tracking-wide uppercase">
          BUSINESS CONSULTING
        </p>
        <h1 className="text-[#0A2463] text-4xl font-bold">Helping your business build and grow</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="./aboutus-images/image copy 5.png" alt="What we do" className=" w-[3rem]" />
          </div>
          <div className="text-center">
            <h3 className="text-[#0A2463] text-2xl font-bold mb-2">What we do</h3>
            <p className="text-[#666666] text-[16px] mt-4">
              Suspicit legat purus ac nunc amet. Id pulvinar arcu vitae nec non tristique nibh. Sed lorem ut nulla tortor sit aget felsi.
              Integer molestude suspicere venenatis leo.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="./aboutus-images/image copy 21.png" alt="How we work" className=" w-[3rem]" />
          </div>
          <div className="text-center">
            <h3 className="text-[#0A2463] text-2xl font-bold mb-2">How we work</h3>
            <p className="text-[#666666] text-[16px] mt-4">
              Sed lorem ut nulla tortor sit aget felsi. Integer molestude suspicere venenatis leo.
              Just js ut illiciris. Sed integer tempus elementum ac anis lorem nulla morbi.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="./aboutus-images/image copy 25.png" alt="Where we work" className=" w-[3rem]" />
          </div>
          <div className="text-center">
            <h3 className="text-[#0A2463] text-2xl font-bold mb-2">Where we work</h3>
            <p className="text-[#666666] text-[16px] mt-4">
              Sit aliquam tempus elementum ac anis lorem nulla morbi. Tincidunte massa sagittis aliquet ipsum vivere.
              Vitae aliquam malestde verius felisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default BusinessConsulting;

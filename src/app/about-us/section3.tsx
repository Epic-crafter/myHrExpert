import React from "react";

const BusinessStats = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 bg-gray-50 gap-[4rem]">

      <div className="flex-shrink-0">
        <img
          src="./aboutus-images/image copy 7.png"
          alt="Business consulting"
          className="w-full max-w-lg lg:max-w-md h-auto object-cover rounded-md shadow-sm"
        />
      </div>


      <div className="mt-12 lg:mt-0 lg:ml-20 max-w-lg">
       
        <p className="text-sm tracking-wide text-gray-500 uppercase">
          BUSINESS CONSULTING
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2463] mt-2">
          Take your small business <br /> since the NEXT level.
        </h1>


        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam
          malesuada varius felis
        </p>


        <div className="mt-8 space-y-6">
 
          <div>
            <p className="text-gray-600 text-base font-medium">
              overall satisfaction
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-md mt-1">
              <div
                className="bg-blue-500 h-2 rounded-md"
                style={{ width: "98%" }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm text-right mt-1">98%</p>
          </div>

          
          <div>
            <p className="text-gray-600 text-base font-medium">massa amet</p>
            <div className="w-full bg-gray-200 h-2 rounded-md mt-1">
              <div
                className="bg-blue-500 h-2 rounded-md"
                style={{ width: "96%" }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm text-right mt-1">96%</p>
          </div>

          
          <div>
            <p className="text-gray-600 text-base font-medium">varius felis</p>
            <div className="w-full bg-gray-200 h-2 rounded-md mt-1">
              <div
                className="bg-blue-500 h-2 rounded-md"
                style={{ width: "94%" }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm text-right mt-1">94%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStats;

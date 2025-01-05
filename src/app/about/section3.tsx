import React from "react";

const BusinessStats = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 bg-gray-50 gap-[4rem]">

      <div className="flex-shrink-0">
        <img
          src="./aboutus/image.jpg"
          alt="Business consulting"
          className="w-full max-w-lg lg:max-w-md h-[55vh] object-cover rounded-md shadow-sm"
        />
      </div>


      <div className="mt-12 lg:mt-0 lg:ml-20 max-w-lg">
       
        {/* <p className="text-sm tracking-wide text-gray-500 uppercase">
          BUSINESS CONSULTING
        </p> */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2463] mt-2">
          Take your business to the NEXT level!
        </h1>


        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          With My HR Expert, you can expect;
        </p>


        <div className="mt-8 space-y-6">
 
          <div>
            <p className="text-gray-600 text-base font-medium">
              Expertise in Services
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-md mt-1">
              <div
                className="bg-blue-500 h-2 rounded-md"
                style={{ width: "100%" }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm text-right mt-1">100%</p>
          </div>

          
          <div>
            <p className="text-gray-600 text-base font-medium">Quality Employees</p>
            <div className="w-full bg-gray-200 h-2 rounded-md mt-1">
              <div
                className="bg-blue-500 h-2 rounded-md"
                style={{ width: "100%" }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm text-right mt-1">100%</p>
          </div>

          
          <div>
            <p className="text-gray-600 text-base font-medium">Overall Satisfaction</p>
            <div className="w-full bg-gray-200 h-2 rounded-md mt-1">
              <div
                className="bg-blue-500 h-2 rounded-md"
                style={{ width: "100%" }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm text-right mt-1">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStats;

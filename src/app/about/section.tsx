import React from 'react';


const BusinessConsulting = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        {/* <p className="text-[#94A3B8] mb-3 text-sm tracking-wide uppercase">
          BUSINESS CONSULTING
        </p> */}
        <h1 className="text-[#0A2463] text-4xl font-bold">Helping your business build and grow</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="./aboutus/image copy 5.png" alt="What we do" className=" w-[3rem]" />
          </div>
          <div className="text-center">
            <h3 className="text-[#0A2463] text-2xl font-bold mb-2">About Us</h3>
            <p className="text-[#666666] text-[16px] mt-4">
             Welcome to MyHRExpert, your trusted partner in HR consulting and outsourcing solutions. With over 5 years of dedicated experience in the HR industry, we have established ourselves as a dynamic startup committed to transforming the way organizations manage their human resources.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="./aboutus/image copy 21.png" alt="How we work" className=" w-[3rem]" />
          </div>
          <div className="text-center">
            <h3 className="text-[#0A2463] text-2xl font-bold mb-2">Our Journey</h3>
            <p className="text-[#666666] text-[16px] mt-4">
              Founded with the vision of enhancing HR practices in India, MyHRExpert has quickly grown to become a prominent player in the HR consulting space. Our team of experienced professionals is dedicated to delivering exceptional service and driving operational transformation within the recruitment and staffing industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="./aboutus/image copy 25.png" alt="Where we work" className=" w-[3rem]" />
          </div>
          <div className="text-center">
            <h3 className="text-[#0A2463] text-2xl font-bold mb-2">Our Reach</h3>
            <p className="text-[#666666] text-[16px] mt-4">
              While we are rooted in India, we have a global outlook. Our corporate office is located in Ghaziabad, but having our associates in the key cities like Hyderabad, Pune, Mumbai, Delhi, Bangalore, Chandigarh etc. We also maintain a digital international presence, allowing us to serve clients across borders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default BusinessConsulting;

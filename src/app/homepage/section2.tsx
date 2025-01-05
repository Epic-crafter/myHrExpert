import React from "react";

const BrighterFinancialFuture = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[-63px]">


      <div
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: 'url("/image home.jpg")' }}
      />

      <div className="w-full md:w-1/2 bg-[#000080] py-10 px-6 md:px-12 text-white font-normal">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Why Choose MyHRExpert?
        </h2>
        <div className="space-y-6">

          <div className="flex flex-col md:flex-row items-start">
            <span className="text-3xl mr-0 md:mr-3 mb-2 md:mb-0">&#8608;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Tailored Solutions</h3>
              <p className="text-sm md:text-base">
              Our bespoke HR services are designed to meet the unique needs of your organization, whether you’re a startup or an established enterprise.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <span className="text-3xl mr-0 md:mr-3 mb-2 md:mb-0">&#8608;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Single Point of Contact</h3>
              <p className="text-sm md:text-base">
              You’ll have a dedicated HR specialist who understands your business and can address all your HR needs efficiently.              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <span className="text-3xl mr-0 md:mr-3 mb-2 md:mb-0">&#8608;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Cutting-Edge Technology</h3>
              <p className="text-sm md:text-base">
              We leverage the latest HR trends and technologies to drive effective outcomes for our clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <span className="text-3xl mr-0 md:mr-3 mb-2 md:mb-0">&#8608;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Reduced Compliance Risk</h3>
              <p className="text-sm md:text-base">
              Let us manage the complexities of HR compliance, so you can focus on driving your business forward.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrighterFinancialFuture;

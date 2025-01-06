import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "./homepageimages/talent.png",
    title: " Talent Acquisition & Recruitment",
    description: "Finding the right talent is essential for success. We leverage innovative sourcing strategies and deep industry insights to attract top candidates who align with your company’s values and goals.",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./homepageimages/hr.png",
    title: "HR Strategy Development",
    description: "A strong HR strategy is vital for aligning your people practices with business objectives. Our team collaborates closely with you to create a customized HR strategy that enhances organizational effectiveness, ",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./homepageimages/performance.png",
    title: "Performance Management & Training",
    description: "Engaged employees drive productivity and innovation. We design and implement tailored engagement initiatives that enhance job satisfaction and loyalty. ",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./homepageimages/regulatory-compliance (1).png",
    title: "  HR Compliance & Policy Development",
    description: "Maximize your team’s potential with our comprehensive performance management solutions. We establish effective goal-setting, feedback mechanisms, and evaluation processes that support employee ",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./homepageimages/human-resources (1).png",
    title: "HR Technology Implementations",
    description: "Transform your HR functions with cutting-edge technology. We guide you through selecting and implementing the right HR systems that streamline processes, enhance communication, ",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "../homepageimages/image copy.png",
    title: "Organizational Design, workforce planning & Change Management",
    description: "Adaptability is key in today’s dynamic business landscape. We assist you in designing an organizational structure that aligns with your strategic goals, ensuring effective workforce planning. ",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  }
];

const BusinessServices = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-start">
          <div className="max-w-xl">
            {/* <h6 className="text-sm uppercase tracking-wider text-gray-600 mb-2">
              BUSINESS CONSULTING
            </h6> */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What services do we offer for your business?
            </h2>
          </div>
          {/* <div className="flex flex-col items-end">
            <p className="text-gray-500 max-w-md text-right mb-2">
              Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius felis...
            </p>
            <Button 
              variant="link" 
              className="text-[#2563EB] hover:text-blue-700"
            >
              All services
            </Button>
          </div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.bgColor} border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-none`}
            >
              <CardContent className="p-6">
                <div className="mb-4 w-10 h-10 relative">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm">
                  {service.description}
                </p>
                <Link href='/services'>
                <Button 
                  variant="default"
                  className="bg-[#2563EB] hover:bg-blue-700 text-white px-4 py-2 text-sm"
                >
                  Details →
                </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-8 bg-white p-6  mx-auto">
        <div>
          <h3 className="text-4xl font-bold text-[#00053D] mb-2">3k+</h3>
          <p className="text-gray-500">Supported businesses</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#00053D] mb-2">4k+</h3>
          <p className="text-gray-500">Projects done</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#00053D] mb-2">4k+</h3>
          <p className="text-gray-500">Clients worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;

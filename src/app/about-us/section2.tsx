import React from "react";

const OurTeam = () => {
  const teamMembers = [
    { name: "Ryder Malone", role: "Global Interactions Agent", image: "./aboutus-images/image copy 6.png" },
    { name: "Allyson Blair", role: "Investor Response Assistant", image: "./aboutus-images/image copy 13.png" },
    { name: "Jackson Mahoney", role: "Chief Factors Coordinator", image: "./aboutus-images/image copy 14.png" },
    { name: "Kara Hawkins", role: "Product Quality Strategist", image: "./aboutus-images/image copy 15.png" },
    { name: "Valeria Bolton", role: "Global Interactions Agent", image: "./aboutus-images/image copy 16.png" },
    { name: "Johnathon Crosby", role: "Investor Response Assistant", image: "./aboutus-images/image copy 17.png" },
    { name: "Derick Fry", role: "Product Quality Strategist", image: "./aboutus-images/image copy 18.png" },
    { name: "Erick Taylor", role: "Chief Factors Coordinator", image: "./aboutus-images/image copy 19.png" },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <p className="text-[#94A3B8] mb-3 text-sm tracking-wide uppercase text-center">
        BUSINESS CONSULTING
      </p>
      <h1 className="text-[#0A2463] text-4xl font-bold mb-12 text-center">
        Our team of experts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white border border-gray-200 shadow-sm">

            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[376px] object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="text-[#0A2463] text-xl font-semibold">{member.name}</h2>
              <p className="text-[#666666] text-sm mt-2">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

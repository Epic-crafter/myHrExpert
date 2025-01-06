import React from 'react'
import Link from 'next/link'

const ServiceOfferSection3 = () => {
  return (
    <div className="bg-[#F7F6F6] pt-[120px] pb-[120px]">
  <div className="section-1 sm:flex-col h-auto sm:gap-4 mb-[40px] px-4 md:px-[182px]">
    {/* <span className="text-[#000D5199] text-center sm:text-left">Business consulting</span> */}
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-2xl sm:text-3xl text-[#000D51] font-[600] text-center sm:text-left">
        What services do we offer for your business?
      </h1>
      {/* <p className="text-[#000D5199] text-center sm:text-left w-full sm:w-[448px]">
        Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque. 
        Sed lorem ut nulla tortor sit eget felis. Integer malesuada cur.
      </p> */}
    </div>
  </div>

  
  <div className="section-2 w-full flex flex-wrap justify-center gap-4 px-4">
    {[
      {
        img: "/img/cards/Icon (1).png",
        title: "Talent Acquisition & Recruitment",
        desc: "Finding the right talent is essential for success. We leverage innovative sourcing strategies and deep industry insights to attract top candidates who align with your company’s values and goals. From crafting compelling job descriptions to managing the entire recruitment process, we ensure a seamless hiring experience that strengthens your workforce..",
      },
      {
        img: "/img/cards/abstract-shape(2).png",
        title: "HR Strategy Development",
        desc: "A strong HR strategy is vital for aligning your people practices with business objectives. Our team collaborates closely with you to create a customized HR strategy that enhances organizational effectiveness, promotes talent development, and fosters a positive workplace culture. We use data-driven insights to ensure your strategy is actionable and measurable.",
      },
      {
        img: "/img/cards/marble 2 (1).png",
        title: "Employee Engagement & Retention Programs",
        desc: "Engaged employees drive productivity and innovation. We design and implement tailored engagement initiatives that enhance job satisfaction and loyalty. Our retention programs focus on understanding employee needs, providing growth opportunities, and cultivating a culture of appreciation, ensuring your top talent stays with you.",
      },
      {
        img: "/img/cards/abstract(3) 2.png",
        title: "Performance Management & Training",
        desc: "Maximize your team’s potential with our comprehensive performance management solutions. We establish effective goal-setting, feedback mechanisms, and evaluation processes that support employee development. Additionally, our targeted training programs are designed to address skill gaps, empowering your employees to excel in their roles.",
      },
      {
        img: "/img/cards/abstract-shape(1).png",
        title: "HR Compliance & Policy Development",
        desc: "Staying compliant with HR regulations is critical for risk management. We help you develop clear, comprehensive HR policies that meet legal requirements and industry best practices. Our ongoing support ensures that your organization remains compliant with changing regulations, safeguarding your interests.",
      },
      // {
      //   img: "/img/cards/abstract(1).png",
      //   title: "HR Technology Implementations",
      //   desc: "Transform your HR functions with cutting-edge technology. We guide you through selecting and implementing the right HR systems that streamline processes, enhance communication, and improve data management. Our team ensures a smooth transition, offering training and support to help you maximize your technology investment.",
      // },
      {
        img: "/img/cards/cross.png",
        title: "Workforce Planning & Change Management",
        desc: "Adaptability is key in today’s dynamic business landscape. We assist you in designing an organizational structure that aligns with your strategic goals, ensuring effective workforce planning. Our change management strategies facilitate smooth transitions, helping your organization remain agile and prepared for future challenges.",
      },
      // {
      //   img: "/img/cards/rectangles 1.png",
      //   title: "Technology Insights",
      //   desc: "Sed lorem ut nulla tortor sit eget felis. Sit aliquet elementum ac nibh lorem nulla.",
      // },
      // {
      //   img: "/img/cards/figures.png",
      //   title: "Program Management",
      //   desc: "Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant.",
      // },
    ].map((card, index) => (
      <div
        key={index}
        className="flex flex-col w-full sm:w-[332px] h-auto bg-white gap-4 p-6"
      >
        <img className="w-[60px] h-[60px] mx-auto sm:mx-0" src={card.img} alt="" />
        <h2 className="text-[20px] font-[500] text-[#000D51] text-center sm:text-left">{card.title}</h2>
        <p className="text-[#000D5199] text-[16px] font-[400] text-center sm:text-left">{card.desc}</p>
        <Link href="/contact">
    <button className="border-[2px] border-[#2460FD] bg-[#2460FD] text-white flex justify-center items-center mx-auto sm:mx-0 w-[160px] h-[40px]">
      Contact us<img className="ml-2" src="/img/cards/arrow-right.png" alt="" />
    </button>
  </Link>

      </div>
    ))}
  </div>
</div>

  )
}

export default ServiceOfferSection3

import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[#000D51] flex flex-col md:flex-row h-auto md:h-[680px] justify-between relative">
  <div className="section-1 w-full md:w-[474px] h-auto md:h-[330px] p-6 md:absolute md:right-[656px] md:top-[150px]">
    <div className="hero-text">
      <h5 className="text-[#FFFFFFCC] text-sm">Services</h5>
      <h2 className="text-[#ffffff] text-3xl md:text-4xl font-bold mt-2">
        We bring your Business to new heights
      </h2>
      <p className="text-[#FFFFFFCC] text-xs md:text-sm mt-2">
        Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies. 
        Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis 
        volutpat. Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant. Id elit turpis amet 
        vel at sapien. Massa tempus augue lobortis enim quam consectetur dictum. Elementum id tortor venenatis lectus 
        sed. Adipiscing nisi felis aliquam nunc. Quis et sed ac urna augue feugiat mi eget. Eget viverra egestas porta 
        consectetur commodo ante.
      </p>
    </div>

    <div className="mt-4">
      <div className="text-white bg-[#2460FD] w-[192px] h-[50px] text-center flex justify-center items-center">
        <button className="border-2 border-[#2460FD] border-solid px-2 py-2 text-sm">Learn more</button>
      </div>
    </div>
  </div>

  <div className="section-2 hidden sm:block">
    <div className="fram-img relative left-[800px] transform -translate-x-1/2 top-[60px] z-20">
      <img src="/img/Frame 478.png" alt="img frame" />
    </div>

    <div className="-img-marble relative left-[850px] transform -translate-x-1/2 top-[-500px] z-[10]">
      <img className="z-[10]" src="/img/marble 2.png" alt="img marble" />
    </div>
  </div>
</div>

  )
}

export default Hero

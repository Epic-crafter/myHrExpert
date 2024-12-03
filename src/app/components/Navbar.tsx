import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center w-full px-[100px] bg-[#000D51]'>
  <div className='flex w-full justify-between text-white items-center'>
    <div className="nav-icon flex items-center">
      <img className='w-[80px] h-[80px]' src="/img/Icon.png" alt="" />
      <h4 className='ml-2'>BUSINESS <br /> CONSULTING</h4>
    </div>
    
    <div className="nav-items list-none flex gap-5 decoration-slate-300">
      <a className='hover:text-[#2460FD]' href="/home"><li>Home</li></a>
      <a className='hover:text-[#2460FD]' href="/services"><li>Services</li></a>
      <a className='hover:text-[#2460FD]' href="/about"><li>About</li></a>
      <a className='hover:text-[#2460FD]' href="/contact"><li>Contact</li></a>
    </div>

    <div className="get-in-touch border-solid border-2 border-white px-5">
      <button>Get in touch</button>
    </div>
  </div>
</div>
  )
}

export default Navbar

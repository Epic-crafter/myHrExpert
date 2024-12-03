'use client';
import { useState } from 'react'

export default function contactForm() {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    subject:"",
    message:"",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/API/form", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(response.ok) {
        alert("Form Submitted Successfully!")
      } else {
        alert("Form Submission Failed, Try again!")
      }
    } catch (error) {
      console.log(error);
  }
};


  return (
    <div className='h-auto md:h-[715px] flex flex-col justify-between bg-[#F7F6F6] md:flex-row px-6 md:px-[182px] gap-[24px] py-6 md:py-[60px]'>
  <div className="section1 flex justify-center md:justify-start">
    <img className='w-full max-w-[300px] md:max-w-none md:h-auto' src="/img/Getin TouchSection3/Img (4).png" alt="Contact Us" />
  </div>

  <div className="section2 p-6 bg-white md:w-[636px] w-full">
    <span className="text-[#000D51] text-sm">BUSINESS CONSULTING</span>
    <h1 className="text-[#000D51] text-2xl md:text-4xl font-bold mt-2 w-full md:w-[474px]">Get in touch</h1>

    
    <form onSubmit={handleSubmit} className="form w-full flex flex-col gap-5 mt-4 justify-center">
      <div className="form-data-1 flex flex-col md:flex-row gap-[20px]">
        <div className="form-info flex flex-col gap-[6px] w-full">
          <label htmlFor="firstName" className='text-[#000D51] text-[16px]'>First Name</label>
          <input name="firstName" onChange={handleChange} value={formData.firstName} className='border-[#8F8F8F] border-[1px] py-[9px] px-[16px]' type="text" placeholder='First name' />
        </div>
        <div className="form-info flex flex-col gap-[6px] w-full">
          <label htmlFor="lastName" className='text-[#000D51] text-[16px]'>Last Name</label>
          <input name='lastName' onChange={handleChange} value={formData.lastName} className='border-[#8F8F8F] border-[1px] py-[9px] px-[16px]' type="text" placeholder='Last name' />
        </div>
      </div>

      <div className="form-data-2 flex flex-col md:flex-row gap-[20px]">
        <div className="form-info flex flex-col gap-[6px] w-full">
          <label htmlFor="phone" className='text-[#000D51]'>Your Phone</label>
          <input name='phone' onChange={handleChange} value={formData.phone} className='border-[#8F8F8F] border-[1px] py-[9px] px-[16px]' type="text" placeholder='Your phone' />
        </div>
        <div className="form-info flex flex-col gap-[6px] w-full">
          <label htmlFor="email" className='text-[#000D51]'>Your Email</label>
          <input name='email' onChange={handleChange} value={formData.email} className='border-[#8F8F8F] border-[1px] py-[9px] px-[16px]' type="email" placeholder='Your email' />
        </div>
      </div>

      <div className="subject flex flex-col gap-[6px]">
        <label htmlFor="subject" className='text-[#000D51]'>Subject</label>
        <input name='subject' onChange={handleChange} value={formData.subject} className='border-[#8F8F8F] border-[1px] py-[9px] px-[16px] md:w-[556px] w-full' type="text" placeholder='Subject' />
      </div>

      <div className="YourMessage flex flex-col gap-[6px]">
        <label htmlFor="message" className='text-[#000D51]'>Your Message</label>
        <input name='message' onChange={handleChange} value={formData.message} className='border-[#8F8F8F] border-[1px] py-[9px] px-[16px] md:w-[556px] w-full' type="text" placeholder='Your Message' />
      </div>

      <div className="send-button flex justify-end mt-4">
        <button className="border-2 border-[#2460FD] px-4 py-2 bg-[#2460FD] text-white text-sm hover:bg-[#1E4FCC] transition-all">
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>
  )
}
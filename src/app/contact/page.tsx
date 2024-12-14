import React from 'react'
import HeroSection1 from '../components/HeroSection1';
import IconsSection2 from '../components/IconsSection2';
import OurOfficesSection4 from '../components/OurOfficesSection4';
import Navbar from "../homepage/Navbar";
import ContactForm from '../components/GetInTouchSection3';

const page = () => {
  return (
    <>
      <Navbar/>
      <HeroSection1 />
      <IconsSection2 />
      <ContactForm />
      <OurOfficesSection4 />
      
    </>
  )
}

export default page

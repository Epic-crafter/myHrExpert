import Hero from '../components/Hero';
import KnowMoreSection4 from '../components/KnowMoreSection4';
import Section8 from '../components/section8';
import ServiceOfferSection3 from '../components/ServiceOfferSection3';
import WorkWithUSection5 from '../components/WorkWithUSection5';

const page = () => {
  return (
    <div>
      <div ><Hero /></div>
      {/* <div ><Logos /></div> */}
      <div ><ServiceOfferSection3 /></div>
      <div ><KnowMoreSection4 /></div>
      <div ><WorkWithUSection5 /></div>
      {/* <div ><Section6 /></div> */}
      {/* <div ><LatestProjSection7 /></div> */}
      <div ><Section8 /></div>
    </div>
  )
}

export default page

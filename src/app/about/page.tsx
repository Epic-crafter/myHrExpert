import Section from "./section"
import Section1 from "./section1"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Section7 from "./section7"

const Page = () => {
  return (
    <div  className="mb-6">
      <Section1/>
      <Section />
      {/* <Section2/> */}
      <Section3/>
      <Section4/>
      <Section5/>
      {/* <Section6/> */}
      <Section7/>
      

    </div>
  );
};

export default Page;

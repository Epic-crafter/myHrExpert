'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-cover bg-center bg-no-repeat py-16 px-6" style={{ backgroundImage: `url('./aboutus-images/image copy 8.png')` }}>
      <h2 className="text-4xl font-bold text-center text-black mb-8">Frequently Asked Questions</h2>
        
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="space-y-4">
            {/* Question 1 */}
            <div
              className={`p-4 cursor-pointer rounded-md ${openIndex === 0 ? 'bg-gray-100' : ''}`}
              onClick={() => toggleAnswer(0)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${openIndex === 0 ? 'text-black' : 'text-gray-800'}`}>
                What services does myhrexpert.in provide for companies?
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 0 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 0 && (
                <div className="mt-4 text-sm text-gray-600">
                   We offer a wide range of HR services, including recruitment, payroll management, compliance assistance, employee engagement strategies, and customized training and development programs. Our solutions are tailored to meet the unique needs of businesses across industries.                </div>
              )}
              <div className="border-b-2 border-black mt-2"></div>
            </div>

            {/* Question 2 */}
            <div
              className={`p-4 cursor-pointer rounded-md ${openIndex === 1 ? 'bg-gray-100' : ''}`}
              onClick={() => toggleAnswer(1)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${openIndex === 1 ? 'text-black' : 'text-gray-800'}`}>
                 Can myhrexpert.in assist companies with hiring for niche roles or temporary staffing solutions?
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 1 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 1 && (
                <div className="mt-4 text-sm text-gray-600">
                 Yes, we specialize in recruitment for both general and niche roles. Additionally, we offer flexible staffing solutions, including temporary and permanent placements, to help businesses manage their workforce effectively.                </div>
              )}
              <div className="border-b-2 border-black mt-2"></div>
            </div>

            {/* Question 3 */}
            <div
              className={`p-4 cursor-pointer rounded-md ${openIndex === 2 ? 'bg-gray-100' : ''}`}
              onClick={() => toggleAnswer(2)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${openIndex === 2 ? 'text-black' : 'text-gray-800'}`}>
                 How does myhrexpert.in ensure the quality of candidates during recruitment?
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 2 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 2 && (
                <div className="mt-4 text-sm text-gray-600">
                 We follow a comprehensive process involving rigorous screening, evaluation, and interviews to ensure only the most qualified candidates are shortlisted for your organization.
                </div>
              )}
              <div className="border-b-2 border-black mt-2"></div>
            </div>

            {/* Question 4 */}
            <div
              className={`p-4 cursor-pointer rounded-md ${openIndex === 3 ? 'bg-gray-100' : ''}`}
              onClick={() => toggleAnswer(3)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${openIndex === 3 ? 'text-black' : 'text-gray-800'}`}>
                 What industries does myhrexpert.in cater to for recruitment and HR services?
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 3 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 3 && (
                <div className="mt-4 text-sm text-gray-600">
                  We work with a diverse range of industries, including IT, healthcare, manufacturing, retail, education, and more, providing specialized solutions for each sector.
                </div>
              )}
              <div className="border-b-2 border-black mt-2"></div>
            </div>

            {/* Question 5 */}
            <div
              className={`p-4 cursor-pointer rounded-md ${openIndex === 4 ? 'bg-gray-100' : ''}`}
              onClick={() => toggleAnswer(4)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${openIndex === 4 ? 'text-black' : 'text-gray-800'}`}>
                  Does myhrexpert.in help companies manage remote teams and HR compliance?
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 4 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 4 && (
                <div className="mt-4 text-sm text-gray-600">
                 Yes, we provide solutions for hiring, managing, and engaging remote teams. We also handle HR compliance to ensure businesses adhere to labor laws and regulations seamlessly.
                </div>
              )}
              <div className="border-b-2 border-black mt-2"></div>
            </div>
            {/* Question 6 */}
            <div
              className={`p-4 cursor-pointer rounded-md ${openIndex === 4 ? 'bg-gray-100' : ''}`}
              onClick={() => toggleAnswer(4)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${openIndex === 4 ? 'text-black' : 'text-gray-800'}`}>
                 How does myhrexpert.in support job seekers in finding the right opportunities and advancing their careers?
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 4 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 4 && (
                <div className="mt-4 text-sm text-gray-600">
                 We match job seekers’ skills, experience, and preferences with the best job opportunities. Our services include career counseling to guide candidates toward their ideal career path, support for fresh graduates in kickstarting their careers, and providing experienced professionals with opportunities aligned with their goals. Additionally, we offer interview preparation guidance to enhance candidates’ success in securing their desired roles. Importantly, our job placement services are completely free of cost, ensuring accessibility for all.

                </div>
              )}
              <div className="border-b-2 border-black mt-2"></div>
            </div>
            {/* Question 7 */}
            <div
              className={`p-4 cursor-pointer rounded-md ${openIndex === 4 ? 'bg-gray-100' : ''}`}
              onClick={() => toggleAnswer(4)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${openIndex === 4 ? 'text-black' : 'text-gray-800'}`}>
                What steps should job seekers take to connect with myhrexpert.in, and does the platform offer training for businesses?
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 4 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 4 && (
                <div className="mt-4 text-sm text-gray-600">
                 Job seekers can upload their resumes directly on our website or email them to us. After submission, our team reviews their profiles and contacts them for opportunities that match their qualifications. For businesses, we offer customized training programs designed to enhance employee skills, productivity, and overall organizational performance, ensuring a well-trained and efficient workforce.                </div>
              )}
              <div className="border-b-2 border-black mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

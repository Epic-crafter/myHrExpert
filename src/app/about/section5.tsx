'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-cover bg-center bg-no-repeat py-16 px-6" style={{ backgroundImage: `url('./aboutus-images/image copy 8.png')` }}>
      <h2 className="text-4xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
        
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
                  Turpis elementum elit non leo augue sodales vel blandit
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 0 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 0 && (
                <div className="mt-4 text-sm text-gray-600">
                  Potenti proin a ipsum curabitur in bibendum proin dolor. Id tellus quis libero accumsan ac tempus in. Cursus iaculis risus feugiat at sed nibh dui erat. Odio pulvinar tristique sapien ac vulputate curabitur habitant enim.
                </div>
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
                  Cras sodales vel blandit cras diam velit et eget adipiscing
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 1 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 1 && (
                <div className="mt-4 text-sm text-gray-600">
                  Curabitur gravida felis in porttitor imperdiet ut. Etiam ut augue sit amet nisi aliquam vestibulum nec id eros. Nunc quis tristique nunc, sit amet hendrerit nisi. Integer sagittis lorem vitae metus bibendum auctor.
                </div>
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
                  Vitae in gravida felis in porttitor imperdiet ut
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 2 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 2 && (
                <div className="mt-4 text-sm text-gray-600">
                  Elit purus suscipit ullamcorper adipiscing dictum egestas. Pellentesque eu risus vestibulum, auctor arcu vitae, convallis eros. Curabitur malesuada lorem sit amet lectus scelerisque, nec sodales dui tempor.
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
                  Elit purus suscipit ullamcorper adipiscing dictum egestas
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 3 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 3 && (
                <div className="mt-4 text-sm text-gray-600">
                  Suspendisse potenti. Vivamus id metus at libero tincidunt interdum. Nulla at lectus turpis. Donec non erat dolor. Duis cursus metus eget orci tincidunt, vel faucibus sapien fermentum.
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
                  Ac faucibus neque habitasse praesent scelerisque fusce amet
                </h3>
                <span className="text-xl font-semibold">
                  {openIndex === 4 ? '-' : '+'}
                </span>
              </div>
              {openIndex === 4 && (
                <div className="mt-4 text-sm text-gray-600">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce quis sapien bibendum, consectetur leo a, suscipit dolor. Morbi nec pharetra sapien.
                </div>
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

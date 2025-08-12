// File: ContactFaq.tsx
import img1 from "../assets/Gate.png"
import { useNavigate } from "react-router-dom";

import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I start the home buying process?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
  {
    question: "What costs are involved in buying a home?",
    answer:
      "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
  {
    question: "How long does it take to buy a home?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
  {
    question: "Can I buy a home without a real estate agent?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
  {
    question: "Do I need to sell my current home before buying a new one?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
];

const ContactFaq = () => {
const [activeIndex, setActiveIndex] = useState(1);
const nav=useNavigate();
 
const toggleFAQ = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};
  return (
    <div className="w-full px-4 py-12 md:py-20 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="bg-blue-600 text-white rounded-xl overflow-hidden flex flex-col  justify-between " style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
            <p className="mb-6 text-[#323030]">
              Reach out today for expert real estate advice, personalized support, and a dedicated team ready to guide you every step of the way.
            </p>
            <button 
  onClick={() => nav("/contact")} 
  className="bg-black text-white px-6 py-3 font-semibold border rounded-md"
>
  Schedule a Consultation
</button>

          </div>
          
        </div>

        {/* Right Section */}
        <div>
          <p className="text-sm font-semibold text-gray-400 mb-2">FAQs</p>
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Ask Us Anything About <br /> Home Buying & Selling
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center text-lg font-semibold"
                >
                  {faq.question}
                  <span>{activeIndex === index ? '▾' : '▸'}</span>
                </button>
                {activeIndex === index && faq.answer && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFaq;

import React, { useState } from "react";
import heroImg from "../assets/g1.jpg"; // Hero section background
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Why should I invest in Jewar?",
    answer: `Jewar is Greater Noida’s most promising investment destination near the upcoming Noida International Airport. With planned infrastructure, rising demand, and connectivity, it's a hotspot for high-return real estate investments.`,
  },
  {
    question: "What lifestyle does Jewar offer?",
    answer: `Jewar offers a tranquil lifestyle close to nature with modern infrastructure, recreational parks, cultural venues, and minimal congestion — all while being connected to urban amenities.`,
  },
  {
    question: "Are plots near Jewar Airport good for both residential and commercial use?",
    answer: `Yes, our plots are strategically located just minutes from the airport, making them ideal for both residential and commercial purposes.`,
  },
  {
    question: "What are the luxurious amenities available?",
    answer: `We offer 24x7 security, lush parks, water bodies, a modern gym, a commercial center, medical care, and much more to ensure a luxury living experience.`,
  },
  {
    question: "What is Anugrah Homes?",
    answer: `Anugrah Homes is a premium residential project near Jewar International Airport & Film City Noida, offering luxurious amenities & modern facilities with a serene, nature-rich environment.`,
  },
  {
    question: "What features come with residential plots?",
    answer: `Accuracy, On-time Possession, Excellence in Architecture, Prime Location, and proximity to Nearby Attractions.`,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">FAQ – Invest in Jewar</h1>
          <p className="mt-3 text-lg max-w-3xl mx-auto">
            Everything you need to know about investing in Jewar and Anugrah Homes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 bg-white text-gray-700 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
        <p className="mb-6">
          Contact our team for more information or to book a site visit.
        </p>
        <a
          href="/contact"
          className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Faq;

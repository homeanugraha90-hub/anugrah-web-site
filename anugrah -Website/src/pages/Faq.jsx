import React, { useState, useEffect } from "react";
import heroImg from "../assets/g1.jpg"; 
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);       // state for FAQs
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from backend
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/faqs"); // change to your backend URL
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
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

        {loading ? (
          <p className="text-center text-gray-500">Loading FAQs...</p>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq._id} // use MongoDB _id as key
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
        )}
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
















































































































// components/AboutBanner.jsx
import React from "react";
import  { useEffect, useRef, useState } from 'react';
import AnimatedCounter from "../components/AnimatedCounter";
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Target } from "lucide-react";

import { MessageSquareText, Building2, PieChart } from "lucide-react";


const stats = [
  { value: 112, label: 'Awards Received' },
  { value: 85, label: 'Satisfied Clients' },
  { value: 66, label: 'Monthly Traffic' },
  { value: 143, label: 'Properties Sold' },
];




function useInView(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return isIntersecting;
}

const About = () => {
     const [activeIndex, setActiveIndex] = useState(0);
       const [aboutData, setAboutData] = useState([]);


  const sectionRef = useRef();
  const isInView = useInView(sectionRef);
  const [counts, setCounts] = useState(stats.map(() => 0));


// default value agar aboutData null hai
const firstSection = aboutData?.find(item => item.sectionName === "AboutSection") || null;
const secondSection = aboutData?.find(item => item.sectionName === "SecondSection") || null;
const thirdSection = aboutData?.find(item => item.sectionName === "ThirdSection") || null;
const fourthSection = aboutData?.find(item => item.sectionName === "FourthSection") || null;


const steps = [
  {
    title: 'Step 1: Discover Your Dream Home',
    description: 'Browse through a curated selection of properties tailored to your lifestyle and budget.',
    image: `http://localhost:5000/upload/${fourthSection?.Images[0]}`,

  },
  {
    title: 'Step 2: Schedule A Viewing',
    description: 'Book a tour at your convenience and explore the space in person or virtually.',
    image: `http://localhost:5000/upload/${fourthSection?.Images[1]}`,
  },
  {
    title: 'Step 3: Seal The Deal',
    description: 'Get expert guidance to finalize paperwork and move into your new home with confidence.',
    image: `http://localhost:5000/upload/${fourthSection?.Images[2]}`,
  },
];

const parsedDescription = thirdSection?.description
  ? JSON.parse(thirdSection.description)
  : {};

    console.log(firstSection);


  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 1500; // total animation time (ms)
        const incrementTime = 30; // interval time (ms)
        const steps = Math.ceil(duration / incrementTime);
        const increment = end / steps;

        const counter = setInterval(() => {
          start += increment;
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(Math.floor(start), end);
            return newCounts;
          });

          if (start >= end) clearInterval(counter);
        }, incrementTime);
      });
    } else {
      // Reset counts when out of view (optional)
      setCounts(stats.map(() => 0));
    }
  }, [isInView]);

 useEffect(() => {
    fetch("http://localhost:5000/api/about/")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((err) => console.error("Error fetching about data:", err));
  }, []);



     const milestones = [
    {
     
      title: "Humble Beginnings",
      description:
        "We started as a small, local agency with a clear mission: helping people find homes with honesty and care.",
    },
    {
      
      title: "A Trusted Name",
      description:
        "Gained recognition for reliable service and built long-term relationships with clients and partners.",
    },
    {
     
      title: "Embracing Innovation",
      description:"Adopted new technologies to streamline the property search and improve customer experience.",
    },
    {
     
      title: "Over 1,000 Homes Sold",
      description:
        "Reached a major milestone with over a thousand successful property transactions completed.",
    },
    {
      
      title: "Moving Forward Together",
      description:
        "Continuing to grow with a dedicated team, modern tools, and a renewed vision for the future.",
    },
  ];
  return (
    <div>
      {/* About first Section */}
    
    <div
  className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
 style={{ backgroundImage: `url(http://localhost:5000/upload/${firstSection?.Images[0]})` }}

>
  {/* Background Image */}


    


      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-sm md:text-base">
          <span className="text-gray-300">Home</span> &
        &nbsp;&gt;&nbsp; About Us
        </p>
      </div>
    </div>



<div className="text-black flex flex-col items-center py-10">
 <h1 className=" text-xl text-[grey] font-medium mb-4">About</h1>
    <h2 className=" text-center text-2xl md:text-3xl font-medium md:w-[60vh] text-black/80  bg-opacity-50 px-6 py-4 rounded">
      Your Reliable Partner In Real Estate Success
    </h2>
</div>
     

      {/* Stats Section */}
   <section className="max-w-6xl mx-auto px-4 py-12">

  {/* Fixed Background Image with smooth scroll */}
  <div
    className="h-[60vh] bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
     style={{ backgroundImage: `url(http://localhost:5000/upload/${secondSection?.Images[0]})` }}
  >
   
  </div>

  {/* Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 -mt-20 relative z-10">
      <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center py-6">
        <AnimatedCounter end={112} className="text-3xl font-bold" />
        <MessageSquareText className="w-8 h-8 my-2 text-[#7a982c]" />
        <p className="text-gray-500">Awards Received</p>
      </div>

      <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center py-6">
        <AnimatedCounter end={85} className="text-3xl font-bold" />
        <Building2 className="w-8 h-8 my-2 text-[#7a982c]" />
        <p className="text-gray-500">Satisfied Clients</p>
      </div>

      <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center py-6">
        <AnimatedCounter end={66} className="text-3xl font-bold" />
        <PieChart className="w-8 h-8 my-2 text-[#7a982c]" />
        <p className="text-gray-500">Monthly Traffic</p>
      </div>
    </div>



     <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Mission */}
        <div>
          <div className="flex items-center mb-4">
            <Crown className="w-6 h-6 text-black mr-2" />
            <h2 className="text-xl font-bold">{parsedDescription.title1}</h2>
          </div>
          <p className="text-gray-600 mb-4">
           {parsedDescription.content1}
         
          </p>
        </div>

        {/* Our Vision */}
        <div>
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-black mr-2" />
            <h2 className="text-xl font-bold">{parsedDescription.title2}</h2>
          </div>
          <p className="text-gray-600 mb-4">
            {parsedDescription.content2}
          </p>
        </div>
      </div>
    </section>
</section>


 {/* Milestones section */}

<section className="bg-[#f9f9f9] py-20">
  <div className="max-w-7xl mx-auto px-4">
    <h4 className="text-center text-sm uppercase text-gray-400 font-semibold tracking-wide">
      Our History
    </h4>
    <h2 className="text-center text-3xl font-bold mb-12">
      Milestones That Define Us
    </h2>

    <div className="relative">
      {/* Horizontal timeline line */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 "></div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center relative z-10">
    {milestones.map((item, index) => (
        <div key={index} className="relative flex flex-col items-center justify-center">
            {/* Dot on timeline */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#33ef4f] border-4 border-white rounded-full shadow-md z-20"></div>

            {/* Title */}
            <h4 className="text-lg uppercase text-gray-500 tracking-wide">
              {item.title}
            </h4>

            {/* Description with responsive padding */}
            <p className="pt-8 md:pt-32 text-gray-600 text-sm">
              {item.description}
            </p>
        </div>
    ))}
</div>
    </div>
  </div>
</section>




{/* Homebuying Steps */}
 <section className=" py-32">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Steps */}
        <div>
          <h4 className="text-sm uppercase text-gray-400 font-semibold tracking-wide">
            Our Process
          </h4>
          <h2 className="text-5xl font-light mb-8">Homebuying Steps</h2>

          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="group cursor-pointer mb-6"
            >
              <div className="border-l-4 pl-4 transition-all duration-300 ease-in-out 
                group-hover:border-[#7a982c] border-gray-200">
                <h3 className="text-2xl font-sans mb-1">{step.title}</h3>
                <p className="text-gray-500 text-md">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image with animation */}
        <div className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={steps[activeIndex].image}
              src={steps[activeIndex].image}
              alt="Home Step"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover rounded-xl"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>


     <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-light text-center mb-8">Trusted By Thousands</h2>
        <div className="border-t border-gray-200"></div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-5xl font-sans text-black">{counts[index]}</p>
              <p className="mt-2 text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;

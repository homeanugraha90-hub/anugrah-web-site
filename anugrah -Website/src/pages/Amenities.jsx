import React from "react";
import heroImg from "../assets/gate-1.png"; // Hero section image
import {
  ShieldCheck,
  TreePine,
  Droplets,
  Dumbbell,
  Store,
  Hospital,
  Laptop,
  Building2,
  Waves,
  Baby,
  Footprints
} from "lucide-react";

const amenities = [
  {
    title: "24x7 Security",
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
    desc: "Round-the-clock security ensuring complete peace of mind for all residents.",
  },
  {
    title: "Parks",
    icon: <TreePine className="w-10 h-10 text-green-600" />,
    desc: "Beautifully landscaped green parks for relaxation and recreation.",
  },
  {
    title: "Water Bodies",
    icon: <Droplets className="w-10 h-10 text-blue-500" />,
    desc: "Serene water features adding charm and a calming atmosphere.",
  },
  {
    title: "Gym",
    icon: <Dumbbell className="w-10 h-10 text-red-500" />,
    desc: "State-of-the-art fitness center for a healthy and active lifestyle.",
  },
  {
    title: "Commercial Center",
    icon: <Store className="w-10 h-10 text-purple-500" />,
    desc: "Shops and commercial spaces for all your daily needs within the community.",
  },
  {
    title: "Medical Care",
    icon: <Hospital className="w-10 h-10 text-pink-500" />,
    desc: "24x7 on-call doctor, emergency services, and first-aid facilities.",
  },
  {
    title: "Technology Assistance",
    icon: <Laptop className="w-10 h-10 text-cyan-500" />,
    desc: "Smart home integration and technical support at your doorstep.",
  },
  {
    title: "Clubhouse",
    icon: <Building2 className="w-10 h-10 text-orange-500" />,
    desc: "Spacious clubhouse for community events, indoor games, and social gatherings.",
  },
  {
    title: "Swimming Pool",
    icon: <Waves className="w-10 h-10 text-blue-400" />,
    desc: "Luxury leisure pool for relaxation and recreation.",
  },
  {
    title: "Kids Play Zone",
    icon: <Baby className="w-10 h-10 text-lime-500" />,
    desc: "Safe and fun play area designed specially for children.",
  },
  {
    title: "Walking / Jogging Track",
    icon: <Footprints className="w-10 h-10 text-gray-600" />,
    desc: "Dedicated tracks for morning walks and evening jogs.",
  },
];
const Amenities = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Luxurious Amenities</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Experience unmatched comfort, convenience, and lifestyle benefits in one place.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700">
            Jewar Airport, which is expected to be India’s biggest airport, is currently under
            construction and anticipated to be completed soon. This massive infrastructure project
            will transform the region by boosting the economy and generating numerous job
            opportunities. The development has already increased demand for plots in the surrounding
            areas.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center text-center transition"
            >
              {amenity.icon}
              <h3 className="mt-4 text-xl font-semibold">{amenity.title}</h3>
              <p className="mt-2 text-gray-600">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Live Where Luxury Meets Comfort</h2>
        <p className="mb-6">
          Book your plot today and enjoy world-class amenities with Anugrah Homes.
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

export default Amenities;

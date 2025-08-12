import React from "react";
import heroImg from "../assets/gate-1.png"; // Hero background image
import plotImg from "../assets/park-22.jpg"; // Residential plots image
import natureImg from "../assets/about-4.jpg"; // Nature & lifestyle image

const WhyJewar = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Why Jewar?</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Anugrah Homes Project Near Upcoming Jewar International Airport & Film City Noida
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src={plotImg} alt="Residential Plots" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Anugrah Homes</h2>
          <p className="text-gray-700 mb-4">
            The Anugrah Homes provides the best opportunity to invest in Residential Plots Land
            with all luxurious amenities & modern facilities.
          </p>
          <p className="text-gray-700 mb-4">
            Anugrah Homes focuses on letting you detach from the world and reconnect with your
            spirit by creating a setting rich in peace and tranquility, surrounded by nature,
            while still offering all the amenities of luxury living.
          </p>
          <p className="text-gray-700">
            Anugrah Homes is the natural manifestation of a modern yet fashionably confident plot
            in the countryside. We create customized adventures and discoveries for our visitors
            through bespoke cultural, culinary, wellness, architecture, lifestyle, and personalized
            service experiences.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Plot Development Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Accuracy",
              "On-time Possession",
              "Excellence in Architecture",
              "Well Located",
              "Nearby Attractions",
              "Capital Appreciation"
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  {feature === "Accuracy" &&
                    "Every detail is planned precisely to ensure the best living experience."}
                  {feature === "On-time Possession" &&
                    "We deliver projects on schedule to keep your plans on track."}
                  {feature === "Excellence in Architecture" &&
                    "Our designs balance modern aesthetics with practical functionality."}
                  {feature === "Well Located" &&
                    "Strategically placed near key destinations and infrastructure."}
                  {feature === "Nearby Attractions" &&
                    "Close to Jewar Airport, Film City Noida, and cultural hotspots."}
                  {feature === "Capital Appreciation" &&
                    "Your investment grows with the area's booming real estate market."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Peaceful Yet Luxurious Living</h2>
          <p className="text-gray-700 mb-4">
            Our community is designed to bring you closer to nature while ensuring every luxury is
            within reach. Enjoy a perfect blend of tranquility and sophistication.
          </p>
          <p className="text-gray-700">
            From lush green spaces to modern amenities, Anugrah Homes redefines countryside living.
          </p>
        </div>
        <img src={natureImg} alt="Nature and Lifestyle" className="rounded-xl shadow-lg" />
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Plot Today!</h2>
        <p className="mb-6">
          Secure your future with Anugrah Homes – a prime investment near Jewar Airport.
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

export default WhyJewar;

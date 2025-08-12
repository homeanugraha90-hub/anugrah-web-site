import React,{useEffect} from "react";
import first from "../assets/first-img.jpg";
import { CheckCircle } from "lucide-react";
import { Heart, Briefcase, User, Globe, Building } from "lucide-react";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
     const [sections, setSections] = useState([]);

      const form = useRef(null);
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);
      const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");
      const [subject, setSubject] = useState("");
      const [message, setMessage] = useState("");
    const features = [
        {
            icon: <Heart className="text-teal-500 w-8 h-8 mb-2" />,
            text: "The site is only 10 minutes from upcoming Noida International Airport, Jewar.",
        },
        {
            icon: <Briefcase className="text-teal-500 w-8 h-8 mb-2" />,
            text: "Nearby upcoming Defence Corridor and Metro",
        },
        {
            icon: <User className="text-teal-500 w-8 h-8 mb-2" />,
            text:
                "Upcoming Film City, Toy City, Patanjali Food Park, Textile Park, and Logistics Park.",
        },
        {
            icon: <Globe className="text-teal-500 w-8 h-8 mb-2" />,
            text: "Well, Connectivity to Delhi, Ghaziabad, and Greater Noida.",
        },

    ];

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
       const date= new Date();
       const userdate = date.toLocaleDateString();
       const usertime = date.toLocaleTimeString();
    
    
        const formData = {
          from_name: "Anugrah Homes ",
          web_name: "Anugrah Homes",
          message: `
            Name: ${name}
            Phone: ${phone}
            Email: ${email} 
            Subject: ${subject}
            Message: ${message}
            Date: ${userdate}
            Time: ${usertime}`
        }
    
        emailjs
          .send(
            "service_d7iarfv",         // Your EmailJS Service ID
            "template_zzgorrr",        // Your EmailJS Template ID
            formData,
            "cD8XBmJIzmsXY6T3j"        // Your Public Key
          )
          .then(
            () => {
              setLoading(false);
              setSuccess(true);
              form.current?.reset();
              setTimeout(() => setSuccess(false), 4000);
            },
            (error) => {
              setLoading(false);
              console.error("FAILED...", error);
              alert("Failed to send message. Please try again later.");
            }
          );
      };

      useEffect(() => {
    axios
      .get("http://localhost:5000/api/home")
      .then((res) => {
        setSections(res.data);
      })
      .catch((err) => {
        console.error("Error fetching home data", err);
      });
  }, []);

//   const firstSection = sections.find(section => section.id === 1);
 const firstSection = sections.find((section) => section.sectionName === "first-home");
 console.log(firstSection.images);

    return (
        <div className="font-sans text-gray-800">
            {/* First-home Section 1*/}
            
            
          <section className="relative w-full pt-16">
  <div className="w-full">
    
    <img
        src={`http://localhost:5000/upload/${firstSection?.images[0]}`}
        alt="first-home"
        className="w-full h-full object-cover object-center"
        loading="eager"
    />

  </div>
</section>

            {/* Intro Section 2 */}
            <section id="about" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10 leading-snug">
                    Anugrah Homes Plots on Yamuna Expressway near upcoming <br />
                    <span className="border-b-4 border-green-600 inline-block mt-2">
                        Jewar Noida International Airport
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Side Image */}
                    <div>
                        <img
                            src="/second.jpg"
                            alt="Modern House"
                            className="w-full rounded shadow-lg"
                        />
                    </div>

                    {/* Right Side Text */}
                    <div className="space-y-4 text-gray-700 text-justify">
                        <p>
                            <span className="font-semibold">Anugrah Homes Project</span> Near to
                            Upcoming Jewar International Airport & Film City Noida. The Anugrah
                            Homes provides the best opportunity to invest in Residential Plots
                            Land with all luxurious amenities & modern facilities.
                        </p>
                        <p>
                            Anugrah Homes focuses on letting you detach from the world and
                            reconnect with your spirit by creating a setting rich in peace and
                            tranquility, surrounded by nature, while still offering all the
                            amenities of luxury living.
                        </p>
                        <p>
                            Anugrah Homes is the natural manifestation of a modern yet
                            fashionably confident plot in the countryside.
                        </p>
                        <p>
                            We create customized adventures and discoveries for our visitors
                            through bespoke cultural, culinary, wellness, architecture,
                            lifestyle, and personalized service experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Residential Section 3 */}
            <section id="residential" className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Image Left */}
                    <div className="relative">
                        <img
                            src="/third.png"
                            alt="Interior Design"
                            className="w-full rounded shadow"
                        />
                        {/* <h3 className="absolute top-6 left-6 text-white text-xl md:text-2xl font-medium">
                            We Design Your Home
                        </h3> */}
                    </div>

                    {/* Text Right */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Residential Plots</h2>
                        <p className="text-gray-600 mb-4">
                            <strong className="text-gray-800">Our Plot Developments</strong> are
                            always done keeping in mind the need of the user in terms of both
                            living and capital appreciation.
                        </p>
                        <p className="text-gray-700 mb-6">
                            All our developments come with the following features:
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 text-gray-700">
                            {[
                                "Accuracy",
                                "On-time Possession",
                                "Excellence in Architecture",
                                "Well Located",
                                "Nearby Attractions",
                            ].map((feature) => (
                                <li key={feature} className="flex items-center space-x-2">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Project Features 4*/}
            <section id="project-features" className="py-16 px-4 md:px-10 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-10">Project Features</h2>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center border rounded-lg p-6 bg-white shadow-sm"
                        >
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                    <div
                        className="flex flex-col items-center w-full text-center border rounded-lg p-6 bg-white shadow-sm"
                    >
                        <Building className="text-teal-500 w-8 h-8 mb-2" />
                        <p className="text-gray-700">Close to Schools/Colleges, Hospitals, ICC Cricket Stadium, Formula One Track, and Night Safari Park</p>
                    </div>
                </div>

                <div className="mt-10">
                    <button className="bg-green-400 hover:bg-green-500 text-black font-semibold text-lg px-6 py-3 rounded-lg shadow transition">
                        Schedule Your Visit
                    </button>
                </div>
            </section>

            {/* Video Section 5*/}
            <section id="whyjewar" className="bg-teal-50 py-16 px-4 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                        Residential Plots near Jewar International Airport on Yamuna Expressway.
                    </h2>

                    <p className="text-red-600 mb-1">
                        Invest in affordable residential plots nearby Jewar Airport and upcoming Film City on Yamuna Expressway
                        surrounded by natural beauty.
                    </p>
                    <p className="text-red-600 mb-6">
                        Book a site visit today to Anugrah Homes plots, a very well connected place to Delhi NCR.
                    </p>

                    <div className="w-full aspect-video mb-6">
                        <iframe
                            className="w-full h-full rounded-md shadow-lg"
                            src="https://www.youtube.com/embed/xGGBlkhrX3I"
                            title="Anugrah Homes Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>

                    <p className="text-red-600 text-sm">
                        Anugrah Homes, most affordable approved residential project in India located on Yamuna Expressway near Film City & Jewar Airport.
                    </p>
                    <p className="font-semibold">
                        Attractions: <span className="font-normal">Airport, Film City and other Industrial and Commercial Development.</span>
                    </p>
                </div>
            </section>

            {/* Invest in Jewar 6*/}
            <section id="amenities" className="bg-white py-16 px-4 text-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                        Invest in Jewar – Unlock the Future of Real Estate Growth
                    </h2>

                    <div className="space-y-6 text-justify leading-relaxed">
                        <p>
                            Welcome to Greater Noida’s most promising investment destination — Jewar. If you're looking to purchase residential or commercial land near Jewar Airport, you’ve landed on the right page. Our premium plots near the upcoming Noida International Airport offer a smart and strategic opportunity for investors and homebuyers alike. With planned infrastructure and rising demand, Jewar is a hotspot for high-return real estate investment.
                        </p>

                        <p>
                            Jewar is rapidly emerging as one of the fastest-developing regions in Greater Noida. Surrounded by greenery, modern infrastructure, and minimal congestion, this location offers a tranquil lifestyle close to nature yet connected to urban amenities. With recreational parks, cultural venues, and green zones, Jewar ensures a peaceful environment for families and investors looking for long-term growth.
                        </p>

                        <p>
                            Our plots near Jewar International Airport are not only well-positioned but also highly sought-after. Strategically located just minutes from the airport, these plots are ideal for residential or commercial use. The surrounding development is set to create new jobs, attract businesses, and significantly enhance property values in the near future.
                        </p>

                        <p>
                            We provide a diverse range of plot options to meet every investor’s needs — from compact residential plots to larger commercial parcels. Whether you’re looking to build your dream home, launch a business, or invest for future returns, our listings cover all bases. Plus, we offer transparent pricing, legal verification, and hassle-free site visits to help you make informed decisions.
                        </p>

                        <p>
                            Jewar is also home to several upcoming townships and residential communities. These new developments promise excellent amenities such as schools, hospitals, shopping centers, and public transport. Our website features the latest updates on land schemes and affordable investment opportunities near the airport and beyond.
                        </p>
                    </div>
                </div>
            </section>


            {/* Amenities Section 7*/}
            <section id="faq" className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">Luxurious Amenities</h2>
                    <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
                        Jewar Airport, which is expected to be India’s biggest airport, is currently under construction and anticipated
                        to be completed soon. It is expected to be a game-changer for the region by boosting the economy and generating
                        numerous job opportunities. The development has already increased demand for plots in the surrounding areas.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
                        <div className="flex flex-col items-center">
                            <img src="/faq-1.png" alt="24X7 Security" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800">24X7 Security</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/faq-5.png" alt="Parks" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800">Commercial Center</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/faq-2.png" alt="Water Bodies" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800"> Parks</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/faq-3.png" alt="Gym" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800"> Water Bodies</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/faq-4.png" alt="Commercial Center" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800 text-center"> Gym</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Articals  8*/}

            <section id="media" className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">NEWS & MEDIA</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <img src="/artical-1.jpg" alt="News 1" className="w-full rounded-md shadow-md" />
                        <img src="/artical-2.jpg" alt="News 2" className="w-full rounded-md shadow-md" />
                        <img src="/artical-3.png" alt="News 3" className="w-full rounded-md shadow-md" />
                        <img src="/artical-4.png" alt="News 4" className="w-full rounded-md shadow-md" />
                        <img src="/artical-5.png" alt="News 5" className="w-full rounded-md shadow-md" />
                        <img src="/artical-6.png" alt="News 6" className="w-full rounded-md shadow-md" />
                        <img src="/artical-7.png" alt="News 7" className="w-full rounded-md shadow-md" />
                        <img src="/artical-8.png" alt="News 8" className="w-full rounded-md shadow-md" />
                    </div>
                </div>
            </section>



   {/* Anugrah imgage section 9 */}
            <section id="site-pictures" className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">
                        Anugrah Homes Actual Site Pictures
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <img src="/galimg-1.jpg" alt="Site 1" className="w-full h-56 object-cover rounded shadow" />
                        <img src="/galimg-2.jpg" alt="Site 2" className="w-full h-56 object-cover rounded shadow" />
                        <img src="/galimg-3.jpg" alt="Site 3" className="w-full h-56 object-cover rounded shadow" />
                        <img src="/galimg-4.jpg" alt="Site 4" className="w-full h-56 object-cover rounded shadow" />
                    </div>
                </div>
            </section>






            {/* Plot size section 10 */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        Anugrah Homes Residential Plots Sizes
                    </h2>
                    <img
                        src="/plots-sizes.jpg"
                        alt="Anugrah Homes Plot Sizes"
                        className="w-full rounded-md shadow-lg mx-auto"
                    />
                </div>
            </section>




{/* Plot Nucsa 11 */}

            <section className="px-4 py-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {/* Price List */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Price List</h2>
                            <img
                                src="/Price-List.jpg"
                                alt="Price List"
                                className="w-full h-auto rounded shadow"
                            />
                        </div>

                        {/* Layout */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Layout</h2>
                            <img
                                src="/Layout-img-1.jpg"
                                alt="Layout"
                                className="w-full h-auto rounded shadow"
                            />
                        </div>





                        {/* Location */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Location</h2>
                            <img
                                src="/location.jpg"
                                alt="Location"
                                className="w-full h-auto rounded shadow"
                            />
                        </div>

                    </div>

                </div>
            </section>





            {/* <Contact /> */}
          
                <div className="max-w-6xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-3">
                  {/* Contact Form */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        className="w-full border px-4 py-2 rounded"
                      />
                      <input
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Allow only digits and optional leading +
                          if (/^[+0-9]*$/.test(value)) {
                            setPhone(value);
                          }
                        }}
                        maxLength={15}
                        placeholder="Phone Number"
                        required
                        className="w-full border px-4 py-2 rounded"
                      />
          
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full border px-4 py-2 rounded"
                      />
          
                      <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        required
                        className="w-full border px-4 py-2 rounded"
                      />
                      <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        rows={5}
                        required
                        className="w-full border px-4 py-2 rounded"
                      ></textarea>
          
                      <button
                        type="submit"
                        className="px-14 py-3 bg-green-600 text-white rounded hover:bg-green-700"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Submit"}
                      </button>
          
                      {success && (
                        <p className="text-green-600 font-medium pt-2">
                          Message sent successfully!
                        </p>
                      )}
                    </form>
                  </div>
          
          
          
          
          
          
                  <div className="bg-gray-50 px-6 py-10 rounded-md text-center md:text-left">
                    <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
                    {/* Address */}
                    <div className="flex items-start gap-3 mb-3">
                      <FaMapMarkerAlt className="text-xl text-gray-700 mt-1" />
                      <p className="text-gray-700">
                        Anugrah Homes, Jattari,<br />
                        Aligarh Palwal Road,<br />
                        Aligarh, Uttar Pradesh 202137
                      </p>
                    </div>
          
                    {/* Email */}
                    <div className="flex items-center gap-3 mb-3">
                      <FaEnvelope className="text-xl text-gray-700" />
                      <a
                        href="mailto:info@anugrahhomes.com"
                        className="text-green-700 font-medium hover:underline"
                      >
                        info@anugrahhomes.com
                      </a>
                    </div>
          
                    {/* Phone */}
                    <div className="flex items-center gap-3 mb-6">
                      <FaPhoneAlt className="text-xl text-gray-700" />
                      
                        +917678279151 ,  +919115253545
                     
                    </div>
          
          
                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                      <a href="#" className="p-2 border rounded-full hover:bg-gray-200">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="p-2 border rounded-full hover:bg-gray-200">
                        <FaTwitter />
                      </a>
                      <a href="#" className="p-2 border rounded-full hover:bg-gray-200">
                        <FaLinkedinIn />
                      </a>
                      <a href="#" className="p-2 border rounded-full hover:bg-gray-200">
                        <FaInstagram />
                      </a>
                      <a href="#" className="p-2 border rounded-full hover:bg-gray-200">
                        <FaPinterestP />
                      </a>
                      <a href="#" className="p-2 border rounded-full hover:bg-gray-200">
                        <FaYoutube />
                      </a>
                    </div>
                  </div>
          
          
          
          
                </div>
          


           
            
        </div>
    );
}

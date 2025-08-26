import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import img1 from "../assets/gate-1.png"
import { Link } from 'react-router-dom';
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

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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


  return (
    <section className="pt-16  bg-gray-50 w-full">
      <Navbar />






 <div className="relative w-full h-64 md:h-80 lg:h-[500px]">
      {/* Background Image */}
      <img 
        src={img1}  // 👈 yahan apni image ka path do
        alt="Contact Banner" 
        className="absolute inset-0 w-full h-full object-bottom "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
        <div className="mt-4 flex items-center space-x-2 text-sm md:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <span>›</span>
          <span className="text-gray-300">Contact Us</span>
        </div>
      </div>
    </div>











      <div className="max-w-6xl py-10 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
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


      {/* Google Map */}
      <div className="w-full h-[350px] md:h-[400px] rounded overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112475.5116189701!2d77.961212!3d28.014197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397305f597c3aead%3A0x156d52a4cf51738!2sAnugrah%20Homes!5e0!3m2!1sen!2sin!4v1693316072345!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-none"
        ></iframe>
      </div>




 

    </section>
  );
};

export default Contact;

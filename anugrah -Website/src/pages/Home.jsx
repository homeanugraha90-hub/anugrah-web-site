import React, { useEffect } from "react";
// import first from "../assets/first-img.jpg";
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

    const firstSection = sections.find((section) => section.sectionName === "first-home");
    const introSection = sections.find((section) => section.sectionName === "IntroSection");
    const residentialSection = sections.find((section) => section.sectionName === "ResidentialSection");
    const projectSection = sections.find((section) => section.sectionName === "ProjectSection");
    const videoSection = sections.find((section) => section.sectionName === "VideoSection");
    const investSection = sections.find((section) => section.sectionName === "InvestSection");

    const luxuriousSection = sections.find((section) => section.sectionName === "LuxuriousSection");
    const articlesSection = sections.find((section) => section.sectionName === "ArticalsSection");
    const homeActual = sections.find((section) => section.sectionName === "HomeActual");
    const plotSizeSection = sections.find((section) => section.sectionName === "PlotSizeSection");
    const nucsaSection = sections.find((section) => section.sectionName === "NucsaSection");
    const homeContactSection = sections.find((section) => section.sectionName === "HomeContactSection");




    const features = [
        {
            icon: <Heart className="text-teal-500 w-8 h-8 mb-2" />,
            text: projectSection?.content.discribe1,
        },
        {
            icon: <Briefcase className="text-teal-500 w-8 h-8 mb-2" />,
            text: projectSection?.content.discribe2,
        },
        {
            icon: <User className="text-teal-500 w-8 h-8 mb-2" />,
            text: projectSection?.content.discribe3,
        },
        {
            icon: <Globe className="text-teal-500 w-8 h-8 mb-2" />,
            text: projectSection?.content.discribe4,
        },

    ];

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        const date = new Date();
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

            {/* IntroSection 2 */}
            <section id="about" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10 leading-snug">

                    {introSection?.content?.tittle}

                    <br />
                    <span className="border-b-4 border-green-600 inline-block mt-2">

                        {introSection?.content?.tittle2}
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Side Image */}
                    <div>
                        <img
                            src={`http://localhost:5000/upload/${introSection?.images[0]}`}
                            alt="Modern House"
                            className="w-full rounded shadow-lg"
                        />
                    </div>

                    {/* Right Side Text */}
                    <div className="space-y-4 text-gray-700 text-justify">
                        <p>
                            <span className="font-semibold"> {introSection?.content?.content} </span> {introSection?.content?.content1}
                        </p>
                        <p>
                            {introSection?.content?.content2}
                        </p>
                        <p>
                            {introSection?.content?.content3}
                        </p>
                        <p>
                            {introSection?.content?.content4}
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
                            src={`http://localhost:5000/upload/${residentialSection?.images[0]}`}
                            alt="Interior Design"
                            className="w-full rounded shadow"
                        />
                        {/* <h3 className="absolute top-6 left-6 text-white text-xl md:text-2xl font-medium">
                            We Design Your Home
                        </h3> */}
                    </div>

                    {/* Text Right */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">{residentialSection?.content?.title}</h2>
                        <p className="text-gray-600 mb-4">
                            <strong className="text-gray-800">{residentialSection?.content?.title1}</strong> {residentialSection?.content?.discribe1}
                        </p>
                        <p className="text-gray-700 mb-6">
                            {residentialSection?.content?.discribe2}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3 text-gray-700">
                            {[
                                residentialSection?.content?.option1,
                                residentialSection?.content?.option2,
                                residentialSection?.content?.option3,
                                residentialSection?.content?.option4,
                                residentialSection?.content?.option5,
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

            {/* Project Section Features  4*/}
            <section id="project-features" className="py-16 px-4 md:px-10 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-10">{projectSection?.content?.title}</h2>

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

                        {videoSection?.content?.title}
                    </h2>

                    <p className="text-red-600 mb-1">
                        {videoSection?.content?.discribe1}
                    </p>
                    <p className="text-red-600 mb-6">
                        {videoSection?.content?.discribe2}
                    </p>

                    <div className="w-full aspect-video mb-6 relative overflow-hidden rounded-md shadow-lg">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={`http://localhost:5000/upload/${videoSection?.videos?.[0]}`}
                            type="video/mp4"
                            controls
                        />
                    </div>

                    <p className="text-red-600 text-sm">
                        {videoSection?.content?.discribe3}
                    </p>
                    <p className="font-semibold">
                        Attractions: <span className="font-normal">
                            {videoSection?.content?.discribe4}
                        </span>
                    </p>
                </div>
            </section>

            {/* Invest Section in Jewar 6*/}
            <section id="amenities" className="bg-white py-16 px-4 text-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                       {investSection?.content?.title}
                    </h2>

                    <div className="space-y-6 text-justify leading-relaxed">
                        <p>
                           {investSection?.content?.describe1}
                        </p>

                        <p>
                            {investSection?.content?.describe2}
                        </p>

                        <p>
                           {investSection?.content?.describe3}
                        </p>

                        <p>
                           {investSection?.content?.describe4}
                        </p>

                        <p>
                            {investSection?.content?.describe5}
                        </p>
                    </div>
                </div>
            </section>


            {/* Luxurious Section 7*/}
            <section id="faq" className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">{luxuriousSection?.content?.title}</h2>
                    <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
                         {luxuriousSection?.content?.describe1}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
                        <div className="flex flex-col items-center">
                            {/* <img src="/faq-1.png" alt="24X7 Security" className="h-16 mb-2" /> */}
                            <img
                            src={`http://localhost:5000/upload/${luxuriousSection?.images[0]}`}
                            alt="24X7 Security"
                            className="h-16 mb-2"
                        />
                            <p className="font-semibold text-gray-800">24X7 Security</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={`http://localhost:5000/upload/${luxuriousSection?.images[1]}`} alt="Parks" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800">Commercial Center</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={`http://localhost:5000/upload/${luxuriousSection?.images[2]}`} alt="Water Bodies" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800"> Parks</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={`http://localhost:5000/upload/${luxuriousSection?.images[3]}`} alt="Gym" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800"> Water Bodies</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={`http://localhost:5000/upload/${luxuriousSection?.images[4]}`} alt="Commercial Center" className="h-16 mb-2" />
                            <p className="font-semibold text-gray-800 text-center"> Gym</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Articals Section News  8*/}

            <section id="media" className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">NEWS & MEDIA</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <img src={`http://localhost:5000/upload/${articlesSection?.images[0]}`} alt="News 1" className="w-full rounded-md shadow-md" />
                        <img src={`http://localhost:5000/upload/${articlesSection?.images[1]}`} alt="News 2" className="w-full rounded-md shadow-md" />
                        <img src={`http://localhost:5000/upload/${articlesSection?.images[2]}`} alt="News 3" className="w-full rounded-md shadow-md" />
                        <img src={`http://localhost:5000/upload/${articlesSection?.images[3]}`} alt="News 4" className="w-full rounded-md shadow-md" />
                        <img src={`http://localhost:5000/upload/${articlesSection?.images[4]}`} alt="News 5" className="w-full rounded-md shadow-md" />
                        <img src={`http://localhost:5000/upload/${articlesSection?.images[5]}`} alt="News 6" className="w-full rounded-md shadow-md" />
                        <img src={`http://localhost:5000/upload/${articlesSection?.images[6]}`} alt="News 7" className="w-full rounded-md shadow-md" />
                        <img src={`http://localhost:5000/upload/${articlesSection?.images[7]}`} alt="News 8" className="w-full rounded-md shadow-md" />
                    </div>
                </div>
            </section>



            {/* Anugrah home actual imgage section 9 */}
            <section id="site-pictures" className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">
                        Anugrah Homes Actual Site Pictures
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <img src={`http://localhost:5000/upload/${homeActual?.images[0]}`} alt="Site 1" className="w-full h-56 object-cover rounded shadow" />
                        <img src={`http://localhost:5000/upload/${homeActual?.images[1]}`} alt="Site 2" className="w-full h-56 object-cover rounded shadow" />
                        <img src={`http://localhost:5000/upload/${homeActual?.images[2]}`} alt="Site 3" className="w-full h-56 object-cover rounded shadow" />
                        <img src={`http://localhost:5000/upload/${homeActual?.images[3]}`} alt="Site 4" className="w-full h-56 object-cover rounded shadow" />
                    </div>
                </div>
            </section>






            {/* Plot size section 10 */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        { plotSizeSection?.content.title}
                    </h2>
                    <img
                        src={`http://localhost:5000/upload/${plotSizeSection?.images[0]}`}
                        alt="Anugrah Homes Plot Sizes"
                        className="w-full rounded-md shadow-lg mx-auto"
                    />
                </div>
            </section>




            {/* Plot Nucsa Section 11 */}

            <section className="px-4 py-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {/* Price List */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">{nucsaSection?.content?.title1}</h2>
                            <img
                                src={`http://localhost:5000/upload/${nucsaSection?.images[0]}`}
                                alt="Price List"
                                className="w-full h-auto rounded shadow"
                            />
                        </div>

                        {/* Layout */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">{nucsaSection?.content?.title2}</h2>
                            <img
                                src={`http://localhost:5000/upload/${nucsaSection?.images[1]}`}
                                alt="Layout"
                                className="w-full h-auto rounded shadow"
                            />
                        </div>





                        {/* Location */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">{nucsaSection?.content?.title3}</h2>
                            <img
                                src={`http://localhost:5000/upload/${nucsaSection?.images[2]}`}
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
                        <p className="text-gray-700  md:w-40">
                            {homeContactSection?.content?.address}
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 mb-3">
                        <FaEnvelope className="text-xl text-gray-700" />
                        <a
                            href="mailto:info@anugrahhomes.com"
                            className="text-green-700 font-medium hover:underline"
                        >
                            {homeContactSection?.content?.email}
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 mb-6">
                        <FaPhoneAlt className="text-xl text-gray-700" />

                        {homeContactSection?.content?.number}

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

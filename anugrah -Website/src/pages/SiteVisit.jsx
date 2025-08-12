import React, { useState } from "react";
import { MapPin, CalendarDays, Phone, Mail, Check } from "lucide-react";
import siteVisitImg from "../assets/gate-1.png"; // apna image path use karo
import emailjs from "@emailjs/browser";

const SiteVisit = () => {
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!consent) {
      setError(
        "Please consent to storing your submitted information as per the DPDPA."
      );
      return;
    }
    setError("");

    // EmailJS Send Function
    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess("Your site visit request has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            message: "",
          });
          setConsent(false);
        },
        (error) => {
          setError("Failed to send request. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${siteVisitImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Schedule Your Site Visit
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Experience the location, explore the amenities, and see your dream
            plot in person.
          </p>
        </div>
      </section>

      {/* Why Site Visit */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Book a Site Visit?</h2>
          <p className="text-gray-600 mb-6">
            Seeing is believing. Our guided site visits let you explore the
            property, understand the surroundings, and get a feel of the
            upcoming infrastructure near Jewar Airport & Film City Noida.
          </p>
          <ul className="space-y-3">
            {[
              "Walk through the exact plot location",
              "Understand nearby amenities & connectivity",
              "Discuss future development plans",
              "Get all your questions answered in person",
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" /> {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={siteVisitImg}
            alt="Site Visit"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Book Your Site Visit
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-xl p-8"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requests?"
              rows="4"
              className="border rounded-lg px-4 py-3 w-full md:col-span-2"
            ></textarea>

            {/* Consent Checkbox */}
            <div className="md:col-span-2  flex items-start gap-2">
              <input
  type="checkbox"
  id="consent"
  checked={consent}
  onChange={(e) => setConsent(e.target.checked)}
  className="w-6 h-6 accent-blue-600 cursor-pointer rounded"
 />

              <label htmlFor="consent" className="text-sm text-gray-600">
                I consent to having this website store my submitted information
                as per the{" "}
                <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>.
              </label>
            </div>

            {/* Messages */}
            {error && (
              <p className="md:col-span-2 text-red-500 text-sm">{error}</p>
            )}
            {success && (
              <p className="md:col-span-2 text-green-600 text-sm">{success}</p>
            )}

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg md:col-span-2 hover:bg-gray-800 transition"
            >
              Schedule Visit
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <MapPin className="w-8 h-8 mx-auto text-blue-600" />
            <h4 className="mt-2 font-bold">Location</h4>
            <p>Jewar Airport Road, Greater Noida</p>
          </div>
          <div>
            <Phone className="w-8 h-8 mx-auto text-blue-600" />
            <h4 className="mt-2 font-bold">Call Us</h4>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <Mail className="w-8 h-8 mx-auto text-blue-600" />
            <h4 className="mt-2 font-bold">Email Us</h4>
            <p>info@anugrahhomes.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteVisit;

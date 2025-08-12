import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Emily Robertson",
    position: "CEO Digital Avitex",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback:
      "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation.",
  },
  {
    name: "James Thompson",
    position: "CEO Digital Avitex",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    feedback:
      "Professional, reliable, and efficient. They guided me through every step and made the entire process stress-free.",
  },
  {
    name: "Sophia Williams",
    position: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
    feedback:
      "They offered outstanding service and tailored solutions that helped our business grow. Highly recommended!",
  },
  {
    name: "Michael Brown",
    position: "CTO TechCorp",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    rating: 5,
    feedback:
      "Amazing experience from start to finish. The team was always responsive and highly knowledgeable.",
  },
];

export default function CardSlider() {
  return (
    <section className="bg-white py-16">
      <div className="w-full mx-auto px-6 md:px-20 text-center relative">
        <p className="text-sm font-semibold uppercase text-gray-500">
          Our Testimonials
        </p>
        <h2 className="text-4xl font-bold mt-2 mb-12">
          What’s People Say’s
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-6 m-4 py-20 rounded-2xl shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-[#f08a25] text-xl mr-1">★</span>
                    ))}
                  </div>
                  <p className="text-gray-800 text-left">
                    “{testimonial.feedback}”
                  </p>
                </div>
                <div className="flex items-center mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #000;
          width: 44px;
          height: 44px;
        }
        .swiper-button-prev {
          left: 10px;
        }
        .swiper-button-next {
          right: 10px;
        }
      `}</style>
    </section>
  );
}
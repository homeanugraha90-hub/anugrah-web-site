import React, { useState } from "react";
import img1 from "../assets/gate-1.png";
import img6 from "../assets/g2.jpg";
import img7 from "../assets/road-1.png";
import img8 from "../assets/g1.jpg";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import img2 from "/artical-1.jpg";
import img3 from "/artical-2.jpg";
import img4 from "/artical-3.png";
import img5 from "/artical-4.png";
import imgs6 from "/artical-5.png";
import imgs7 from "/artical-6.png";
import imgs8 from "/artical-7.png";
import img9 from "/artical-8.png";

const blogPosts = [
  {
    id: 1,
    image: img6,
    tag: "Hiway",
    title: "The Future Of Office Spaces In A Hybrid Work Era",
    date: "May 06, 2025",
    author: "Printer Beatrix",
    excerpt:
      "With remote work evolving, office space is being reimagined to suit flexible business models...",
      link: "/articles/future-office-spaces"
  },
  {
    id: 2,
    image: img7,
    tag: "Property",
    title: "How To Identify High-Growth Neighborhoods In 2025",
    date: "May 18, 2025",
    author: "Kelemen Krisztina",
    excerpt:
      "Mixed-use developments are transforming once-overlooked districts into real estate hotbeds...",
      link: "/articles/future-office-spaces"
  },
  {
    id: 3,
    image: img8,
    tag: "Trending",
    title: "Will 2025 Be A Buyer’s Or Seller’s Market?",
    date: "June 15, 2025",
    author: "Pásztor Kira",
    excerpt:
      "Supply chain improvements and labor availability may ease new home construction challenges...",
      link: "/articles/future-office-spaces"
  },
  {
    id: 4,
    image: img7,
    tag: "Property",
    title: "Urban Expansion & Infrastructure in 2025",
    date: "July 02, 2025",
    author: "Kelemen Krisztina",
    excerpt:
      "Infrastructure growth is creating new investment opportunities in suburban areas...",
      link: "/articles/future-office-spaces"
  },
  {
    id: 5,
    image: img8,
    tag: "Trending",
    title: "Sustainable Housing: Future or Fad?",
    date: "August 01, 2025",
    author: "Pásztor Kira",
    excerpt:
      "Eco-friendly housing designs are becoming increasingly popular in modern markets...",
      link: "/articles/future-office-spaces"
  },
  {
    id: 6,
    image: img6,
    tag: "Hiway",
    title: "Highway Development & Real Estate Growth",
    date: "August 10, 2025",
    author: "Printer Beatrix",
    excerpt:
      "Connectivity improvements can drastically impact real estate values in rural areas...",
      link: "/articles/future-office-spaces"
  },
];

const recentPostsData = [
  {
    id: 1,
    img: img2,
    title: "Why Millennials Are Reshaping The Real Estate Market",
    date: "October 21, 2025",
  },
  {
    id: 2,
    img: img3,
    title: "Technology Trends Redefining Modern Homes",
    date: "October 12, 2025",
  },
  {
    id: 3,
    img: img4,
    title: "Cities With The Highest ROI For Airbnb Rentals",
    date: "October 14, 2025",
  },
  {
    id: 4,
    img: img5,
    title: "Affordable Housing: A 2025 Perspective",
    date: "October 10, 2025",
  },
  {
    id: 5,
    img: imgs6,
    title: "Why Millennials Are Reshaping The Real Estate Market",
    date: "October 21, 2025",
  },
  {
    id: 6,
    img: imgs7,
    title: "Technology Trends Redefining Modern Homes",
    date: "October 12, 2025",
  },
  {
    id: 7,
    img: imgs8,
    title: "Cities With The Highest ROI For Airbnb Rentals",
    date: "October 14, 2025",
  },
  {
    id: 8,
    img: img9,
    title: "Affordable Housing: A 2025 Perspective",
    date: "October 10, 2025",
  },
];

const Media = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Sort latest first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to create page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "right-bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="relative h-[400px] flex items-center justify-center text-white"
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl font-bold ">Latest News</h1>
            <p className="text-sm mt-4">Home &gt; Blog</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-12 gap-8">
        {/* Blog Posts */}
        <div className="lg:col-span-8 space-y-12">
          {currentPosts.map((post) => (
            <div key={post.id} className="space-y-4">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-xl object-cover"
                />
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded">
                  {post.tag.toUpperCase()}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Post By{" "}
                <span className="font-medium text-black">{post.author}</span> |{" "}
                {post.date}
              </div>
              <h2 className="text-3xl font-serif">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center gap-2 pt-10 items-center">
            {/* Prev Arrow */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 border rounded-full transition ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) =>
              page === "..." ? (
                <span key={index} className="px-3">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 border rounded transition ${
                    currentPage === page
                      ? "bg-gray-800 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            {/* Next Arrow */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`p-2 border rounded-full transition ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-10 border-[#c5c0c0] border h-12/12 rounded-2xl p-8">
          {/* Search */}
          <div>
            <h4 className="font-bold text-xl mb-3">Search</h4>
            <div className="flex items-center border border-gray-400 rounded px-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-3 outline-none rounded"
              />
              <Search className="w-8 h-8" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-xl mb-3">Categories</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex justify-between">
                Market Trends <span>(22)</span>
              </li>
              <li className="flex justify-between">
                Property Investment <span>(15)</span>
              </li>
              <li className="flex justify-between">
                Home Buying Tips <span>(16)</span>
              </li>
              <li className="flex justify-between">
                Rental & Leasing <span>(08)</span>
              </li>
              <li className="flex justify-between">
                Commercial Real Estate <span>(19)</span>
              </li>
              <li className="flex justify-between">
                Smart Living & Design <span>(21)</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="border p-4 border-gray-400 rounded-2xl">
            <h4 className="font-bold text-xl mb-3">Recent Posts</h4>
            <div className="space-y-4">
              {recentPostsData
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 4)
                .map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{post.title}</p>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-xl mb-3">Subscribe Newsletter</h4>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-3 border rounded mb-3"
            />
            <button className="bg-black text-white px-4 py-3 rounded w-full">
              Subscribe
            </button>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-bold text-xl mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "Housing",
                "Mortgage",
                "Rental",
                "Urban",
                "Investment",
                "Commercial",
                "Property",
                "Luxury",
                "Market",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-gray-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;

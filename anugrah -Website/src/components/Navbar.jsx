import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", type: "page", path: "/" },
    { name: "About", type: "page", path: "/about" },
    { name: "Why Jewar", type: "page", path: "/why-jewar" },
    { name: "Amenities", type: "page",path: "/amenities" },
    { name: "Faq", type: "page",path: "/faq" },
    { name: "Media", type: "page", path: "/media" },
    { name: "Price", type: "page", path: "/price" },
    { name: "Contact Us", type: "page", path: "/contact" },
    { name: "Sign Up", type: "page", path: "/auth" },
    // { name: "Login", type: "page", path: "/login" },
    { name: "Admin Dashboard", type: "page", path: "/adminDash" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollOrNavigate = (link) => {
    if (link.type === "scroll") {
      if (location.pathname !== "/") {
        navigate(`/#${link.id}`);
      } else {
        scrollTo(link.id);
      }
    } else if (link.type === "page") {
      navigate(link.path);
    }
  };

  useEffect(() => {
    setOpen(false); // close mobile menu on route change
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Anugrah Homes"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center ">
          {navLinks.map((link, index) => {
            const isActive =
              (link.type === "page" && location.pathname === link.path) 

            return link.type === "scroll" ? (
              <button
                key={index}
                onClick={() => handleScrollOrNavigate(link)}
                className={`text-md font-medium  py-2  rounded-md transition duration-300 ease-in-out ${
                  isActive
                    ? "bg-[#7a982c] text-white shadow-md "
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={index}
                to={link.path}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className={`text-md font-medium p-3 py-2 rounded-md transition duration-300 ease-in-out ${
                  isActive
                    ? "bg-[#7a982c] text-white shadow-md"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <button
            onClick={() => navigate("/site-visit")}
            className="bg-[#00dc84] text-white text-md font-semibold px-4 py-2 rounded-md ml-4 transition duration-300 ease-in-out hover:bg-[#00c178]"
          >
            Site Visit
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link, index) => (
            link.type === "scroll" ? (
              <button
                key={index}
                onClick={() => handleScrollOrNavigate(link)}
                className="block w-full text-left text-gray-800 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={index}
                to={link.path}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="block text-gray-800 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                {link.name}
              </Link>
            )
          ))}

          <button
            onClick={() => navigate}
            className="w-full bg-[#00dc84] text-white text-sm font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-[#00c178]"
          >
           
              Site Visit
           
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

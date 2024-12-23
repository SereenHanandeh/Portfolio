import { motion } from "framer-motion";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleLinkClick = (e, id) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    setIsLoading(true); // بدء التحميل
    setTimeout(() => {
      setIsLoading(false); // انتهاء التحميل
      document.getElementById(id).scrollIntoView({ behavior: "smooth" }); // تمرير سلس
    }, 1500); // زمن التحميل المحاكى (1.5 ثانية)
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
        </div>
      )}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 shadow-md ${
          isScrolled ? "bg-black" : "bg-gray-900"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2"
          >
            <FaLaptopCode className="text-pink-500 text-4xl" />
            <h1
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Sereen
            </h1>
          </motion.div>

          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "home")}
                className="hover:text-pink-400 transition-transform transform hover:scale-105"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "about")}
                className="hover:text-pink-400 transition-transform transform hover:scale-105"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleLinkClick(e, "projects")}
                className="hover:text-pink-400 transition-transform transform hover:scale-105"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleLinkClick(e, "skills")}
                className="hover:text-pink-400 transition-transform transform hover:scale-105"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="hover:text-pink-400 transition-transform transform hover:scale-105"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* قائمة مدمجة للشاشات الصغيرة */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

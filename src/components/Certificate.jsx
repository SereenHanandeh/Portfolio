import { motion } from "framer-motion";
import { useState } from "react";
import Coderz from "../assets/Coderz.jpg";
import imp from "../assets/imp.png";
import Meraki from "../assets/Meraki.jpg";
import Js from "../assets/Js.jpg";
import Html from "../assets/Html.jpg";
import Css from "../assets/Css.jpg";
import cursorImage from "../assets/cursor.png"; // تغيير المؤشر عند التأشير

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      name: "Meraki Academy",
      organization: "22-week immersive Full-Stack Web Development Bootcamp",
      duration: "7/2024 - 12/2024",
      description: `Intensive full-stack development bootcamp with over 400+ hours of coding, problem-solving, and project development.`,
      image: Meraki,
    },
    {
      name: "JavaScript Certificate",
      organization: "Orange Coursat, Co-funded by the EU",
      duration: "12/2024",
      description: `Completed the course Javascript.`,
      image: Js,
    },
    {
      name: "HTML Certificate",
      organization: "Orange Coursat, Co-funded by the EU",
      duration: "12/2024",
      description: `Completed the course HTML.`,
      image: Html,
    },
    {
      name: "CSS Certificate",
      organization: "Orange Coursat, Co-funded by the EU",
      duration: "12/2024",
      description: `Completed the course CSS.`,
      image: Css,
    },
    {
      name: "ASP.NET MVC CORE 3",
      organization: "Coderz for Software and Testing",
      duration: "10/2023 - 1/2024",
      description: `Advanced ASP.NET MVC core 3 training program to build scalable and secure web applications.`,
      image: Coderz,
    },
    {
      name: "ASP.NET Training",
      organization: "IMPERIAL Technology and Software",
      duration: "7/2019 - 8/2021 (On-Site) & 8/2021 - 7/2022 (Remote)",
      description: `Comprehensive ASP.NET training covering web development concepts and real-world projects.`,
      image: imp,
    },
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const handleOverlayClick = (e) => {
    // إغلاق النافذة عند الضغط على المنطقة الخارجية
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // إنشاء مربعات عشوائية
  const squares = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    size: Math.random() * 60 + 50, // حجم عشوائي بين 50 و 110
    x: Math.random() * 100, // الموضع الأفقي العشوائي
    y: Math.random() * 100, // الموضع العمودي العشوائي
    color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.3)`, // لون عشوائي مع شفافية أقل
  }));

  return (
    <section
      id="certificates"
      className="relative h-auto text-white py-16 bg-gray-900 overflow-hidden"
    >
      {/* خلفية متحركة باستخدام مربعات */}
      <div className="absolute inset-0 pointer-events-none">
        {squares.map((square) => (
          <motion.div
            key={square.id}
            className="absolute rounded-lg"
            style={{
              width: `${square.size}px`,
              height: `${square.size}px`,
              top: `${square.y}vh`,
              left: `${square.x}vw`,
              backgroundColor: square.color,
            }}
            animate={{
              x: [
                `${square.x}vw`,
                `${square.x + Math.random() * 15 - 7}vw`,
                `${square.x}vw`,
              ],
              y: [
                `${square.y}vh`,
                `${square.y + Math.random() * 15 - 7}vh`,
                `${square.y}vh`,
              ],
              opacity: [0.3, 0.7, 0.3], // شفافية أعلى
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <h2 className="text-5xl text-center font-extrabold mb-12 relative z-10">
        My Certificates
      </h2>

      {/* عرض الشهادات بشكل عمودي في المنتصف */}
      <div className="flex flex-col items-center space-y-8 px-6 relative z-10">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-80 md:w-96 lg:w-[350px] p-6 bg-gradient-to-tr from-fuchsia-600 to-indigo-600 rounded-3xl shadow-2xl text-center cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleCertificateClick(certificate)}
            style={{
              cursor: `url(${cursorImage}), pointer`, // تغيير المؤشر عند التأشير
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white">
              {certificate.name}
            </h3>
            <p className="text-sm text-gray-300">{certificate.organization}</p>
            <p className="text-sm text-gray-400">{certificate.duration}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick} // إضافة حدث للنقر على الخلفية
        >
          <motion.div
            className="bg-gray-900 text-white p-8 rounded-2xl w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 max-h-[80vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-fuchsia-400 mb-4">
              {selectedCertificate.name}
            </h3>
            <p className="text-gray-300 mb-4">
              {selectedCertificate.description}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Organization:</strong> {selectedCertificate.organization}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Duration:</strong> {selectedCertificate.duration}
            </p>

            {/* عرض صورة الشهادة */}
            {selectedCertificate.image && (
              <div className="my-6">
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.name} Certificate`}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            )}

            <button
              onClick={closeModal}
              className="mt-6 bg-fuchsia-500 text-white px-4 py-2 rounded-full hover:bg-fuchsia-600 transition-all duration-300"
              style={{
                cursor: `url(${cursorImage}), pointer`,
              }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;

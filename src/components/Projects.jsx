import { motion } from "framer-motion";
import { useState } from "react";
import payMaster from "../assets/payMaster.png";
import fffImage from "../assets/fff.png";
import social from "../assets/p2.png";
import cursorImage from "../assets/cursor.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: " Email - Form Application (MERN Stack)",
      description: ` This project is a stand-alone full-stack application built using the MERN
 Stack (MongoDB, Express.js, React.js, Node.js). It focuses on
 collecting user information through a form and providing a payment
 selection option. Once the user selects a payment method, an email
 confirmation is sent to the user.`,
      technologies: [
        "MongoDB",
        "Mongoose",
        "NodeJS",
        "ExpressJS",
        "Nodemailer",
        " Axios",
        "ReactJS ",
        "CSS",
      ],
      interfaceImage: payMaster,
      demoLink: "https://stunning-clafoutis-dacade.netlify.app/",
      githubLink: "https://github.com/SereenHanandeh/Email-Form",
    },
    {
      name: "Social Media Platform",
      description: `The project is a social media platform. The platform is designed to connect people, facilitate sharing of content, and promote engagement through features like posts, comments, and messaging. It aims to provide a user-friendly and secure environment for people to interact and share their thoughts and ideas.`,
      technologies: [
        "PostgreSQL",
        "ReactJS",
        "Node.js",
        "Express Js",
        "React",
        "Redux",
        "Sockit io",
        "Cloudinary",
      ],
      interfaceImage: social,
      demoLink: "https://moltaqajo.netlify.app/",
      videoUrl: "https://www.youtube.com/embed/Qc7_vmHbi3Y",
      githubLink: "https://github.com/username/social-media-platform",
    },
    {
      name: "Hospital Management System",
      description: `This Hospital Management System is a full-stack web application designed to streamline hospital operations and manage departments, doctors, and patient records.`,
      technologies: ["ReactJS", "Axios", "Node.js", "MongoDB"],
      interfaceImage: fffImage,
      githubLink:
        "https://github.com/C12-SereenHanandeh/MERAKI_Academy_Project_4",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleOverlayClick = (e) => {
    // إغلاق النافذة عند الضغط على المنطقة الخارجية
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // إنشاء عدد أكبر من المربعات بأحجام مختلفة
  const squares = Array.from({ length: 40 }, (_, index) => ({
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
      id="projects"
      className="relative h-screen text-white py-16 bg-gray-900 overflow-hidden"
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
        My Projects
      </h2>

      {/* وضع المشاريع في الوسط وأسفل بعضها */}
      <div className="flex flex-col items-center space-y-8 px-6 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-80 md:w-96 lg:w-[350px] p-6 bg-gradient-to-tr from-fuchsia-600 to-indigo-600 rounded-3xl shadow-2xl text-center cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleProjectClick(project)}
            style={{
              cursor: `url(${cursorImage}), pointer`, // تغيير المؤشر عند التأشير
            }}
          >
            <h3 className="text-3xl font-extrabold mb-4 text-white">
              {project.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick} // إضافة حدث للنقر على الخلفية
        >
          <motion.div
            className="bg-gray-900 text-white p-8 rounded-2xl w-11/12 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h3 className="text-3xl font-extrabold text-fuchsia-400 mb-4">
              {selectedProject.name}
            </h3>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <h4 className="text-lg font-semibold text-fuchsia-300 mb-2">
              Technologies Used:
            </h4>
            <ul className="list-disc text-gray-400 mb-4 pl-6">
              {selectedProject.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>

            {/* عرض صورة الواجهة إذا كانت موجودة */}
            {selectedProject.interfaceImage && (
              <div className="my-6">
                <img
                  src={selectedProject.interfaceImage}
                  alt="Project Interface"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            )}

            {selectedProject.demoLink && (
              <div className="my-4">
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-fuchsia-400 underline transition-all duration-300"
                >
                  Demo Link
                </a>
              </div>
            )}

            {/* إضافة رابط GitHub بنفس التصميم */}
            {selectedProject.githubLink && (
              <div className="my-4">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-fuchsia-400 underline transition-all duration-300"
                >
                  GitHub Repository
                </a>
              </div>
            )}

            {selectedProject.videoUrl && (
              <div className="my-6">
                <iframe
                  width="100%"
                  height="315"
                  src={selectedProject.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
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

export default Projects;

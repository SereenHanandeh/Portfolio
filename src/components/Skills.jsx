import { useState } from "react";
import { motion } from "framer-motion";
import cursorImage from "../assets/cursor.png";

const frontendSkills = [
  { name: "HTML5", icon: "📄" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "💻" },
  { name: "React.js", icon: "⚛️" },
  { name: "Redux", icon: "🔄" },
];

const backendSkills = [
  { name: "Node.js", icon: "🌱" },
  { name: "Express.js", icon: "🚀" },
  { name: "MongoDB", icon: "📊" },
  { name: "Mongoose", icon: "🐱" },
  { name: "PostgreSQL", icon: "🛠️" },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // حالة افتراضية لاختيار لا شيء

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center text-gray-800 overflow-hidden bg-gray-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-500 opacity-20 rounded-full -top-10 -left-20 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400 opacity-20 rounded-full -bottom-10 -right-20 animate-pulse delay-200"></div>
        <div className="absolute w-80 h-80 bg-purple-500 opacity-20 rounded-full bottom-1/3 left-1/4 animate-pulse delay-500"></div>
      </div>

      {/* Title */}
      <h2 className="text-5xl font-extrabold text-white mb-8 z-10">
        My Skills
      </h2>

      {/* Buttons */}
      <div className="flex space-x-8 mb-8 z-10">
        <button
          onClick={() =>
            setSelectedCategory(
              selectedCategory === "frontend" ? null : "frontend"
            )
          }
          className={`px-8 py-3 font-semibold rounded-full shadow-lg transition-transform duration-300 ${
            selectedCategory === "frontend"
              ? "bg-pink-500 text-white scale-105"
              : "bg-gray-700 text-gray-300 hover:scale-105"
          }`}
          style={{
            cursor: `url(${cursorImage}), pointer`, // تغيير المؤشر عند التأشير
          }}
        >
          Frontend
        </button>
        <button
          onClick={() =>
            setSelectedCategory(
              selectedCategory === "backend" ? null : "backend"
            )
          }
          className={`px-8 py-3 font-semibold rounded-full shadow-lg transition-transform duration-300 ${
            selectedCategory === "backend"
              ? "bg-blue-500 text-white scale-105"
              : "bg-gray-700 text-gray-300 hover:scale-105"
          }`}
          style={{
            cursor: `url(${cursorImage}), pointer`, // تغيير المؤشر عند التأشير
          }}
        >
          Backend
        </button>
      </div>

      {/* Display Message or Skills */}
      <div className="container mx-auto px-8 relative z-10">
        {/* حالة عدم اختيار أي شيء */}
        {!selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-300 text-2xl"
          >
            <p>Please select a category to view the skills!</p>
          </motion.div>
        )}

        {/* Frontend Skills */}
        {selectedCategory === "frontend" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-pink-400 mb-6">
              Frontend Skills
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-pink-400 hover:shadow-pink-400 transition-all duration-300"
                >
                  <div className="text-4xl mb-2 text-white">{skill.icon}</div>
                  <p className="text-lg font-semibold text-gray-300">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Backend Skills */}
        {selectedCategory === "backend" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              Backend Skills
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-400 hover:shadow-blue-400 transition-all duration-300"
                >
                  <div className="text-4xl mb-2 text-white">{skill.icon}</div>
                  <p className="text-lg font-semibold text-gray-300">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;

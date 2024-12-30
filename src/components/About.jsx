import { motion, AnimatePresence } from "framer-motion";
import ProfileImage from "../assets/profile.jpg";
import Resume from "../assets/Resume.pdf";

const About = () => {
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.05 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.5,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const title = "About Me";
  const description = `Hello, I'm Sereen! I’m a passionate web developer who loves building beautiful and interactive websites. My mission is to turn your ideas into reality with clean code and modern design. Let's create something amazing together!

I specialize in modern web development technologies like React.js, crafting seamless and engaging user experiences.

In my free time, I enjoy exploring new programming trends, solving coding challenges, and enhancing my skills in front-end and full-stack development.

When working with me, you can expect dedication, attention to detail, and a strong commitment to delivering high-quality projects that exceed your expectations.`;

  const dots = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
  }));

  return (
    <AnimatePresence>
      <motion.section
        id="about"
        key="about-section"
        className="h-screen flex items-center justify-center px-8 md:px-16 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(to bottom, #1e1e2f, #0d0d1a)",
          color: "#fff",
        }}
      >
        {/* النقاط المتحركة */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute bg-pink-500 rounded-full"
              style={{
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                top: `${dot.y}vh`,
                left: `${dot.x}vw`,
              }}
              animate={{
                y: [`${dot.y}vh`, `${dot.y + 10}vh`, `${dot.y}vh`],
                x: [`${dot.x}vw`, `${dot.x - 5}vw`, `${dot.x}vw`],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-x-8 text-center md:text-left relative z-10">
          {/* صورة الملف الشخصي */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 md:mb-0"
          >
            <motion.img
              src={ProfileImage}
              alt="Sereen's Profile"
              className="w-48 h-48 rounded-full border-4 border-pink-400 shadow-xl transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:border-purple-500"
              style={{
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out",
                width: "700px",
                height: "250px",
              }}
            />
          </motion.div>

          {/* النصوص */}
          <motion.div variants={containerVariants} className="space-y-6">
            {/* العنوان */}
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-pink-400 mb-6"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              {title.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </h2>

            {/* الوصف */}
            <motion.p
              variants={containerVariants}
              className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
              style={{
                lineHeight: "1.8",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400",
              }}
            >
              {description.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.p>

            {/* الأزرار */}
            <div className="space-x-4 mt-6">
              {/* زر تحميل السيرة الذاتية */}
              <motion.a
                href={Resume}
                download="Resume.pdf"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-gray-900 font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:bg-gradient-to-l hover:-translate-y-1 hover:shadow-xl"
              >
                Download My Resume
              </motion.a>

              {/* زر معاينة السيرة الذاتية */}
              <motion.a
                href={Resume}
                target="_blank"
                // rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-gray-900 font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:bg-gradient-to-l hover:-translate-y-1 hover:shadow-xl"
              >
                Preview My Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default About;

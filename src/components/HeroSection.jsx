import { motion } from "framer-motion";
import { useState } from "react";
import LaptopImage from "../assets/computer.png";
import cursor from "../assets/cursor.png";

const HeroSection = () => {
  const [quote, setQuote] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const programmingQuotes = [
    "الجمال في البرمجة يأتي من البساطة",
    "البرمجة هي فن تحويل الأفكار إلى واقع باستخدام الكود",
    "أفضل طريقة للتعلم هي أن تكتب الأكواد، وتكتشف الأخطاء وتتعلم منها",
    "التعلم من الأخطاء هو جزء من البرمجة، ولا يجب أن تخاف من ارتكابها",
  ];

  const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * programmingQuotes.length);
    setQuote(programmingQuotes[randomIndex]);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 8000);
  };

  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 flex items-center justify-center px-8 md:px-16 relative"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl space-y-10 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              textShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
            }}
          >
            <span className="block">Welcome to</span>
            <span className="block text-pink-500">Sereen's World</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            I’m <span className="text-pink-400 font-bold">Sereen</span>, a
            creative web developer passionate about turning ideas into beautiful
            experiences.
          </motion.p>

          <motion.button
            onClick={showRandomQuote}
            className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              cursor: `url(${cursor}), pointer`,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Show a Programming Quote
          </motion.button>

          {isVisible && (
            <motion.div
              className="mt-6 p-6 bg-gray-800 bg-opacity-70 rounded-xl text-white italic text-lg font-semibold shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [0, 3, -3, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                textShadow: "0px 4px 8px rgba(0,0,0,0.6)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              "{quote}"
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className="hidden md:block w-full md:w-4/12 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={LaptopImage}
            alt="Laptop"
            className="rounded-lg shadow-2xl w-full"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

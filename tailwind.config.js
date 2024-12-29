/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gradient":
          "linear-gradient(to right, #ff7eb3, #ff758c, #ff6c65)",
      },
      animation: {
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradientAnimation 15s ease infinite",
        starry: "moveStars 50s linear infinite", // تحريك النجوم
      },
      keyframes: {
        gradientAnimation: {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 100%" },
          "100%": { "background-position": "0% 0%" },
        },
        moveStars: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-1000px)" }, // تحريك النجوم إلى الأعلى
        },
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
      backgroundImage: {
        "starry-night": "url('aa.mp4')", 
      },
    },
  },
  plugins: [],
};

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import cursorImage from "../assets/cursor.png"; // تأكد من المسار الصحيح للصورة

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // للحالة عند تحميل البريد

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // تعيين الحالة إلى تحميل

    emailjs
      .sendForm(
        "service_yvpbycc",
        "template_1a4fxrt",
        form.current,
        "v7TtNqC5rTLo8UkY3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setError("");
          e.target.reset();
          setIsLoading(false); // إيقاف التحميل
        },
        (error) => {
          console.error(error.text);
          setError("Failed to send message. Please try again.");
          setIsLoading(false); // إيقاف التحميل
        }
      );
  };

  // دالة لتغيير المؤشر عند التركيز على الحقل
  const changeCursorOnFocus = (e) => {
    e.target.style.cursor = `url(${cursorImage}), auto`; // تغيير المؤشر عند التركيز
  };

  // دالة لإرجاع المؤشر إلى الافتراضي عند مغادرة الحقل
  const revertCursorOnBlur = (e) => {
    e.target.style.cursor = "auto"; // العودة للمؤشر الافتراضي
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white py-16 sm:py-24 lg:py-32"
    >
      {/* Background Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90"></div>
        <div className="absolute w-full h-40 bg-pink-500 rounded-full blur-3xl top-1/4 left-[-20%] animate-pulse"></div>
        <div className="absolute w-full h-40 bg-purple-500 rounded-full blur-3xl bottom-1/4 right-[-20%] animate-pulse"></div>
        <div className="absolute w-full h-40 bg-blue-400 rounded-full blur-3xl top-1/3 right-[-10%] opacity-60 animate-ping"></div>
      </div>

      {/* Contact Form */}
      <div className="relative z-10 p-8 bg-gray-800 bg-opacity-95 rounded-2xl shadow-2xl w-full max-w-lg mx-auto sm:max-w-xl lg:max-w-2xl">
        <h2 className="text-4xl font-bold text-pink-400 mb-6 text-center">
          Contact Me
        </h2>

        {/* Success & Error Messages */}
        {isSent && (
          <p className="text-green-400 text-center mb-4">
            Message sent successfully!
          </p>
        )}
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-3 w-full rounded-lg bg-gray-700 focus:ring-2 focus:ring-pink-400 text-white placeholder-gray-400 transition"
              required
              onFocus={changeCursorOnFocus} // تغيير المؤشر عند التركيز
              onBlur={revertCursorOnBlur} // إعادة المؤشر عند مغادرة الحقل
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 w-full rounded-lg bg-gray-700 focus:ring-2 focus:ring-pink-400 text-white placeholder-gray-400 transition"
              required
              onFocus={changeCursorOnFocus} // تغيير المؤشر عند التركيز
              onBlur={revertCursorOnBlur} // إعادة المؤشر عند مغادرة الحقل
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 w-full rounded-lg bg-gray-700 focus:ring-2 focus:ring-pink-400 text-white placeholder-gray-400 transition"
              required
              onFocus={changeCursorOnFocus} // تغيير المؤشر عند التركيز
              onBlur={revertCursorOnBlur} // إعادة المؤشر عند مغادرة الحقل
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full p-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-all duration-300 ${
              isLoading ? "cursor-wait" : ""
            }`}
            style={{
              cursor: isLoading
                ? `url(${cursorImage}), auto` // تأكد من المسار الصحيح للصورة
                : "pointer", // تغيير المؤشر عند التأشير على الزر
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.cursor = `url(${cursorImage}), auto`;
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.cursor = "pointer"; // العودة للمؤشر الافتراضي
              }
            }}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Contact Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-blue-400 text-center">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaFileAlt className="mr-2 text-blue-400" />
              <a
                href="https://sereenresume.netlify.app/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Resume
              </a>
            </li>
            <li className="flex items-center">
              <FaLinkedin className="mr-2 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/sereenhanandeh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                sereenhanandeh
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="mr-2 text-blue-400" />
              <a
                href="https://github.com/SereenHanandeh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                SereenHanandeh
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-400" />
              <a
                href="mailto:sereen.ihanandeh@gmail.com"
                className="hover:text-blue-400"
              >
                sereen.ihanandeh@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Built Using Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-blue-400 text-center">
            Built Using
          </h3>
          <ul className="space-y-2">
            <li>⚛️ React</li>
            <li>⚡ Vite</li>
            <li>🌊 Tailwind-CSS</li>
            <li>✉️ Email JS</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-blue-400 text-center">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Full-Stack Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-blue-400">
                Certificates
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Sereen. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

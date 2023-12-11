import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.instagram.com/muhammadhaikalrahman_/" target="_blank" rel="noopener noreferrer" className="bg-gray-600 rounded-full p-2">
          <FaInstagram className="text-white text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-haikal-rahman-95934921b/" target="_blank" rel="noopener noreferrer" className="bg-gray-600 rounded-full p-2">
          <FaLinkedin className="text-white text-2xl" />
        </a>
        <a href="https://github.com/HaikalE" target="_blank" rel="noopener noreferrer" className="bg-gray-600 rounded-full p-2">
          <FaGithub className="text-white text-2xl" />
        </a>
      </div>
      <div className="text-center text-sm">
        Muhammad Haikal Rahman site. Copyright &copy; {new Date().getFullYear()}
        <br />
        Made with <span className="text-red-500">&#9829;</span> using React. 
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.jpg'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Mental Balance Logo" className="h-12 w-12 object-cover" />
          <span className="text-xl font-bold">Mental Balance</span>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 text-center">
          <ul className='flex gap-2'>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/")}>Home</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/about")}>About Us</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/blog")}>Blog</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/contact")}>Contact</li>
          </ul>
          <ul className='flex gap-2'>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/mental-health")}>Mental Health</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/healthy-living")}>Healthy Living</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/resources")}>Resources</li>
            <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/events")}>Events</li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-4">Follow us on:</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Mental Balance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-800 text-white p-4 shadow-lg relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="flex items-center space-x-2 cursor-pointer hover:text-gray-300"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Mental Balance Logo" className="h-12 w-12 object-cover" />
          <span className="text-xl font-bold">Mental Balance</span>
        </div>
        <ul className="hidden lg:flex space-x-6 items-center">
          <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/mental-health")}>Mental Health</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/healthy-living")}>Healthy Living</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/blog")}>Articles</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/forum")}>Forum</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/events")}>Campaign</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/resources")}>Business Ads</li>
          
          {!token ? (
            <>
              <li
                className="underline cursor-pointer hover:text-gray-300"
                onClick={() => navigate("/register")}
              >
                Register here?
              </li>
              <li
                className="underline cursor-pointer hover:text-gray-300"
                onClick={() => navigate("/login")}
              >
                Login
              </li>
            </>
          ) : (
            <>
              <li className="relative">
                <button
                  className="cursor-pointer hover:text-gray-300"
                  onClick={toggleDropdown}
                >
                  User Profile
                </button>
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 bg-blue-900 text-white shadow-lg w-48 rounded-md z-30">
                    <li
                      className="cursor-pointer hover:text-gray-300 px-4 py-2"
                      onClick={() => navigate("/user-profile")}
                    >
                      Profile
                    </li>
                    <li
                      className="cursor-pointer hover:text-gray-300 px-4 py-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}
        </ul>

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
          >
            ☰
          </button>
        </div>
      </div>
      <ul id="mobile-menu" className="lg:hidden hidden flex-col space-y-4 mt-4 bg-blue-800 text-white p-4">
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/")}>Home</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/mental-health")}>Mental Health</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/healthy-living")}>Healthy Living</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/blog")}>Blog</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/forum")}>Forum</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/events")}>Events</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/resources")}>Resources</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/about")}>About Us</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => navigate("/contact")}>Contact Us</li>

        {!token ? (
          <>
            <li
              className="underline cursor-pointer hover:text-gray-300"
              onClick={() => navigate("/register")}
            >
              Register here?
            </li>
            <li
              className="underline cursor-pointer hover:text-gray-300"
              onClick={() => navigate("/login")}
            >
              Login
            </li>
          </>
        ) : (
          <>
            <li className="relative">
              <button
                className="cursor-pointer hover:text-gray-300"
                onClick={toggleDropdown}
              >
                User Profile
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-blue-900 text-white shadow-lg w-48 rounded-md z-30">
                  <li
                    className="cursor-pointer hover:text-gray-300 px-4 py-2"
                    onClick={() => navigate("/user-profile")}
                  >
                    Profile
                  </li>
                  <li
                    className="cursor-pointer hover:text-gray-300 px-4 py-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

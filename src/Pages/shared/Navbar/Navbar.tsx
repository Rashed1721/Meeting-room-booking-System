import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ isAuthenticated, isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/System Name */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          System Name
        </Link>

        {/* Nav Links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link
            to="/meeting-rooms"
            className="text-gray-700 hover:text-blue-500"
          >
            Meeting Rooms
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">
            Contact Us
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-500">
            Login/Register
          </Link>
        </nav>

        {/* User Icon / Dropdown */}
        {isAuthenticated && (
          <div className="relative">
            <FaUserCircle
              className="text-3xl text-gray-700 cursor-pointer md:ml-4"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/my-bookings"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>
                  </li>
                  {isAdmin && (
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}
                  <li>
                    <button className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/meeting-rooms"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Meeting Rooms
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Login/Register
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
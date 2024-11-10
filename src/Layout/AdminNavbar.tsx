import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { logout } from "../redux/features/auth/authSlice";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

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
        </nav>

        <div>
          <Link
            to="/login"
            onClick={handleLogout}
            className="text-gray-700 hover:text-blue-500"
          >
            Logout
          </Link>
        </div>
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
            onClick={handleLogout}
            className="text-gray-700 hover:text-blue-500"
          >
            Logout
          </Link>
        </nav>
      )}
    </header>
  );
};

export default AdminNavbar;

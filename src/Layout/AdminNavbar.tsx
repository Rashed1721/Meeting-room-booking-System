import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logout } from "../redux/features/auth/authSlice";
import { Menu, Dropdown, Avatar } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const AdminNavbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const menu = (
    <Menu>
      {/* <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings">
        <Link to="/settings">Settings</Link>
      </Menu.Item> */}
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center justify-between px-6">
      <Link to="/" className="text-xl font-bold text-blue-600">
        RoomEase
      </Link>
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar size="small" icon={<UserOutlined />} />
          <span>{user?.role}</span>
          <DownOutlined />
        </div>
      </Dropdown>
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {isOpen && (
        <nav className="absolute right-0 top-full bg-white shadow-lg p-4 w-full">
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
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </nav>
      )}
    </div>
  );
};

export default AdminNavbar;

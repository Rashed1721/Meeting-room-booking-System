import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";
import BackToTopButton from "../Pages/shared/BackToTopButton";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [showButton, setShowButton] = useState(false);
  const route = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldScroll = scrollTop > 0;

      setScrolling(shouldScroll);
      setShowButton(scrollTop > 500); // Set showButton based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const navbarClasses = `sticky top-0 z-20 ${
    scrolling ? "lg:bg-opacity-80  lg:backdrop-blur-lg" : "bg-opacity-[100%]"
  } bg-white text-[#1c4456]`;
  // className = " mx-auto px-4 sm:px-6 lg:px-8";
  return (
    <div>
      <div className={navbarClasses}>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
      <BackToTopButton showButton={showButton} />
    </div>
  );
};

export default MainLayout;

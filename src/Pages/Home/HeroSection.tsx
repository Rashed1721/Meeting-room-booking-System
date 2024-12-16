// import heroBg from "../../assets/hero-bg-2.jpg";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative w-full h-[75vh] bg-cover bg-center md:bg-top"
//       style={{ backgroundImage: `url(${heroBg})` }}
//       role="banner"
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
//           Seamlessly Book the Perfect Meeting Room
//         </h1>
//         <p className="text-lg md:text-xl font-medium mb-6">
//           Hassle-free room booking tailored for your professional needs.
//         </p>
//         <a
//           href="/meeting-rooms"
//           className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg md:text-xl font-semibold shadow-md hover:shadow-lg transition duration-300"
//           aria-label="Get Started with Meeting Room Booking"
//         >
//           Get Started
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://i.ibb.co.com/0Z9DJnv/bg-3.jpg",
    "https://i.ibb.co/zfqhYbm/room-3.jpg",
    "https://i.ibb.co/dkKq9DT/room-1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <section className="relative w-full h-[75vh]" role="banner">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover", // Ensure the image covers the container
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Bluish Overlay */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-30"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
          Seamlessly Book the Perfect Meeting Room
        </h1>
        <p className="text-lg md:text-xl font-medium mb-6">
          Hassle-free room booking tailored for your professional needs.
        </p>
        <a
          href="/meeting-rooms"
          className="px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded-full text-lg md:text-xl font-semibold shadow-md hover:shadow-lg transition duration-300"
          aria-label="Get Started with Meeting Room Booking"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

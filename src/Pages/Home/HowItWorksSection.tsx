import { FaSearch, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Step 1: Select a Room */}
          <div className="group bg-white p-10 rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-blue-50 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-blue-500 rounded-full">
              <FaSearch className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-14 mb-4">
              Select a Room
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Browse through our selection of rooms and find the ideal space
              tailored to your needs.
            </p>
          </div>

          {/* Step 2: Choose Date & Time */}
          <div className="group bg-white p-10 rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-purple-50 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-purple-500 rounded-full">
              <FaCalendarAlt className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-14 mb-4">
              Choose Date & Time
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Select a date and time that fits your schedule with ease and
              convenience.
            </p>
          </div>

          {/* Step 3: Confirm Booking */}
          <div className="group bg-white p-10 rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-green-50 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-green-500 rounded-full">
              <FaCheckCircle className="text-white text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-14 mb-4">
              Confirm Booking
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Receive instant confirmation and prepare for a seamless booking
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

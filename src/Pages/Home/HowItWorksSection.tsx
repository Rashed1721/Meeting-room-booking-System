import { FaSearch, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Select a Room */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaSearch className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Select a Room</h3>
            <p className="text-gray-600">
              Browse available rooms and find the perfect space for your
              meeting.
            </p>
          </div>

          {/* Step 2: Choose Date & Time */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaCalendarAlt className="text-purple-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Choose Date & Time</h3>
            <p className="text-gray-600">
              Pick a time that suits your schedule with flexible options.
            </p>
          </div>

          {/* Step 3: Confirm Booking */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Confirm Booking</h3>
            <p className="text-gray-600">
              Get instant confirmation and prepare for a productive meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

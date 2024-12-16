import {
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa";

const ServiceAdvertisement = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl  font-extrabold tracking-wide text-gray-800 mb-8">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover how our services can make your meetings seamless and
          stress-free.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Real-Time Availability */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-500">
            <FaClock
              className="text-blue-500 text-6xl mx-auto mb-6"
              aria-label="Real-Time Availability"
            />
            <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-500 transition duration-200">
              Real-Time Availability
            </h3>
            <p className="text-gray-600">
              Check room availability instantly with up-to-date schedules.
            </p>
          </div>

          {/* Instant Booking Confirmation */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-green-500">
            <FaCheckCircle
              className="text-green-500 text-6xl mx-auto mb-6"
              aria-label="Instant Booking Confirmation"
            />
            <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-green-500 transition duration-200">
              Instant Booking Confirmation
            </h3>
            <p className="text-gray-600">
              Receive immediate confirmation for your bookings.
            </p>
          </div>

          {/* Flexible Scheduling */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-purple-500">
            <FaCalendarAlt
              className="text-purple-500 text-6xl mx-auto mb-6"
              aria-label="Flexible Scheduling"
            />
            <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-purple-500 transition duration-200">
              Flexible Scheduling
            </h3>
            <p className="text-gray-600">
              Plan meetings at your convenience with our flexible scheduling.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-red-500">
            <FaHeadset
              className="text-red-500 text-6xl mx-auto mb-6"
              aria-label="24/7 Support"
            />
            <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-red-500 transition duration-200">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Our support team is available around the clock to assist you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvertisement;

import {
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa";

const ServiceAdvertisement = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Real-Time Availability */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaClock className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Real-Time Availability
            </h3>
            <p className="text-gray-600">
              Check room availability instantly with up-to-date schedules.
            </p>
          </div>

          {/* Instant Booking Confirmation */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Instant Booking Confirmation
            </h3>
            <p className="text-gray-600">
              Receive immediate confirmation for your bookings.
            </p>
          </div>

          {/* Flexible Scheduling */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaCalendarAlt className="text-purple-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Plan meetings at your convenience with our flexible scheduling.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaHeadset className="text-red-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
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

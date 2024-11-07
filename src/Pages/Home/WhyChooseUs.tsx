import { FC } from "react";
import { FiCheckCircle, FiShield } from "react-icons/fi";

const WhyChooseUs: FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Seamless Booking Experience */}
          <div
            className="relative p-8 bg-cover bg-center bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 min-h-[300px]"
            style={{
              backgroundImage: `url('https://source.unsplash.com/random/800x600?office')`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <FiCheckCircle className="text-5xl text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                Seamless Booking Experience
              </h3>
              <p className="text-gray-200 max-w-xs">
                Enjoy a smooth and hassle-free booking process from start to
                finish.
              </p>
            </div>
          </div>

          {/* Secure Transactions */}
          <div
            className="relative p-8 bg-cover bg-center bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 min-h-[300px]"
            style={{
              backgroundImage: `url('https://source.unsplash.com/random/800x600?security')`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <FiShield className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                Secure Transactions
              </h3>
              <p className="text-gray-200 max-w-xs">
                Your payments are protected with top-tier security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

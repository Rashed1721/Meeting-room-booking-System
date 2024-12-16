import { FC } from "react";
import { FiCheckCircle, FiShield } from "react-icons/fi";

const WhyChooseUs: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl my-5 font-bold tracking-wide capitalize text-gray-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Seamless Booking Experience */}
          <div className="flex flex-col items-start text-left space-y-4">
            <FiCheckCircle className="text-6xl text-green-500" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Seamless Booking Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Enjoy a smooth and hassle-free booking process from start to
              finish. Our user-friendly platform ensures you get the best
              experience every time, with intuitive navigation, real-time
              availability, and instant confirmation. Whether you're booking a
              meeting room or an event space, everything is designed to save
              your time and simplify your journey.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Seamless Booking Experience"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secure Transactions */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg"
              alt="Secure Transactions"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start text-left space-y-4">
            <FiShield className="text-6xl text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Secure Transactions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your payments are protected with top-tier security protocols. We
              employ advanced encryption technologies and rigorous compliance
              standards to safeguard your financial data. Whether you're using a
              credit card, digital wallet, or bank transfer, every transaction
              is monitored and secured, ensuring your peace of mind. Trust us to
              keep your data confidential and your experience worry-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

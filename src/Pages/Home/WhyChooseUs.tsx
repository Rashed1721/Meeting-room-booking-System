const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seamless Booking Experience */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Seamless Booking Experience
            </h3>
            <p className="text-gray-600">
              Enjoy a smooth and hassle-free booking process from start to
              finish.
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">
              Your payments are protected with top-tier security protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

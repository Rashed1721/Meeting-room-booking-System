import heroBg from "../../assets/hero-bg-2.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-xl md:text-3xl font-bold mb-4">
          Book Your Ideal Meeting Room with Ease.
        </h1>
        <h1 className="text-xl md:text-2xl font-bold mb-4">
          Efficient, hassle-free room booking for all your meeting needs
        </h1>
        <a
          href="/meeting-rooms"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-full text-lg font-semibold transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

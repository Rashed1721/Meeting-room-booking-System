import MeetingRooms from "../Room/MeetingRooms";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorksSection";
import ServiceAdvertisement from "./ServiceAdertise";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <ServiceAdvertisement />
      <MeetingRooms />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;

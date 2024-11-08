import MeetingRooms from "../Room/MeetingRooms";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar/Navbar";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorksSection";
import ServiceAdvertisement from "./ServiceAdertise";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceAdvertisement />
      <MeetingRooms />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

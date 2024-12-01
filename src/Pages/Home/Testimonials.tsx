import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import img1 from "../../assets/hero-bg-2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Product Manager",
      image: `${img1}`,
      testimonial:
        "This service has completely streamlined our booking process.",
    },
    {
      id: 2,
      name: "Michael Lee",
      role: "Team Lead",
      image: `${img1}`,
      testimonial:
        "Flexible scheduling and 24/7 support make it an indispensable tool.",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className=" py-8">
      <div className="container mt-16 mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          What Our Customers Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-gray-100 rounded-lg shadow-md"
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mx-auto mb-4" />
              <p className="text-gray-700 mb-4">"{testimonial.testimonial}"</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

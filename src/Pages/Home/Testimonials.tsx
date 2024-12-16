import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useGetAllReviewQuery } from "../../redux/features/review/review";

const Testimonials = () => {
  const { data: reviews } = useGetAllReviewQuery(undefined);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Render star rating
  const renderStars = (rating: any) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50 px-5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide capitalize text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        <Slider {...settings}>
          {reviews?.data?.map((review: any) => (
            <div
              key={review._id}
              className="p-6 bg-white h-[300px] rounded-lg shadow-lg border border-gray-200 mx-2"
            >
              <FaQuoteLeft className="text-blue-500 text-4xl mb-4 opacity-20" />
              <p className="text-lg text-gray-700 italic mb-4">
                "{review.description}"
              </p>
              <div className="flex items-center justify-center flex-col">
                <h3 className="text-xl font-semibold text-gray-800">
                  {review.name}
                </h3>
                <div className="flex mt-2">{renderStars(review.rating)}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

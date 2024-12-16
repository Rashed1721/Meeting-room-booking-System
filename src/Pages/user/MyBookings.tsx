import { useGetMyBookingQuery } from "../../redux/features/my-booking/myBooking";
import { useAddReviewMutation } from "../../redux/features/review/review";
import { useAppSelector } from "../../redux/hook";
import { useState } from "react";

const MyBookings = () => {
  const [addReview] = useAddReviewMutation();
  const user = useAppSelector((state) => state.auth.user);
  const { data: myBookings, error } = useGetMyBookingQuery(user?.userId);

  // State for managing the review form visibility and the selected booking
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleReviewClick = (booking: any) => {
    setSelectedBooking(booking);
    setShowReviewForm(true); // Show the review form when the button is clicked
  };

  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
    setFormData({ name: "", rating: "", description: "" }); // Reset the form
    setErrorMessage(""); // Reset error message
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate rating input
    const ratingValue = parseInt(formData.rating);
    if (ratingValue < 1 || ratingValue > 5 || isNaN(ratingValue)) {
      setErrorMessage("Please provide a rating between 1 and 5.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted with data: ", formData);
    addReview(formData);
    setShowReviewForm(false);
  };

  if (error) {
    return (
      <div className="h-screen">
        <p className="text-red-500 text-center mt-7">Error loading bookings.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-semibold">My Bookings</h1>
      </div>

      {myBookings?.data?.length ? (
        <div className="overflow-x-auto shadow-md rounded-lg h-screen">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">
                  Room Name
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">
                  Date And Time
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">
                  Status
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">
                  Payment
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">
                  Activity
                </th>
              </tr>
            </thead>
            <tbody>
              {myBookings.data.map((booking: any, index: any) => (
                <tr
                  key={booking.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition duration-150`}
                >
                  <td className="px-6 py-4 border-b text-gray-800">
                    {booking.room?.name}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-800">
                    {new Date(booking.date).toLocaleString()}
                  </td>

                  <td className="px-6 py-4 border-b">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        booking.isConfirmed
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {booking.isConfirmed ? "Confirmed" : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        booking.paymentStatus === "Paid"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b text-center">
                    {booking.paymentStatus === "Paid" && (
                      <button
                        onClick={() => handleReviewClick(booking)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
                      >
                        Review
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No bookings found.</p>
      )}

      {/* Review Form Modal */}
      {showReviewForm && selectedBooking && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rating" className="block text-gray-700">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  id="rating"
                  min="1"
                  max="5"
                  className="w-full px-4 py-2 border rounded-md"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full px-4 py-2 border rounded-md"
                  // rows="4"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  onClick={handleCloseReviewForm}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;

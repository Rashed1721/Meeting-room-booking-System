import { useGetMyBookingQuery } from "../../redux/features/my-booking/myBooking";
import { useAppSelector } from "../../redux/hook";

const MyBookings = () => {
  const user = useAppSelector((state) => state.auth.user);
  console.log({ user });
  const { data: myBookings, error } = useGetMyBookingQuery(user?.userId);

  if (error) {
    return (
      <div className="h-screen">
        <p className="text-red-500 text-center mt-7">Error loading bookings.</p>
        ;
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-semibold">My Bookings</h1>
      </div>
      {myBookings?.data?.length ? (
        <div className="overflow-x-auto shadow-md rounded-lg h-screen ">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No bookings found.</p>
      )}
    </div>
  );
};

export default MyBookings;

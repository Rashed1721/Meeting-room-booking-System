import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useUpdateUserMutation } from "../../redux/features/user/user";
import { useAddBookingMutation } from "../../redux/features/admin/bookingManagement/bookingManagement";

interface BookingSummaryProps {
  roomName: string;
  roomId: string;
  date: string;
  timeSlot: string;
  Timeslot: string;
  cost: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  userAddress: string;
}

const BookingSummary: React.FC = () => {
  const location = useLocation();
  const userData = useAppSelector((state) => state.auth.user);
  const [updateUser] = useUpdateUserMutation();
  const [addBooking] = useAddBookingMutation();
  const bookingSummary = location.state as BookingSummaryProps;
  const Tslot: any[] = [];
  Tslot.push(bookingSummary.Timeslot);
  const userInfo = {
    name: bookingSummary.userName,
    email: bookingSummary.userEmail,
    phone: bookingSummary.userPhone,
    address: bookingSummary.userAddress,
  };

  const handleOnlick = async () => {
    const id = userData!.userId;
    const bookingInfo = {
      date: bookingSummary.date,
      room: bookingSummary.roomId,
      user: id,
      slot: Tslot,
      userInfo: userInfo,
    };
    console.log({ bookingInfo });
    const res = await addBooking(bookingInfo).unwrap();
    console.log({ res });
    if (res.success) {
      console.log(res);
      window.location.href = res.data.payment_url;
    } else {
      console.error("order creation failed:", res.message);
    }
    updateUser({ userInfo, id });
  };

  return (
    <div className="max-w-4xl mx-auto px-8 py-8 bg-white shadow-xl rounded-lg mt-10">
      <div className="border-b-2 pb-4 mb-6 border-gray-300">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Booking Summary
        </h1>
        <div className="flex justify-between mt-4">
          {/* <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Booking Summary
            </h2>
            <p className="text-gray-600 text-sm">Room Booking Invoice</p>
          </div> */}
          {/* <div className="text-right">
            <p className="text-sm text-gray-600">Date: {bookingSummary.date}</p>
          </div> */}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-4">
          <div className="w-1/2">
            <h3 className="text-xl font-semibold text-gray-800">
              Room Details
            </h3>
            <div className="mt-2">
              <p className="text-gray-700">
                Room Name:{" "}
                <span className="font-medium">{bookingSummary.roomName}</span>
              </p>
              <p className="text-sm text-gray-600">
                Date: {bookingSummary.date}
              </p>
              <p className="text-gray-700">
                Time Slot:{" "}
                <span className="font-medium">{bookingSummary.timeSlot}</span>
              </p>
            </div>
          </div>
          <div className="w-1/2 text-right">
            <h3 className="text-xl font-semibold text-gray-800">Cost</h3>
            <p className="text-lg font-medium text-blue-600">
              ${bookingSummary.cost}
            </p>
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 mb-4" />

        <div className="flex justify-between mb-4">
          <div className="w-1/2">
            <h3 className="text-xl font-semibold text-gray-800">
              User Information
            </h3>
            <div className="mt-2">
              <p className="text-gray-700">
                Name:{" "}
                <span className="font-medium">{bookingSummary.userName}</span>
              </p>
              <p className="text-gray-700">
                Phone:{" "}
                <span className="font-medium">{bookingSummary.userPhone}</span>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <span className="font-medium">{bookingSummary.userEmail}</span>
              </p>
              <p className="text-gray-700">
                Address:{" "}
                <span className="font-medium">
                  {bookingSummary.userAddress}
                </span>
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 mb-6" />
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleOnlick}
          type="submit"
          className="w-full sm:w-1/2 py-3 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;

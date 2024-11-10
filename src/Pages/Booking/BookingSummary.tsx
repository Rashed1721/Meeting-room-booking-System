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
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-semibold text-center mb-6 text-blue-600">
        Booking Summary
      </h1>
      <div className="space-y-4 md:space-y-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">Room Details</h2>
          <p className="text-gray-600">
            Room Name:{" "}
            <span className="font-medium">{bookingSummary.roomName}</span>
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">
            Booking Date & Time
          </h2>
          <p className="text-gray-600">
            Date: <span className="font-medium">{bookingSummary.date}</span>
          </p>
          <p className="text-gray-600">
            Time Slot:{" "}
            <span className="font-medium">{bookingSummary.timeSlot}</span>
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">Cost</h2>
          <p className="text-gray-600">
            Total Cost:{" "}
            <span className="font-medium text-blue-600">
              {bookingSummary.cost}
            </span>
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">
            User Information
          </h2>
          <p className="text-gray-600">
            Name: <span className="font-medium">{bookingSummary.userName}</span>
          </p>
          <p className="text-gray-600">
            Phone:{" "}
            <span className="font-medium">{bookingSummary.userPhone}</span>
          </p>
          <p className="text-gray-600">
            Email:{" "}
            <span className="font-medium">{bookingSummary.userEmail}</span>
          </p>
          <p className="text-gray-600">
            Address
            <span className="font-medium">{bookingSummary.userAddress}</span>
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={handleOnlick}
            type="submit"
            className="w-1/2 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            Proced Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;

import { useState } from "react";
import { Button, Modal } from "antd";

import {
  useDeleteBookingMutation,
  useGetAllBookingQuery,
  useUpdateBookingMutation,
} from "../../../redux/features/admin/bookingManagement/bookingManagement";

const BookingList = () => {
  const { data: bookings } = useGetAllBookingQuery(undefined);
  console.log({ bookings });
  const [deleteBooking] = useDeleteBookingMutation();
  const [updateBooking, { error }] = useUpdateBookingMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState<string | null>(null);

  // if (error) {
  //   return <div>Error fetching bookings.</div>;
  // }

  const showDeleteModal = (bookingId: string) => {
    setBookingToDelete(bookingId);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setBookingToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (bookingToDelete !== null) {
      handleDelete(bookingToDelete);
    }
    setIsModalVisible(false);
  };

  const handleUpdate = (id: string, bookingStat: string) => {
    let bookingValue;
    if (bookingStat === "unconfirmed") {
      bookingValue = { isConfirmed: "confirmed" };
      updateBooking({ id, bookingValue });
      console.log(id, bookingValue, error);
    } else {
      bookingValue = { isConfirmed: "unconfirmed" };
      updateBooking({ id, bookingValue });
    }
  };

  const handleDelete = (bookingId: string) => {
    console.log("Deleting Booking ID:", bookingId);
    deleteBooking(bookingId);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Booking List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Room Name</th>
              <th className="py-3 px-6 text-left">User Name</th>
              <th className="py-3 px-6 text-left">Date & Time</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {bookings?.data?.map((booking, index) => (
              <tr
                key={booking.id || index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{booking.room?.name}</td>
                <td className="py-3 px-6 text-left">{booking.user?.name}</td>
                <td className="py-3 px-6 text-left">
                  {booking.date} {booking.time}
                </td>
                <td className="py-3 px-6 text-left">{booking.isConfirmed}</td>
                <td className="py-3 px-6 text-center">
                  <Button
                    onClick={() => {
                      handleUpdate(booking._id, booking.isConfirmed);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-medium mr-2"
                  >
                    Update
                  </Button>

                  <Button
                    type="link"
                    onClick={() => showDeleteModal(booking._id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="delete"
            type="primary"
            danger
            onClick={handleConfirmDelete}
          >
            Delete
          </Button>,
        ]}
      >
        <h3 className="text-lg">
          Are you sure you want to delete this booking?
        </h3>
      </Modal>
    </div>
  );
};

export default BookingList;

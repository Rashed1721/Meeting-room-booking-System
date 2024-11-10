import { useState } from "react";
import { Button, Modal } from "antd";
import {
  useDeleteRoomMutation,
  useGetAllRoomsQuery,
} from "../../../redux/features/admin/roomManagement/meetingRoom";
import { NavLink } from "react-router-dom";

const ManageRoom = () => {
  const { data: AllRooms, error } = useGetAllRoomsQuery({ limit: 20 });
  console.log({ AllRooms, error });
  const [DeleteRoom] = useDeleteRoomMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState<string | null>(null);

  if (error) {
    return <div>Error fetching rooms.</div>;
  }

  const showDeleteModal = (roomId: string) => {
    setRoomToDelete(roomId);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setRoomToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (roomToDelete !== null) {
      handleDelete(roomToDelete);
    }
    setIsModalVisible(false);
  };

  const handleDelete = (roomId: string) => {
    DeleteRoom(roomId);
    // Add deletion logic here, e.g., API call to delete the room
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Manage Rooms</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Room Id</th>
              <th className="py-3 px-6 text-left">Room Name</th>
              <th className="py-3 px-6 text-left">Room No.</th>
              <th className="py-3 px-6 text-left">Floor No.</th>
              <th className="py-3 px-6 text-left">Capacity</th>
              <th className="py-3 px-6 text-left">Price Per Slot</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {AllRooms?.data?.map((room: any) => (
              <tr
                key={room.roomNo}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                {/* Room Image */}
                <td className="py-3 px-6 text-left">{room._id}</td>
                {/* Room Name */}
                <td className="py-3 px-6 text-left">{room.name}</td>
                {/* Room No. */}
                <td className="py-3 px-6 text-left">{room.roomNo}</td>
                {/* Floor No. */}
                <td className="py-3 px-6 text-left">{room.floorNo}</td>
                {/* Capacity */}
                <td className="py-3 px-6 text-left">{room.capacity}</td>
                {/* Price Per Slot */}
                <td className="py-3 px-6 text-left">${room.pricePerSlot}</td>
                {/* Action Buttons */}
                <td className="py-3 px-6 text-center">
                  <NavLink to={`/admin/manage-rooms/update-rooms/${room._id}`}>
                    <Button className="text-blue-600 hover:text-blue-800 font-medium mr-2">
                      Update
                    </Button>
                  </NavLink>
                  <Button
                    type="link"
                    onClick={() => showDeleteModal(room._id)}
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

      {/* Delete Confirmation Modal */}
      <Modal
        // title="Are you sure?"
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
        <h3 className="text-lg">Are you sure you want to delete this room?</h3>
      </Modal>
    </div>
  );
};

export default ManageRoom;

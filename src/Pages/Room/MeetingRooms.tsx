import RoomCard from "../../components/MeetingRoom/RoomCard";
import { useGetAllRoomsQuery } from "../../redux/features/admin/roomManagement/meetingRoom";
import { useNavigate } from "react-router-dom";

const MeetingRooms = () => {
  const { data: rooms, isLoading, error } = useGetAllRoomsQuery(undefined);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* Loading Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-8 text-red-500">Failed to load rooms.</p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Headline */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Meeting Rooms
      </h2>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms?.data?.slice(0, 6).map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* All Rooms Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/all-rooms")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          All Rooms
        </button>
      </div>
    </div>
  );
};

export default MeetingRooms;

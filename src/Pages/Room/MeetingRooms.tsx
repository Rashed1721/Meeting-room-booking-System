import RoomCard from "../../components/MeetingRoom/RoomCard";
import { useGetAllRoomsQuery } from "../../redux/features/admin/roomManagement/meetingRoom";
import { useNavigate } from "react-router-dom";

const MeetingRooms = () => {
  const { data: rooms, isLoading, error } = useGetAllRoomsQuery({});
  console.log({ rooms });
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
    <div className="w-full mx-auto  py-8  bg-gray-100 ">
      {/* Headline */}
      <h2 className="text-2xl  md:text-4xl my-5 font-bold tracking-wide capitalize text-center text-gray-800 mb-8">
        Our Meeting Rooms
      </h2>

      {/* Rooms Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms?.data?.slice(0, 7).map((room: any) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* All Rooms Button */}
      <div className="text-center mt-14">
        <button
          onClick={() => navigate("/meeting-rooms")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          All Rooms
        </button>
      </div>
    </div>
  );
};

export default MeetingRooms;

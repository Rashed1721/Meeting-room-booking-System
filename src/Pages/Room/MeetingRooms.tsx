import RoomCard from "../../components/MeetingRoom/RoomCard";
import { useGetAllRoomsQuery } from "../../redux/features/admin/roomManagement/meetingRoom";

const MeetingRooms = () => {
  const { data: rooms, isLoading, error } = useGetAllRoomsQuery(undefined);
  console.log(rooms);
  if (isLoading) return <p>Loading rooms...</p>;
  if (error) return <p>Failed to load rooms.</p>;
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {rooms.data.map((rooms) => (
        <RoomCard room={rooms} />
      ))}
    </div>
  );
};

export default MeetingRooms;

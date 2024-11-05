import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleRoomQuery } from "../../redux/features/admin/roomManagement/meetingRoom";

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: room, isLoading, error } = useGetSingleRoomQuery(id);
  if (isLoading) return <p>Loading room details...</p>;
  if (error) return <p>Failed to load room details.</p>;
  // if (!room) return <p>No room found.</p>;
  console.log(room);
  console.log(room?.data?.images);

  return (
    <div className="room-details p-6">
      {/* Room Images */}
      <div className="images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {room &&
          room?.data?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              // alt={`${data.name} ${index + 1}`}
              className="rounded-lg object-cover w-full h-60"
            />
          ))}
      </div>

      {/* Room Information */}
      <div className="room-info bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">{room.name}</h1>
        <p className="text-gray-700">Room No.: {room.roomNo}</p>
        <p className="text-gray-700">Floor No.: {room.floorNo}</p>
        <p className="text-gray-700">Capacity: {room.capacity} people</p>
        <p className="text-gray-700">Price per Slot: ${room.pricePerSlot}</p>

        {/* Amenities */}
        <div className="amenities mt-4">
          <h3 className="text-2xl font-semibold mb-2">Amenities</h3>
          <ul className="list-disc list-inside text-gray-600">
            {room.data.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Book Now Button */}
        <button
          onClick={() => navigate(`/booking/${room.id}`)}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;

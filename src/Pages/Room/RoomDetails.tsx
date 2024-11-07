import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleRoomQuery } from "../../redux/features/admin/roomManagement/meetingRoom";

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: room, isLoading, error } = useGetSingleRoomQuery(id);

  if (isLoading)
    return <p className="text-center py-8">Loading room details...</p>;
  if (error)
    return (
      <p className="text-center py-8 text-red-500">
        Failed to load room details.
      </p>
    );

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 md:p-10 bg-gray-50 gap-10">
      {/* Room Information */}
      <div className="room-info bg-white p-8 rounded-lg shadow-lg flex-1">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {room?.data?.name}
        </h1>
        <p className="text-gray-600 text-lg mb-2">
          Room No.: {room?.data?.roomNo}
        </p>
        <p className="text-gray-600 text-lg mb-2">
          Floor No.: {room?.data?.floorNo}
        </p>
        <p className="text-gray-600 text-lg mb-2">
          Capacity: {room?.data?.capacity} people
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Price per Slot:{" "}
          <span className="font-semibold">${room?.data?.pricePerSlot}</span>
        </p>

        {/* Amenities */}
        <div className="amenities mt-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Amenities
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {room?.data?.amenities?.map((amenity, index) => (
              <li key={index} className="text-lg">
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() =>
            navigate(`/meeting-rooms/room-booking/${room?.data?._id}`)
          }
          className="mt-8 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Book Now
        </button>
      </div>

      {/* Image Card */}
      <div className="image-card w-full md:w-1/2 flex flex-col">
        {/* Primary Image */}
        {room?.data?.images && (
          <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
            <img
              src={room.data.images[0]}
              alt="Primary Room Image"
              className="object-cover w-full h-64 md:h-80 transform hover:scale-105 transition duration-300"
            />
          </div>
        )}

        {/* Additional Images */}
        <div className="grid grid-cols-3 gap-2">
          {room?.data?.images?.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Room Image ${index + 2}`}
                className="object-cover w-full h-24 transform hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

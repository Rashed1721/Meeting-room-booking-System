import { Link } from "react-router-dom";

const FeaturedRooms = ({ rooms }: any) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className=" mx-auto  text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Featured Rooms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room: any) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {room.name}
                </h3>
                <p className="text-gray-600">
                  Capacity: {room.capacity} people
                </p>
                <p className="text-gray-600">Price per Slot: ${room.price}</p>
                <Link
                  to={`/rooms/${room.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <Link
          to="/meeting-rooms"
          className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default FeaturedRooms;

// RoomCard.tsx
import React from "react";
import { Room } from "../../types";
import { NavLink } from "react-router-dom";
import { FaUsers, FaDollarSign } from "react-icons/fa";

type RoomCardProps = {
  room: Room;
};

const RoomCard: React.FC<RoomCardProps> = ({ room }) => (
  <div className="room-card bg-white shadow-lg rounded-lg p-4">
    {room.images[0] && (
      <img
        src={room.images[0]}
        alt={room.name}
        className="rounded-t-lg w-full h-40 object-cover"
      />
    )}
    <div className="p-2">
      <h2 className="text-xl font-bold">{room.name}</h2>
      <div className="flex items-center space-x-2 mt-2">
        <FaUsers className="text-gray-600" />
        <p>Capacity: {room.capacity}</p>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <FaDollarSign className="text-gray-600" />
        <p>Price per Slot: ${room.pricePerSlot}</p>
      </div>
      <NavLink to={`/meeting-rooms/room-details/${room._id}`}>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          See Details
        </button>
      </NavLink>
    </div>
  </div>
);

export default RoomCard;

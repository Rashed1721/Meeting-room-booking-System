// RoomCard.tsx
import React from "react";
import { Room } from "../../types";
import { NavLink } from "react-router-dom";

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
      <p>Capacity: {room.capacity}</p>
      <p>Price per Slot: ${room.pricePerSlot}</p>
      <NavLink to={`/room-details/${room._id}`}>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          See Details
        </button>
      </NavLink>
    </div>
  </div>
);

export default RoomCard;

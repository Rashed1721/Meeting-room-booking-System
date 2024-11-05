// MeetingRooms.tsx
import React, { useState } from "react";
import { useAllRoomsQuery } from "../../redux/features/admin/roomManagement/meetingRoom";
import RoomCard from "../../components/MeetingRoom/RoomCard";

const MeetingRooms: React.FC = () => {
  const { data: rooms = [], isLoading, error } = useAllRoomsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [capacityFilter, setCapacityFilter] = useState<number | "">("");
  const [priceFilter, setPriceFilter] = useState<number | "">("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const roomsPerPage = 6;

  // Apply filters, search, and sorting to fetched data
  // const filteredRooms = rooms
  //   .filter((room) =>
  //     searchTerm
  //       ? room.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       : true
  //   )
  //   .filter((room) => (capacityFilter ? room.capacity >= capacityFilter : true))
  //   .filter((room) => (priceFilter ? room.pricePerSlot <= priceFilter : true))
  //   .sort((a, b) =>
  //     sortOrder === "asc"
  //       ? a.pricePerSlot - b.pricePerSlot
  //       : sortOrder === "desc"
  //       ? b.pricePerSlot - a.pricePerSlot
  //       : 0
  //   );

  // // Pagination Logic
  // const indexOfLastRoom = currentPage * roomsPerPage;
  // const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  // const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);
  // const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

  if (isLoading) return <p>Loading rooms...</p>;
  if (error) return <p>Failed to load rooms.</p>;

  return (
    // <div className="meeting-rooms-container p-4">
    //   {/* Search Bar */}
    //   <input
    //     type="text"
    //     placeholder="Search by room name..."
    //     className="p-2 border rounded mb-4 w-full"
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   />

    //   {/* Filters */}
    //   <div className="filters mb-4 flex gap-4">
    //     <input
    //       type="number"
    //       placeholder="Min Capacity"
    //       className="p-2 border rounded"
    //       value={capacityFilter}
    //       onChange={(e) => setCapacityFilter(Number(e.target.value))}
    //     />
    //     <input
    //       type="number"
    //       placeholder="Max Price"
    //       className="p-2 border rounded"
    //       value={priceFilter}
    //       onChange={(e) => setPriceFilter(Number(e.target.value))}
    //     />
    //     <select
    //       className="p-2 border rounded"
    //       value={sortOrder}
    //       onChange={(e) => setSortOrder(e.target.value)}
    //     >
    //       <option value="">Sort by Price</option>
    //       <option value="asc">Price: Low to High</option>
    //       <option value="desc">Price: High to Low</option>
    //     </select>
    //     <button
    //       onClick={() => {
    //         setSearchTerm("");
    //         setCapacityFilter("");
    //         setPriceFilter("");
    //         setSortOrder("");
    //       }}
    //       className="px-4 py-2 bg-red-500 text-white rounded"
    //     >
    //       Clear Filters
    //     </button>
    //   </div>

      {/* Room Listings */}
      <div className="room-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MeetingRooms;

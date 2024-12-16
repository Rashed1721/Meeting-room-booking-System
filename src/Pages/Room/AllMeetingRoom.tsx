import React, { useState, useEffect } from "react";
import { useGetAllRoomsQuery } from "../../redux/features/admin/roomManagement/meetingRoom";
import RoomCard from "../../components/MeetingRoom/RoomCard";

const RoomsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("pricePerSlot");
  const [page, setPage] = useState(1);
  const limit = 6; // Display 6 products per page

  const {
    data: rooms,
    error,
    isLoading,
  } = useGetAllRoomsQuery({
    searchTerm,
    sort,
    limit,
    page,
  });
  console.log({ rooms });
  useEffect(() => {
    setPage(1); // Reset to page 1 when searchTerm or sort changes
  }, [searchTerm, sort]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-5xl   font-bold mb-4">Rooms</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search rooms..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      {/* Sort Options */}
      <select
        value={sort}
        onChange={handleSortChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="pricePerSlot">Sort by Price</option>
        <option value="-pricePerSlot">High To Low</option>
        <option value="pricePerSlot">low to high</option>
        {/* Add other sorting options as needed */}
      </select>

      {/* Room List */}
      {isLoading ? (
        <p>Loading rooms...</p>
      ) : error ? (
        <p>Error loading rooms</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {rooms?.data?.map((room: any) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 my-12">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={rooms?.data?.length < limit}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RoomsPage;

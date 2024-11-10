import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSingleRoomQuery,
  useUpdateRoomMutation,
} from "../../../redux/features/admin/roomManagement/meetingRoom";
import { TRoom } from "../../../types";
import { toast } from "sonner";

const UpdateRoom = () => {
  const { id } = useParams();
  const { data: room, error, isLoading } = useGetSingleRoomQuery(id);

  const [updateRoom] = useUpdateRoomMutation();

  const { register, handleSubmit, reset } = useForm<TRoom>();

  const onSubmit: SubmitHandler<TRoom> = (data) => {
    const toastId = toast.loading("Updating...");
    try {
      console.log("Updated room data:", data);
      const roomInfo = data;
      updateRoom({ roomInfo, id });
      reset();
      toast.success("successfully updated.", { id: toastId, duration: 2000 });
    } catch (err: any) {
      toast.error(`${err?.data?.message}`, { id: toastId, duration: 2000 });
    }
  };

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
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Update Room</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Room Name</label>
          <input
            {...register("name", { required: true })}
            defaultValue={room?.data?.name} // Setting default value from room data
            placeholder="Room Name"
            className="input-field border border-gray-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Room Number</label>
            <input
              type="number"
              {...register("roomNo", { required: true, valueAsNumber: true })}
              defaultValue={room?.data?.roomNo}
              placeholder="Room Number"
              className="input-field border border-gray-300"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Floor Number</label>
            <input
              type="number"
              {...register("floorNo", { required: true, valueAsNumber: true })}
              defaultValue={room?.data?.floorNo}
              placeholder="Floor Number"
              className="input-field border border-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Capacity</label>
            <input
              type="number"
              {...register("capacity", { required: true, valueAsNumber: true })}
              defaultValue={room?.data?.capacity}
              placeholder="Capacity"
              className="input-field border border-gray-300"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Price Per Slot</label>
            <input
              type="number"
              {...register("pricePerSlot", {
                required: true,
                valueAsNumber: true,
              })}
              defaultValue={room?.data?.pricePerSlot}
              placeholder="Price Per Slot"
              className="input-field border border-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Amenities</label>
          {room?.data?.amenities?.map((amenity: any, index: any) => (
            <input
              key={index}
              {...register(`amenities.${index}`, { required: true })}
              defaultValue={amenity}
              placeholder="Amenity"
              className="input-field border border-gray-300 mb-2"
            />
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Images</label>
          {room?.data?.images?.map((image: any, index: any) => (
            <input
              key={index}
              {...register(`images.${index}`, { required: true })}
              defaultValue={image}
              placeholder="Image URL"
              className="input-field border border-gray-300 mb-2"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Update Room
        </button>
      </form>
    </div>
  );
};

export default UpdateRoom;

import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAddRoomMutation } from "../../../redux/features/admin/roomManagement/meetingRoom";

export type TRoom = {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  images: string[];
  isDeleted: boolean;
};

const CreateRoom = () => {
  const [AddRoom, { error, isSuccess }] = useAddRoomMutation();
  console.log({ error, isSuccess });
  const { register, handleSubmit, control, reset } = useForm<TRoom>({
    defaultValues: {
      name: "Conference Room A",
      roomNo: 101,
      floorNo: 1,
      capacity: 10,
      pricePerSlot: 50,
      amenities: ["WiFi"],
      images: ["https://example.com/image.jpg"],
      isDeleted: false,
    },
  });

  const {
    fields: amenitiesFields,
    append: appendAmenity,
    remove: removeAmenity,
  } = useFieldArray({
    control,
    name: "amenities",
  });

  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit: SubmitHandler<TRoom> = (data) => {
    const roomInfo = data;
    AddRoom(roomInfo);

    console.log({ error, isSuccess });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Add Room
      </h2>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-600">Room Name</label>
        <input
          {...register("name", { required: true })}
          placeholder="Conference Room A"
          className="input-field border border-gray-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Room Number</label>
          <input
            type="number"
            {...register("roomNo", { required: true, valueAsNumber: true })}
            placeholder="101"
            className="input-field border border-gray-300"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Floor Number</label>
          <input
            type="number"
            {...register("floorNo", { required: true, valueAsNumber: true })}
            placeholder="1"
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
            placeholder="10"
            className="input-field border border-gray-300"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">
            Price Per Slot ($)
          </label>
          <input
            type="number"
            {...register("pricePerSlot", {
              required: true,
              valueAsNumber: true,
            })}
            placeholder="50"
            className="input-field border border-gray-300"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-600">Amenities</label>
        {amenitiesFields.map((item, index) => (
          <div key={item.id} className="flex space-x-2 items-center">
            <input
              {...register(`amenities.${index}`, { required: true })}
              placeholder="Amenity"
              className="input-field border border-gray-300"
            />
            <button
              type="button"
              onClick={() => removeAmenity(index)}
              className="text-red-500 hover:text-red-700 transition duration-200"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendAmenity("")}
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Add Amenity
        </button>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-600">Images</label>
        {imageFields.map((item, index) => (
          <div key={item.id} className="flex space-x-2 items-center">
            <input
              {...register(`images.${index}`, { required: true })}
              placeholder="Image URL"
              className="input-field border border-gray-300"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="text-red-500 hover:text-red-700 transition duration-200"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendImage("")}
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Add Image
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateRoom;

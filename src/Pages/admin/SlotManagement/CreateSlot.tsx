import { useForm, SubmitHandler } from "react-hook-form";
import { TSlot } from "../../../types/slot";
import { useAddSlotMutation } from "../../../redux/features/admin/slotManagement/slotManagement";

const CreateSlot = () => {
  const [addSlot, { error, isSuccess }] = useAddSlotMutation();
  console.log({ error, isSuccess });

  const { register, handleSubmit, reset } = useForm<TSlot>({
    defaultValues: {
      room: "",
      date: "",
      startTime: "",
      endTime: "",
      isBooked: false,
    },
  });

  const onSubmit: SubmitHandler<TSlot> = (data) => {
    const roomInfo = data;
    addSlot(roomInfo);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Create Slot
      </h2>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-600">Room ID</label>
        <input
          {...register("room", { required: true })}
          placeholder="Room ID"
          className="input-field border border-gray-300"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-600">Date</label>
        <input
          type="date"
          {...register("date", { required: true })}
          className="input-field border border-gray-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Start Time</label>
          <input
            type="time"
            {...register("startTime", { required: true })}
            className="input-field border border-gray-300"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">End Time</label>
          <input
            type="time"
            {...register("endTime", { required: true })}
            className="input-field border border-gray-300"
          />
        </div>
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

export default CreateSlot;

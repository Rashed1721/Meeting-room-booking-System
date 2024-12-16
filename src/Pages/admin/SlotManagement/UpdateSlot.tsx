import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSingleSlotQuery,
  useUpdateSlotMutation,
} from "../../../redux/features/admin/slotManagement/slotManagement";
import { TSlot } from "../../../types/slot";
import { toast } from "sonner";

const UpdateSlot = () => {
  const { id } = useParams();

  const { data: slot, isLoading } = useGetSingleSlotQuery(id);
  console.log("slot ==>", slot);
  const [updateSlot, { error }] = useUpdateSlotMutation();

  const { register, handleSubmit, reset } = useForm<TSlot>();

  const onSubmit: SubmitHandler<TSlot> = (data) => {
    const toastId = toast.loading("Updating SLot...");
    try {
      const slotInfo = data;

      updateSlot({ slotInfo, id });

      reset();

      toast.success("Updated Slot Successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (err: any) {
      toast.error(`${err?.data?.message}`, { id: toastId, duration: 2000 });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching slot details</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">UPDATE SLOT</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Room ID</label>
          <input
            {...register("room", { required: true })}
            defaultValue={slot?.data?.room}
            placeholder="Room ObjectId"
            className="input-field border p-2 border-gray-300"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            defaultValue={slot?.data?.date}
            placeholder="Date"
            className="input-field border p-2 border-gray-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Start Time</label>
            <input
              type="time"
              {...register("startTime", { required: true })}
              defaultValue={slot?.data?.startTime}
              placeholder="Start Time"
              className="input-field border p-2 border-gray-300"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">End Time</label>
            <input
              type="time"
              {...register("endTime", { required: true })}
              defaultValue={slot?.data?.endTime}
              placeholder="End Time"
              className="input-field border p-2 border-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600">Is Booked</label>
          <select
            {...register("isBooked", { required: true })}
            defaultValue={slot?.data?.isBooked ? "true" : "false"}
            className="input-field border p-2 border-gray-300"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default UpdateSlot;

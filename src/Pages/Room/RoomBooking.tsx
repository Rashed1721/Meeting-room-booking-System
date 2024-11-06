import { useEffect, useState } from "react";
import { DatePicker, Select, Spin } from "antd";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useGetSingleUserQuery } from "../../redux/features/user/user";
import { useGetAllSlotsQuery } from "../../redux/features/admin/slotManagement/slotManagement";

const RoomBooking = () => {
  const { roomId } = useParams();
  const { register, handleSubmit, setValue, control } = useForm(); // Added control
  const [selectedDate, setSelectedDate] = useState(null);
  const userData = useAppSelector((state) => state.auth.user);
  const { data: user } = useGetSingleUserQuery(userData!.userId);

  const { data: availableSlots, isLoading } = useGetAllSlotsQuery({
    roomId,
    selectedDate: selectedDate?.format("YYYY-MM-DD"),
  });

  console.log({ availableSlots, isLoading, user });

  // Pre-fill user information using setValue if user data exists
  useEffect(() => {
    if (user) {
      setValue("name", user?.data?.name);
      setValue("email", user?.data?.email);
      setValue("phone", user?.data?.phone);
      setValue("address", user?.data?.address);
    }
  }, [user, setValue]);

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = (data) => {
    // Accessing selected time slot value here
    const selectedTimeSlot = data.timeSlot;
    const date = selectedDate?.format("YYYY-MM-DD");
    console.log("Booking data:", { ...data, selectedTimeSlot, date });

    // Handle booking submission logic here
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Date Selection */}
        <div className="mb-6">
          <label htmlFor="date" className="block text-lg font-semibold mb-2">
            Select Booking Date
          </label>
          <DatePicker
            id="date"
            value={selectedDate} // Pass moment object to DatePicker
            onChange={handleDateChange} // Handle date selection
            className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            format="YYYY-MM-DD"
          />
        </div>

        {/* Available Slots */}
        {isLoading ? (
          <div className="mb-6 text-center">
            <Spin tip="Loading slots..." />
          </div>
        ) : (
          availableSlots &&
          availableSlots?.data?.length > 0 && (
            <div className="mb-6">
              <label
                htmlFor="timeSlot"
                className="block text-lg font-semibold mb-2"
              >
                Available Time Slots
              </label>
              <Controller
                name="timeSlot" // Register timeSlot field
                control={control} // Bind the control
                defaultValue="" // Default value (empty, or use a specific slot ID if needed)
                render={({ field }) => (
                  <Select
                    {...field} // Spread field to ensure proper registration
                    id="timeSlot"
                    placeholder="Select a time slot"
                    className="w-full py-2 px-4 border rounded-lg"
                    options={availableSlots?.data?.map((slot) => ({
                      value: slot._id,
                      label: `${slot.startTime} - ${slot.endTime}`,
                    }))}
                  />
                )}
              />
            </div>
          )
        )}

        {/* User Information */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            User Name
          </label>
          <input
            id="name"
            {...register("name")}
            readOnly
            className="w-full py-2 px-4 border rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            readOnly
            className="w-full py-2 px-4 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-lg font-semibold mb-2">
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            readOnly
            className="w-full py-2 px-4 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-lg font-semibold mb-2">
            Address
          </label>
          <input
            id="address"
            {...register("address")}
            readOnly
            className="w-full py-2 px-4 border rounded-lg focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomBooking;

import { baseApi } from "../../../api/baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: (BookingInfo) => ({
        url: "/bookings",
        method: "POST",
        body: BookingInfo,
      }),
      invalidatesTags: ["Booking"], // Invalidate to trigger refetch of booking data
    }),

    getAllBooking: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["Booking"],
    }),

    updateBooking: builder.mutation({
      query: ({ id, bookingValue }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: bookingValue,
      }),
      invalidatesTags: ["Booking"], // Invalidate to trigger refetch of booking data
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"], // Invalidate to trigger refetch of booking data
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetAllBookingQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;

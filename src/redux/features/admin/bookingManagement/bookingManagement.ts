import { baseApi } from "../../../api/baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
    }),

    updateBooking: builder.mutation({
      query: ({ id, bookingValue }) => {
        console.log("from update booking==>", id, bookingValue);

        return {
          url: `/bookings/${id}`,
          method: "PUT",
          body: bookingValue,
        };
      },
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBookingQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;

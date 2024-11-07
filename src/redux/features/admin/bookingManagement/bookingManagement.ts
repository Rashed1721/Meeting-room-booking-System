import { baseApi } from "../../../api/baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: (BookingInfo) => {
        // console.log("BookingInfo from api==>", BookingInfo);
        return {
          url: "/bookings",
          method: "POST",
          body: BookingInfo,
        };
      },
    }),

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
  useAddBookingMutation,
  useGetAllBookingQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;

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
      query: ({ id, bookingInfo }) => {
        console.log("from update booking==>", id, bookingInfo);
        return {
          url: `/bookings/${id}`,
          method: "PUT",
          body: bookingInfo,
        };
      },
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "",
      }),
    }),
  }),
});

export const {
  useGetAllBookingQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;

import { baseApi } from "../../api/baseApi";

export const myBookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetMyBooking: builder.query({
      query: (id: string | undefined) => {
        return {
          url: `/my-bookings`,
          method: "GET",
          params: {
            userId: id,
          },
        };
      },
    }),
  }),
});

export const { useGetMyBookingQuery } = myBookingApi;

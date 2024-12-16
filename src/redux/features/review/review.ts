import { baseApi } from "../../api/baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (reviewInfo) => ({
        url: "/review",
        method: "POST",
        body: reviewInfo,
      }),
    }),

    GetSingleReview: builder.query({
      query: (id: string | undefined) => {
        return {
          url: `/review/${id}`,
          method: "GET",
        };
      },
    }),

    getAllReview: builder.query({
      query: () => ({
        url: "/review",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetAllReviewQuery,
  useGetSingleReviewQuery,
} = bookingApi;

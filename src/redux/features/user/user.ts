import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleUser: builder.query({
      query: (id) => {
        console.log("userId from Api==>", id);
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetSingleUserQuery } = userApi;

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

    updateUser: builder.mutation({
      query: ({ userInfo, id }) => {
        console.log("Updating user from api==>:", id, userInfo);
        return {
          url: `/users/${id}`,
          method: "PUT",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useGetSingleUserQuery, useUpdateUserMutation } = userApi;

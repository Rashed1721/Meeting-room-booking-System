import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        console.log({ userInfo });
        return {
          url: "auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),

    signup: builder.mutation({
      query: (userInfo) => ({
        url: "auth/signUp",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;

import { baseApi } from "../../../api/baseApi";

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddRoom: builder.mutation({
      query: (roomInfo) => {
        console.log("roominfo from api", roomInfo);
        return {
          url: "/rooms/",
          method: "POST",
          body: roomInfo,
        };
      },
    }),
    GetAllRooms: builder.query({
      query: () => {
        return {
          url: "/rooms",
          method: "GET",
        };
      },
    }),
    GetSingleRoom: builder.query({
      query: (id: string | undefined) => {
        return {
          url: `/rooms/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetSingleRoomQuery,
  useAddRoomMutation,
} = roomApi;

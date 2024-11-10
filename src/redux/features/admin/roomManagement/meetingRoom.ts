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
    // GetAllRooms: builder.query({
    //   query: () => {
    //     return {
    //       url: "/rooms",
    //       method: "GET",
    //     };
    //   },
    // }),
    GetAllRooms: builder.query({
      query: ({
        searchTerm = "",
        sort = "pricePerSlot",
        limit = 6,
        page = 1,
      }) => {
        const params = new URLSearchParams({
          searchTerm,
          sort,
          limit: limit.toString(),
          page: page.toString(),
        });

        return {
          url: `/rooms?${params.toString()}`,
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
    UpdateRoom: builder.mutation({
      query: ({ id, roomInfo }) => {
        console.log("Updating room:", id, roomInfo);
        return {
          url: `/rooms/${id}`,
          method: "PUT",
          body: roomInfo,
        };
      },
    }),

    DeleteRoom: builder.mutation({
      query: (id: string) => {
        console.log("Deleting room:", id);
        return {
          url: `/rooms/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetSingleRoomQuery,
  useAddRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
} = roomApi;

import { baseApi } from "../../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSlot: builder.mutation({
      query: (slotInfo) => {
        console.log("roominfo from api", slotInfo);
        return {
          url: "/slots/",
          method: "POST",
          body: slotInfo,
        };
      },
    }),

    GetAllSlots: builder.query({
      query: () => {
        return {
          url: "/slots/availability",
          method: "GET",
        };
      },
    }),

    GetSingleSlot: builder.query({
      query: (id: string | undefined) => {
        return {
          url: `/slots/${id}`,
          method: "GET",
        };
      },
    }),
    UpdateSlot: builder.mutation({
      query: ({ slotInfo, id }) => {
        console.log("Updating slot from api==>:", id, slotInfo);
        return {
          url: `/slots/${id}`,
          method: "PUT",
          body: slotInfo,
        };
      },
    }),

    DeleteSlot: builder.mutation({
      query: (id: string) => {
        console.log("Deleting slot:", id);
        return {
          url: `/slots/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useAddSlotMutation,
  useGetAllSlotsQuery,
  useGetSingleSlotQuery,
  useUpdateSlotMutation,
  useDeleteSlotMutation,
} = slotApi;

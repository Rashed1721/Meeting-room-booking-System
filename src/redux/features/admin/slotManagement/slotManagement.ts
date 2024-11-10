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
      invalidatesTags: ["Slot"],
    }),

    GetAllSlots: builder.query({
      query: ({ roomId, selectedDate }) => {
        return {
          url: "/slots/availability",
          method: "GET",
          params: {
            roomId: roomId,
            date: selectedDate,
          },
        };
      },
      providesTags: ["Slot"],
    }),

    GetSingleSlot: builder.query({
      query: (id: string | undefined) => {
        return {
          url: `/slots/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Slot"],
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
      invalidatesTags: ["Slot"],
    }),

    DeleteSlot: builder.mutation({
      query: (id: string) => {
        console.log("Deleting slot:", id);
        return {
          url: `/slots/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Slot"],
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

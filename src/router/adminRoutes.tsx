import ManageBooking from "../Pages/admin/BookingManagement/ManageBooking";
import CreateRoom from "../Pages/admin/RoomManagement/CreateRoom";
import ManageRoom from "../Pages/admin/RoomManagement/ManageRoom";
import CreateSlot from "../Pages/admin/SlotManagement/CreateSlot";
import ManageSlot from "../Pages/admin/SlotManagement/ManageSlot";

export const adminPaths = [
  {
    name: "Room Management",
    children: [
      {
        name: "Add Rooms",
        path: "add-rooms",
        element: <CreateRoom />,
      },
      {
        name: "Manage Rooms",
        path: "manage-rooms",
        element: <ManageRoom />,
      },
    ],
  },
  {
    name: "Slot Management",
    children: [
      {
        name: "Add Slots",
        path: "add-slots",
        element: <CreateSlot />,
      },
      {
        name: "Manage Slots",
        path: "manage-slots",
        element: <ManageSlot />,
      },
    ],
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "Booking Management",
        path: "manage-bookings/",
        element: <ManageBooking />,
      },
    ],
  },
];

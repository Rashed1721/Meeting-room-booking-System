import ManageUsers from "../Pages/user/ManageUsers";
import MyBookings from "../Pages/user/MyBookings";

export const userPaths = [
  {
    name: "User Management",
    children: [
      {
        name: "Manage User",
        path: "manage-user",
        element: <ManageUsers />,
      },
      {
        name: "My Bookings",
        path: "my-booking",
        element: <MyBookings />,
      },
    ],
  },
];

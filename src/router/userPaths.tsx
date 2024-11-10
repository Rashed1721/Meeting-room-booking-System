import MyBookings from "../Pages/user/MyBookings";

export const userPaths = [
  {
    name: "User Management",
    children: [
      {
        name: "My Bookings",
        path: "my-booking",
        element: <MyBookings />,
      },
    ],
  },
];

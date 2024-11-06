import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/login/Login";
import MeetingRooms from "../Pages/Room/MeetingRooms";
import RoomDetails from "../Pages/Room/RoomDetails";
import AdminLayout from "../components/Layout/AdminLayout";
import CreateRoom from "../Pages/admin/RoomManagement/CreateRoom";
import ManageRoom from "../Pages/admin/RoomManagement/ManageRoom";
import UpdateRoom from "../Pages/admin/RoomManagement/UpdateRoom";
import CreateSlot from "../Pages/admin/SlotManagement/CreateSlot";
import ManageSlot from "../Pages/admin/SlotManagement/ManageSlot";
import UpdateSlot from "../Pages/admin/SlotManagement/UpdateSlot";
import ManageBooking from "../Pages/admin/BookingManagement/ManageBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/meeting-rooms",
    element: <MeetingRooms />,
  },
  {
    path: "/room-details/:id",
    element: <RoomDetails />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "add-rooms",
        element: <CreateRoom />,
      },
      {
        path: "manage-rooms",
        element: <ManageRoom />,
      },
      {
        path: "manage-rooms/update-rooms/:id",
        element: <UpdateRoom />,
      },
      {
        path: "add-slots",
        element: <CreateSlot />,
      },
      {
        path: "manage-slots",
        element: <ManageSlot />,
      },
      {
        path: "manage-slots/update-slots/:id",
        element: <UpdateSlot />,
      },
      {
        path: "manage-bookings/",
        element: <ManageBooking />,
      },
    ],
  },
]);
export default router;

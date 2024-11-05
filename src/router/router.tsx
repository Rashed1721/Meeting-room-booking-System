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
    ],
  },
]);
export default router;

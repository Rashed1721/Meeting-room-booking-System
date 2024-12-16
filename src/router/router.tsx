import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignUp from "../Pages/SignUp/SignUp";
import RoomDetails from "../Pages/Room/RoomDetails";
import CreateRoom from "../Pages/admin/RoomManagement/CreateRoom";
import ManageRoom from "../Pages/admin/RoomManagement/ManageRoom";
import UpdateRoom from "../Pages/admin/RoomManagement/UpdateRoom";
import CreateSlot from "../Pages/admin/SlotManagement/CreateSlot";
import UpdateSlot from "../Pages/admin/SlotManagement/UpdateSlot";
import ManageBooking from "../Pages/admin/BookingManagement/ManageBooking";
import RoomBooking from "../Pages/Booking/RoomBooking";
import BookingSummary from "../Pages/Booking/BookingSummary";
import ManageSlot from "../Pages/admin/SlotManagement/ManageSlot";
import MyBookings from "../Pages/user/MyBookings";
import AllMeetingRoom from "../Pages/Room/AllMeetingRoom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/login/Login";
import ProtectedRoute from "../Layout/ProtectedRoute";
import AdminLayout from "../Layout/AdminLayout";
import MainLayout from "../Layout/MainLayout";
import AdminRoute from "./PrivateAdminRoute";
import Faq from "../Pages/FAQ/Faq";
import Service from "../Pages/services/Service";
import AdminDashboardDefault from "../Pages/admin/AdminDashboardDefault";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
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
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/meeting-rooms",
        element: <AllMeetingRoom />,
      },
      {
        path: "/meeting-rooms/room-details/:id",
        element: <RoomDetails />,
      },
      {
        path: "/meeting-rooms/room-booking/:roomId",
        element: (
          <ProtectedRoute>
            <RoomBooking />
          </ProtectedRoute>
        ),
      },
      {
        path: "/booking-summary",
        element: <BookingSummary />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <AdminRoute>
            <AdminDashboardDefault />
          </AdminRoute>
        ),
      },
      {
        path: "add-rooms",
        element: (
          <AdminRoute>
            <CreateRoom />
          </AdminRoute>
        ),
      },
      {
        path: "manage-rooms",
        element: (
          <AdminRoute>
            <ManageRoom />
          </AdminRoute>
        ),
      },
      {
        path: "manage-rooms/update-rooms/:id",
        element: (
          <AdminRoute>
            <UpdateRoom />
          </AdminRoute>
        ),
      },
      {
        path: "add-slots",
        element: (
          <AdminRoute>
            {" "}
            <CreateSlot />
          </AdminRoute>
        ),
      },
      {
        path: "manage-slots",
        element: (
          <AdminRoute>
            {" "}
            <ManageSlot />
          </AdminRoute>
        ),
      },
      {
        path: "manage-slots/update-slots/:id",
        element: (
          <AdminRoute>
            {" "}
            <UpdateSlot />
          </AdminRoute>
        ),
      },
      {
        path: "manage-bookings/",
        element: <ManageBooking />,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <AdminDashboardDefault />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-booking",
        element: (
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default router;

import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const AdminRoute = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  if (user && user?.role === "admin") {
    return children;
  } else {
    dispatch(logout());
  }
};

export default AdminRoute;

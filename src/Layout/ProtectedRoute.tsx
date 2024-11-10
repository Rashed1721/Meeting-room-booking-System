import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();

  if (user && user?.role === "user") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;

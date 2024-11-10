import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
